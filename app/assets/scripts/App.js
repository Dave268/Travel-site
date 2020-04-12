import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

let mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", 75);
new RevealOnScroll(".testimonial", 60);

if (module.hot) {
    module.hot.accept();
}
