let perguntas=[

    {
    "id":1,
    "resposta":1,
    "opcao1":"Mario",
    "opcao2":"Sonic",
    "opcao3":"Link",
    "opcao4":"Luigi",
    "imagem":"img/5c36ab97e7f320cccfcc9b6d9b845e91.jpg"
    },

  {
    "id":2,
    "resposta":4,
    "opcao1":"Shadow",
    "opcao2":"Zelda",
    "opcao3":"Mario",
    "opcao4":"Sonic",
    "imagem":"img/sonic.webp"
    },


{
    "id":3,
    "resposta":2,
    "opcao1":"Poppy",
    "opcao2":"Freddy",
    "opcao3":"Fox",
    "opcao4":"Eduardo",
    "imagem":"img/freddy.png"
    },

{
    "id":4,
    "resposta":4,
    "opcao1":"Ramsey",
    "opcao2":"Bella",
    "opcao3":"Kitana",
    "opcao4":"Ellie",
    "imagem":"img/ellie.jpg"
    },

    {
        "id":5,
        "resposta":1,
        "opcao1":"Ryu",
        "opcao2":"Ken",
        "opcao3":"Guile",
        "opcao4":"Akuma",
        "imagem":"img/ryu.jpg"
        },
        {
            "id":6,
            "resposta":3,
            "opcao1":"Zeus",
            "opcao2":"John",
            "opcao3":"Kratos",
            "opcao4":"Ares",
            "imagem":"img/kratos.webp"
            },

            {
                "id":7,
                "resposta":1,
                "opcao1":"Chun-li",
                "opcao2":"Poison",
                "opcao3":"Cammy",
                "opcao4":"Sakura",
                "imagem":"img/chunli.jpg"
                },           

    {
    "id":8,
    "resposta":2,
    "opcao1":"Bayonetta",
    "opcao2":"Lara Croft",
    "opcao3":"Ellie",
    "opcao4":"Zelda",
    "imagem":"img/LaraCroft.jpg"
    },
    {
        "id":9,
        "resposta":1,
        "opcao1":"Leon",
        "opcao2":"Chris",
        "opcao3":"Wesker",
        "opcao4":"Xonive",
        "imagem":"img/leon.jpg"
        },
    {
        "id":10,
        "resposta":4,
        "opcao1":"Michael",
        "opcao2":"Franklin",
        "opcao3":"Big Smoke",
        "opcao4":"CJ",
        "imagem":"img/cj.jpg"
        },

        {
            "id":11,
            "resposta":2,
            "opcao1":"Corvo Attano",
            "opcao2":"Sam Fisher",
            "opcao3":"Solid Snake",
            "opcao4":"Agente 47",
            "imagem":"img/sam.webp"
            },

            {
                "id":12,
                "resposta":4,
                "opcao1":"Leon",
                "opcao2":"Ryan Gosling",
                "opcao3":"Harry Mason",
                "opcao4":"James",
                "imagem":"img/james.jpg"
                },

        
                {
                    "id":13,
                    "resposta":1,
                    "opcao1":"Kyo",
                    "opcao2":"Iori",
                    "opcao3":"Kusanagi",
                    "opcao4":"K",
                    "imagem":"img/kyo.jpg"
                    },
            
            {
                "id":14,
                "resposta":1,
                "opcao1":"Corvo Attano",
                "opcao2":"Batman",
                "opcao3":"Capuz Negro",
                "opcao4":"Assassino",
                "imagem":"img/Corvo.jpg"
                },

            
            {
                "id":15,
                "resposta":4,
                "opcao1":"Ludwig",
                "opcao2":"Hunter",
                "opcao3":"Gherman",
                "opcao4":"Lady Maria",
                "imagem":"img/maria.jpg"
                }

        

        
    




]



let rodada=1
let acertos=0
const btnAdivinhar=document.querySelector("#btnAdivinhar")
let opcao=document.querySelector(".opcao")
let imagemjogo=document.querySelector("#imagemjogo")
let labeljogo=document.querySelector("#label1")
let labeljogo2=document.querySelector("#label2")
let labeljogo3=document.querySelector("#label3")
let labeljogo4=document.querySelector("#label4")
let pontos=document.querySelector("#pontos")



btnAdivinhar.addEventListener("click", (e) => {
    e.preventDefault()
    
    const selecionado = document.querySelector('input[name="opcoes"]:checked')

    if (!selecionado) {
        alert("Selecione uma opção!")
        return
    }
    let perguntaAtual = perguntas[rodada - 1]
    if (perguntaAtual.resposta == selecionado.value) {
        acertos++
    }

    
//      setTimeout(()=>{
// alert("seila")
//      },1000) 
  
        rodada ++
 

    if (rodada > perguntas.length) {
        window.location.href = "index.html";
        alert(`Fim do jogo! Acertos: ${acertos}`)
        
    
        
        return;
    }

    perguntaAtual = perguntas[rodada - 1]
    imagemjogo.setAttribute("src", perguntaAtual.imagem)
    labeljogo.innerText = perguntaAtual.opcao1
    labeljogo2.innerText = perguntaAtual.opcao2
    labeljogo3.innerText = perguntaAtual.opcao3
    labeljogo4.innerText = perguntaAtual.opcao4
    document.querySelectorAll('input[name="opcoes"]').forEach(r => r.checked = false);
    pontos.innerText=acertos
})
