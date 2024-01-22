const listaimmagini = ['01.webp', '02.webp', '03.webp','04.webp', '05.webp'];
const containerimmagini = document.getElementById('container-immagini');
const arrup = document.getElementById('freccia-su');
const arrdown = document.getElementById('freccia-giu');
let indice = 0;
let slidehtml = ''; 



for(let i = 0; i < listaimmagini.length; i++){
    let immagine = listaimmagini[i];
    let immagineactive = '';

    if(i == 0){
        immagineactive = 'active';
    }
    else{
        immagineactive = '';
    }

   slidehtml += `<img class="immagine ${immagineactive}" src="./img/${immagine}" alt=""></img>` ;
    console.log(slidehtml);

}
containerimmagini.innerHTML = slidehtml;

function nextSlide(){
    let immaginecorrente = document.querySelector('.active');
    immaginecorrente.classList.remove('active');

    const allslide = document.getElementsByClassName('immagine');

    if(indice < allslide.length -1){
        indice++;
    }
    else{
        indice = 0;
    }
    allslide[indice].classList.add('active');
}

function prewievSlide(){
    let immaginecorrente = document.querySelector('.active');
    immaginecorrente.classList.remove('active');

    const allslide = document.getElementsByClassName('immagine');

    if(indice > 0){
        indice--;
    }
    else{
        indice = 4;
    }
    allslide[indice].classList.add('active');
}

arrdown.addEventListener('click', nextSlide);

arrup.addEventListener('click', prewievSlide);

let scrolling = setInterval(nextSlide, 3000);

containerimmagini.addEventListener('mouseover', function() {
    clearInterval(scrolling);
})

containerimmagini.addEventListener('mouseout', function(){
    scrolling = setInterval(nextSlide, 3000);
})