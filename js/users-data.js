/**
 * USERS-DATA.JS
 * Banco de dados de usuários da Universidade Cristal Sete
 * 
 * IMPORTANTE: Este é um exemplo inicial.
 * Adicione os ~200 colaboradores seguindo este padrão.
 */

const usuarios = [
    // ========================================
    // USUÁRIO DE EXEMPLO - MAURICIO
    // ========================================
    {
        id: 1,
        nome: "Mauricio Vieira da Silva",
        email: "mauricio.silva@cristalsete.com.br",
        senha: "cristal2026", // Senha padrão inicial
        departamento: "Comercial",
        cargo: "Gerente Comercial",
        dataAdmissao: "2020-01-15",
        foto: "", // Caminho para foto (opcional)
        ativo: true,
        tipo: "admin" // admin ou aluno
    },
    
    // ========================================
    // USUÁRIO ADMINISTRADOR (para testes)
    // ========================================
    {
        id: 2,
        nome: "Admin Universidade",
        email: "admin@cristalsete.com.br",
        senha: "admin2026",
        departamento: "Recepção",
        cargo: "Administrador",
        dataAdmissao: "2020-01-01",
        foto: "",
        ativo: true,
        tipo: "admin"
    },
    
    // ========================================
    // EXEMPLOS DE OUTROS DEPARTAMENTOS
    // ========================================
    {
        id: 3,
        nome: "João Silva",
        email: "joao.silva@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Produção",
        cargo: "Operador de Produção",
        dataAdmissao: "2021-03-10",
        foto: "",
        ativo: true,
        tipo: "aluno"
    },
    {
        id: 4,
        nome: "Maria Santos",
        email: "maria.santos@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Expedição",
        cargo: "Auxiliar de Expedição",
        dataAdmissao: "2021-06-20",
        foto: "",
        ativo: true,
        tipo: "aluno"
    },
    {
        id: 5,
        nome: "Carlos Oliveira",
        email: "carlos.oliveira@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Financeiro",
        cargo: "Analista Financeiro",
        dataAdmissao: "2019-11-05",
        foto: "",
        ativo: true,
        tipo: "aluno"
    }
    
    // ========================================
    // ADICIONE MAIS USUÁRIOS AQUI
    // ========================================
    // Copie o padrão acima e cole quantos usuários precisar
    // Lembre-se de:
    // 1. Incrementar o ID
    // 2. Colocar vírgula após cada } (exceto o último)
    // 3. Manter a senha padrão "cristal2026" para facilitar
];

// ========================================
// DEPARTAMENTOS DISPONÍVEIS
// ========================================
const departamentos = [
    "Comercial",
    "Produção",
    "Expedição",
    "Faturamento",
    "Financeiro",
    "Recepção",
    "PCP",
    "Manutenção",
    "Almoxarifado"
];
