/**
 * CERTIFICADO.JS
 * Sistema de Geração de Certificados da Universidade Cristal Sete
 * Usa jsPDF para gerar certificados em PDF
 */

// Carregar jsPDF via CDN (adicionar no HTML)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

class GeradorCertificado {
    constructor() {
        this.usuario = verificarLogin(); // Pega usuário logado
    }

    /**
     * Gera certificado de conclusão de curso
     */
    gerarCertificado(cursoId) {
        // Buscar dados do curso
        const curso = cursos.find(c => c.id === cursoId);
        if (!curso) {
            alert('Curso não encontrado!');
            return;
        }

        // Verificar se usuário completou o curso
        const progresso = obterProgressoCurso(this.usuario.id, cursoId);
        if (progresso < 100) {
            alert('Você precisa completar 100% do curso para gerar o certificado!');
            return;
        }

        // Criar PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Dimensões A4 landscape: 297mm x 210mm
        const width = 297;
        const height = 210;

        // BACKGROUND E BORDA
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, width, height, 'F');

        // Borda dupla azul
        doc.setDrawColor(43, 95, 166);
        doc.setLineWidth(2);
        doc.rect(10, 10, width - 20, height - 20);
        doc.setLineWidth(0.5);
        doc.rect(15, 15, width - 30, height - 30);

        // Título "CERTIFICADO"
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(40);
        doc.setTextColor(43, 95, 166);
        doc.text('CERTIFICADO', width / 2, 40, { align: 'center' });

        // Subtítulo
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text('DE CONCLUSÃO DE CURSO', width / 2, 50, { align: 'center' });

        // Linha decorativa
        doc.setDrawColor(43, 95, 166);
        doc.setLineWidth(0.5);
        doc.line(50, 60, width - 50, 60);

        // Texto "Certificamos que"
        doc.setFontSize(14);
        doc.setTextColor(80, 80, 80);
        doc.setFont('helvetica', 'normal');
        doc.text('Certificamos que', width / 2, 75, { align: 'center' });

        // Nome do aluno (DESTAQUE)
        doc.setFontSize(28);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(43, 95, 166);
        doc.text(this.usuario.nome.toUpperCase(), width / 2, 90, { align: 'center' });

        // Texto "concluiu com êxito o curso"
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(80, 80, 80);
        doc.text('concluiu com êxito o curso', width / 2, 105, { align: 'center' });

        // Nome do curso (DESTAQUE)
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 30, 30);
        doc.text(curso.titulo, width / 2, 120, { align: 'center' });

        // Carga horária e categoria
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`${curso.categoria} | Carga horária: ${curso.duracao}`, width / 2, 130, { align: 'center' });

        // Data de emissão
        const dataEmissao = new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        doc.setFontSize(11);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        doc.text(`Apucarana, ${dataEmissao}`, width / 2, height - 45, { align: 'center' });

        // Assinaturas
        const assinaturaY = height - 30;
        const espacoAssinatura = 80;

        // Assinatura 1
        doc.setLineWidth(0.5);
        doc.line(40, assinaturaY, 40 + espacoAssinatura, assinaturaY);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(43, 95, 166);
        doc.text('Ângelo Gracioli', 40 + (espacoAssinatura / 2), assinaturaY + 6, { align: 'center' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text('Gerente Comercial', 40 + (espacoAssinatura / 2), assinaturaY + 12, { align: 'center' });

        // Assinatura 2
        doc.setLineWidth(0.5);
        doc.line(width - 40 - espacoAssinatura, assinaturaY, width - 40, assinaturaY);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(43, 95, 166);
        doc.text('Universidade Cristal Sete', width - 40 - (espacoAssinatura / 2), assinaturaY + 6, { align: 'center' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text('Departamento de RH', width - 40 - (espacoAssinatura / 2), assinaturaY + 12, { align: 'center' });

        // Código de verificação
        const codigoVerificacao = this.gerarCodigoVerificacao(this.usuario.id, cursoId);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`Código de verificação: ${codigoVerificacao}`, width / 2, height - 8, { align: 'center' });

        // Salvar PDF
        const nomeArquivo = `Certificado_${curso.titulo.replace(/\s+/g, '_')}_${this.usuario.nome.replace(/\s+/g, '_')}.pdf`;
        doc.save(nomeArquivo);

        // Registrar emissão
        this.registrarCertificado(cursoId, codigoVerificacao);
        this.mostrarMensagemSucesso(curso.titulo);
    }

    gerarCodigoVerificacao(usuarioId, cursoId) {
        const timestamp = Date.now();
        const hash = `UC${usuarioId}${cursoId}${timestamp}`;
        return btoa(hash).substring(0, 16).toUpperCase();
    }

    registrarCertificado(cursoId, codigo) {
        const certificados = JSON.parse(localStorage.getItem('certificados')) || [];
        certificados.push({
            usuarioId: this.usuario.id,
            cursoId: cursoId,
            dataEmissao: new Date().toISOString(),
            codigo: codigo
        });
        localStorage.setItem('certificados', JSON.stringify(certificados));
    }

    obterCertificadosUsuario() {
        const certificados = JSON.parse(localStorage.getItem('certificados')) || [];
        return certificados.filter(cert => cert.usuarioId === this.usuario.id);
    }

    temCertificado(cursoId) {
        const certificados = this.obterCertificadosUsuario();
        return certificados.some(cert => cert.cursoId === cursoId);
    }

    mostrarMensagemSucesso(nomeCurso) {
        const mensagem = document.createElement('div');
        mensagem.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; padding: 2rem; border-radius: 1rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); z-index: 10000;
            text-align: center; max-width: 400px;
        `;
        mensagem.innerHTML = `
            <svg style="width: 64px; height: 64px; color: #10b981; margin: 0 auto 1rem;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 0.5rem;">Parabéns!</h3>
            <p style="color: #6b7280; margin-bottom: 1.5rem;">Seu certificado de <strong>${nomeCurso}</strong> foi gerado com sucesso!</p>
            <button onclick="this.parentElement.remove()" style="background: #2B5FA6; color: white; padding: 0.75rem 2rem; border-radius: 0.5rem; border: none; font-weight: 600; cursor: pointer;">Fechar</button>
        `;
        document.body.appendChild(mensagem);
        setTimeout(() => mensagem.remove(), 5000);
    }
}

let geradorCertificado;

document.addEventListener('DOMContentLoaded', function() {
    const usuario = verificarLogin();
    if (usuario) {
        geradorCertificado = new GeradorCertificado();
    }
});

function baixarCertificado(cursoId) {
    if (!geradorCertificado) {
        alert('Você precisa estar logado para gerar certificados!');
        return;
    }
    geradorCertificado.gerarCertificado(cursoId);
}
