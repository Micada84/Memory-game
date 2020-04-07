let memorija = document.getElementById('box');
let brojIzabranihSlika = 0
let prvaSlika;;
let drugaSlika;
let izbor = 0;
let s;
let slika = 'img/green-lantern.jpg'
let polje =`<div class='glavniDiv'>`



for (let i = 0; i <=15 ; i++) {
    polje += `<div ><img id='${i}'src='${slika}'</div>`  
}
polje + '</div>'
memorija.innerHTML+=polje
 let slike = [
    'img/spiderman.jpg', 'img/batman.jpg', 'img/captain-america.jpg',
    'img/fantastic-four.jpg', 'img/flash.jpg', 'img/ironman.jpg', 'img/thor.jpg', 
    'img/superman.jpg','img/spiderman.jpg', 'img/batman.jpg', 'img/captain-america.jpg',
    'img/fantastic-four.jpg', 'img/flash.jpg', 'img/ironman.jpg', 'img/thor.jpg', 'img/superman.jpg'
] 
promesaj()
document.body.addEventListener('keypress',function(e){
if(e.keyCode == 114 && izbor == 8){
    location.reload();
}

})
memorija.addEventListener('click',function clikPicture(e){
    id = e.target.id
    if(brojIzabranihSlika == 0){
        prvaSlika = document.getElementById(id)
        prvaSlika.src = slike[id]
        brojIzabranihSlika = 1
    }
    else{
        drugaSlika = document.getElementById(id)
        drugaSlika.src = slike[id]
        brojIzabranihSlika = 2
        startTajmer()
    }   
})
function startTajmer(){
  s=setTimeout(proveri,555)
}
function stopTajmer(){
    clearInterval(s);
}
function proveri(){
    stopTajmer()
    if(prvaSlika.src == drugaSlika.src){
        brojIzabranihSlika = 0
        izbor++
        document.getElementById('score-board').innerHTML = Number(izbor)
        console.log(izbor);
        
    }else if(prvaSlika.src !== drugaSlika.src){
        prvaSlika.src = slika
        drugaSlika.src = slika
        brojIzabranihSlika = 0;
    }
    if(izbor == slike.length/2){
        document.getElementById('win').innerHTML = 'Pobedio si.Klikni R da pocnes ponnovo !!!';
    }
}
///rezultat///
 document.getElementById('score-board').innerHTML = Number(izbor);
////
function promesaj() {
    for (var flip = 0; flip < 100; flip++) {
        var i = Math.floor(Math.random() * slike.length);
        var j = Math.floor(Math.random() * slike.length);
        var temp = slike[i];
        slike[i] = slike[j];
        slike[j] = temp;
    }
}