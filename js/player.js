/* ============================================
   UNIVERSIDADE CRISTAL SETE - PLAYER DE AULAS
   ============================================ */

// FUNÇÕES DO PLAYER DE VÍDEO

function hideAllPlayers() {
    const videoPlayer = document.getElementById('video-player');
    const slidePlayer = document.getElementById('slide-player');
    const quizPlayer = document.getElementById('quiz-player');
    const loadingPlayer = document.getElementById('loading-player');
    
    if (videoPlayer) videoPlayer.classList.add('hidden');
    if (slidePlayer) slidePlayer.classList.add('hidden');
    if (quizPlayer) quizPlayer.classList.add('hidden');
    if (loadingPlayer) loadingPlayer.classList.add('hidden');
}

function initVideoPlayer(videoUrl) {
    console.log('Inicializando player de vídeo:', videoUrl);
    
    hideAllPlayers();
    
    const videoPlayer = document.getElementById('video-player');
    const videoIframe = document.getElementById('video-iframe');
    
    if (!videoPlayer || !videoIframe) {
        console.error('Elementos do player de vídeo não encontrados');
        return;
    }
    
    // Converter URL para formato embed
    let embedUrl = convertToEmbedUrl(videoUrl);
    
    // Carregar vídeo
    videoIframe.src = embedUrl;
    videoPlayer.classList.remove('hidden');
    
    console.log('Vídeo carregado:', embedUrl);
}

function convertToEmbedUrl(url) {
    // YouTube
    if (url.includes('youtube.com/watch')) {
        const videoId = new URLSearchParams(new URL(url).search).get('v');
        return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
    
    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
    
    // Vimeo
    if (url.includes('vimeo.com/')) {
        const videoId = url.split('vimeo.com/')[1].split('?')[0];
        return `https://player.vimeo.com/video/${videoId}`;
    }
    
    // Já é URL embed ou outra plataforma
    return url;
}

function pauseVideo() {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Tentar pausar vídeo (funciona com YouTube API)
        videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}

function stopVideo() {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe) {
        videoIframe.src = '';
    }
}

// FUNÇÕES DO PLAYER DE SLIDES

function initSlidePlayer(slideUrl) {
    console.log('Inicializando player de slides:', slideUrl);
    
    hideAllPlayers();
    
    const slidePlayer = document.getElementById('slide-player');
    const slideIframe = document.getElementById('slide-iframe');
    
    if (!slidePlayer || !slideIframe) {
        console.error('Elementos do player de slides não encontrados');
        return;
    }
    
    // Converter URL para formato embed
    let embedUrl = convertToSlideEmbedUrl(slideUrl);
    
    // Carregar slides
    slideIframe.src = embedUrl;
    slidePlayer.classList.remove('hidden');
    
    console.log('Slides carregados:', embedUrl);
}

function convertToSlideEmbedUrl(url) {
    // Google Slides
    if (url.includes('docs.google.com/presentation')) {
        // Substituir /edit por /embed
        if (url.includes('/edit')) {
            return url.replace('/edit', '/embed');
        }
        // Se já tiver /embed, retornar como está
        if (url.includes('/embed')) {
            return url;
        }
        // Adicionar /embed ao final
        return url + '/embed';
    }
    
    // Google Drive (link direto de arquivo)
    if (url.includes('drive.google.com/file/')) {
        const fileId = url.split('/file/d/')[1].split('/')[0];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    
    // SlideShare
    if (url.includes('slideshare.net/')) {
        // SlideShare já fornece código embed, mas tentaremos converter
        return url.replace('/slideshow/', '/embed/');
    }
    
    // PDF direto
    if (url.toLowerCase().endsWith('.pdf')) {
        return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
    }
    
    // Já é URL embed ou outra plataforma
    return url;
}

// FUNÇÕES DO PLAYER DE QUIZ

function initQuizPlayer(perguntas) {
    console.log('🎯 Inicializando quiz com', perguntas.length, 'perguntas');
    
    hideAllPlayers();
    
    const quizPlayer = document.getElementById('quiz-player');
    
    if (!quizPlayer) {
        console.error('Elemento do quiz player não encontrado');
        return;
    }
    
    // Mostrar o quiz
    quizPlayer.classList.remove('hidden');
    
    // Iniciar o quiz (função definida em quiz-modern.js)
    if (typeof iniciarQuiz === 'function') {
        iniciarQuiz(perguntas);
    } else {
        console.error('Função iniciarQuiz não encontrada. Verifique se quiz-modern.js está carregado.');
    }
    
    console.log('✅ Quiz inicializado com sucesso');
}

// FUNÇÕES DE CONTROLE DE REPRODUÇÃO

function toggleFullscreen() {
    const playerContainer = document.getElementById('player-container');
    
    if (!document.fullscreenElement) {
        if (playerContainer.requestFullscreen) {
            playerContainer.requestFullscreen();
        } else if (playerContainer.webkitRequestFullscreen) {
            playerContainer.webkitRequestFullscreen();
        } else if (playerContainer.msRequestFullscreen) {
            playerContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function setPlaybackSpeed(speed) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Enviar comando para alterar velocidade (YouTube API)
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'setPlaybackRate',
                args: [speed]
            }), 
            '*'
        );
    }
}

