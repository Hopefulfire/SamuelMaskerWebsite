let clickable = 0;

function OpenNav(){
    if(clickable == 0){
        document.getElementById("nav").classList = "nav-animation-open"
        clickable = 1;
    }else if(clickable == 1){
        document.getElementById("nav").classList = "nav-animation-close"
        clickable = 0;
    }else{
        location.reload
    }
    
}