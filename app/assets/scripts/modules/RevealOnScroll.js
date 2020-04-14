import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
    constructor(els, threshholdPercent) {
        this.itemsToReveal = document.querySelectorAll(els);
        this.threshholdPercent = threshholdPercent;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener(
            "resize",
            debounce(() => {
                this.browserHeight = window.innerHeight;
            }, 400)
        );
    }

    calcCaller() {
        console.log("scroll function ran");
        this.itemsToReveal.forEach((el) => {
            if (!el.isRevealed) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("calculate");
            let scrolPercent =
                (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (scrolPercent < this.threshholdPercent) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach((el) => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;
