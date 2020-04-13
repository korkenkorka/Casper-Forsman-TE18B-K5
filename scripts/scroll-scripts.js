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
    
        if (window.scrollY > document.querySelector('div[id=projects-project-1]').offsetTop - ( window.innerHeight / 2 ) ) {
            document.querySelector('div[id=projects-project-1]').style.marginLeft = 0 + "px";
        };

        if (window.scrollY > document.querySelector('div[id=projects-project-2]').offsetTop - ( window.innerHeight / 2 ) ) {
            document.querySelector('div[id=projects-project-2]').style.marginLeft = 0 + "px";
        };

        if (window.scrollY > document.querySelector('div[id=projects-project-3]').offsetTop - ( window.innerHeight / 2 ) ) {
            document.querySelector('div[id=projects-project-3]').style.marginLeft = 0 + "px";
        };
    
        if (window.scrollY > document.body.clientHeight - (window.innerHeight * 1.3)) {
            document.querySelector('footer').style.top = 0;
        };
        
        if (window.scrollX > 600) {
            if (window.scrollY > ( window.innerHeight / 6 ) + document.querySelector('div[id=capabilities-section]').offsetTop ) {
                capabilitiesAnim();
            };
        }
        else 
        {
            if (window.scrollY > document.querySelector('div[id=capabilities-section]').offsetTop ) {
                capabilitiesAnim();
            };
        };
        
    }, 250); 
});

if (window.scrollX > 600) { 
    document.querySelector('div[id=background-text]').style.marginLeft = 30 + "%";
};



function capabilitiesAnim() {
    let capabilitiesData = ['40%', '30%', '50%', '75%', '85%', '70%', '30%', '20%'];
                         // C#, C++, Javascript, Lua, HTML, CSS, Adobe Photoshop, Adobe Illustrator //

    for(let i = 0; i < 8; i++) {
        document.querySelector('div[id=capability-' + i + ']').style.width = capabilitiesData[i];
    };
};