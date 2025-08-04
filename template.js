
  const joinBtn = document.getElementById("joinBtn");
  const joinForm = document.getElementById("joinForm");
  const first_email = document.getElementById("first_email");

  joinBtn.addEventListener("click", () =>{
    joinForm.style.display = "flex";
    joinBtn.style.display = "none"; 
    first_email.style.display = "none";
  });

// const moreBtn = document.getElementById("moreBtn")
// const more_details_p = document.getElementById("more_details_p")

// moreBtn.addEventListener("click", ()=>{
//     more_details_p.style.display = "flex"
//     more_details_p.style.flexDirection = "column"
//     moreBtn.style.display = "none"
// })

// const less_details= ()=>{
//     let less = document.getElementById("more_details_p")
//     less.style.display = "none"
// }

// const moreBtn1 = document.getElementById("moreBtn1")
// const more_details_p1 = document.getElementById("more_details_p1")

// moreBtn1.addEventListener("click", ()=>{
//     more_details_p1.style.display = "flex"
//     more_details_p1.style.flexDirection = "column"
//     moreBtn1.style.display = "none"
// })

// const more_details = () =>{
//     let more = document.getElementById("more_details_p")
//     let moreBtn = document.getElementById("moreBtn")

//     more.style.display = "flex"
//     more.style.flexDirection = "column"
//     moreBtn.style.display = "none"
// }

// const less_details = () =>{
//     let less = document.getElementById("more_details_p")
//     let more = document.getElementById("moreBtn")

//     less.style.display = "none"
//     more.style.display = "block"
// }

const more_details = document.querySelectorAll(".more_details");

more_details.forEach((Btn,index) => {
 Btn.addEventListener("click", ()=>{
    document.getElementById(`${index}`).style.display = "flex"
    document.getElementById(`${index}`).style.flexDirection = "column"
 })
})






