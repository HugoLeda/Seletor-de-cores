window.addEventListener('load', start)

/*
let rangeR = document.querySelector('input#red')
let rangeG = document.querySelector('input#green')
let rangeB = document.querySelector('input#blue')
let rangeA = document.querySelector('input#a')
rangeB.addEventListener('onchange', mudarValor(this.id, this.value))
*/

function mudarValor (objeto, valor) {
    
    //pega valores para a função color
    let vermelho = document.querySelector('input#red').value
    let verde = document.querySelector('input#green').value
    let azul = document.querySelector('input#blue').value
    let opacidade = document.querySelector('input#a').value

    let range = document.querySelector(`input#${objeto}`)
    let nome = range.id
    
    if (nome == 'red') {        
        range.style.background = `rgba(${valor}, 0, 0, 1)`        
        //vermelho.value = valor
        color(valor, verde, azul, opacidade)
    } else if (nome == 'green') {
        range.style.background = `rgba(0, ${valor}, 0, 1)` 
        //verde.value = valor
        color(vermelho, valor, azul, opacidade)
    } else if (nome == 'blue') {
        range.style.background = `rgba(0, 0, ${valor}, 1)`
        //azul.value = valor
        color(vermelho, verde, valor, opacidade)
    } else {
        //alert(nome)
        opacidade.value = valor
        valor = valor / 100
        range.style.background = `rgba(30, 30, 30, ${valor})` 
        color(vermelho, verde, azul, valor)       
    }  

    //color(vermelho, verde, azul, opacidade)
    let a = rgbToHex(vermelho, verde, azul)
    alert(a)
}

function color(r, g, b, opacidade) {
    let body = document.querySelector('body')
    let cor = document.querySelector('section#corFinal')
    let rtxt = document.querySelector('input#rtxt')
    let gtxt = document.querySelector('input#gtxt') 
    let btxt = document.querySelector('input#btxt')
    let atxt = document.querySelector('input#atxt')
    /*body.style.backgroundColor = `rgba(${r},${g},${b},${opacidade})`*/
    cor.style.backgroundColor = `rgba(${r},${g},${b},${opacidade})`
    rtxt.value = `${r}`
    gtxt.value = `${g}`
    btxt.value = `${b}`
    atxt.value = `${opacidade}`
}

function valorInput(objeto, valor) {
    valor = verificaValor(Number(valor))
    let range = ''
    let input = document.querySelector(`input#${objeto}`)
    let nome = input.id
    switch (nome){
        case 'rtxt':
            range = 'red'
            break
        case 'gtxt':
            range = 'green'
            break
        case 'btxt':
            range = 'blue'
            break
        default:
            range = 'a'  
            break                          
    }
    mudarValor(range, Number(valor))
}

function verificaValor(valor) {
    if (valor > 255) {
        valor = 255
        alert('Valor máximo para cores rgb é 255')
    } else if (valor < 0) {
        valor = 0
        alert('Valor mínimo para cores rgb é 0')
    }   
    
    return valor     
}