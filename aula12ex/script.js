function carregar() {
    var hora = new Date();
    // var agora = hora.getHours();
    var agora = 20;
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto'); // imagem com id "foto"

    msg.innerHTML = `Agora são ${agora} horas.`;

    if (agora >= 0 && agora < 12) {
        img.src = 'imagens/morning.jpg';
        document.body.style.backgroundColor = 'lightgray';
    } else if (agora >= 12 && agora <= 18) {
        img.src = 'imagens/afternoon.jpg';
        document.body.style.backgroundColor = 'burlywood';
    } else {
        img.src = 'imagens/night.jpg';
        document.body.style.backgroundColor = '#9370DB'; // roxo
    }
}

