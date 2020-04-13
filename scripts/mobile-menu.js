let rotationCounter = 0;
document.querySelector('div[id=burger-menu-button]').addEventListener('click', function() {
    let element = document.querySelector('div[id=burger-menu-button]');

    if(rotationCounter === 0)
    {
        element.style = 'transform: rotate(90deg);';
        document.querySelector('div[id=burger-menu]').style = 'margin-left: calc(0px);';
        document.querySelector('div[id=burger-menu-text]').style = 'box-shadow: 20px 0px 100px black;';

        rotationCounter++;
    }
    else
    {
        element.style = 'transform: rotate(0deg);';
        document.querySelector('div[id=burger-menu]').style = 'margin-left: -80vw;';
        document.querySelector('div[id=burger-menu-text]').style = 'box-shadow: none;';

        rotationCounter = 0;
    }
});