const bntCadastrar = document.querySelector("#cadastrar");
const formulario = document.querySelector(".cadastrarPalavras");
const HiddenImagem = document.getElementById("imagem");


bntCadastrar.addEventListener("click",function(){
    HiddenImagem.style.display = 'none';
    if(formulario.style.display == 'block'){
        formulario.style.display = 'none';
        HiddenImagem.style.display = 'block';
    }
    else{

        formulario.style.display = 'block';
        
    }
});

let bntSend = document.getElementById("Send");


bntSend.addEventListener("click",function(e){
    e.preventDefault();
    const sendPalavra = document.getElementById("palavraEnviada").value;
    const sendCategoria = document.getElementById("categoriaEnviada").value;

    palavras.push({nome:sendPalavra , categoria: sendCategoria});
    
    formulario.style.display = 'none';
    HiddenImagem.style.display = 'block';
    location.refresh
});
