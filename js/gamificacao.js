/* ============================================
   UNIVERSIDADE CRISTAL SETE - SISTEMA DE GAMIFICAÇÃO
   Sistema profissional de pontuação, ranking e badges
   ============================================ */

class SistemaGamificacao {
    constructor() {
        this.pontosKey = 'gamificacao_pontos';
        this.badgesKey = 'gamificacao_badges';
        this.streakKey = 'gamificacao_streak';
        
        // TABELA DE PONTOS
        this.pontos = {
            aulaCompleta: 10,
            quizAprovado: 50,
            quizPerfeito: 100,
            cursoCompleto: 200,
            certificadoEmitido: 300,
            streakDiario: 20
        };
        
        this.init();
    }
    
    init() {
        this.verificarStreak();
    }
    
    // ============================================
    // OBTER DADOS DO USUÁRIO
    // ============================================
    
    obterDadosUsuario(usuarioId) {
        const key = `${this.pontosKey}_${usuarioId}`;
        const dados = localStorage.getItem(key);
        
        if (dados) {
            return JSON.parse(dados);
        }
        
        // Dados iniciais
        return {
            usuarioId: usuarioId,
            pontosTotais: 0,
            historico: [],
            badges: [],
            ultimoAcesso: Date.now()
        };
    }
    
    salvarDadosUsuario(usuarioId, dados) {
        const key = `${this.pontosKey}_${usuarioId}`;
        dados.ultimoAcesso = Date.now();
        localStorage.setItem(key, JSON.stringify(dados));
        
        // Atualizar ranking global
        this.atualizarRanking(usuarioId, dados.pontosTotais);
    }
    
    // ============================================
    // ADICIONAR PONTOS
    // ============================================
    
    adicionarPontos(usuarioId, tipo, detalhes = {}) {
        const dados = this.obterDadosUsuario(usuarioId);
        const pontosGanhos = this.pontos[tipo] || 0;
        
        if (pontosGanhos === 0) {
            console.warn('Tipo de pontuação inválido:', tipo);
            return false;
        }
        
        // Adicionar aos pontos totais
        dados.pontosTotais += pontosGanhos;
        
        // Registrar no histórico
        dados.historico.push({
            tipo: tipo,
            pontos: pontosGanhos,
            detalhes: detalhes,
            data: Date.now()
        });
        
        // Salvar
        this.salvarDadosUsuario(usuarioId, dados);
        
        // Verificar novas badges
        this.verificarBadges(usuarioId);
        
        console.log(`✅ ${pontosGanhos} pontos adicionados! Total: ${dados.pontosTotais}`);
        
        return {
            pontosGanhos: pontosGanhos,
            pontosTotais: dados.pontosTotais,
            novaBadge: null // Será preenchido se desbloquear badge
        };
    }
    
    // ============================================
    // SISTEMA DE BADGES
    // ============================================
    
    definirBadges() {
        return [
            {
                id: 'primeiro_passo',
                nome: 'Primeiro Passo',
                descricao: 'Completou seu primeiro curso',
                icone: 'footsteps',
                condicao: (dados) => this.contarCursosConcluidos(dados.usuarioId) >= 1
            },
            {
                id: 'estudante_dedicado',
                nome: 'Estudante Dedicado',
                descricao: 'Completou 5 cursos',
                icone: 'book-open',
                condicao: (dados) => this.contarCursosConcluidos(dados.usuarioId) >= 5
            },
            {
                id: 'mestre_conhecimento',
                nome: 'Mestre do Conhecimento',
                descricao: 'Completou 10 cursos',
                icone: 'academic-cap',
                condicao: (dados) => this.contarCursosConcluidos(dados.usuarioId) >= 10
            },
            {
                id: 'perfeccionista',
                nome: 'Perfeccionista',
                descricao: 'Obteve 100% em 3 quizzes',
                icone: 'star',
                condicao: (dados) => this.contarQuizesPerfeitos(dados.historico) >= 3
            },
            {
                id: 'persistente',
                nome: 'Persistente',
                descricao: 'Estudou por 7 dias consecutivos',
                icone: 'fire',
                condicao: (dados) => this.obterStreak(dados.usuarioId) >= 7
            },
            {
                id: 'maratonista',
                nome: 'Maratonista',
                descricao: 'Estudou por 30 dias consecutivos',
                icone: 'lightning-bolt',
                condicao: (dados) => this.obterStreak(dados.usuarioId) >= 30
            },
            {
                id: 'iniciante_1000',
                nome: 'Desbravador',
                descricao: 'Alcançou 1.000 pontos',
                icone: 'trending-up',
                condicao: (dados) => dados.pontosTotais >= 1000
            },
            {
                id: 'expert_5000',
                nome: 'Expert',
                descricao: 'Alcançou 5.000 pontos',
                icone: 'chart-bar',
                condicao: (dados) => dados.pontosTotais >= 5000
            },
            {
                id: 'lenda_10000',
                nome: 'Lenda',
                descricao: 'Alcançou 10.000 pontos',
                icone: 'trophy',
                condicao: (dados) => dados.pontosTotais >= 10000
            },
            {
                id: 'tecnico_master',
                nome: 'Técnico Master',
                descricao: 'Completou todos os cursos técnicos',
                icone: 'cog',
                condicao: (dados) => this.verificarCategoriaConcluida(dados.usuarioId, 'Técnico')
            },
            {
                id: 'vendas_master',
                nome: 'Vendedor Master',
                descricao: 'Completou todos os cursos de vendas',
                icone: 'currency-dollar',
                condicao: (dados) => this.verificarCategoriaConcluida(dados.usuarioId, 'Vendas')
            }
        ];
    }
    
