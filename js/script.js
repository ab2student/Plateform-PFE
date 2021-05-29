/*
const slide = document.querySelector('.slide');
const slideImages = document.querySelectorAll('.slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click', () => {
    if (counter >= slideImages.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () =>  {
    if(slideImages[counter].id === 'lastClone'){
        slide.style.transition = "none";
        counter = slideImages.length -2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }else{
            if(slideImages[counter].id === 'firstClone'){
                slide.style.transition = "none";
                counter = slideImages.length - counter;
                slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        }
});
*/
/******************** JS Etoiles d'évaluations ******************************/


const allstars = document.querySelectorAll(".stars");
const rating = document.querySelector('.rating');


init();

function init(){
    allstars.forEach((star) => {
        star.addEventListener("click", saveRating);
        star.addEventListener("mouseover", addCSS); //checked dans CSS
        star.addEventListener("mouseleave", removeCSS); 

    });
}

function saveRating(e){
    removeEventAllStars();
    rating.innerText = e.target.dataset.star;
}

function removeEventAllStars(){
    allstars.forEach(star => {
        star.removeEventListener("click", saveRating);
        star.removeEventListener("mouseover", addCSS);
        star.removeEventListener("mouseleave", removeCSS);

    });
}

function addCSS(e, css="checked") {
    const overedStar = e.target; 
    overedStar.classList.add(css);
    const previousSiblings = getPreviousSiblings(overedStar);
    previousSiblings.forEach(elem => elem.classList.add(css));
    console.log("elem.previousSiblings", previousSiblings);
    
}

function removeCSS(e, css="checked"){
    const overedStar = e.target;
    e.target.classList.remove(css);
    const previousSiblings = getPreviousSiblings(overedStar);
    previousSiblings.forEach(elem => elem.classList.remove(css));

}

function getPreviousSiblings(elem) {
    console.log("elem.previousSibling", elem.previousSibling);
    let siblings = [];
    const spanNodeType = 3; //1 c'est le type des spans 
    while(elem = elem.previousSibling){
        if(elem.nodeName === "SPAN"){
            siblings = [elem, ...siblings];
        }
    }
    return siblings;
}
