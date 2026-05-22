/* ============================================
   UNIVERSIDADE CRISTAL SETE - SISTEMA DE PROGRESSO
   VERSÃO MULTI-USUÁRIO
   ============================================ */

// ESTRUTURA DE DADOS DO PROGRESSO (COM USUÁRIO)
// progresso_usuario_${usuarioId}_curso_${cursoId} = {
//   moduloNum: {
//     aulaNum: {
//       concluida: true/false,
//       dataInicio: timestamp,
//       dataConclusao: timestamp
//     }
//   }
// }

// ============================================
// SALVAR PROGRESSO DE UMA AULA
// ============================================
function salvarProgressoAula(cursoId, moduloNum, aulaNum, concluida) {
    const usuario = verificarLogin();
    if (!usuario) {
        console.error('Usuário não logado');
        return false;
    }
    
    const key = `progresso_usuario_${usuario.id}_curso_${cursoId}`;
    
    try {
        // Obter progresso atual
        let progresso = obterProgressoCursoCompleto(usuario.id, cursoId);
        
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
        
        console.log('✅ Progresso salvo:', {usuarioId: usuario.id, cursoId, moduloNum, aulaNum, concluida});
        
        return true;
    } catch (e) {
        console.error('❌ Erro ao salvar progresso:', e);
        return false;
    }
}

// ============================================
// VERIFICAR SE AULA ESTÁ CONCLUÍDA
// ============================================
function verificarAulaConcluida(moduloNum, aulaNum) {
    const usuario = verificarLogin();
    if (!usuario) return false;
    
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('curso');
    
    if (!cursoId) return false;
    
    const key = `progresso_usuario_${usuario.id}_curso_${cursoId}`;
    
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

// ============================================
// OBTER PROGRESSO COMPLETO DO CURSO
// ============================================
function obterProgressoCursoCompleto(usuarioId, cursoId) {
    const key = `progresso_usuario_${usuarioId}_curso_${cursoId}`;
    
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

// ============================================
// CALCULAR PERCENTUAL DE PROGRESSO (MULTI-USUÁRIO)
// ============================================
function obterProgressoCurso(usuarioId, cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        console.warn('Curso não encontrado:', cursoId);
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
    const progresso = obterProgressoCursoCompleto(usuarioId, cursoId);
    
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
    
    console.log(`📊 Progresso do curso ${cursoId} para usuário ${usuarioId}: ${percentual}% (${aulasConcluidasCount}/${totalAulas} aulas)`);
    
    return percentual;
}

// ============================================
// OBTER ESTATÍSTICAS DETALHADAS
// ============================================
function obterEstatisticasProgresso(usuarioId, cursoId) {
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        return null;
    }
    
    const progresso = obterProgressoCursoCompleto(usuarioId, cursoId);
    
    let totalAulas = 0;
    let aulasConcluidasCount = 0;
    let tempoTotal = 0;
    
    curso.modulos.forEach(modulo => {
        modulo.aulas.forEach((aula, index) => {
            totalAulas++;
            const aulaNum = index + 1;
            const aulaProgresso = progresso[modulo.numero]?.[aulaNum];
            
            if (aulaProgresso?.concluida) {
                aulasConcluidasCount++;
                
                if (aulaProgresso.tempoAssistido) {
                    tempoTotal += aulaProgresso.tempoAssistido;
                }
            }
        });
    });
    
    return {
        totalAulas,
        aulasConcluidasCount,
        percentual: Math.round((aulasConcluidasCount / totalAulas) * 100),
        tempoTotal: Math.round(tempoTotal / 60) // em minutos
    };
}

// ============================================
// OBTER TODOS OS CURSOS EM ANDAMENTO DO USUÁRIO
// ============================================
function obterCursosEmAndamento(usuarioId) {
    const cursosEmAndamento = [];
    
    cursos.forEach(curso => {
        const progresso = obterProgressoCurso(usuarioId, curso.id);
        if (progresso > 0 && progresso < 100) {
            cursosEmAndamento.push({
                ...curso,
                progresso: progresso
            });
        }
    });
    
    return cursosEmAndamento;
}

// ============================================
// OBTER TODOS OS CURSOS CONCLUÍDOS DO USUÁRIO
// ============================================
function obterCursosConcluidos(usuarioId) {
    const cursosConcluidos = [];
    
    cursos.forEach(curso => {
        const progresso = obterProgressoCurso(usuarioId, curso.id);
        if (progresso === 100) {
            cursosConcluidos.push({
                ...curso,
                progresso: 100
            });
        }
    });
    
    return cursosConcluidos;
}

// ============================================
// RESETAR PROGRESSO DE UM CURSO (ADMIN)
// ============================================
function resetarProgressoCurso(usuarioId, cursoId) {
    const key = `progresso_usuario_${usuarioId}_curso_${cursoId}`;
    localStorage.removeItem(key);
    console.log('🔄 Progresso resetado:', {usuarioId, cursoId});
}

// ============================================
// HELPER: Obter curso por ID
// ============================================
function getCursoById(cursoId) {
    return cursos.find(c => c.id === parseInt(cursoId));
}

console.log('✅ Sistema de Progresso Multi-usuário carregado');
