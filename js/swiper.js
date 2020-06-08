document.addEventListener ("DOMContentLoaded", function () {

    let swipeList = document.querySelector (".swipeList")

    let  initialX, currentX, movedX;
    let winwidth = Math.max (document.documentElement.clientWidth || 0, window.innerWidth || 0, )

    let icon = document.createElement ('span')
    icon.textContent ="🗑️";
    icon.style.fontSize = "2em";
    icon.style.position ="absolute";
    icon.style.top = '1em';
    

    
    function startTouch (event) {

        initialX = event.touches [0].clientX
        if (event.target.classList.contains ('animate')){
            event.target.classList.remove ('animate')
        }
    }

    function moveTouch (event){
        if (event.target !== event.currentTarget) {
            currentX = event.touches [0].clientX;
            movedX = currentX - initialX;
            event.target.style.left = movedX + 'px';
            if (currentX > winwidth * 0.75){
                console.log ("get ready")
                icon.style.left = '-' +(movedX - 16 ) + 'px';
                event.target.appendChild(icon)
            }
            else {
                if (event.target.children.length){
                    event.target.removeChild (icon)
                }
            }
            
        }
        
    }

    function endTouch (event) {

        if (currentX > winwidth * 0.75){
            console.log ("DEAD!")
            event.target.removeChild (icon);
            event.target.classList.add('animate');
            event.target.style.left = 110%
            setTimeout (function (){
                event.target.style.height = '0px';
            }, 200)
            setTimeout (function (){
                swipeList.removeChild (event.target)
            }, 500)
            
        }
else {
        event.target.style.left = '0';
    event.target.classList.add ('animate')}

    }






swipeList.addEventListener ("touchstart", startTouch, false )
swipeList.addEventListener ("touchmove", moveTouch, false )
swipeList.addEventListener ("touchend", endTouch, false )

})