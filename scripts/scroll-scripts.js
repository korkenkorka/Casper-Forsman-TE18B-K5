window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        document.querySelector('div[id=top-menu]').style.backgroundColor = '#000E25';
        document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 30 + "px";
    }
    else if (window.scrollY < 20 ) {
        document.querySelector('div[id=top-menu]').style.backgroundColor = 'rgb(0,0,0,0)';
        document.querySelector('div[id=top-menu]').style.top = 0 + "px";
    }

    if (window.scrollY > window.innerHeight - window.innerHeight / 10) {
        document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 2 + "px";
    }
});

document.querySelector('div[id=background-text]').style.marginLeft = 30 + "%";

document.querySelector('div[id=main-content-holder]').style.boxShadow = "0px -15vh 20vh " + window.innerHeight / 30 + "vh #000E25";
