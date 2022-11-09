function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenth == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                // velho
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                // velho
                img.setAttribute('src', 'imagens/idosa-mulher,jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<br>Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}