    verificarBadges(usuarioId) {
        const dados = this.obterDadosUsuario(usuarioId);
        const todasBadges = this.definirBadges();
        const badgesDesbloqueadas = [];
        
        todasBadges.forEach(badge => {
            // Já tem essa badge?
            if (dados.badges.includes(badge.id)) return;
            
            // Verifica condição
            if (badge.condicao(dados)) {
                dados.badges.push(badge.id);
                badgesDesbloqueadas.push(badge);
                console.log(`🎖️ Nova badge desbloqueada: ${badge.nome}`);
            }
        });
        
        if (badgesDesbloqueadas.length > 0) {
            this.salvarDadosUsuario(usuarioId, dados);
            
            // Mostrar notificação
            badgesDesbloqueadas.forEach(badge => {
                this.mostrarNotificacaoBadge(badge);
            });
        }
        
        return badgesDesbloqueadas;
    }
    
    obterBadgesUsuario(usuarioId) {
        const dados = this.obterDadosUsuario(usuarioId);
        const todasBadges = this.definirBadges();
        
        return todasBadges.filter(badge => dados.badges.includes(badge.id));
    }
    
    // ============================================
    // RANKING GLOBAL
    // ============================================
    
    atualizarRanking(usuarioId, pontos) {
        const rankingKey = 'gamificacao_ranking_global';
        let ranking = JSON.parse(localStorage.getItem(rankingKey) || '[]');
        
        // Remover entrada antiga do usuário
        ranking = ranking.filter(r => r.usuarioId !== usuarioId);
        
        // Obter info do usuário
        const usuario = this.obterInfoUsuario(usuarioId);
        
        // Adicionar nova entrada
        ranking.push({
            usuarioId: usuarioId,
            nome: usuario.nome,
            departamento: usuario.departamento,
            pontos: pontos,
            atualizado: Date.now()
        });
        
        // Ordenar por pontos (decrescente)
        ranking.sort((a, b) => b.pontos - a.pontos);
        
        // Salvar
        localStorage.setItem(rankingKey, JSON.stringify(ranking));
    }
    
    obterRanking(filtro = {}) {
        const rankingKey = 'gamificacao_ranking_global';
        let ranking = JSON.parse(localStorage.getItem(rankingKey) || '[]');
        
        // Filtrar por departamento
        if (filtro.departamento) {
            ranking = ranking.filter(r => r.departamento === filtro.departamento);
        }
        
        // Filtrar por período (TODO: implementar quando tiver backend)
        
        return ranking;
    }
    
    obterPosicaoUsuario(usuarioId) {
        const ranking = this.obterRanking();
        const posicao = ranking.findIndex(r => r.usuarioId === usuarioId);
        return posicao !== -1 ? posicao + 1 : null;
    }
    
    // ============================================
    // SISTEMA DE STREAK (DIAS CONSECUTIVOS)
    // ============================================
    
