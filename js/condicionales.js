


const numero1 = Number(prompt('Ingrese numero 1:'));
const numero2 = Number(prompt('Ingrese numero 2:'));
const operacion = prompt('Ingrese la operacion a realizar:')


if(operacion==='suma'){
    alert(numero1+numero2)
}else if(operacion==='resta') {
    alert(numero1-numero2)
}else if(operacion==='multiplicacion'){
    alert(numero1*numero2)
}else{
if(numero2===0){
    alert('Numero ingresado invalido')
}
}