function setVolume(volume) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Enviar comando para alterar volume (YouTube API)
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'setVolume',
                args: [volume]
            }), 
            '*'
        );
    }
}

// ANOTAÇÕES E MARCADORES

let playerNotes = [];

function addNote(timestamp, text) {
    const note = {
        id: Date.now(),
        timestamp: timestamp,
        text: text,
        date: new Date().toISOString()
    };
    
    playerNotes.push(note);
    saveNotesToStorage();
    
    console.log('Nota adicionada:', note);
    return note;
}

function getNotes() {
    loadNotesFromStorage();
    return playerNotes;
}

function deleteNote(noteId) {
    playerNotes = playerNotes.filter(note => note.id !== noteId);
    saveNotesToStorage();
}

function saveNotesToStorage() {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const storageKey = `player_notes_curso_${cursoId}`;
    
    try {
        localStorage.setItem(storageKey, JSON.stringify(playerNotes));
    } catch (e) {
        console.error('Erro ao salvar notas:', e);
    }
}

function loadNotesFromStorage() {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const storageKey = `player_notes_curso_${cursoId}`;
    
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            playerNotes = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Erro ao carregar notas:', e);
        playerNotes = [];
    }
}

// MARCADORES DE TEMPO

let bookmarks = [];

function addBookmark(timestamp, label) {
    const bookmark = {
        id: Date.now(),
        timestamp: timestamp,
        label: label
    };
    
    bookmarks.push(bookmark);
    saveBookmarksToStorage();
    
    console.log('Marcador adicionado:', bookmark);
    return bookmark;
}

function getBookmarks() {
    loadBookmarksFromStorage();
    return bookmarks;
}

function deleteBookmark(bookmarkId) {
    bookmarks = bookmarks.filter(bm => bm.id !== bookmarkId);
    saveBookmarksToStorage();
}

function jumpToBookmark(timestamp) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'seekTo',
                args: [timestamp, true]
            }), 
            '*'
        );
    }
}

function saveBookmarksToStorage() {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const storageKey = `player_bookmarks_curso_${cursoId}`;
    
    try {
        localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    } catch (e) {
        console.error('Erro ao salvar marcadores:', e);
    }
}

function loadBookmarksFromStorage() {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const storageKey = `player_bookmarks_curso_${cursoId}`;
    
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            bookmarks = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Erro ao carregar marcadores:', e);
        bookmarks = [];
    }
}

// HISTÓRICO DE REPRODUÇÃO

function savePlaybackPosition(cursoId, moduloNum, aulaNum, position) {
    const key = `playback_${cursoId}_${moduloNum}_${aulaNum}`;
    
    try {
        localStorage.setItem(key, JSON.stringify({
            position: position,
            timestamp: Date.now()
        }));
    } catch (e) {
        console.error('Erro ao salvar posição:', e);
    }
}

function loadPlaybackPosition(cursoId, moduloNum, aulaNum) {
    const key = `playback_${cursoId}_${moduloNum}_${aulaNum}`;
    
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const data = JSON.parse(stored);
            // Retornar apenas se for recente (menos de 7 dias)
            if (Date.now() - data.timestamp < 7 * 24 * 60 * 60 * 1000) {
                return data.position;
            }
        }
    } catch (e) {
        console.error('Erro ao carregar posição:', e);
    }
    
    return 0;
}

// ESTATÍSTICAS DE VISUALIZAÇÃO

let watchTime = 0;
let watchTimeInterval = null;

function startWatchTimeTracking() {
    stopWatchTimeTracking(); // Parar rastreamento anterior se existir
    
    watchTimeInterval = setInterval(() => {
        watchTime += 1;
        
        // Salvar a cada 30 segundos
        if (watchTime % 30 === 0) {
            saveWatchTime();
        }
    }, 1000);
}

function stopWatchTimeTracking() {
    if (watchTimeInterval) {
        clearInterval(watchTimeInterval);
        watchTimeInterval = null;
        saveWatchTime();
    }
}

function saveWatchTime() {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const key = `watch_time_curso_${cursoId}`;
    
    try {
        const currentTotal = parseInt(localStorage.getItem(key) || '0');
        localStorage.setItem(key, (currentTotal + watchTime).toString());
        watchTime = 0; // Reset contador
    } catch (e) {
        console.error('Erro ao salvar tempo assistido:', e);
    }
}

function getTotalWatchTime(cursoId) {
    const key = `watch_time_curso_${cursoId}`;
    try {
        return parseInt(localStorage.getItem(key) || '0');
    } catch (e) {
        return 0;
    }
}

