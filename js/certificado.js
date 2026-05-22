/**
 * CERTIFICADO.JS - VERSÃO CORRIGIDA
 * Sistema de Geração de Certificados da Universidade Cristal Sete
 */

class GeradorCertificado {
    constructor() {
        this.usuario = verificarLogin();
    }

    gerarCertificado(cursoId) {
        const curso = cursos.find(c => c.id === cursoId);
        if (!curso) {
            alert('Curso não encontrado!');
            return;
        }

        // Verificar progresso (se a função existir)
        if (typeof obterProgressoCurso === 'function') {
            const progresso = obterProgressoCurso(this.usuario.id, cursoId);
            if (progresso < 100) {
                alert('Você precisa completar 100% do curso para gerar o certificado!');
                return;
            }
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const width = 297;
        const height = 210;

        // FUNDO BRANCO
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, width, height, 'F');

        // BORDA DUPLA AZUL
        doc.setDrawColor(43, 95, 166);
        doc.setLineWidth(2);
        doc.rect(10, 10, width - 20, height - 20);
        doc.setLineWidth(0.5);
        doc.rect(15, 15, width - 30, height - 30);

        // TÍTULO "CERTIFICADO"
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

        // "Certificamos que"
        doc.setFontSize(14);
        doc.setTextColor(80, 80, 80);
        doc.setFont('helvetica', 'normal');
        doc.text('Certificamos que', width / 2, 75, { align: 'center' });

        // NOME DO ALUNO
        doc.setFontSize(28);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(43, 95, 166);
        doc.text(this.usuario.nome.toUpperCase(), width / 2, 90, { align: 'center' });

        // "concluiu com êxito o curso"
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(80, 80, 80);
        doc.text('concluiu com êxito o curso', width / 2, 105, { align: 'center' });

        // NOME DO CURSO
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 30, 30);
        doc.text(curso.titulo, width / 2, 120, { align: 'center' });

        // Categoria e carga horária
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`${curso.categoria} | Carga horária: ${curso.duracao}`, width / 2, 130, { align: 'center' });

        // DATA
        const dataEmissao = new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        doc.setFontSize(11);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        doc.text(`Apucarana, ${dataEmissao}`, width / 2, height - 45, { align: 'center' });

        // ASSINATURAS
        const assinaturaY = height - 30;
        const espacoAssinatura = 80;

        // Assinatura 1
        doc.setLineWidth(0.5);
        doc.setDrawColor(43, 95, 166);
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

        // CÓDIGO DE VERIFICAÇÃO
        const codigoVerificacao = this.gerarCodigoVerificacao(this.usuario.id, cursoId);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`Código de verificação: ${codigoVerificacao}`, width / 2, height - 8, { align: 'center' });

        // SALVAR PDF
        const nomeArquivo = `Certificado_${curso.titulo.replace(/\s+/g, '_')}_${this.usuario.nome.replace(/\s+/g, '_')}.pdf`;
        doc.save(nomeArquivo);

        // Registrar e mostrar sucesso
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
            background: white; padding: 2.5rem; border-radius: 1.5rem;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3); z-index: 10000;
            text-align: center; max-width: 420px;
        `;
        
        mensagem.innerHTML = `
            <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);">
                <svg style="width: 40px; height: 40px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            
            <h3 style="font-family: 'Montserrat', sans-serif; font-size: 1.75rem; font-weight: 700; color: #1f2937; margin-bottom: 0.5rem;">
                Certificado Gerado!
            </h3>
            
            <p style="color: #6b7280; font-size: 1rem; margin-bottom: 0.5rem;">
                Curso <strong style="color: #2B5FA6;">${nomeCurso}</strong>
            </p>
            
            <p style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 1.5rem;">
                O download começará automaticamente
            </p>
            
            <button onclick="this.parentElement.remove()" style="background: #2B5FA6; color: white; padding: 0.75rem 2.5rem; border-radius: 0.75rem; border: none; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                Fechar
            </button>
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
