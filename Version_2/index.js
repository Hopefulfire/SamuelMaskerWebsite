let clickable = 0;

function OpenNav(){
    if(clickable == 0){
        document.getElementById("nav").classList = "nav-animation-open"
        document.getElementById("content").style.flex = "90%"
        clickable = 1;
    }else if(clickable == 1){
        document.getElementById("nav").classList = "nav-animation-close"
        document.getElementById("content").style.flex = "100%"
        clickable = 0;
    }else{
        location.reload
    }
    
}
function NavImgH(){
    document.getElementById("Mbutt").setAttribute("src","GlobalImages/Hopeful-NoWords-Inverted.png")
}
function NavImgL(){
    document.getElementById("Mbutt").setAttribute("src","GlobalImages/Hopeful-NoWords.png")
}