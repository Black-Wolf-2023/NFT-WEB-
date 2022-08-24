"use strict";
//=================== Nav-Opject ====>
let nav_controlls = {
    nav: document.querySelector(".container header nav"),
    toggle_ele: document.querySelector(".toggle"),
    list: document.querySelector(".list"),
    shower: function () {
        var _a;
        (_a = this.toggle_ele) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.classList.toggle("shower");
        });
    },
    scroller_header: function () {
        window.addEventListener("scroll", (e) => {
            var _a;
            (_a = this.nav) === null || _a === void 0 ? void 0 : _a.classList.toggle("activer-nav", window.scrollY > 10);
        });
    },
};
nav_controlls.shower();
nav_controlls.scroller_header();
//=================== Nav-Opject ====>
//=================== Hero-Opject ====>
let hero_animation = {
    cards: document.querySelectorAll(".cards .card"),
    animater: function () {
        this.cards.forEach((e) => {
            e.classList.contains("back-class")
                ? e.classList.remove("back-class")
                : e.classList.add("back-class");
        });
    },
};
setInterval(() => {
    hero_animation.animater();
}, 5000);
//=================== Hero-Opject ====>
//=================== Filter-Opject ====>
let filter_clicker = {
    filter_ele: document.querySelectorAll(".filter .cont"),
    activer: function () {
        this.filter_ele.forEach((e) => {
            e.addEventListener("click", () => {
                this.filter_ele.forEach((s) => {
                    s.classList.remove("activer-cont");
                });
                e.classList.add("activer-cont");
            });
        });
    },
};
filter_clicker.activer();
//=================== Filter-Opject ====>
let links = document.querySelectorAll(".hot-cards .card");
links.forEach((e) => {
    e.addEventListener("click", () => {
        if (location.href.includes("index.html")) {
            location.href = "./src/docs/product.html";
        }
        else if (location.href.includes("search.html")) {
            location.href = "./product.html";
        }
    });
});
//=================== Routing ====>
window.addEventListener("scroll", () => {
    let arrow = document.querySelector(".arrow");
    if (window.scrollY > 600) {
        arrow.style.opacity = "1";
        arrow.style.visibility = "visible";
    }
    else {
        arrow.style.opacity = "0";
        arrow.style.visibility = "hidden";
    }
    arrow.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
//=================== Scroll - Button ====>
let load = document.querySelector(".load");
let body = document.querySelector("body");
window.addEventListener("load", () => {
    setTimeout(() => {
        load.style.display = "none";
        body.style.overflow = "auto";
    }, 5000);
});
//=================== Load - Animations ====>
