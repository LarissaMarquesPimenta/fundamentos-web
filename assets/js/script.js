let nome = document.getElementById('nome')

let email = document.querySelector('#email')

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

function olaMundo() {
    alert('Clicou no botão')
}