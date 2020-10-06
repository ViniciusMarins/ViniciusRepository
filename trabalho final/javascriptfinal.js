function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        window.location.hash = id;
    });

}


$(function () { 

    $("#irParaSecao1").on("click", function () {
        scrollPara("#secao1");
    });

    $("#irParaSecao2").on("click", function () {
        scrollPara("#secao2");
    });

    $("#irParaSecao3").on("click", function () {
        scrollPara("#secao3");
    });

    $("#irParaSecao4").on("click", function () {
        scrollPara("#secao4");
    });

    $("#irParaSecao5").on("click", function () {
        scrollPara("#secao5");
    });

    $("#irParaSecao6").on("click", function () {
        scrollPara("#secao6");
    });

    $("#irParaSecao7").on("click", function () {
        scrollPara("#secao7");
    });

    $("#irParaSecao8").on("click", function () {
        scrollPara("#secao8");
    });

});


function gerenciarAltoContraste(){
    console.log("funcao gerenciar alto contraste");
    
    var corAtual, elementoBody;
    elementoBody = document.getElementsByTagName("body")[0]; 
    
    corAtual = elementoBody.style.backgroundColor;    
    
    if(corAtual == "black"){ 
        elementoBody.style.backgroundColor = "white"; 
        elementoBody.style.color = "black";     
    } else {
        elementoBody.style.backgroundColor = "black";   
        elementoBody.style.color = "black";      
    }
    
}


function gerenciarExtra(){
    
    var corAtual1, elementoBod1y;
    elementoBody1 = document.getElementsByTagName("body")[0]; 
    
    corAtual1 = elementoBody1.style.backgroundColor;    
    
    if(corAtual1 == "black"){ 
        elementoBody1.style.backgroundColor = "Brown"; 
        elementoBody1.style.color = "black";     
    } else {
        elementoBody1.style.backgroundColor = "gray";   
        elementoBody1.style.color = "gray";      
    }
    
}



window.onload = function(){
    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste);
    document.getElementById("opExtra").addEventListener("click", gerenciarExtra);
}






