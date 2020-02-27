'use strict'
let slidesLeft = document.querySelectorAll('.left-offer .slide');
let btnPrevLeft = document.querySelector('.left-offer .slider-btn--prev');
let btnNextLeft = document.querySelector('.left-offer .slider-btn--next');
let slidesRight = document.querySelectorAll('.right-offer .slide');
let btnPrevRight = document.querySelector('.right-offer .slider-btn--prev');
let btnNextRight = document.querySelector('.right-offer .slider-btn--next');
let leftOfferPrice = slidesLeft[0].querySelector('.product-card__price--current');
let rightOfferPrice =  slidesRight[0].querySelector('.product-card__price--current');
let sumOfferOldPrice = document.querySelector('.sum-offer__old-price');
let sumOfferNewPrice = document.querySelector('.sum-offer__new-price');
leftOfferPrice = +leftOfferPrice.innerHTML.trim().substring(1);
rightOfferPrice = +rightOfferPrice.innerHTML.trim().substring(1);

function writeSumOffers(leftOfferPrice, rightOfferPrice){
    sumOfferOldPrice.innerHTML = '&#163;'+(leftOfferPrice + rightOfferPrice).toFixed(2);
    sumOfferNewPrice.innerHTML = '&#163;'+(leftOfferPrice + rightOfferPrice - 15).toFixed(2); 
}
writeSumOffers(leftOfferPrice, rightOfferPrice);
function slider(slides, btnPrev, btnNext){
    let i = 0;
    slides[i].classList.add('showed');
    btnPrev.addEventListener('click', function(e){
        slides[i].classList.remove('showed');
        i--;
        if(i < 0){
            i = slides.length - 1;
        }
        slides[i].classList.add('showed');
        if(e.target.closest('.left-offer') != null){
            leftOfferPrice = +e.target.closest('.left-offer').querySelector('.showed').querySelector('.product-card__price--current').innerHTML.trim().substring(1);
            writeSumOffers(leftOfferPrice, rightOfferPrice);
        } else if(e.target.closest('.right-offer') != null){
            rightOfferPrice =  +e.target.closest('.right-offer').querySelector('.showed').querySelector('.product-card__price--current').innerHTML.trim().substring(1);
            writeSumOffers(leftOfferPrice, rightOfferPrice);
        }
        
    });
    
    btnNext.addEventListener('click', function(e){
        slides[i].classList.remove('showed');
        i++;
        if (i >= slides.length){
            i = 0;
        }
        slides[i].classList.add('showed'); 
        if(e.target.closest('.left-offer') != null){
            leftOfferPrice = +e.target.closest('.left-offer').querySelector('.showed').querySelector('.product-card__price--current').innerHTML.trim().substring(1);
            writeSumOffers(leftOfferPrice, rightOfferPrice);
        } else if(e.target.closest('.right-offer') != null){
            rightOfferPrice =  +e.target.closest('.right-offer').querySelector('.showed').querySelector('.product-card__price--current').innerHTML.trim().substring(1);
            writeSumOffers(leftOfferPrice, rightOfferPrice);
        }
    });
}
slider(slidesLeft, btnPrevLeft, btnNextLeft);
slider(slidesRight, btnPrevRight, btnNextRight);