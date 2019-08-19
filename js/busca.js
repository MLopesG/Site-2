

class onibus{
    constructor(Nome,categoria,Marca,Ano,Imagem,Nome_comercial,Eixo,Geração,Descrição,visualizar){
        this.Nome = Nome;
        this.categoria = categoria;
        this.Marca = Marca;
        this.Ano = Ano;
        this.Imagem = Imagem;
        this.Nome_comercial = Nome_comercial;
        this.Eixo = Eixo;
        this.Geração = Geração;
        this.Descrição = Descrição;
        this.visualizar = visualizar;
    }
};


var dd = new onibus("DD 1800","Rodoviário","Marcopolo",2016,"img/onibus/1800.jpg","Marcopolo Paradiso 1800 DD (G7)","8x4","G7","Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias, fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1983, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo",0);
var ld = new onibus("LD 1600","Rodoviário","Marcopolo",2016,"Img/onibus/1600.jpg","Marcopolo Paradiso 1600 LD (G7)","6X4","G7","Em 1994 é lançado o modelo Low driver (LD) e em 1995 o modelo Double decker (DD). Com propostas quase inéditas no mercado nacional, o primeiro consiste em um habitáculo do motorista abaixo do salão dos passageiros e o segundo em um salão maior no segundo andar e menor no primeiro sendo esse último integrado com o habitáculo do motorista (o quase é porque em 1989 a Thamco havia lançado um modelo DD chamado Thamco Gemini também no mercado nacional",0);
var lancamento = new onibus("DD 1800 15M","Rodoviário","Marcopolo",2017,"img/onibus/15.jpg","Marcopolo Paradiso 1800 LD (G7) 15 M Lançamento","8X4","G7","A Marcopolo acaba de desenvolver e produzir os primeiros ônibus Double Decker (de dois andares) e 15 metros de comprimento do Brasil.",0);
var g71200 = new onibus("G7 1200","Rodoviário","Marcopolo",2010,"img/onibus/1200.jpg","Marcopolo Paradiso  (G7) 1200","8x4","G7","Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias, fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1983, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo",0);
var new_2017 = new onibus("New Torino 2014","Urbano","Marcopolo",2014,"Img/onibus/new torino.jpg","New Torino 2014","6X4","G7","Em 1994 é lançado o modelo Low driver (LD) e em 1995 o modelo Double decker (DD). Com propostas quase inéditas no mercado nacional, o primeiro consiste em um habitáculo do motorista abaixo do salão dos passageiros e o segundo em um salão maior no segundo andar e menor no primeiro sendo esse último integrado com o habitáculo do motorista (o quase é porque em 1989 a Thamco havia lançado um modelo DD chamado Thamco Gemini também no mercado nacional",0);
var new_2007 = new onibus("Torino 2007","Urbano","Marcopolo",2007,"Img/onibus/torino.jpg","New Torino 2007","4X4","G7","Em 1994 é lançado o modelo Low driver (LD) e em 1995 o modelo Double decker (DD). Com propostas quase inéditas no mercado nacional, o primeiro consiste em um habitáculo do motorista abaixo do salão dos passageiros e o segundo em um salão maior no segundo andar e menor no primeiro sendo esse último integrado com o habitáculo do motorista (o quase é porque em 1989 a Thamco havia lançado um modelo DD chamado Thamco Gemini também no mercado nacional",0);
var comil = new onibus("Campione Invictus","Rodoviário","Campione Invictus 1200",2017,"img/onibus/comil.jpg","Comil 2014","6X2","2","A Comil Ônibus SA é uma encarroçadora de ônibus brasileira, com sede na cidade de Erechim, no Rio Grande do Sul. O nome Comil originalmente é um acrônimo de COrradi e Mascarello Indústria Ltda.",0);
var jum = new onibus("Busscar jumbuss","Rodoviário","Busscar jumbuss 380",2002,"img/onibus/jumbuss380.jpg","Marcopolo","6X2","2","A Comil Ônibus SA é uma encarroçadora de ônibus brasileira, com sede na cidade de Erechim, no Rio Grande do Sul. O nome Comil originalmente é um acrônimo de COrradi e Mascarello Indústria Ltda.",0);
var vip = new onibus("Apache Vip","Rodoviário","Apache Vip",2002,"img/onibus/Apache Vip.jpg","Marcopolo","6X2","2","A Comil Ônibus SA é uma encarroçadora de ônibus brasileira, com sede na cidade de Erechim, no Rio Grande do Sul. O nome Comil originalmente é um acrônimo de COrradi e Mascarello Indústria Ltda.",0);
var ideale = new onibus("Ideale","Rodoviário","Marcopolo Ideale 2012",2010,"img/onibus/ideale.png","Marcopolo","6X2","2","A Comil Ônibus SA é uma encarroçadora de ônibus brasileira, com sede na cidade de Erechim, no Rio Grande do Sul. O nome Comil originalmente é um acrônimo de COrradi e Mascarello Indústria Ltda.",0);
var via = new onibus("Viaggi","Rodoviário","Marcopolo Viaggi 2012",2010,"img/onibus/viaggi.jpg","Marcopolo","6X2","2","A Comil Ônibus SA é uma encarroçadora de ônibus brasileira, com sede na cidade de Erechim, no Rio Grande do Sul. O nome Comil originalmente é um acrônimo de COrradi e Mascarello Indústria Ltda.",0);

