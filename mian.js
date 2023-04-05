document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , soma );

document.getElementById( "btn-subtrair" ).addEventListener( "click" , subtrair );

document.getElementById( "btn-multiplicar" ).addEventListener( "click" , multiplicar );

document.getElementById( "btn-dividir" ).addEventListener( "click" , dividir );

function showcolor()
{
    document.body.style.backgroundColor = "red"; 
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value; 
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

function number()
{
    let numero1 = document.getElementById( "num1" ).value; 
    let numero2 = document.getElementById( "num2" ).value; 
    document.getElementById( "resultado1" ).innerText = parseFloat(numero1) + parseFloat(numero2);
}

function number()
{
    let numero1 = document.getElementById( "num1" ).value; 
    let numero2 = document.getElementById( "num2" ).value; 
    document.getElementById( "resultado1" ).innerText = parseFloat(numero1) - parseFloat(numero2);
}

function number()
{
    let numero1 = document.getElementById( "num1" ).value; 
    let numero2 = document.getElementById( "num2" ).value; 
    document.getElementById( "resultado1" ).innerText = parseFloat(numero1) x parseFloat(numero2);
}

function number()
{
    let numero1 = document.getElementById( "num1" ).value; 
    let numero2 = document.getElementById( "num2" ).value; 
    document.getElementById( "resultado1" ).innerText = parseFloat(numero1) / parseFloat(numero2);
}