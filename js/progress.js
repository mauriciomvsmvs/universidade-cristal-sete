/* ============================================
   UNIVERSIDADE CRISTAL SETE - SISTEMA DE PROGRESSO
   ============================================ */

// ESTRUTURA DE DADOS DO PROGRESSO
// {
//   cursoId: {
//     moduloNum: {
//       aulaNum: {
//         concluida: true/false,
//         dataInicio: timestamp,
//         dataConclusao: timestamp,
//         tempoAssistido: segundos
//       }
//     }
//   }
// }

// SALVAR PROGRESSO DE UMA AULA
function salvarProgressoAula(cursoId, moduloNum, aulaNum, concluida) {
    const key = `progresso_curso_${cursoId}`;
    
    try {
        // Obter progresso atual
        let progresso = obterProgressoCursoCompleto(cursoId);
        
        // Inicializar estrutura se não existir
        if (!progresso[moduloNum]) {
            progresso[moduloNum] = {};
        }
        
        if (!progresso[moduloNum][aulaNum]) {
            progresso[moduloNum][aulaNum] = {
                concluida: false,
                dataInicio: Date.now()
            };
        }
        
        // Atualizar status
        progresso[moduloNum][aulaNum].concluida = concluida;
        
        if (concluida && !progresso[moduloNum][aulaNum].dataConclusao) {
            progresso[moduloNum][aulaNum].dataConclusao = Date.now();
        }
        
        // Salvar no localStorage
        localStorage.setItem(key, JSON.stringify(progresso));
        
        console.log('Progresso salvo:', {cursoId, moduloNum, aulaNum, concluida});
        
        return true;
    } catch (e) {
        console.error('Erro ao salvar progresso:', e);
        return false;
    }
}

// VERIFICAR SE AULA ESTÁ CONCLUÍDA
function verificarAulaConcluida(moduloNum, aulaNum) {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('cursoId');
    
    if (!cursoId) {
        return false;
    }
    
    const key = `progresso_curso_${cursoId}`;
    
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const progresso = JSON.parse(stored);
            return progresso[moduloNum]?.[aulaNum]?.concluida || false;
        }
    } catch (e) {
        console.error('Erro ao verificar progresso:', e);
    }
    
    return false;
}

// OBTER PROGRESSO COMPLETO DO CURSO
function obterProgressoCursoCompleto(cursoId) {
    const key = `progresso_curso_${cursoId}`;
    
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error('Erro ao obter progresso:', e);
    }
    
    return {};
}

// CALCULAR PERCENTUAL DE PROGRESSO DO CURSO
function obterProgressoCurso(cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        return 0;
    }
    
    // Contar total de aulas
    let totalAulas = 0;
    curso.modulos.forEach(modulo => {
        totalAulas += modulo.aulas.length;
    });
    
    if (totalAulas === 0) {
        return 0;
    }
    
    // Contar aulas concluídas
    let aulasConcluidasCount = 0;
    const progresso = obterProgressoCursoCompleto(cursoId);
    
    curso.modulos.forEach(modulo => {
        modulo.aulas.forEach((aula, index) => {
            const aulaNum = index + 1;
            if (progresso[modulo.numero]?.[aulaNum]?.concluida) {
                aulasConcluidasCount++;
            }
        });
    });
    
    // Calcular percentual
    const percentual = Math.round((aulasConcluidasCount / totalAulas) * 100);
    
    return percentual;
}

// OBTER ESTATÍSTICAS DETALHADAS DO PROGRESSO
function obterEstatisticasProgresso(cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        return null;
    }
    
    const progresso = obterProgressoCursoCompleto(cursoId);
    
    let stats = {
        totalAulas: 0,
        aulasConcluidasCount: 0,
        totalModulos: curso.modulos.length,
        modulosConcluidos: 0,
        percentualGeral: 0,
        tempoTotalEstimado: 0,
        tempoAssistido: 0,
        dataInicio: null,
        dataUltimaAula: null,
        modulosDetalhes: []
    };
    
    // Calcular estatísticas por módulo
    curso.modulos.forEach(modulo => {
        const moduloStats = {
            numero: modulo.numero,
            titulo: modulo.titulo,
            totalAulas: modulo.aulas.length,
            aulasConcluidas: 0,
            percentual: 0
        };
        
        modulo.aulas.forEach((aula, index) => {
            stats.totalAulas++;
            const aulaNum = index + 1;
            
            if (progresso[modulo.numero]?.[aulaNum]) {
                const aulaProgresso = progresso[modulo.numero][aulaNum];
                
                if (aulaProgresso.concluida) {
                    stats.aulasConcluidasCount++;
                    moduloStats.aulasConcluidas++;
                }
                
                // Data de início
                if (!stats.dataInicio || aulaProgresso.dataInicio < stats.dataInicio) {
                    stats.dataInicio = aulaProgresso.dataInicio;
                }
                
                // Data última aula
                if (aulaProgresso.dataConclusao && 
                    (!stats.dataUltimaAula || aulaProgresso.dataConclusao > stats.dataUltimaAula)) {
                    stats.dataUltimaAula = aulaProgresso.dataConclusao;
                }
                
                // Tempo assistido
                if (aulaProgresso.tempoAssistido) {
                    stats.tempoAssistido += aulaProgresso.tempoAssistido;
                }
            }
        });
        
        moduloStats.percentual = Math.round((moduloStats.aulasConcluidas / moduloStats.totalAulas) * 100);
        
        if (moduloStats.percentual === 100) {
            stats.modulosConcluidos++;
        }
        
        stats.modulosDetalhes.push(moduloStats);
    });
    
    // Percentual geral
    stats.percentualGeral = stats.totalAulas > 0 
        ? Math.round((stats.aulasConcluidasCount / stats.totalAulas) * 100) 
        : 0;
    
    return stats;
}

