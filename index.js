const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const nextBtn = document.getElementById('carousel-button-next');
const prevBtn = document.getElementById('carousel-button-prev');
const dots = document.getElementsByClassName("dot");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
let myInterval =0;

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

automatedTransitions();


dot1.addEventListener("click", function(){moveToXSlide(0);});
dot2.addEventListener("click", function(){moveToXSlide(1);});
dot3.addEventListener("click", function(){moveToXSlide(2);});

function moveToXSlide( goalSlide ){
    // console.log("moveToXslide excecuted");
    hideAllSlides();
    defocusAllButtons();
    slidePosition=goalSlide;
    // automatedTransitions();   
    slides[goalSlide].classList.add("carousel-item-visible");
    dots[goalSlide].classList.add("active");
}

function automatedTransitions(){
    myInterval = setInterval(moveToNextSlide,5000);
    // console.log(slidePosition);
    
    //this implementation can for sure refactored
    prevBtn.addEventListener('click', function(){
        clearInterval(myInterval);
        myInterval = setTimeout(automatedTransitions, 15000);
    });
    nextBtn.addEventListener('click', function(){
        clearInterval(myInterval);
        myInterval = setTimeout(automatedTransitions, 15000);
    });
    dot1.addEventListener('click', function(){
        clearInterval(myInterval);
        myInterval = setTimeout(automatedTransitions, 15000);
        slidePosition = 0;
    });
    dot2.addEventListener('click', function(){
        clearInterval(myInterval);
        myInterval = setTimeout(automatedTransitions, 15000);
        slidePosition = 1;
        
    });
    dot3.addEventListener('click', function(){
        clearInterval(myInterval);
        myInterval = setTimeout(automatedTransitions, 15000);
        slidePosition = 2;
        
    });
    return myInterval;
    
}

//makes all the images non visible
function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

//makes all the dots defocused( lightgray/it means that the dot corresponding to the dot is not selected)
function defocusAllButtons() {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
}


function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        moveToXSlide(slidePosition);
    } else {
        slidePosition++;
        moveToXSlide(slidePosition);
    }
}

function moveToPrevSlide() {
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
        moveToXSlide(slidePosition);
    } else {
        slidePosition--;
        moveToXSlide(slidePosition);
    }
}



//possible strech goal, generate the dots based on the length of the array slide,--->dinamically!
// generateDots();

// function generateDots(){ 
//     console.log("AAAAAAAA");
//     for(let i =0; i<totalSlides; i++){
//         carouselDots.innerHTML += `<button class="dot" id="dot-number${i}"></button>`
//     }
//     const dotsAll = document.getElementsByClassName("dot")
//     console.log(dotsAll,dotsAll[0]);
//     //ERRORRRRRRRRRRRRRR 
//     dotsAll[0].add("currentSlidePosition");

// }