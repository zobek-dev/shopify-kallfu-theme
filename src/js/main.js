import Alpine from "alpinejs";
import DetailsDisclosure from "./components/DetailsDisclosure.js";
import Slider from "./components/Slider.js";

//AlpineJs definition
window.Alpine = Alpine;
Alpine.data('Slider', Slider);

Alpine.start();
//custom elements definitions
customElements.define("details-disclosure", DetailsDisclosure);