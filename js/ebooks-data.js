/**
 * EBOOKS-DATA.JS
 * Arquivo de dados dos e-books da Biblioteca Universidade Cristal Sete
 * 
 * COMO ADICIONAR UM NOVO E-BOOK:
 * 
 * 1. Faça upload do PDF no Google Drive
 * 2. Clique com botão direito no arquivo → Compartilhar
 * 3. Altere para "Qualquer pessoa com o link"
 * 4. Copie o link (formato: https://drive.google.com/file/d/ID_DO_ARQUIVO/view)
 * 5. Cole o link no campo "arquivo" abaixo
 * 
 * CATEGORIAS DISPONÍVEIS:
 * - Técnico
 * - Vendas
 * - Financeiro
 * - Segurança
 * - Liderança
 * - Processos
 */

const ebooks = [
    // EXEMPLO DE E-BOOK (descomente e edite para adicionar)
    /*
    {
        id: 1,
        titulo: "Manual Técnico de Vidros Temperados",
        descricao: "Guia completo sobre especificações técnicas, processos de fabricação e controle de qualidade de vidros temperados.",
        categoria: "Técnico",
        paginas: 45,
        capa: "", // URL da imagem de capa (opcional)
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    },
    {
        id: 2,
        titulo: "Técnicas de Vendas Consultivas",
        descricao: "Aprenda a identificar necessidades do cliente e apresentar soluções personalizadas que agregam valor.",
        categoria: "Vendas",
        paginas: 30,
        capa: "",
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    },
    {
        id: 3,
        titulo: "Gestão Financeira para Líderes",
        descricao: "Fundamentos de análise financeira, orçamento e controle de custos aplicados à rotina de gestores.",
        categoria: "Financeiro",
        paginas: 52,
        capa: "",
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    },
    {
        id: 4,
        titulo: "Normas de Segurança NBR 7199",
        descricao: "Requisitos técnicos e procedimentos de segurança para fabricação e instalação de vidros temperados.",
        categoria: "Segurança",
        paginas: 38,
        capa: "",
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    },
    {
        id: 5,
        titulo: "Liderança Inspiradora",
        descricao: "Desenvolvimento de habilidades de liderança, comunicação eficaz e gestão de equipes de alta performance.",
        categoria: "Liderança",
        paginas: 40,
        capa: "",
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    },
    {
        id: 6,
        titulo: "Otimização de Processos Produtivos",
        descricao: "Metodologias Lean e Kaizen aplicadas à indústria de vidros para redução de desperdícios e aumento de eficiência.",
        categoria: "Processos",
        paginas: 48,
        capa: "",
        arquivo: "https://drive.google.com/file/d/SEU_ID_AQUI/view"
    }
    */
];
