import Alpine from "alpinejs";
import DetailsDisclosure from "./components/DetailsDisclosure.js";
import Slider from "./components/Slider.js";
import Swiper, {Navigation, Pagination} from "swiper";


//AlpineJs definition
window.Alpine = Alpine;
Alpine.data('Slider', Slider);
Alpine.start();

Swiper.use([Navigation, Pagination])
if(document.querySelector('.swiper')){
    const carousel = new Swiper('.swiper', {
       navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        loop:true,
    })
}

//custom elements definitions
customElements.define("details-disclosure", DetailsDisclosure);