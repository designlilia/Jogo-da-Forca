let tentativa = 7;
let lista = [];
let selecionarPalavrasCategoria;
let palavraSorteada;

let palavras = [    
    palavra1 = {
        nome: "COSTA RICA",
        categoria:"PAISES"
    },
    palavra2 = {
        nome: "CROACIA",
        categoria:"PAISES"
    },
    palavra3 = {
        nome: "ARGENTINA",
        categoria:"PAISES"
    },
    palavra4 = {
        nome: "IRAQUE",
        categoria:"PAISES"
    },
    palavra5 = {
        nome: "EGITO",
        categoria:"PAISES"
    },
    palavra6 = {
        nome: "AUSTRALIA",
        categoria:"PAISES"
    },
    palavra7 = {
        nome: "ITALIA",
        categoria:"PAISES"
    },
    palavra8 = {
        nome: "HOLANDA",
        categoria:"PAISES"
    },
    palavra9 = {
        nome: "PAQUISTAO",
        categoria:"PAISES"
    },
    palavra10 = {
        nome: "CAMAROES",
        categoria:"PAISES"
    },
    palavra11 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra12 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra13 = {
        nome: "ONIBUS",
        categoria:"TRANSPORTE"
    },
    palavra14 = {
        nome: "CAMINHAO",
        categoria:"TRANSPORTE"
    },
    palavra15 = {
        nome: "CARRETA",
        categoria:"TRANSPORTE"
    },
    palavra16 = {
        nome: "AVIAO",
        categoria:"TRANSPORTE"
    },
    palavra17 = {
        nome: "METRO",
        categoria:"TRANSPORTE"
    },
    palavra18 = {
        nome: "BONDE",
        categoria:"TRANSPORTE"
    },
    palavra19 = {
        nome: "FOGUETE",
        categoria:"TRANSPORTE"
    },
    palavra20 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra21 = {
        nome: "CANETA",
        categoria:"OBJETOS"
    },
    palavra22 = {
        nome: "BORRACHA",
        categoria:"OBJETOS"
    },
    palavra23 = {
        nome: "CORRETIVO",
        categoria:"OBJETOS"
    },
    palavra24 = {
        nome: "REGUA",
        categoria:"OBJETOS"
    },
    palavra25 = {
        nome: "COLA",
        categoria:"OBJETOS"
    },
    palavra26 = {
        nome: "LANCHEIRA",
        categoria:"OBJETOS"
    },
    palavra27 = {
        nome: "CADERNO",
        categoria:"OBJETOS"
    },
    palavra28 = {
        nome: "LIVRO",
        categoria:"OBJETOS"
    },
    palavra29 = {
        nome: "MARCADOR",
        categoria:"OBJETOS"
    },
    palavra30 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra31 = {
        nome: "MACA",
        categoria:"ALIMENTOS"
    },
    palavra32 = {
        nome: "CHOCOLATE",
        categoria:"ALIMENTOS"
    },
    palavra33 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra34 = {
        nome: "PIPOCA",
        categoria:"ALIMENTOS"
    },
    palavra35 = {
        nome: "CREPE",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "PIZZA",
        categoria:"ALIMENTOS"
    },
    palavra37 = {
        nome: "HAMBURGUER",
        categoria:"ALIMENTOS"
    },
    palavra38 = {
        nome: "MEXERICA",
        categoria:"ALIMENTOS"
    },
    palavra39 = {
        nome: "CARAMBOLA",
        categoria:"ALIMENTOS"
    },
    palavra40 = {
        nome: "JABUTICABA",
        categoria:"ALIMENTOS"
    },
    palavra40 = {
        nome: "PATO",
        categoria:"ANIMAIS"
    },
    palavra41 = {
        nome: "GAIVOTA",
        categoria:"ANIMAIS"
    },
    palavra42 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    },
    palavra43 = {
        nome: "GIRAFA",
        categoria:"ANIMAIS"
    },
    palavra44 = {
        nome: "PORCO",
        categoria:"ANIMAIS"
    },
    palavra45 = {
        nome: "ELEFANTE",
        categoria:"ANIMAIS"
    },
    palavra46 = {
        nome: "BALEIA",
        categoria:"ANIMAIS"
    },
    palavra47 = {
        nome: "CARACOL",
        categoria:"ANIMAIS"
    },
    palavra48 = {
        nome: "GORILA",
        categoria:"ANIMAIS"
    },
    palavra49 = {
        nome: "LEBRE",
        categoria:"ANIMAIS"
    },
    palavra50 = {
        nome: "TUBARAO",
        categoria:"ANIMAIS"
    }
];


selecionarPalavras();
function selecionarPalavras(){ 
    const SelePalavras = parseInt(Math.random()* palavras.length);
    selecionarPalavrasCategoria = palavras[SelePalavras].categoria;
    palavraSorteada = palavras[SelePalavras].nome;
    
    
    
}


mostrarPalavras();
function mostrarPalavras(){

    const categoria = document.getElementById("categoria");
    categoria.innerHTML = "";
    categoria.innerHTML = selecionarPalavrasCategoria;

    const palavra = document.getElementById("palavra");
    palavra.innerHTML = "";
    for(i = 0; i <palavraSorteada.length; i++){
        if(lista[i] == undefined){
            lista[i] = "&nbsp;"
            palavra.innerHTML = palavra.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
        }
        else{
            palavra.innerHTML = palavra.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
        }
    }

    
}


function verificarLetra(letra){

    document.getElementById(letra).disabled = true;
    if(tentativa > 0){
        comparar(letra);
        mudarLetra(letra);
        mostrarPalavras();
        
    }
}

function mudarLetra(tecla){ 
    
    document.getElementById(tecla).style.background = "#1d1e20";
    document.getElementById(tecla).style.color = "white";
}


function comparar(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativa--
        carregaImagem();

        if(tentativa == 0){
            alert("OPS! Não foi dessa vez. A palavra secreta era " + palavraSorteada);
            location.reload();
        

        }
    }
    else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                lista[i] = letra;
            }
        }
    }
    
    let resultado = true;
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != lista[i]){
            resultado = false;
        }
    }

    if(resultado == true)
    {
        alert("PARABÉNS!Você venceu. A palavra era " + palavraSorteada);
        location.reload();
        
    }
}

function carregaImagem(){
    switch(tentativa){
        case 6:
            let img6 = "url('forca.1.png', 'forca.2.png', 'forca.3.png', 'forca.4.png', 'forca.5.png', 'forca.6.png', 'forca.7.png', 'forca.8.png', 'forca.9.png', 'forca.10.png' )";
            document.getElementById("imagem").style.background = img6;
            break;
        case 5:
            document.getElementById("imagem").style.background  = "url('forca.5.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('forca.6.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('forca.7.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('forca.8.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('forca.9.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('forca.10.png')";
           
            break;
    }
}


function selecionarCategoria(){
    const selecionarCat = document.querySelector("palavras").categoria;
    console.log(selecionarCat);
    
}