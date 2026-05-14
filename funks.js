const form_login = document.querySelector(".form_login")
const texto_user_logado = document.querySelector('.nome_user')
let user_logado

function alertar_sobre(nome)
{
    alert(`Ver sobre: ${nome}`)
}

window.addEventListener('load', () => {
    texto_user_logado.innerHTML = user_logado
})

form_login.addEventListener('submit', (eve) =>{
    eve.preventDefault()
    consultarLogin()
})

async function consultarLogin() {
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const pesquisa = document.getElementById('resultado')
    
    pesquisa.innerHTML = "Perai..."
    console.log(senha);
    console.log(email);

    user_logado = email
    window.location.href = "dashboard.html"
    
    // const url =
    // `https://script.google.com/macros/s/AKfycbyFJxCgEh2KvnvrHqmUvrT0uaAOR10XMXLNdViHfmRvzXSd2w1nVS10qyyNcmVFAN47Pg/exec?id=${encodeURIComponent(id)}`;

    // try {
    //     const response = await fetch(url);
    //     const dados = await response.json();

    //     const senha_encontrada = dados.senha
    //     const email_encontrado = dados.email

    //     // resultado.innerHTML = `Encontrado: ${dados.quantidade}`

    //     if(senha == senha_encontrada && email == email_encontrado)
    //     {
    //         alert("dale")
    //     }
    //     console.log(dados);

    // } catch (err) {
    //     resultado.innerHTML = "não encontrado"
    //     console.error(err);
    // }
    
}