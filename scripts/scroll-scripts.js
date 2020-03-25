window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        document.querySelector('div[id=top-menu]').style.backgroundColor = '#000E25';
        document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 30 + "px";

        console.log("test");
    }

    if (window.scrollY > window.innerHeight - 1) {
        document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 2 + "px";
    }
});
