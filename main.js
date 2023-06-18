function esta_quebrada() {
    return lampada.src.match('quebrada')
}

function lampada_liga() {
    if(!esta_quebrada()) {
        lampada.src = 'img/lampada/ligada.jpg'
    }
}

function lampada_desliga() {
    if(!esta_quebrada()) {
        lampada.src = 'img/lampada/desligada.jpg'
    }
}

function lampada_quebra() {
    lampada.src = 'img/lampada/quebrada.jpg'
}

function lampada_troca() {
    if(esta_quebrada()) {
        lampada.src = 'img/lampada/desligada.jpg'
    }
}

botao_liga.addEventListener('click', lampada_liga)
botao_desliga.addEventListener('click', lampada_desliga)
botao_troca.addEventListener('click', lampada_troca)

lampada.addEventListener('mouseover', lampada_liga)
lampada.addEventListener('mouseleave', lampada_desliga)
lampada.addEventListener('dblclick', lampada_quebra)
