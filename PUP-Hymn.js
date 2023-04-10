let puplyrics = document.querySelector(".pup-lyrics")
let pupHymn = document.getElementById("music")
let puplyrics1 = `<span class= "whole-lyrics">Sintang Paaralan<br>
Tanglaw ka ng bayan<br>
Pandayan ng isip ng kabataan<br>
Kami ay dumating nang salat sa yaman<br>
Hanap na dunong ay iyong alay<br>
Ang layunin mong makatao<br>
Dinarangal ang Pilipino<br>
Ang iyong aral, diwa, adhikang taglay<br>
PUP, aming gabay<br>
Paaralang dakila<br>
PUP, pinagpala<br>
Gagamitin ang karunungan<br>
Mula sa iyo, para sa bayan<br>
Ang iyong aral, diwa, adhikang taglay<br>
PUP, aming gabay<br>
Paaralang dakila<br>
PUP, pinagpala<br></span>`

pupHymn.addEventListener("pause",()=>{
    puplyrics.style.animationPlayState = `paused`;
})
pupHymn.addEventListener("timeupdate",()=>{ 
    if (Math.floor(pupHymn.currentTime) === 13 && Math.floor(pupHymn.currentTime) <= 14 ){
        puplyrics.innerHTML = puplyrics1.slice(0,28) +'<span class ="highlighted-text"> Sintang Paaralan </span>' + puplyrics1.slice(44);
        puplyrics.style.animation = `1.8s linear 0s scroll-lyrics-hymn1 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 15 && Math.floor(pupHymn.currentTime) <= 17){
        puplyrics.innerHTML = puplyrics1.slice(0,48) + '<span class ="highlighted-text"> Tanglaw ka ng bayan </span>' + puplyrics1.slice(68);
        puplyrics.style.animation = `3s linear 0s scroll-lyrics-hymn2 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 18 && Math.floor(pupHymn.currentTime) <= 23){
        puplyrics.innerHTML = puplyrics1.slice(0,72) + '<span class ="highlighted-text"> Pandayan ng isip ng kabataan </span>' + puplyrics1.slice(101);
        puplyrics.style.animation = `6s linear 0s scroll-lyrics-hymn3 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 24 && Math.floor(pupHymn.currentTime) <= 28){
        puplyrics.innerHTML = puplyrics1.slice(0,105) + '<span class ="highlighted-text"> Kami ay dumating nang salat sa yaman </span>' + puplyrics1.slice(142);
        puplyrics.style.animation = `5s linear 0s scroll-lyrics-hymn4 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 29 && Math.floor(pupHymn.currentTime) <= 34){
        puplyrics.innerHTML = puplyrics1.slice(0,146) + '<span class ="highlighted-text"> Hanap na dunong ay iyong alay </span>' + puplyrics1.slice(176);
        puplyrics.style.animation = `6s linear 0s scroll-lyrics-hymn5 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 35 && Math.floor(pupHymn.currentTime) <= 40){
        puplyrics.innerHTML = puplyrics1.slice(0,180) + '<span class ="highlighted-text"> Ang layunin mong makatao </span>' + puplyrics1.slice(205);
        puplyrics.style.animation = `6s linear 0s scroll-lyrics-hymn6 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 41 && Math.floor(pupHymn.currentTime) <= 47){
        puplyrics.innerHTML = puplyrics1.slice(0,209) + '<span class ="highlighted-text"> Dinarangal ang Pilipino </span>' + puplyrics1.slice(233);
        puplyrics.style.animation = `7s linear 0s scroll-lyrics-hymn7 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 48 && Math.floor(pupHymn.currentTime) <= 52){
        puplyrics.innerHTML = puplyrics1.slice(0,237) + '<span class ="highlighted-text"> Ang iyong aral, diwa, adhikang taglay </span>' + puplyrics1.slice(275);
        puplyrics.style.animation = `12s linear 0s scroll-lyrics-hymn8 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 53 && Math.floor(pupHymn.currentTime) <= 55){
        puplyrics.innerHTML = puplyrics1.slice(0,279) + '<span class ="highlighted-text"> PUP, aming gabay </span>' + puplyrics1.slice(296);
        puplyrics.style.animation = `8s linear 0s scroll-lyrics-hymn9 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 56 && Math.floor(pupHymn.currentTime) <= 61){
        puplyrics.innerHTML = puplyrics1.slice(0,300) + '<span class ="highlighted-text"> Paaralang dakila</span>' + puplyrics1.slice(317);
        puplyrics.style.animation = `10s linear 0s scroll-lyrics-hymn10 forwards` 
    }
    else if (Math.floor(pupHymn.currentTime) === 62 && Math.floor(pupHymn.currentTime) <= 68){
        puplyrics.innerHTML = puplyrics1.slice(0,321) + '<span class ="highlighted-text"> PUP, pinagpala </span>'+ puplyrics1.slice(336);
        puplyrics.style.animation = `10s linear 0s scroll-lyrics-hymn11 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 69 && Math.floor(pupHymn.currentTime) <= 74){
        puplyrics.innerHTML = puplyrics1.slice(0,340) + '<span class ="highlighted-text"> Gagamitin ang karunungan </span>' + puplyrics1.slice(365);
        puplyrics.style.animation = `7s linear 0s scroll-lyrics-hymn12 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 75 && Math.floor(pupHymn.currentTime) <= 80){
        puplyrics.innerHTML = puplyrics1.slice(0,369) + '<span class ="highlighted-text"> Mula sa iyo, para sa bayan </span>' + puplyrics1.slice(396);
        puplyrics.style.animation = `6s linear 0s scroll-lyrics-hymn13 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 81 && Math.floor(pupHymn.currentTime) <= 85){
        puplyrics.innerHTML = puplyrics1.slice(0,400) + '<span class ="highlighted-text"> Ang iyong aral, diwa, adhikang taglay </span>' + puplyrics1.slice(438);
        puplyrics.style.animation = `5s linear 0s scroll-lyrics-hymn14 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 86 && Math.floor(pupHymn.currentTime) <= 88){
        puplyrics.innerHTML = puplyrics1.slice(0,442) + '<span class ="highlighted-text"> PUP, aming gabay </span>' + puplyrics1.slice(459);
        puplyrics.style.animation = `3s linear 0s scroll-lyrics-hymn15 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 89 && Math.floor(pupHymn.currentTime) <= 94){
        puplyrics.innerHTML = puplyrics1.slice(0,463) + '<span class ="highlighted-text"> Paaralang dakila </span>' + puplyrics1.slice(480);
        puplyrics.style.animation = `6s linear 0s scroll-lyrics-hymn16 forwards`
    }
    else if (Math.floor(pupHymn.currentTime) === 95){
        puplyrics.innerHTML = puplyrics1.slice(0,480) + '<span class ="highlighted-text"> PUP, pinagpala </span>' + puplyrics1.slice(499);
        puplyrics.style.animation = `5s linear 0s scroll-lyrics-hymn17 forwards`
    }
    
})