var modelos = [];



modelos.push(dd,ld,lancamento,g71200,new_2017,comil,new_2007,jum,vip,ideale,via);

modelos.sort(function(a, b){return a.Ano - b.Ano});
// modelos.length ver quantidades de elemento dentro do vetor modelos=[] do codigo.


var x = null;

modelos.forEach(function(ler){
    var lista_entrada = document.createElement('UL');
    var lista = document.createElement('li');
    var container = document.createElement('div');
    var link = document.createElement('a');
    var img = document.createElement('img');
    var lista_text = document.createTextNode(ler.Nome);

    lista_entrada.setAttribute("class",'mostrar');
    img.setAttribute('src',ler.Imagem);

    lista.appendChild(link);
    link.appendChild(lista_text);

    link.onclick = function(){    
        x++;
        if (x > 1) { 
             lista_entrada.setAttribute("class",'mostrar');
             x = null;
        }else{
            lista_entrada.setAttribute("class", "abrir"); 
             
        }
    }

    container.appendChild(img);

    lista_entrada.appendChild(lista);
    lista_entrada.appendChild(container);

    document.getElementById('listas').appendChild(lista_entrada);
});



function compara(modelo) {
    return modelo.Nome == document.getElementById("valor").value;
};


function escolher(esco) {
    var busca = document.getElementById("valor").value;
    if(modelo = modelos.find(compara)){
    document.getElementById("texto").innerHTML = "Nome comercial: "+modelo.Nome_comercial;
    document.getElementById("Img").src = modelo.Imagem;
    document.getElementById("info2").innerHTML= "Veiculo: "+modelo.Nome;
    document.getElementById("info3").innerHTML= "Categoria: "+modelo.categoria;
    document.getElementById("info4").innerHTML= "Marca:"+modelo.Marca;
    document.getElementById("info5").innerHTML= "Ano: "+modelo.Ano;
    document.getElementById("info6").innerHTML= "Eixo: "+modelo.Eixo;
    document.getElementById("info7").innerHTML= "Geração: "+modelo.Geração;
    document.getElementById("info8").innerHTML= "Descrição: "+modelo.Descrição;
    document.getElementById('info9').innerHTML = 'Pessoas vizualizaram:  '+ modelo.visualizar;
    document.getElementById("valor").value="";

    

    Contar();


    }else if (busca =='') {
        alert("Erro na digitação..");
    }else{
        nãoencontrado();
    }
};

 function nãoencontrado(){
    document.getElementById("texto").style.color = 'red';
    document.getElementById("texto").innerHTML = "Pesquisa  não encontrado";
    document.getElementById("valor").value="";
};

 var contador = 0;
 function Contar(){ 
    contador +=1;
    document.getElementById("contador").innerHTML ="Pesquisa Realizada: "+ contador;
    document.getElementById('garagem').innerHTML = "Veiculos Catálogados:"+ modelos.length;
};

// função para travar botão direito do mouse.
function click() {
 if (event.button==2||event.button==3) {
    oncontextmenu='return false';
    }
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false");

