var accordians = document.querySelectorAll(".accordian");

accordians.forEach(function(accordian){
    var icon = accordian.querySelector(".icon");
    var ans = accordian.querySelector(".answer");
    var flag = false;
    accordian.addEventListener("click",function(){
        // ans.classList.toggle(".active");
        // icon.classList.toggle(".active");
        if(flag === false){
        ans.style.maxHeight = ans.scrollHeight + "px";
        icon.style.transform = "rotate(45deg)";
        flag = true;
        }else{
        ans.style.maxHeight = "0px";
        icon.style.transform = "rotate(-90deg)";
        flag = false;
        }
        
    })
})