    verificarStreak() {
        const usuario = verificarLogin();
        if (!usuario) return;
        
        const streakData = this.obterStreakData(usuario.id);
        const hoje = new Date().toDateString();
        
        if (streakData.ultimoDia !== hoje) {
            const ontem = new Date(Date.now() - 86400000).toDateString();
            
            if (streakData.ultimoDia === ontem) {
                // Continuou o streak
                streakData.diasConsecutivos++;
            } else if (streakData.ultimoDia !== hoje) {
                // Quebrou o streak
                streakData.diasConsecutivos = 1;
            }
            
            streakData.ultimoDia = hoje;
            this.salvarStreakData(usuario.id, streakData);
            
            // Adicionar pontos de streak
            this.adicionarPontos(usuario.id, 'streakDiario', { dias: streakData.diasConsecutivos });
        }
    }
    
    obterStreakData(usuarioId) {
        const key = `${this.streakKey}_${usuarioId}`;
        const data = localStorage.getItem(key);
        
        if (data) {
            return JSON.parse(data);
        }
        
        return {
            diasConsecutivos: 1,
            ultimoDia: new Date().toDateString()
        };
    }
    
    salvarStreakData(usuarioId, data) {
        const key = `${this.streakKey}_${usuarioId}`;
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    obterStreak(usuarioId) {
        const data = this.obterStreakData(usuarioId);
        return data.diasConsecutivos;
    }
    
    // ============================================
    // HELPERS
    // ============================================
    
    contarCursosConcluidos(usuarioId) {
        let count = 0;
        cursos.forEach(curso => {
            const progresso = obterProgressoCurso(usuarioId, curso.id);
            if (progresso === 100) count++;
        });
        return count;
    }
    
    contarQuizesPerfeitos(historico) {
        return historico.filter(h => h.tipo === 'quizPerfeito').length;
    }
    
    verificarCategoriaConcluida(usuarioId, categoria) {
        const cursosCategoria = cursos.filter(c => c.categoria === categoria);
        let concluidos = 0;
        
        cursosCategoria.forEach(curso => {
            const progresso = obterProgressoCurso(usuarioId, curso.id);
            if (progresso === 100) concluidos++;
        });
        
        return concluidos === cursosCategoria.length && cursosCategoria.length > 0;
    }
    
    obterInfoUsuario(usuarioId) {
        const usuario = usuarios.find(u => u.id === usuarioId);
        return usuario || { nome: 'Usuário', departamento: 'Geral' };
    }
    
    // ============================================
    // NOTIFICAÇÕES
    // ============================================
    
    mostrarNotificacaoBadge(badge) {
        const notificacao = document.createElement('div');
        notificacao.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #2B5FA6 0%, #1e4378 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 40px rgba(43, 95, 166, 0.4);
            z-index: 10000;
            min-width: 300px;
            animation: slideInRight 0.5s ease-out;
        `;
        
        notificacao.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    ${this.getIconeSVG(badge.icone, 'white', 28)}
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.25rem;">Nova Conquista!</div>
                    <div style="font-weight: 700; font-size: 1.125rem; font-family: 'Montserrat', sans-serif;">${badge.nome}</div>
                    <div style="font-size: 0.875rem; opacity: 0.8; margin-top: 0.25rem;">${badge.descricao}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notificacao);
        
        setTimeout(() => {
            notificacao.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => notificacao.remove(), 500);
        }, 5000);
    }
    
    getIconeSVG(nome, cor = 'currentColor', tamanho = 24) {
        const icones = {
            'footsteps': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
            'book-open': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
            'academic-cap': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>`,
            'star': `<svg width="${tamanho}" height="${tamanho}" fill="${cor}" viewBox="0 0 24 24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>`,
            'fire': `<svg width="${tamanho}" height="${tamanho}" fill="${cor}" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5.25 3.15.75-1.23-4.5-2.67V7H11z"></path></svg>`,
            'lightning-bolt': `<svg width="${tamanho}" height="${tamanho}" fill="${cor}" viewBox="0 0 24 24"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"></path></svg>`,
            'trending-up': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
            'chart-bar': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
            'trophy': `<svg width="${tamanho}" height="${tamanho}" fill="${cor}" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path></svg>`,
            'cog': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
            'currency-dollar': `<svg width="${tamanho}" height="${tamanho}" fill="none" stroke="${cor}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
        };
        
        return icones[nome] || icones['star'];
    }
}

// Instanciar globalmente
const gamificacao = new SistemaGamificacao();

console.log('✅ Sistema de Gamificação carregado');
