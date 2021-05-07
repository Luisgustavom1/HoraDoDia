function carregar() {
    var corpo = window.document.body
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var novo = new Date()
    var hora = novo.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        //Bom dia
        foto.src = 'foto manha.jpg'
        corpo.style.background = 'rgb(26, 171, 255)'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde
        foto.src = 'foto tarde.jpg'
        corpo.style.background = 'rgb(197, 88, 24)';
    } else {
        //Boa noite
        foto.src = 'foto noite.jpg'
        corpo.style.background = 'rgb(6, 6, 83)'
    }
}
