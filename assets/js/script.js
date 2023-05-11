let nome = document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')


function validaNome() {
let txtNome = document.querySelector('#txtNome')
console.log(nome.value);

if(nome.value.length < 2) {
    txtNome.innerHTML = 'Nome invalido!'
    txtNome.style.color = 'red'
    nome.style.border='3px solid red'
} else {
    txtNome.innerHTML = 'Nome valido!'
    txtNome.style.color = 'green'
    nome.style.border='3px solid green'
}

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1)
    txtEmail.innerHTML = 'Email invalido!'
    txtEmail.style.color = 'red'
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    console.log(nome.value);
    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = 'Assunto muito longo, reduza para 100 caracteres!'
        txtAssunto.style.color = 'red'
        assunto.style.border='3px solid red'
    } else {
        txtAssunto.innerHTML = 'Assunto valido!'
        txtAssunto.style.color = 'green'
        assunto.style.border='3px solid green'
    }
    
    }

function olaMundo() {
    alert('Clicou no botão')
}