// OBTER PRÓXIMA AULA NÃO CONCLUÍDA
function obterProximaAula(cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        return null;
    }
    
    const progresso = obterProgressoCursoCompleto(cursoId);
    
    // Procurar primeira aula não concluída
    for (let modulo of curso.modulos) {
        for (let i = 0; i < modulo.aulas.length; i++) {
            const aulaNum = i + 1;
            
            if (!progresso[modulo.numero]?.[aulaNum]?.concluida) {
                return {
                    moduloNum: modulo.numero,
                    aulaNum: aulaNum,
                    aula: modulo.aulas[i]
                };
            }
        }
    }
    
    // Todas as aulas concluídas
    return null;
}

// RESETAR PROGRESSO DO CURSO
function resetarProgressoCurso(cursoId) {
    const key = `progresso_curso_${cursoId}`;
    
    try {
        localStorage.removeItem(key);
        console.log('Progresso do curso resetado:', cursoId);
        return true;
    } catch (e) {
        console.error('Erro ao resetar progresso:', e);
        return false;
    }
}

// VERIFICAR SE CURSO ESTÁ CONCLUÍDO
function verificarCursoConcluido(cursoId) {
    const percentual = obterProgressoCurso(cursoId);
    return percentual === 100;
}

// OBTER TODOS OS CURSOS EM ANDAMENTO
function obterCursosEmAndamento() {
    const cursosAndamento = [];
    
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key.startsWith('progresso_curso_')) {
                const cursoId = parseInt(key.replace('progresso_curso_', ''));
                const percentual = obterProgressoCurso(cursoId);
                
                if (percentual > 0 && percentual < 100) {
                    cursosAndamento.push({
                        cursoId: cursoId,
                        percentual: percentual
                    });
                }
            }
        }
    } catch (e) {
        console.error('Erro ao obter cursos em andamento:', e);
    }
    
    return cursosAndamento;
}

// OBTER TODOS OS CURSOS CONCLUÍDOS
function obterCursosConcluidos() {
    const cursosConcluidos = [];
    
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key.startsWith('progresso_curso_')) {
                const cursoId = parseInt(key.replace('progresso_curso_', ''));
                const percentual = obterProgressoCurso(cursoId);
                
                if (percentual === 100) {
                    const stats = obterEstatisticasProgresso(cursoId);
                    cursosConcluidos.push({
                        cursoId: cursoId,
                        dataConclusao: stats.dataUltimaAula
                    });
                }
            }
        }
        
        // Ordenar por data de conclusão (mais recente primeiro)
        cursosConcluidos.sort((a, b) => b.dataConclusao - a.dataConclusao);
        
    } catch (e) {
        console.error('Erro ao obter cursos concluídos:', e);
    }
    
    return cursosConcluidos;
}

// MARCAR MÓDULO COMPLETO COMO CONCLUÍDO
function marcarModuloConcluido(cursoId, moduloNum) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        return false;
    }
    
    const modulo = curso.modulos.find(m => m.numero === moduloNum);
    
    if (!modulo) {
        return false;
    }
    
    // Marcar todas as aulas do módulo como concluídas
    let sucesso = true;
    modulo.aulas.forEach((aula, index) => {
        const aulaNum = index + 1;
        const resultado = salvarProgressoAula(cursoId, moduloNum, aulaNum, true);
        if (!resultado) {
            sucesso = false;
        }
    });
    
    return sucesso;
}

// OBTER TEMPO TOTAL GASTO NO CURSO
function obterTempoTotalCurso(cursoId) {
    const stats = obterEstatisticasProgresso(cursoId);
    return stats ? stats.tempoAssistido : 0;
}

// OBTER DIAS DESDE INÍCIO DO CURSO
function obterDiasDesdeInicio(cursoId) {
    const stats = obterEstatisticasProgresso(cursoId);
    
    if (!stats || !stats.dataInicio) {
        return 0;
    }
    
    const agora = Date.now();
    const diferenca = agora - stats.dataInicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    return dias;
}

// CALCULAR SEQUÊNCIA DE DIAS ESTUDANDO
function calcularSequenciaDias() {
    // Esta é uma implementação simplificada
    // Em produção, você guardaria registros diários de acesso
    
    let sequencia = 0;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    try {
        // Verificar localStorage para atividades dos últimos 30 dias
        for (let i = 0; i < 30; i++) {
            const data = new Date(hoje);
            data.setDate(data.getDate() - i);
            const dataKey = data.toISOString().split('T')[0];
            const key = `atividade_${dataKey}`;
            
            if (localStorage.getItem(key)) {
                sequencia++;
            } else {
                break; // Sequência quebrada
            }
        }
    } catch (e) {
        console.error('Erro ao calcular sequência:', e);
    }
    
    return sequencia;
}

