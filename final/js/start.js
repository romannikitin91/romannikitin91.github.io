'use strict'
//render offer
let promoLeft = document.querySelector('.left-offer .slider');
let promoRight = document.querySelector('.right-offer .slider');
let leftSlider = 'left';
let rightSlider = 'right';
function renderSlider(promo, sliderSide){
    let PromoTmpl = `
        <span class='slider-btn slider-btn--prev'></span>
        <div class='slider-container'>
            <% for (let i=0; i<bestOffer[sliderSideTmpl].length; i++) { %>
                <%  for(let j = 0; j < catalog.length; j++) { %>
                    <% if(bestOffer[sliderSideTmpl][i] == catalog[j].id){ %>
                        <div class='product-card slide'>
                            <div class='product-card__img'>
                                <% if(catalog[j].hasNew) { %>
                                    <span class='product-card__label-new'>NEW</span>
                                <% } %>
                                <div class='product-card__overlay'>
                                    View item
                                </div>
                                <img src='<%- catalog[j].thumbnail %>' alt='Product image' />
                            </div>
                            <a href='#' class='product-card__title'>
                                <%- catalog[j].title %>
                            </a>
                            <div class='product-card__price-wrapper'>
                                <% if(catalog[j].price != catalog[j].discountedPrice){ %>
                                    <span class='product-card__price product-card__price--discounted'>
                                        &#163;<%- catalog[j].price.toFixed(2) %>
                                    </span>
                                <% } %>
                                <span class='product-card__price product-card__price--current'>
                                    &#163;<%- catalog[j].discountedPrice.toFixed(2) %>
                                </span>   
                            </div>                 
                        </div>
                    <% } %>
                <% } %>
            <% } %>
        </div>
        <span class='slider-btn slider-btn--next'></span>
    `;
    let leftPromoHTML = _.template(PromoTmpl)({
        sliderSideTmpl: sliderSide
    });
    promo.innerHTML = leftPromoHTML;
}
renderSlider(promoLeft, leftSlider);
renderSlider(promoRight, rightSlider);


let dateSortArr =  _.orderBy(catalog, ['dateAdded'], ['desc']);

let newArrivalsWrapper = document.querySelector('.new-arrivals-wrapper');
let arrivalsProductsAmount;
function renderNewArrivals(){
    if(window.innerWidth > 1024){
        arrivalsProductsAmount = 4;
    } else if ((window.innerWidth <= 1024) && (window.innerWidth >= 768)){
        arrivalsProductsAmount = 3;
    } else if (window.innerWidth < 768){
        arrivalsProductsAmount = 2;
    }
    let arrivalTmpl = `
        <%  for(let j = 0; j < arrivalsProductsAmount; j++) { %>
            <div class='product-card'>
                <div class='product-card__img'>
                    <% if(dateSortArr[j].hasNew) { %>
                        <span class='product-card__label-new'>NEW</span>
                    <% } %>
                    <div class='product-card__overlay'>
                        View item
                    </div>
                    <img src='<%- dateSortArr[j].thumbnail %>' alt='Product image' />
                </div>
                <a href='#' class='product-card__title'>
                    <%- dateSortArr[j].title %>
                </a>
                <div class='product-card__price-wrapper'>
                    <% if(dateSortArr[j].price != dateSortArr[j].discountedPrice){ %>
                        <span class='product-card__price product-card__price--discounted'>
                            &#163;<%- dateSortArr[j].price.toFixed(2) %>
                        </span>
                    <% } %>
                    <span class='product-card__price product-card__price--current'>
                        &#163;<%- dateSortArr[j].discountedPrice.toFixed(2) %>
                    </span>   
                </div>                 
            </div>
        <% } %>
    `;
    let arrivalHTML = _.template(arrivalTmpl)();
    newArrivalsWrapper.innerHTML = arrivalHTML;
};
renderNewArrivals();
window.onresize = renderNewArrivals;
