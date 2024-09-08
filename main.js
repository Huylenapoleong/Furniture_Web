 function myNavs()
 {
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right=="0%")
        {
            nav.style.right="-50%";
            bar.src="pic/menu.png";
        }else{
            nav.style.right="0%";
            bar.src="pic/x.png";
        }
    }
 }

function Active()
{
    let header = document.getElementById("header");
    let bulb = document.getElementById("darkbulb");
    let bar=document.getElementById("bar");
    window.addEventListener("scroll",function(){
        if (this.window.scrollY>100) {
            header.classList.add("active");  
            bulb.src="pic/bulb.svg"; 
          
        }else{
            header.classList.remove("active");
            bulb.src="pic/bulb.png"; 
          
        }
    })
}

Active();
myNavs();