// REGISTRAR ATIVIDADE DO DIA
function registrarAtividadeDia() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataKey = hoje.toISOString().split('T')[0];
    const key = `atividade_${dataKey}`;
    
    try {
        localStorage.setItem(key, Date.now().toString());
    } catch (e) {
        console.error('Erro ao registrar atividade:', e);
    }
}

// OBTER RANKING DE PROGRESSO (Para gamificação futura)
function calcularPontuacao(cursoId) {
    const stats = obterEstatisticasProgresso(cursoId);
    
    if (!stats) {
        return 0;
    }
    
    let pontos = 0;
    
    // Pontos por aulas concluídas
    pontos += stats.aulasConcluidasCount * 10;
    
    // Pontos por módulos concluídos
    pontos += stats.modulosConcluidos * 50;
    
    // Bônus por conclusão total
    if (stats.percentualGeral === 100) {
        pontos += 200;
    }
    
    // Pontos por quizzes aprovados
    const quizStats = obterEstatisticasQuizzes(cursoId);
    if (quizStats) {
        pontos += quizStats.quizzesAprovados * 25;
    }
    
    return pontos;
}

// OBTER TOTAL DE PONTOS DO USUÁRIO
function obterPontosTotais() {
    let pontosTotal = 0;
    
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key.startsWith('progresso_curso_')) {
                const cursoId = parseInt(key.replace('progresso_curso_', ''));
                pontosTotal += calcularPontuacao(cursoId);
            }
        }
    } catch (e) {
        console.error('Erro ao calcular pontos totais:', e);
    }
    
    return pontosTotal;
}

// EXPORTAR DADOS DE PROGRESSO (Para backup ou relatório)
function exportarProgresso() {
    const dados = {
        versao: '1.0',
        dataExportacao: new Date().toISOString(),
        cursos: [],
        pontosTotais: obterPontosTotais(),
        sequenciaDias: calcularSequenciaDias()
    };
    
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key.startsWith('progresso_curso_')) {
                const cursoId = parseInt(key.replace('progresso_curso_', ''));
                const stats = obterEstatisticasProgresso(cursoId);
                
                dados.cursos.push({
                    cursoId: cursoId,
                    stats: stats,
                    pontos: calcularPontuacao(cursoId)
                });
            }
        }
    } catch (e) {
        console.error('Erro ao exportar progresso:', e);
    }
    
    return dados;
}

// IMPORTAR DADOS DE PROGRESSO
function importarProgresso(dados) {
    if (!dados || dados.versao !== '1.0') {
        console.error('Dados de importação inválidos');
        return false;
    }
    
    try {
        dados.cursos.forEach(cursoDados => {
            const key = `progresso_curso_${cursoDados.cursoId}`;
            // Aqui você implementaria a lógica de importação
            // Por simplicidade, não vamos sobrescrever dados existentes
            console.log('Importação de:', key);
        });
        
        return true;
    } catch (e) {
        console.error('Erro ao importar progresso:', e);
        return false;
    }
}

// LIMPAR DADOS ANTIGOS (Manutenção)
function limparDadosAntigos(diasParaManter = 90) {
    const limiteData = Date.now() - (diasParaManter * 24 * 60 * 60 * 1000);
    
    try {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            
            // Limpar atividades antigas
            if (key.startsWith('atividade_')) {
                const dataStr = key.replace('atividade_', '');
                const data = new Date(dataStr).getTime();
                
                if (data < limiteData) {
                    localStorage.removeItem(key);
                    console.log('Removido dado antigo:', key);
                }
            }
        }
        
        return true;
    } catch (e) {
        console.error('Erro ao limpar dados antigos:', e);
        return false;
    }
}

// GERAR CERTIFICADO (Placeholder - implementação futura)
function gerarCertificado(cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        console.error('Curso não encontrado');
        return null;
    }
    
    const stats = obterEstatisticasProgresso(cursoId);
    
    if (stats.percentualGeral !== 100) {
        console.error('Curso não concluído');
        return null;
    }
    
    const certificado = {
        cursoId: cursoId,
        cursoTitulo: curso.titulo,
        instrutor: curso.instrutor,
        duracao: curso.duracao,
        dataConclusao: stats.dataUltimaAula,
        codigo: `UC-${cursoId}-${Date.now()}`,
        nomeAluno: 'Aluno Cristal Sete', // Em produção, pegar do perfil
        url: `https://universidade.cristalsete.com.br/certificado/${cursoId}-${Date.now()}`
    };
    
    console.log('Certificado gerado:', certificado);
    
    return certificado;
}

// REGISTRAR ATIVIDADE QUANDO A PÁGINA CARREGA
document.addEventListener('DOMContentLoaded', function() {
    registrarAtividadeDia();
});

console.log('📊 Progress.js carregado com sucesso!');
