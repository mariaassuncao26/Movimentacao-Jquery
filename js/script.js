posicao1 = 0;
posicao2 = 0;

$("#btnDireita").click(() => {
        posicao1 += 30
        $("#anima-div").animate({left: posicao1 + "px"}, {duration: 300})
        $("#anima-div").removeClass("anima-div-esquerda anima-div-cima anima-div-baixo").addClass("anima-div")
    }
)

$("#btnEsquerda").click(() => {
        posicao1 -= 30
        $("#anima-div").animate({left: posicao1 + "px"}, {duration: 300})
        $("#anima-div").removeClass("anima-div anima-div-cima anima-div-baixo").addClass("anima-div-esquerda")
    }
)

$("#btnCima").click(() => {
        posicao2 -= 30
        $("#anima-div").animate({top: posicao2 + "px"}, {duration: 300})
        $("#anima-div").removeClass("anima-div anima-div-esquerda anima-div-baixo").addClass("anima-div-cima")
    }
)

$("#btnBaixo").click(() =>{ 
        posicao2 += 30
        $("#anima-div").animate({top: posicao2 + "px"}, {duration: 300})
        $("#anima-div").removeClass("anima-div anima-div-esquerda anima-div-cima").addClass("anima-div-baixo")
    }
)

