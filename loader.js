window.addEventListener("load", ()=>{
    const loader = document.querySelector(".lScreen");

    loader.classList.add("lHidden");

    loader.addEventListener("transitioned", () =>{
        document.body.removeChild("lScreen");
    })
})