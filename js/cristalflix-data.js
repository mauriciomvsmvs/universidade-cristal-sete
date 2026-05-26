// CRISTALFLIX - Dados dos Vídeos
// Sistema de vídeos da Universidade Cristal Sete

const videosData = [
    {
        id: 'Fdkz7RRLUmo',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-01'
    },
    {
        id: 'YciT8rShEnk',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-02'
    },
    {
        id: '1gd3rsIScWc',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-03'
    },
    {
        id: '2owOg0FOsR4',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-04'
    },
    {
        id: '2pSo5pYH5dk',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-05'
    },
    {
        id: 'claPBWmT6lg',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-06'
    },
    {
        id: 'hXRnYpiNBFY',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-07'
    },
    {
        id: 'mZHoSRLjHjQ',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-08'
    },
    {
        id: 'kp7TGMFFBIg',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-09'
    },
    {
        id: 'At8O0m4SQyQ',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-10'
    },
    {
        id: '5E3nlRKuVr0',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-11'
    },
    {
        id: 'gZb4QLVTxkY',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-12'
    },
    {
        id: 'K0E0fWzay88',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-13'
    },
    {
        id: 'Lnb1SsUQOjA',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-14'
    },
    {
        id: 'T8qLC2_Y8yI',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-15'
    },
    {
        id: '1w8DysbLvtU',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-16'
    },
    {
        id: 'GcNY6fbGv20',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-17'
    },
    {
        id: 'bZBJUbzrwCs',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-18'
    },
    {
        id: 'lh6aXv1Bt44',
        tipo: 'short',
        categoria: 'geral',
        dataPublicacao: '2024-01-19'
    }
];

// ============================================
// REELS DO INSTAGRAM
// ============================================
const reelsInstagramData = [
    {
        id: 'DWhRUxBj3Bz',
        titulo: 'Do Pedido à Entrega - Parte 1',
        descricao: 'Conheça a primeira etapa do fluxo completo: desde o recebimento do pedido até a produção.',
        tipo: 'reel',
        categoria: 'processos',
        dataPublicacao: '2025-01-01',
        thumbnail: 'https://www.instagram.com/reel/DWhRUxBj3Bz/media/?size=l'
    },
    {
        id: 'DXHdmJ6B33R',
        titulo: 'Do Pedido à Entrega - Parte 2',
        descricao: 'Acompanhe a segunda etapa: produção, controle de qualidade e preparação para expedição.',
        tipo: 'reel',
        categoria: 'processos',
        dataPublicacao: '2025-01-02',
        thumbnail: 'https://www.instagram.com/reel/DXHdmJ6B33R/media/?size=l'
    },
    {
        id: 'DYPiK4jhG24',
        titulo: 'Do Pedido à Entrega - Parte 3',
        descricao: 'Etapa final: expedição, logística e entrega ao cliente com segurança e qualidade.',
        tipo: 'reel',
        categoria: 'processos',
        dataPublicacao: '2025-01-03',
        thumbnail: 'https://www.instagram.com/reel/DYPiK4jhG24/media/?size=l'
    }
];

// Sistema de Progresso de Visualização
class CristalFlixProgress {
    constructor() {
        this.storageKey = 'cristalflix_progress';
    }
    
    // Salvar progresso do vídeo
    salvarProgresso(usuarioId, videoId, progresso, assistido = false) {
        const data = this.obterTodosProgressos();
        
        if (!data[usuarioId]) {
            data[usuarioId] = {};
        }
        
        data[usuarioId][videoId] = {
            progresso: progresso,
            assistido: assistido,
            ultimaAtualizacao: new Date().toISOString()
        };
        
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        
        // Se assistiu mais de 80%, marcar como completo e dar pontos
        if (progresso >= 0.8 && !assistido && typeof gamificacao !== 'undefined') {
            this.marcarComoAssistido(usuarioId, videoId);
        }
    }
    
    // Marcar vídeo como assistido e dar pontos
    marcarComoAssistido(usuarioId, videoId) {
        const data = this.obterTodosProgressos();
        
        if (data[usuarioId] && data[usuarioId][videoId]) {
            data[usuarioId][videoId].assistido = true;
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            
            // Adicionar pontos na gamificação
            if (typeof gamificacao !== 'undefined') {
                gamificacao.adicionarPontos(usuarioId, 10, 'videoAssistido');
                
                // Notificar usuário
                this.mostrarNotificacao('+10 pontos', 'Vídeo assistido!');
            }
        }
    }
    