// PICTURE-IN-PICTURE

function togglePictureInPicture() {
    const videoIframe = document.getElementById('video-iframe');
    
    if (document.pictureInPictureEnabled) {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            if (videoIframe) {
                // PiP funciona com elementos <video>, não com iframes
                // Esta é uma funcionalidade limitada
                console.log('Picture-in-Picture não suportado para vídeos em iframe');
                showToast('Picture-in-Picture não disponível para este vídeo', 'warning');
            }
        }
    } else {
        console.log('Picture-in-Picture não suportado pelo navegador');
        showToast('Seu navegador não suporta Picture-in-Picture', 'warning');
    }
}

// DOWNLOAD DE RECURSOS

function downloadResource(resourceUrl, filename) {
    // Criar link temporário para download
    const link = document.createElement('a');
    link.href = resourceUrl;
    link.download = filename || 'recurso';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Download iniciado:', filename);
}

// LEGENDAS E TRANSCRIÇÕES

function toggleSubtitles(enable) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Enviar comando para ativar/desativar legendas (YouTube API)
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: enable ? 'loadModule' : 'unloadModule',
                args: ['captions']
            }), 
            '*'
        );
    }
}

// KEYBOARD SHORTCUTS

function initPlayerKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ignorar se estiver digitando em input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key) {
            case ' ': // Espaço - Play/Pause
                e.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowLeft': // Seta esquerda - Voltar 5s
                e.preventDefault();
                skipTime(-5);
                break;
            case 'ArrowRight': // Seta direita - Avançar 5s
                e.preventDefault();
                skipTime(5);
                break;
            case 'ArrowUp': // Seta cima - Aumentar volume
                e.preventDefault();
                adjustVolume(10);
                break;
            case 'ArrowDown': // Seta baixo - Diminuir volume
                e.preventDefault();
                adjustVolume(-10);
                break;
            case 'f': // F - Fullscreen
                e.preventDefault();
                toggleFullscreen();
                break;
            case 'm': // M - Mute
                e.preventDefault();
                toggleMute();
                break;
            case 'n': // N - Próxima aula
                e.preventDefault();
                if (typeof proximaAula === 'function') {
                    proximaAula();
                }
                break;
            case 'p': // P - Aula anterior
                e.preventDefault();
                if (typeof aulaAnterior === 'function') {
                    aulaAnterior();
                }
                break;
        }
    });
}

function togglePlayPause() {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Toggle play/pause (YouTube API)
        videoIframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}', 
            '*'
        );
    }
}

function skipTime(seconds) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Avançar ou retroceder tempo
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'getCurrentTime'
            }), 
            '*'
        );
        
        // Após obter tempo atual, adicionar/subtrair segundos
        // Isso requer implementação mais complexa com listeners
    }
}

function adjustVolume(delta) {
    // Ajustar volume em +/- delta
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        // Implementação depende de obter volume atual primeiro
        console.log('Ajustar volume:', delta);
    }
}

function toggleMute() {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        videoIframe.contentWindow.postMessage(
            '{"event":"command","func":"mute","args":""}', 
            '*'
        );
    }
}

// ANALYTICS E TRACKING

function trackVideoEvent(eventType, eventData = {}) {
    const cursoId = new URLSearchParams(window.location.search).get('cursoId');
    const moduloNum = new URLSearchParams(window.location.search).get('modulo');
    const aulaNum = new URLSearchParams(window.location.search).get('aula');
    
    const event = {
        type: eventType,
        cursoId: cursoId,
        modulo: moduloNum,
        aula: aulaNum,
        timestamp: new Date().toISOString(),
        ...eventData
    };
    
    console.log('Player Event:', event);
    
    // Aqui você pode enviar para analytics (Google Analytics, Mixpanel, etc)
    // Exemplo:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventType, eventData);
    // }
}

// QUALIDADE DE VÍDEO

function setVideoQuality(quality) {
    const videoIframe = document.getElementById('video-iframe');
    if (videoIframe && videoIframe.contentWindow) {
        videoIframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'setPlaybackQuality',
                args: [quality] // 'small', 'medium', 'large', 'hd720', 'hd1080'
            }), 
            '*'
        );
    }
}

// INICIALIZAÇÃO DO PLAYER

function initPlayer() {
    console.log('🎬 Player inicializado');
    
    // Inicializar atalhos de teclado
    initPlayerKeyboardShortcuts();
    
    // Carregar notas e marcadores
    loadNotesFromStorage();
    loadBookmarksFromStorage();
    
    // Iniciar tracking de tempo assistido
    startWatchTimeTracking();
    
    // Cleanup ao sair da página
    window.addEventListener('beforeunload', function() {
        stopWatchTimeTracking();
    });
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlayer);
} else {
    initPlayer();
}

console.log('🎬 Player.js carregado com sucesso!');
