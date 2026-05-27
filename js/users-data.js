/**
 * USERS-DATA.JS
 * Banco de dados de usuários da Universidade Cristal Sete
 * 
 * ESTRUTURA DE HIERARQUIA:
 * gestorId: null = topo da hierarquia (sem gestor acima)
 * gestorId: N   = responde ao usuário com id N
 *
 * HIERARQUIA ATUAL:
 * Ângelo (Gerente Comercial) → topo
 *   └── Pierre (Coordenador Comercial)
 *         ├── Maurício (Consultor Comercial / Dev Universidade)
 *         ├── Maria Eduarda (Assistente Comercial)
 *         ├── Rafael (Consultor Comercial)
 *         ├── Queite (Consultor Comercial)
 *         ├── Raquel (Consultor Comercial)
 *         ├── Carla (Orçamentista)
 *         ├── Anderson (Consultor Comercial)
 *         ├── Michel (Consultor Comercial)
 *         ├── Humberto (Consultor Comercial)
 *         └── Daniele (Consultor Comercial)
 */

const usuarios = [
    // ========================================
    // MAURÍCIO - CONSULTOR COMERCIAL / ADMIN DA UNIVERSIDADE
    // ========================================
    {
        id: 1,
        nome: "Mauricio Vieira da Silva",
        email: "mauricio.silva@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2020-01-15",
        foto: "",
        ativo: true,
        tipo: "admin",
        gestorId: 7 // Pierre
    },

    // ========================================
    // ADMIN UNIVERSIDADE (para testes de sistema)
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
        tipo: "admin",
        gestorId: null
    },

    // ========================================
    // ÂNGELO - GERENTE COMERCIAL
    // ========================================
    {
        id: 6,
        nome: "Ângelo Gracioli",
        email: "angelo@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Gerente Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "admin",
        gestorId: null // Topo da hierarquia
    },

    // ========================================
    // PIERRE - COORDENADOR COMERCIAL
    // ========================================
    {
        id: 7,
        nome: "Pierre André Alves",
        email: "pierre.alves@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Coordenador Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "admin",
        gestorId: 6 // Ângelo
    },

    // ========================================
    // EQUIPE COMERCIAL
    // ========================================
    {
        id: 8,
        nome: "Maria Eduarda Maronezi",
        email: "mariaeduarda@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Assistente Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 9,
        nome: "Rafael Bruno da Costa",
        email: "rafael.costa@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 10,
        nome: "Queite Helen Paulista Ortega",
        email: "queite.ortega@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 11,
        nome: "Raquel Caroline Aparecida Delgado Marques",
        email: "raquel@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 12,
        nome: "Carla Assis Colombo",
        email: "carla.colombo@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Orçamentista",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 13,
        nome: "Anderson de Araujo Oliveira",
        email: "anderson.oliveira@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 14,
        nome: "Michel Aécio Gracioli",
        email: "michel.gracioli@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 15,
        nome: "Humberto Bovo",
        email: "humberto.bovo@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },
    {
        id: 16,
        nome: "Daniele Cristina Cochak",
        email: "daniele.cristina@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2024-01-01",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 7 // Pierre
    },

    // ========================================
    // VINICIUS PEZOTTI - CONSULTOR COMERCIAL
    // ========================================
    {
        id: 17,
        nome: "Vinicius Pezotti",
        email: "teste@cristalsete.com.br",
        senha: "cristal2026",
        departamento: "Comercial",
        cargo: "Consultor Comercial",
        dataAdmissao: "2025-05-27",
        foto: "",
        ativo: true,
        tipo: "aluno",
        gestorId: 6 // Ângelo
    }

    // ========================================
    // ADICIONE MAIS COLABORADORES AQUI
    // ========================================
    // Futuros departamentos: Produção, Expedição, Faturamento, etc.
    // Lembre-se de:
    // 1. Incrementar o ID
    // 2. Colocar vírgula após cada } (exceto o último)
    // 3. Definir o gestorId correto (quem é o gestor dessa pessoa)
    // 4. Manter a senha padrão "cristal2026" para facilitar
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