    // Obter progresso de um vídeo específico
    obterProgresso(usuarioId, videoId) {
        const data = this.obterTodosProgressos();
        return data[usuarioId]?.[videoId] || { progresso: 0, assistido: false };
    }
    
    // Obter todos os progressos
    obterTodosProgressos() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : {};
    }
    
    // Obter vídeos em andamento (continuar assistindo)
    obterVideosEmAndamento(usuarioId) {
        const data = this.obterTodosProgressos();
        const userProgress = data[usuarioId] || {};
        
        return Object.entries(userProgress)
            .filter(([_, info]) => info.progresso > 0 && info.progresso < 0.8)
            .map(([videoId, info]) => ({
                videoId,
                progresso: info.progresso
            }))
            .sort((a, b) => new Date(b.ultimaAtualizacao) - new Date(a.ultimaAtualizacao))
            .slice(0, 6); // Mostrar últimos 6
    }
    
    // Obter vídeos assistidos
    obterVideosAssistidos(usuarioId) {
        const data = this.obterTodosProgressos();
        const userProgress = data[usuarioId] || {};
        
        return Object.entries(userProgress)
            .filter(([_, info]) => info.assistido)
            .map(([videoId, _]) => videoId);
    }
    
    // Mostrar notificação de pontos
    mostrarNotificacao(titulo, mensagem) {
        const notif = document.createElement('div');
        notif.className = 'fixed top-20 right-4 bg-gradient-to-br from-primary to-primary-dark text-white px-6 py-4 rounded-lg shadow-lg z-[9999] animate-slide-in';
        notif.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div>
                    <div class="font-bold">${titulo}</div>
                    <div class="text-sm opacity-90">${mensagem}</div>
                </div>
            </div>
        `;
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.animation = 'slide-out 0.3s ease-out';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
}

// Instância global
const cristalflixProgress = new CristalFlixProgress();

// ============================================
// RENDERIZAÇÃO DOS VÍDEOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ✅ CORREÇÃO: auth.js JÁ FAZ A VERIFICAÇÃO AUTOMÁTICA!
    // Não precisamos verificar novamente aqui, apenas pegar o usuário
    const usuarioAtual = verificarLogin();
    
    // Se o auth.js não redirecionou, é porque o usuário está logado
    if (usuarioAtual) {
        // Renderizar todos os vídeos
        renderizarTodosVideos();
        
        // Renderizar reels do Instagram
        renderizarTodosReels();
        
        // Renderizar continuar assistindo
        renderizarContinuarAssistindo();
        
        // Inicializar sistema de abas
        inicializarAbas();
        
        // Atualizar contadores
        atualizarContadores();
    }
});

// ============================================
// SISTEMA DE ABAS
// ============================================
function inicializarAbas() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover active de todos os botões
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Adicionar active ao botão clicado
            this.classList.add('active');
            
            // Esconder todos os conteúdos
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar conteúdo da aba clicada
            const content = document.getElementById(tabId + '-content');
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

function atualizarContadores() {
    // Atualizar contador de shorts
    const countShorts = document.getElementById('count-shorts');
    if (countShorts) {
        countShorts.textContent = videosData.length;
    }
    
    // Atualizar contador de reels
    const countReels = document.getElementById('count-reels');
    if (countReels) {
        countReels.textContent = reelsInstagramData.length;
    }
}

function renderizarTodosVideos() {
    const container = document.getElementById('todos-videos');
    const totalElement = document.getElementById('total-videos');
    
    if (!container) return;
    
    // Atualizar contador
    if (totalElement) {
        totalElement.textContent = videosData.length;
    }
    
    // Renderizar cards
    container.innerHTML = videosData.map(video => criarCardVideo(video)).join('');
}

function renderizarContinuarAssistindo() {
    const usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    const section = document.getElementById('continuar-assistindo-section');
    const container = document.getElementById('continuar-assistindo');
    
    if (!section || !container) return;
    
    const videosEmAndamento = cristalflixProgress.obterVideosEmAndamento(usuarioAtual.id);
    
    if (videosEmAndamento.length > 0) {
        section.style.display = 'block';
        
        container.innerHTML = videosEmAndamento.map(item => {
            const video = videosData.find(v => v.id === item.videoId);
            return video ? criarCardVideo(video, item.progresso) : '';
        }).join('');
    }
}

function criarCardVideo(video, progresso = 0) {
    const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    const progressoPercent = Math.round(progresso * 100);
    
    return `
        <div class="video-card" onclick="abrirVideo('${video.id}')">
            <img src="${thumbnail}" alt="Thumbnail" loading="lazy">
            <div class="play-icon">
                <i class="fas fa-play"></i>
            </div>
            <div class="video-duration">Short</div>
            ${progresso > 0 ? `<div class="progress-bar" style="width: ${progressoPercent}%"></div>` : ''}
            <div class="video-info">
                <div class="text-sm font-semibold line-clamp-2">Vídeo ${video.id.substring(0, 6)}</div>
            </div>
        </div>
    `;
}

// ============================================
// RENDERIZAÇÃO DOS REELS DO INSTAGRAM
// ============================================
function renderizarTodosReels() {
    const container = document.getElementById('todos-reels');
    const totalElement = document.getElementById('total-reels');
    
    if (!container) return;
    
    // Atualizar contador
    if (totalElement) {
        totalElement.textContent = reelsInstagramData.length;
    }
    
    // Renderizar cards
    container.innerHTML = reelsInstagramData.map(reel => criarCardReel(reel)).join('');
}

function criarCardReel(reel, progresso = 0) {
    const thumbnail = reel.thumbnail;
    const progressoPercent = Math.round(progresso * 100);
    
    return `
        <div class="video-card" onclick="abrirReel('${reel.id}')">
            <img src="${thumbnail}" alt="${reel.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x700/2B5FA6/FFFFFF?text=Instagram+Reel'">
            <div class="play-icon">
                <i class="fab fa-instagram"></i>
            </div>
            <div class="video-duration">Reel</div>
            ${progresso > 0 ? `<div class="progress-bar" style="width: ${progressoPercent}%"></div>` : ''}
            <div class="video-info">
                <div class="text-sm font-semibold line-clamp-2">${reel.titulo}</div>
            </div>
        </div>
    `;
}

function abrirReel(reelId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    const titulo = document.getElementById('modal-title');
    const descricao = document.getElementById('modal-description');
    
    if (!modal || !container) return;
    
    // Encontrar reel
    const reel = reelsInstagramData.find(r => r.id === reelId);
    if (!reel) return;
    
    // Definir conteúdo
    titulo.textContent = reel.titulo;
    descricao.textContent = reel.descricao;
    
    // Criar embed do Instagram
    container.innerHTML = `
        <iframe 
            class="video-player" 
            src="https://www.instagram.com/reel/${reelId}/embed/" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
    
    modal.classList.add('active');
    
    // Simular progresso
    const usuarioAtual = verificarLogin();
    if (usuarioAtual) {
        setTimeout(() => {
            cristalflixProgress.salvarProgresso(usuarioAtual.id, 'reel_' + reelId, 0.9, false);
        }, 5000);
    }
}

function abrirVideo(videoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    const titulo = document.getElementById('modal-title');
    const descricao = document.getElementById('modal-description');
    
    if (!modal || !container) return;
    
    // Definir conteúdo
    titulo.textContent = `Vídeo de Treinamento`;
    descricao.textContent = 'Conteúdo educativo da Universidade Cristal Sete';
    
    // Criar player YouTube
    container.innerHTML = `
        <iframe 
            class="video-player" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    modal.classList.add('active');
    
    // Simular progresso (em produção, usar YouTube API)
    const usuarioAtual = verificarLogin();
    if (usuarioAtual) {
        setTimeout(() => {
            cristalflixProgress.salvarProgresso(usuarioAtual.id, videoId, 0.9, false);
        }, 5000);
    }
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    
    if (modal) modal.classList.remove('active');
    if (container) container.innerHTML = '';
    
    // Atualizar listas
    renderizarContinuarAssistindo();
}

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
