function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('Verifique os dados e digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'imagens/childm.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/youngm.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adultm.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/oldm.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'imagens/childw.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/youngw.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adultw.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/oldw.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}

