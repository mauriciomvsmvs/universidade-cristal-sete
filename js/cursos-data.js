<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula - Universidade Cristal Sete</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/player.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="font-inter bg-gray-900">
    
    <!-- HEADER MINIMALISTA -->
    <header class="bg-gray-800 border-b border-gray-700">
        <nav class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="index.html" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                    <img src="assets/logos/universidade.png" alt="Universidade Cristal Sete" class="h-10">
                    <div>
                        <h1 class="text-sm font-bold text-white">Universidade Cristal Sete</h1>
                    </div>
                </a>
                
                <!-- Título do Curso -->
                <div class="hidden md:block">
                    <h2 id="curso-titulo-header" class="text-white font-semibold"></h2>
                </div>
                
                <!-- Botão Sair -->
                <a href="#" id="btn-sair-curso" class="text-gray-300 hover:text-white text-sm flex items-center">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Sair
                </a>
            </div>
        </nav>
    </header>

    <!-- PLAYER LAYOUT -->
    <div class="flex h-[calc(100vh-61px)]">
        
        <!-- ÁREA DO PLAYER -->
        <div class="flex-1 flex flex-col">
            
            <!-- PLAYER DE CONTEÚDO -->
            <div id="player-container" class="flex-1 bg-black flex items-center justify-center">
                <div class="text-white text-center p-8">
                    <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Carregando aula...</p>
                </div>
            </div>
            
            <!-- CONTROLES E INFO -->
            <div class="bg-gray-800 p-6 border-t border-gray-700">
                <div class="container mx-auto">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h1 id="aula-titulo" class="text-2xl font-bold text-white mb-2">Carregando...</h1>
                            <p id="aula-descricao" class="text-gray-400"></p>
                        </div>
                        
                        <button id="btn-marcar-concluida" onclick="marcarConcluida()" class="btn-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Marcar como Concluída
                        </button>
                    </div>
                    
                    <!-- NAVEGAÇÃO ENTRE AULAS -->
                    <div class="flex items-center justify-between">
                        <button id="btn-aula-anterior" onclick="aulaAnterior()" class="flex items-center text-gray-300 hover:text-white transition-colors">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Aula Anterior
                        </button>
                        
                        <div class="text-gray-400 text-sm">
                            Aula <span id="aula-numero-atual">1</span> de <span id="total-aulas">1</span>
                        </div>
                        
                        <button id="btn-proxima-aula" onclick="proximaAula()" class="flex items-center text-gray-300 hover:text-white transition-colors">
                            Próxima Aula
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
        <!-- SIDEBAR COM PLAYLIST -->
        <div class="w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto">
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-4">Conteúdo do Curso</h3>
                
                <!-- PROGRESSO -->
                <div class="mb-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-400">Progresso</span>
                        <span id="progresso-texto" class="text-sm font-bold text-primary">0%</span>
                    </div>
                    <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div id="progresso-barra" class="h-full bg-primary transition-all duration-300" style="width: 0%"></div>
                    </div>
                </div>
                
                <!-- LISTA DE AULAS -->
                <div id="playlist-container" class="space-y-2">
                    <!-- Preenchido pelo JavaScript -->
                </div>
            </div>
        </div>
        
    </div>

    <!-- JAVASCRIPT -->
    <script src="js/navigation.js"></script>
    <script src="js/cursos-data.js"></script>
    <script src="js/progress.js"></script>
    
    <script>
        // PEGAR PARÂMETROS DA URL
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = parseInt(urlParams.get('curso'));
        const moduloNumero = parseInt(urlParams.get('modulo'));
        const aulaNumero = parseInt(urlParams.get('aula'));
        
        // Verificar se os dados do curso existem
        if (!cursos || cursos.length === 0) {
            document.getElementById('player-container').innerHTML = `
                <div class="text-white text-center p-8">
                    <h2 class="text-2xl font-bold mb-4">Erro ao carregar dados</h2>
                    <p class="mb-4">Não foi possível carregar os dados dos cursos.</p>
                    <a href="cursos.html" class="btn-primary px-6 py-3 rounded-lg font-semibold inline-block">
                        Voltar aos Cursos
                    </a>
                </div>
            `;
        } else {
            // CARREGAR CURSO
            const curso = cursos.find(c => c.id === cursoId);
            
            if (!curso) {
                document.getElementById('player-container').innerHTML = `
                    <div class="text-white text-center p-8">
                        <h2 class="text-2xl font-bold mb-4">Curso não encontrado</h2>
                        <p class="mb-4">ID: ${cursoId}</p>
                        <a href="cursos.html" class="btn-primary px-6 py-3 rounded-lg font-semibold inline-block">
                            Voltar aos Cursos
                        </a>
                    </div>
                `;
            } else {
                const modulo = curso.modulos.find(m => m.numero === moduloNumero);
                const aula = modulo ? modulo.aulas[aulaNumero - 1] : null;
                
                if (!aula) {
                    document.getElementById('player-container').innerHTML = `
                        <div class="text-white text-center p-8">
                            <h2 class="text-2xl font-bold mb-4">Aula não encontrada</h2>
                            <a href="curso-detalhe.html?id=${cursoId}" class="btn-primary px-6 py-3 rounded-lg font-semibold inline-block">
                                Voltar ao Curso
                            </a>
                        </div>
                    `;
                } else {
                    // ATUALIZAR HEADER
                    document.getElementById('curso-titulo-header').textContent = curso.titulo;
                    document.getElementById('btn-sair-curso').href = `curso-detalhe.html?id=${cursoId}`;
                    
                    // ATUALIZAR INFO DA AULA
                    document.getElementById('aula-titulo').textContent = aula.titulo;
                    document.getElementById('aula-descricao').textContent = aula.descricao || '';
                    
                    // CARREGAR CONTEÚDO DA AULA
                    carregarAula(aula);
                    
                    // RENDERIZAR PLAYLIST
                    renderizarPlaylist();
                    
                    // ATUALIZAR PROGRESSO
                    atualizarProgressoDisplay();
                    
                    // ATUALIZAR CONTADORES
                    const totalAulas = curso.modulos.reduce((acc, mod) => acc + mod.aulas.length, 0);
                    let aulaAtualNumero = 0;
                    curso.modulos.forEach((mod) => {
                        if (mod.numero < moduloNumero) {
                            aulaAtualNumero += mod.aulas.length;
                        } else if (mod.numero === moduloNumero) {
                            aulaAtualNumero += aulaNumero;
                        }
                    });
                    
                    document.getElementById('aula-numero-atual').textContent = aulaAtualNumero;
                    document.getElementById('total-aulas').textContent = totalAulas;
                }
            }
        }
        
        function carregarAula(aula) {
            const container = document.getElementById('player-container');
            
            if (aula.tipo === 'video') {
                // Extrair ID do YouTube
                const videoId = extrairYouTubeId(aula.url);
                container.innerHTML = `
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
            } else if (aula.tipo === 'slide') {
                // Extrair ID do Google Slides
                const slideId = extrairGoogleSlidesId(aula.url);
                container.innerHTML = `
                    <iframe 
                        src="https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000" 
                        frameborder="0" 
                        width="100%" 
                        height="100%" 
                        allowfullscreen="true" 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true">
                    </iframe>
                `;
            } else if (aula.tipo === 'quiz') {
                container.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center p-8">
                        <div class="bg-white rounded-xl p-8 max-w-2xl w-full">
                            <h2 class="text-2xl font-bold text-gray-900 mb-4">Quiz</h2>
                            <p class="text-gray-600 mb-6">O quiz será carregado aqui.</p>
                            <div id="quiz-container"></div>
                        </div>
                    </div>
                `;
                // Carregar quiz (implementação futura)
            }
        }
        
        function extrairYouTubeId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        }
        
        function extrairGoogleSlidesId(url) {
            const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
            return match ? match[1] : null;
        }
        
        function renderizarPlaylist() {
            const container = document.getElementById('playlist-container');
            const curso = cursos.find(c => c.id === cursoId);
            
            container.innerHTML = curso.modulos.map(mod => `
                <div class="mb-4">
                    <div class="text-sm font-semibold text-gray-400 mb-2">Módulo ${mod.numero}: ${mod.titulo}</div>
                    ${mod.aulas.map((a, idx) => {
                        const isAtual = mod.numero === moduloNumero && (idx + 1) === aulaNumero;
                        const concluida = false; // Implementar verificação
                        
                        return `
                            <a href="aula-player.html?curso=${cursoId}&modulo=${mod.numero}&aula=${idx + 1}" 
                               class="block p-3 rounded-lg mb-2 transition-colors ${isAtual ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center flex-1">
                                        <div class="w-8 h-8 rounded flex items-center justify-center mr-3 ${isAtual ? 'bg-white/20' : 'bg-gray-600'}">
                                            <span class="text-xs">${idx + 1}</span>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium">${a.titulo}</div>
                                            <div class="text-xs opacity-75">${a.duracao || (a.slides ? a.slides + ' slides' : 'Quiz')}</div>
                                        </div>
                                    </div>
                                    ${isAtual ? '<div class="text-xs font-bold">▶</div>' : ''}
                                </div>
                            </a>
                        `;
                    }).join('')}
                </div>
            `).join('');
        }
        
        function atualizarProgressoDisplay() {
            const progresso = 0; // Implementar cálculo real
            document.getElementById('progresso-texto').textContent = progresso + '%';
            document.getElementById('progresso-barra').style.width = progresso + '%';
        }
        
        function marcarConcluida() {
            alert('Aula marcada como concluída!');
            proximaAula();
        }
        
        function proximaAula() {
            const curso = cursos.find(c => c.id === cursoId);
            const modulo = curso.modulos.find(m => m.numero === moduloNumero);
            
            if (aulaNumero < modulo.aulas.length) {
                window.location.href = `aula-player.html?curso=${cursoId}&modulo=${moduloNumero}&aula=${aulaNumero + 1}`;
            } else {
                const proximoModulo = curso.modulos.find(m => m.numero === moduloNumero + 1);
                if (proximoModulo) {
                    window.location.href = `aula-player.html?curso=${cursoId}&modulo=${proximoModulo.numero}&aula=1`;
                } else {
                    alert('Parabéns! Você concluiu o curso!');
                    window.location.href = `curso-detalhe.html?id=${cursoId}`;
                }
            }
        }
        
        function aulaAnterior() {
            if (aulaNumero > 1) {
                window.location.href = `aula-player.html?curso=${cursoId}&modulo=${moduloNumero}&aula=${aulaNumero - 1}`;
            } else if (moduloNumero > 1) {
                const curso = cursos.find(c => c.id === cursoId);
                const moduloAnterior = curso.modulos.find(m => m.numero === moduloNumero - 1);
                if (moduloAnterior) {
                    window.location.href = `aula-player.html?curso=${cursoId}&modulo=${moduloAnterior.numero}&aula=${moduloAnterior.aulas.length}`;
                }
            }
        }
    </script>
    
</body>
</html>