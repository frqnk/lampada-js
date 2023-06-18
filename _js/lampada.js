const lampada = document.getElementById('lampada')
const bt_liga = document.getElementById('bt_liga')
const bt_desliga = document.getElementById('bt_desliga')
const bt_troca = document.getElementById('bt_troca')

function esta_quebrada() {
    return lampada.src.indexOf('quebrada') > -1
//  return (lampada.src == '_img/quebrada.jpg')
}

function lampada_liga() {
    if(!esta_quebrada()) {
        lampada.src = '_img/ligada.jpg'
    }
}

function lampada_desliga() {
    if(!esta_quebrada()) {
        lampada.src = '_img/desligada.jpg'
    }
}

function lampada_quebra() {
    lampada.src = '_img/quebrada.jpg'
}

function lampada_troca() {
    if(esta_quebrada()) {
        lampada.src = '_img/desligada.jpg'
    }
}

bt_liga.addEventListener('click', lampada_liga)
bt_desliga.addEventListener('click', lampada_desliga)
bt_troca.addEventListener('click', lampada_troca)

lampada.addEventListener('mouseover', lampada_liga)
lampada.addEventListener('mouseleave', lampada_desliga)
lampada.addEventListener('dblclick', lampada_quebra)
