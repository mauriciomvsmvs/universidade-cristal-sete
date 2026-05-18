/**
 * AUTH.JS
 * Sistema de Autenticação da Universidade Cristal Sete
 */

// ========================================
// FUNÇÕES DE AUTENTICAÇÃO
// ========================================

/**
 * Realiza o login do usuário
 */
function fazerLogin(email, senha, lembrar = false) {
    // Buscar usuário no banco de dados
    const usuario = usuarios.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.senha === senha &&
        u.ativo === true
    );
    
    if (usuario) {
        // Remover senha antes de salvar
        const usuarioSalvo = { ...usuario };
        delete usuarioSalvo.senha;
        
        // Salvar no localStorage ou sessionStorage
        if (lembrar) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioSalvo));
        } else {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioSalvo));
        }
        
        return { sucesso: true, usuario: usuarioSalvo };
    } else {
        return { sucesso: false, erro: 'Email ou senha incorretos' };
    }
}

/**
 * Verifica se o usuário está logado
 */
function verificarLogin() {
    const usuarioLocal = localStorage.getItem('usuarioLogado');
    const usuarioSession = sessionStorage.getItem('usuarioLogado');
    
    if (usuarioLocal) {
        return JSON.parse(usuarioLocal);
    } else if (usuarioSession) {
        return JSON.parse(usuarioSession);
    }
    
    return null;
}

/**
 * Faz logout do usuário
 */
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}

/**
 * Protege a página - redireciona para login se não estiver autenticado
 */
function protegerPagina() {
    const usuario = verificarLogin();
    
    if (!usuario) {
        // Salvar página atual para redirecionar depois do login
        sessionStorage.setItem('paginaAnterior', window.location.pathname);
        window.location.href = 'login.html';
        return false;
    }
    
    return usuario;
}

/**
 * Verifica se usuário é admin
 */
function ehAdmin() {
    const usuario = verificarLogin();
    return usuario && usuario.tipo === 'admin';
}

/**
 * Atualiza o header com informações do usuário
 */
function atualizarHeaderUsuario() {
    const usuario = verificarLogin();
    
    if (!usuario) return;
    
    // Atualizar nome do usuário no menu (se existir elemento)
    const nomeUsuarioElements = document.querySelectorAll('.nome-usuario');
    nomeUsuarioElements.forEach(el => {
        el.textContent = usuario.nome.split(' ')[0]; // Primeiro nome
    });
    
    // Adicionar botão de logout se não existir
    if (document.getElementById('btn-logout')) return; // Já existe
    
    const headerNav = document.querySelector('header nav');
    if (!headerNav) return;
    
    // Procurar menu desktop (várias possibilidades)
    const menuDesktop = headerNav.querySelector('.hidden.md\\:flex') || 
                       headerNav.querySelector('.md\\:flex') ||
                       headerNav.querySelector('nav > div > div:last-child') ||
                       headerNav.querySelector('.flex.items-center.space-x-6');
    
    // Adicionar botão desktop
    if (menuDesktop) {
        const btnLogout = document.createElement('a');
        btnLogout.id = 'btn-logout';
        btnLogout.href = '#';
        btnLogout.className = 'nav-link text-red-600 hover:text-red-700 font-medium';
        btnLogout.innerHTML = '🚪 Sair';
        btnLogout.onclick = function(e) {
            e.preventDefault();
            fazerLogout();
        };
        menuDesktop.appendChild(btnLogout);
    }
    
    // Adicionar botão mobile
    const menuMobile = headerNav.querySelector('#mobile-menu');
    if (menuMobile) {
        const btnLogoutMobile = document.createElement('a');
        btnLogoutMobile.href = '#';
        btnLogoutMobile.className = 'block px-4 py-2 text-red-600 hover:bg-gray-100 rounded font-medium';
        btnLogoutMobile.innerHTML = '🚪 Sair';
        btnLogoutMobile.onclick = function(e) {
            e.preventDefault();
            fazerLogout();
        };
        menuMobile.appendChild(btnLogoutMobile);
    }
}

/**
 * Obtém saudação baseada no horário
 */
function obterSaudacao() {
    const hora = new Date().getHours();
    
    if (hora >= 5 && hora < 12) {
        return 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

// ========================================
// INICIALIZAÇÃO AUTOMÁTICA
// ========================================

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Se não estiver na página de login, verificar autenticação
    if (!window.location.pathname.includes('login.html')) {
        const usuario = protegerPagina();
        
        if (usuario) {
            atualizarHeaderUsuario();
        }
    }
});
