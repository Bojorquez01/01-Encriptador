
 buttonEncrypt = document.querySelector(".btn-encrypt").addEventListener("click",function(){
  
    var text = document.getElementById("inputText").value;
    text = text.toLowerCase();
    var result = document.getElementById("text-result");
 
    var encryptText = text.replace(/e/gm,"enter");
    var encryptText = encryptText.replace(/o/gm,"ober");
    var encryptText = encryptText.replace(/i/gm,"imes");
    var encryptText = encryptText.replace(/a/gm,"ai");
    var encryptText = encryptText.replace(/u/gm,"ufat");
    
    document.getElementById("text-result").innerHTML = encryptText;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("hide").style.visibility = "hidden";

});

buttonDecrypt = document.querySelector(".btn-decrypt").addEventListener("click",function(){
    var text = document.getElementById("inputText").value;
    var result = document.getElementById("text-result");
    
    var encryptText = text.replace(/enter/gm,"e");
    var encryptText = encryptText.replace(/ober/gm,"o");
    var encryptText = encryptText.replace(/imes/gm,"i");
    var encryptText = encryptText.replace(/ai/gm,"a");
    var encryptText = encryptText.replace(/ufat/gm,"u");

    document.getElementById("text-result").innerHTML =  encryptText;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("hide").style.visibility = "hidden";
})

buttonClean = document.querySelector(".btn-clean").addEventListener("click",function(){
    var text = document.getElementById("inputText").value;
    document.getElementById("inputText").value = "";
    var result = document.getElementById("text-result");
    result.innerHTML = "";
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("hide").style.visibility = "visible";
})

buttonCopy = document.querySelector(".btn-copy").addEventListener("click",function(){
    var contents = document.querySelector("#text-result").textContent;
    navigator.clipboard.writeText(contents);
})
