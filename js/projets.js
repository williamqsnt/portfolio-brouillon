

const projets1 = document.querySelector(".projets1");
const learn = document.querySelector(".learn")
const bgChange = document.querySelector(".bgChange");
const btnclear = document.getElementById("btnclear");


projets1.addEventListener("click", ()=>{
    if(learn.classList.contains("displaynone")){
        learn.classList.remove("displaynone");
        bgChange.classList.remove("displaynone");
        learn.classList.add("displayflex");
        bgChange.classList.add("displayflex");
        
    }
    learn.classList.add("displayflex");
    bgChange.classList.add("displayflex");
})

btnclear.addEventListener("click", ()=>{
    if(learn.classList.contains("displayflex")){
    learn.classList.add("displaynone");
    bgChange.classList.add("displaynone");
    }

   
    
})