const open_modal = document.querySelector("#open-modal");
const modalElement = document.querySelector(".modal");
const modalClose =  document.querySelector(".modal-overlay");


open_modal.addEventListener("click",()=>{
    modalElement.classList.add("open")
})

modalClose.addEventListener("click",()=>{
    modalElement.classList.remove("open")
})