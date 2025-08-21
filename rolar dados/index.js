alert("esse site não esta pronto, possivelmente tem muitos erros")
console.log("ta fazendo oq aqui irmão?")
const botao1 = document.getElementById("b1")
botao1.addEventListener("click", b1)
function b1(){
    var a=Math.ceil(Math.random(1) * 4)
    var a1=document.getElementById("imgt1").innerHTML= a;
    
}
const botao2 = document.getElementById("b2")
botao2.addEventListener("click", b2)
function b2(){
    var b=Math.ceil(Math.random(1) * 6)
    var b1=document.getElementById("imgt2").innerHTML= b;
}
const botao3 = document.getElementById("b3")
botao3.addEventListener("click", b3)
function b3(){
    var c=Math.ceil(Math.random(1) * 12)
    var c1=document.getElementById("imgt3").innerHTML= c;
}
const botao4 = document.getElementById("b4")
botao4.addEventListener("click", b4)
function b4(){
    var d=Math.ceil(Math.random(1) * 20)
    var d1=document.getElementById("imgt4").innerHTML= d;
}
document.addEventListener('keydown', function(){
    if (event.key === 'r'){
        restart()
    }
});
function restart(){
    document.getElementById("imgt1").innerHTML= " "
    document.getElementById("imgt2").innerHTML= " "
    document.getElementById("imgt3").innerHTML= " "
    document.getElementById("imgt4").innerHTML= " "
    console.log("restart")
}