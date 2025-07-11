let perguntas=[

    {
    "id":1,
    "resposta":1,
    "opcao1":"Mario",
    "opcao2":"Sonic",
    "opcao3":"Link",
    "opcao4":"Luigi",
    "imagem":"img/mario.jpg"
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
                },

            {
                "id":16,
                "resposta":3,
                "opcao1":"Jack",
                "opcao2":"Andrew Ryan",
                "opcao3":"Booker Dewitt",
                "opcao4":"Frank Fontaine",
                "imagem":"img/booker.jpg"
                }

        ,

            {
                "id":17,
                "resposta":2,
                "opcao1":"Nier",
                "opcao2":"Emil",
                "opcao3":"Adam",
                "opcao4":"Shadow Lord",
                "imagem":"img/emil.jpg"
                }
    

        ,

            {
                "id":18,
                "resposta":2,
                "opcao1":"John Marson",
                "opcao2":"Arthur Morgan",
                "opcao3":"Micah Bell",
                "opcao4":"Lenny Summers",
                "imagem":"img/arthur.jpg"
                }
,

            {
                "id":19,
                "resposta":3,
                "opcao1":"Scratch",
                "opcao2":"Alan Woke",
                "opcao3":"Alan Wake",
                "opcao4":"John Wick",
                "imagem":"img/alan.webp"
                }
                ,

            {
                "id":20,
                "resposta":1,
                "opcao1":"Vivi",
                "opcao2":"Stein",
                "opcao3":"Zidane",
                "opcao4":"Garland",
                "imagem":"img/vivi.jpg"
                }
]



let rodada=1
let acertos=0
const btnAdivinhar=document.querySelector("#btnAdivinhar")
const btnProximo=document.querySelector("#btnProximo")
let opcao=document.querySelector(".opcao")
let imagemjogo=document.querySelector("#imagemjogo")
let labeljogo=document.querySelector("#label1")
let labeljogo2=document.querySelector("#label2")
let labeljogo3=document.querySelector("#label3")
let labeljogo4=document.querySelector("#label4")
let pontos=document.querySelector("#pontos")
let addponto=document.querySelector(".addponto")
let npersonagem=document.querySelector("#npersonagem")
let conteudo=document.querySelector("#container2")
let errortext=document.querySelector("#errortext")



btnAdivinhar.addEventListener("click", (e) => {
    e.preventDefault()
    const selecionado = document.querySelector('input[name="opcoes"]:checked')
    if (!selecionado) {
        errortext.classList.add("aparecererrortext")
         setTimeout(()=>{
            errortext.classList.remove("aparecererrortext")
        },1000) 
        return
    }
    let perguntaAtual = perguntas[rodada - 1]
    if (perguntaAtual.resposta == selecionado.value) {
        conteudo.classList.add("animacaoacerto")
        addponto.classList.add("mudarponto")
        pontos.classList.add("animacaoacertotexto")
          setTimeout(()=>{
        conteudo.classList.remove("animacaoacerto")
     },500) 
        acertos++
    }
    else{
        pontos.classList.add("animacaoerrotexto")
        conteudo.classList.add("animacaoerro")
         setTimeout(()=>{
        conteudo.classList.remove("animacaoerro")
     },500) 
    }

     setTimeout(()=>{
        addponto.classList.remove("mudarponto")
     },700)

    for (let i = 1; i <= 4; i++) {
        let label = document.querySelector(`#label${i}`)
        if (i == perguntaAtual.resposta) {
        label.classList.add("correta")
    } else {
        label.classList.add("errada")
    }}
    document.querySelectorAll('input[name="opcoes"]').forEach(input => {
    input.disabled = true;
})
    pontos.innerText=acertos
    btnAdivinhar.classList.add("mudarbotao")
    btnProximo.classList.add("ativarbotao")
})



btnProximo.addEventListener("click", (e) => {
    document.querySelectorAll('input[name="opcoes"]').forEach(input => {
    input.checked = false
    input.disabled = false
})
    for (let i = 1; i <= 4; i++) {
    let label = document.querySelector(`#label${i}`)
    label.classList.remove("correta", "errada")
}
    pontos.classList.remove("animacaoacertotexto")
    pontos.classList.remove("animacaoerrotexto")
    rodada ++
    if (rodada > perguntas.length) {
        window.location.href = "index.html"
        if (acertos<=0){
            alert(`Fim do jogo! Acertos: ${acertos}\nErrou tudo slk BRUTAL`)
        }else if (acertos<=5){
            alert(`Fim do jogo! Acertos: ${acertos}\nSkill Issue SEVERO`)
        }else if (acertos<=10){
            alert(`Fim do jogo! Acertos: ${acertos}\nConhece bem pouco`)
        }else if (acertos<=15){
            alert(`Fim do jogo! Acertos: ${acertos}\nAté que sabe das coisa`)
        }else if(acertos<=19){
             alert(`Fim do jogo! Acertos: ${acertos}\nParabéns, você conhece bastante`)

        }else{
        alert(`Fim do jogo! Acertos: ${acertos}\nObteve Gnose e transcendeu o plano material`)
        }
    }
    npersonagem.innerText=`#${rodada}`
    perguntaAtual = perguntas[rodada - 1]
    imagemjogo.setAttribute("src", perguntaAtual.imagem)
    labeljogo.innerText = perguntaAtual.opcao1
    labeljogo2.innerText = perguntaAtual.opcao2
    labeljogo3.innerText = perguntaAtual.opcao3
    labeljogo4.innerText = perguntaAtual.opcao4
    document.querySelectorAll('input[name="opcoes"]').forEach(r => r.checked = false)
    btnProximo.classList.remove("ativarbotao")
    btnAdivinhar.classList.remove("mudarbotao")

})
