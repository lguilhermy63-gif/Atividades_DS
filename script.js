
// ===================================
// CONFIGURAÇÃO DO WHATSAPP
// ===================================

// Coloque o número da doceria com DDI e DDD.
// Exemplo: 5581999999999
const numeroWhatsApp = "55 8195026268";


// ===================================
// FUNÇÃO PARA ABRIR O WHATSAPP
// ===================================

function abrirWhatsApp(mensagem) {

    const numero = numeroWhatsApp.replace(/\D/g, "");

    if (numero.length < 12 || numero.length > 13) {
        alert("Configure corretamente o número do WhatsApp no arquivo script.js.");
        return;
    }

    const texto = encodeURIComponent(mensagem);

    const link = `https://wa.me/numero?text={texto}`;

    window.open(link, "_blank");
}


// ===================================
// PEDIR UM PRODUTO ESPECÍFICO
// ===================================

function pedirProduto(produto) {

    const mensagem = `Olá! Conheci a AT Doces e Afeto pelo site e gostaria de fazer um pedido de ${produto}. Poderia me passar mais informações?`;

    abrirWhatsApp(mensagem);
}


// ===================================
// PEDIDO GERAL
// ===================================

function pedirGeral() {

    const mensagem = "Olá! Conheci a AT Doces e Afeto pelo site e gostaria de conhecer melhor o cardápio e fazer uma encomenda.";

    abrirWhatsApp(mensagem);
}

