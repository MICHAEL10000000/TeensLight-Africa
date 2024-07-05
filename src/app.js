const nav = document.querySelector("nav")

document.querySelector(".Menu").addEventListener("click", ()=>{
    nav.classList.remove("hidden")
})
document.querySelector(".close").addEventListener("click", ()=> {
    nav.classList.add("hidden")
})