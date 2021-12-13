var imgArray = ['cadavre.jpg', 'melanie.tcheou.jpg', 'mob_pvz.jpg', 'monstre.jpg'];

function imgRandom() {
    var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
    document.body.style.background = url(rand)
}

$(document).ready(imgRandom);
