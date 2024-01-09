// Data contem o array com perguntas e respostas
const data = [
  {
    id:1,
    pergunta:"Qual o nome do presidente atual do Brasil?",
    respostas:[
      {resposta:"Sarney", isCorret:false},
      {resposta:"Fernando Henrique", isCorret:false},
      {resposta:"Dilma", isCorret:false},
      {resposta:"Lula", isCorret:true},
    ],
  },
  {
    id:2,
    pergunta:"Qual é a cor do cavalo branco de Napoleão?",
    respostas:[
      {resposta:"Rosa", isCorret:false},
      {resposta:"Preto", isCorret:false},
      {resposta:"Branco", isCorret:true},
      {resposta:"Caramelo", isCorret:false},
    ],
  },
  {
    id:3,
    pergunta:"Qual a empresa que inventou o Iphone?",
    respostas:[
      {resposta:"Apple", isCorret:true},
      {resposta:"Amazon", isCorret:false},
      {resposta:"Google", isCorret:false},
      {resposta:"Americanas", isCorret:false},
    ],
  },
]

const pegaPergunta = document.querySelector(".pergunta");
const pegaResposta = document.querySelector(".respostas");
const pegaSubmit = document.querySelector(".submit");
const pegaContainer = document.querySelector(".container");
const pegaResultado = document.querySelector(".final");
const respostasCertas = document.querySelector(".respostasCertas");
const respostasErradas = document.querySelector(".respostasErradas");
const btnPlay = document.querySelector(".btnPlay");
const pegaBox = document.querySelector(".box-pergunta")

pegaSubmit.addEventListener("click",btnContinue);

var indice = 0;
var selecionaEscolha;
var totalArray;
totalArray = data.length;
var controlaLoop = 0;
var controlaIndice;
var pontosCertos = 0;
var pontosErrados = 0
function mostraQuestao(qNumber){

  //Controle para verificar se usuário o usuário ficou sem responder
  selecionaEscolha = undefined;
  
  // Exibe a Pergunta
  pegaPergunta.textContent=data[qNumber].pergunta;

  //Exibe as Respostas
  pegaResposta.innerHTML=data[qNumber].respostas.map((item,index)=>
  
  
          `
          <div class="respostas">
            <input name="resposta" type="radio"  value=${item.isCorret}>
            <span>${item.resposta} </span>
          </div>
          `
          ).join(""); // join tira a vírgula

  controlaIndice =qNumber;
  selecioneResposta();

}
mostraQuestao(indice);

// Verifica se foi selecionada a resposta
function selecioneResposta(){
  pegaResposta.querySelectorAll("input").forEach(el =>{
    el.addEventListener('click',(e)=>{
      selecionaEscolha=e.target.value;
    });
  })
  
}

// Verifica se foi marcada a resposta
// Se não foi marcada resposta mostra alert, senão, soma nos contadores
function btnContinue() {

  if(selecionaEscolha === undefined){
    alert ("escolha uma resposta");
  }
  if(selecionaEscolha != undefined){
    if(selecionaEscolha === 'true'){
      pontosCertos = pontosCertos + 10;
      //selecionaEscolha = undefined;
    }else if(selecionaEscolha === 'false'){
      pontosErrados = pontosErrados + 10;
      //selecionaEscolha = undefined;
    }

    indice++;
    totalArray--;

    if(totalArray == 0){
      pegaBox.style.display  = "none";
      // pegaResultado.style.display  = "block";
      let pegaId = document.getElementById("esconde")
      pegaId.removeAttribute("id")
      
      var trueAnswer = respostasCertas;
      trueAnswer.textContent = "Respostas Corretas: "+pontosCertos;
      trueAnswer.style.color = "green";
      
      var falseAnswer = respostasErradas;
      falseAnswer.textContent = "Respostas Erradas: "+pontosErrados;
      falseAnswer.style.color = "red";




      
      btnPlay.addEventListener('click',jogarNovamente);

      function jogarNovamente(){
        pegaId.innerHTML = "esconde"
       
        window.location.reload();
      }
      
    } else {
      mostraQuestao(indice);
    }
  }
}
  