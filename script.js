// caso todos os dados estejam preenchidos, armazenar dados
let btn = document.querySelector('button.button')

btn.addEventListener('click', function (){

let email = document.getElementById('email')
let senha = String( document.getElementById('idSenha') ).valueOf
let identific = String( document.getElementById('identific') ).valueOf

    let dados = [
      email,
      senha,
      identific
    ]

// Caso a checkbox esteja marcada, guardar dados em outro array
 let box = document.querySelector('input.check')
 if (box.checked){
   let lembrarDados = [
     email,
     senha,
     identific
   ]
 } else{}


// btn-outline hover
btn.addEventListener('mouseenter', function (){

  this.style.backgroundColor = "#820ad1"
  this.style.color = "white"

})
btn.addEventListener('mouseout', function (){

  this.style.backgroundColor = "white"
  this.style.color = "#820ad1"

})