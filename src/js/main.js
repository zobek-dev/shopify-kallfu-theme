import Alpine from "alpinejs";
import DetailsDisclosure from "./components/DetailsDisclosure.js";

//AlpineJs definition
window.Alpine = Alpine;
Alpine.start();
//custom elements definitions
customElements.define("details-disclosure", DetailsDisclosure);