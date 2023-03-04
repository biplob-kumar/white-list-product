const openModalBtn=document.querySelectorAll(".open-modal")
const modal=document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeMOdalBtn = document.querySelector(".close-modal")


const openModal=function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeMoodal=function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}


for (let i = 0; i < openModalBtn.length; i++) {
openModalBtn[i].addEventListener("click",openModal)
   
closeMOdalBtn.addEventListener("click",closeMoodal)
}