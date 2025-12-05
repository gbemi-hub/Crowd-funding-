const par = document.querySelector("section.section1 div a");
 const selectedModel = document.querySelector("section.selected");
 const cancel = document.querySelector(".cancel")
 const success = document.querySelectorAll(".active");
 const completed = document.querySelector("section.completed")
 const got = document.querySelector("section.completed button")
 const active2 = document.querySelectorAll("section.section3 button")
 const hamburger = document.querySelector(".cancels")
 const iconClose = document.querySelector("#close-icon")
 const mobileNav = document.querySelector("div#mobile-nav")

par.addEventListener("click" ,function(){
     selectedModel.style.display = "block"
     document.body.style.overflow = "hidden"
})
cancel.addEventListener("click",()=>{
     selectedModel.style.display = "none"
     document.body.style.overflow = "auto"
})

success.forEach(key => {
    key.onclick = ()=>{
     selectedModel.style.display = "none"
     completed.style.display = "block"
    }
})
got.onclick = ()=>{
    completed.style.display = "none"
      document.body.style.overflow = "auto"

}

active2.forEach(active=>{
     active.onclick =()=>{
          const targetid = active.dataset.target;
          const targetsection = document.getElementById(targetid)
           selectedModel.style.display = "block"
           targetsection.scrollIntoView({behavior:"smooth",block:"center"});
            document.body.style.overflow = "hidden"
          
     }
})
hamburger.onclick = () => {
     mobileNav.style.display = "block"
       document.body.style.overflow = "hidden"
}

iconClose.onclick = () => {
        mobileNav.style.display = "none"
          document.body.style.overflow = "auto"
}
