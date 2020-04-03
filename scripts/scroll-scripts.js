window.addEventListener("scroll", () => { 
    setTimeout(() => {
        
        if (window.scrollY > 20) {
            document.querySelector('div[id=top-menu]').style.backgroundColor = '#194049';
            document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 30 + "px";
        }
        else if (window.scrollY < 20 ) {
            document.querySelector('div[id=top-menu]').style.backgroundColor = 'rgb(0,0,0,0)';
            document.querySelector('div[id=top-menu]').style.top = 0 + "px";
        };
    
        if (window.scrollY > window.innerHeight - window.innerHeight / 10) {
            document.querySelector('div[id=top-menu]').style.top = 0 - window.innerHeight / 2 + "px";
        };
    
        if (window.scrollY > window.innerHeight / 2 + 100) {
            document.querySelector('div[id=projects-project-1]').style.marginLeft = 0 + "px";
        };
    
        if (window.scrollY > window.innerHeight + 100) {
            document.querySelector('div[id=projects-project-2]').style.marginLeft = 0 + "px";
        };
    
        if (window.scrollY > window.innerHeight + ( window.innerHeight / 2 ) + 100) {
            document.querySelector('div[id=projects-project-3]').style.marginLeft = 0 + "px";
        };
    
        if (window.scrollY > document.body.clientHeight - (window.innerHeight * 1.3)) {
            document.querySelector('footer').style.top = 0;
        };
    
        if (window.scrollY > ( window.innerHeight / 6 ) + document.querySelector('div[id=capabilities-section]').offsetTop ) {
            capabilitiesAnim();
        };
        
    }, 250); 
});

document.querySelector('div[id=background-text]').style.marginLeft = 30 + "%";

document.querySelector('div[id=main-content-holder]').style.boxShadow = "0px -15vh 20vh " + window.innerHeight / 25 + "vh #000E25";



function capabilitiesAnim() {
    let capabilitiesData = ['40%', '30%', '50%', '75%', '85%', '70%', '30%', '20%'];
                         // C#, C++, Javascript, Lua, HTML, CSS, Adobe Photoshop, Adobe Illustrator //

    for(let i = 0; i < 8; i++) {
        document.querySelector('div[id=capability-' + i + ']').style.width = capabilitiesData[i];
    };
};