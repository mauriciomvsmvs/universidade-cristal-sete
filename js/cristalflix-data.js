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
