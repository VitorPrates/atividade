const form_login = document.querySelector(".form_login")
const texto_user_logado = document.querySelector('.nome_user')
let user_logado

//dashboard coisas
const cards_dashboard = document.querySelectorAll(".card_default_dashboard")
const btns_dashboard = document.querySelectorAll(".btn_dashboard")

btns_dashboard.forEach((e) => {
    e.addEventListener('click', () => {
        switch (e.innerHTML) {
            case "Pagina inicial":
                cards_dashboard.forEach((eve) => {
                    eve.style.top = "100%"
                })
                cards_dashboard[0].style.top = "40%"
                break;
            case "Consultar Produto":
                cards_dashboard.forEach((eve) => {
                    eve.style.top = "100%"
                })
                cards_dashboard[1].style.top = "10%"
                break;
        
            default:
                break;
        }
        
    })
})

function alertar_sobre(nome)
{
    alert(`Ver sobre: ${nome}`)
}

window.addEventListener('load', () => {
    if(texto_user_logado)
    {

        texto_user_logado.innerHTML = user_logado
    }
})

if(form_login)
{
    form_login.addEventListener('submit', (eve) =>{
    eve.preventDefault()
    consultarLogin()
})
}


async function consultarLogin() {
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const pesquisa = document.getElementById('resultado')
    
    pesquisa.innerHTML = "Perai..."
    console.log(senha);
    console.log(email);

    user_logado = email
    // window.location.href = "dashboard.html"
    
    const url =`https://script.google.com/macros/s/AKfycbyFJxCgEh2KvnvrHqmUvrT0uaAOR10XMXLNdViHfmRvzXSd2w1nVS10qyyNcmVFAN47Pg/exec?email=${encodeURIComponent(email)}`;

    try {
        const response = await fetch(url);
        const dados = await response.json();

        const senha_encontrada = dados.senha
        const email_encontrado = dados.email

        // resultado.innerHTML = `Encontrado: ${dados.quantidade}`
        if(dados.status == "nao_encontrado")
        {
            pesquisa.innerHTML = "Usuário não encontrado"
        }
        if(email == email_encontrado && senha != senha_encontrada)
        {
            pesquisa.innerHTML = "Senha Incorreta"
        }
        if(senha == senha_encontrada && email == email_encontrado)
        {
            pesquisa.innerHTML = "Achei! Redirecionando..."
            setTimeout(() => {
                window.location.href = "dashboard.html"
            }, 1500);
            // alert("dale")
        }
        console.log(dados);

    } catch (err) {
        resultado.innerHTML = "não encontrado"
        console.error(err);
    }
}

async function buscar_produto() {
    const item_pesquisa = document.getElementById('id_item_pesquisa').value;
    const imagem_resultado_item = document.getElementById('imagem_resultado_item');
    const nome_resultado_item = document.getElementById('nome_resultado_item');
    const descri_resultado_item = document.getElementById('descri_resultado_item');
    const preco_resultado_item = document.getElementById('preco_resultado_item');
    const resultado_pesquisa_feedback = document.getElementById('resultado_pesquisa');
    
    // window.location.href = "dashboard.html"

    resultado_pesquisa_feedback.innerHTML = "Pesquisando...."
    
    const url =`https://script.google.com/macros/s/AKfycbyFJxCgEh2KvnvrHqmUvrT0uaAOR10XMXLNdViHfmRvzXSd2w1nVS10qyyNcmVFAN47Pg/exec?id_item=${encodeURIComponent(item_pesquisa)}`;

    try {
        const response = await fetch(url);
        const dados = await response.json();
        if(dados.status == "nao_encontrado")
        {
            resultado_pesquisa_feedback.innerHTML = "Não encontrado :("
        }
        else
        {
            resultado_pesquisa_feedback.innerHTML = ""
            imagem_resultado_item.src = dados.imagem
            nome_resultado_item.innerText = dados.nome
            descri_resultado_item.innerText = dados.descricao
            preco_resultado_item.innerText = `${dados.preco.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}`
        }
        console.log(dados);

    } catch (err) {
        resultado.innerHTML = "não encontrado"
        console.error(err);
    }
}
