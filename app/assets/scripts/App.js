import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new StickyHeader();
new MobileMenu();
new RevealOnScroll(".feature-item", 75);
new RevealOnScroll(".testimonial", 60);

let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import("./modules/Modal")
                .then((x) => {
                    modal = new x.default();
                    setTimeout(() => modal.openTheModal(), 20);
                })
                .catch(() => {
                    console.log("error");
                });
        } else {
            modal.openTheModal();
        }
    });
});

if (module.hot) {
    module.hot.accept();
}
