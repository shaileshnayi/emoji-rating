const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

//event happen when someone click on star
starsEl.forEach((starsEl, index)=>{
    starsEl.addEventListener("click", ()=> {

        updateRating(index)

    });
});

//adding active class on gray star when someone click on stars
function updateRating(index){
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index +1){
            starsEl.classList.add("active")
        } else {
            starsEl.classList.remove("active");
        }
    });

    //adding style according to rating deffrent emoji come in defferent color
    emojisEl.forEach(emojisEl=> {
        emojisEl.style.transform = `translateX(-${index * 50}px)`;
        emojisEl.style.color = colorsArray[index]
    })

}