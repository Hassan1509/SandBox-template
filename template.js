
  const joinBtn = document.getElementById("joinBtn");
  const joinForm = document.getElementById("joinForm");
  const first_email = document.getElementById("first_email");

  joinBtn.addEventListener("click", () =>{
    joinForm.style.display = "flex";
    joinBtn.style.display = "none"; 
    first_email.style.display = "none";
  });

const more_details = document.querySelectorAll(".more_details");
const lessButtons = document.querySelectorAll(".less")

more_details.forEach((Btn,index) => {
 Btn.addEventListener("click", ()=>{
    document.getElementById(`${index}`).style.display = "flex"
    document.getElementById(`${index}`).style.flexDirection = "column"
    document.querySelectorAll(".less")[index].style.display = "block";
    Btn.style.display = "none"
 })
})

lessButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".more_details_p")[index].style.display = "none";
      document.querySelectorAll(".less")[index].style.display = "none";
      document.querySelectorAll(".more_details")[index].style.display = "block";
    });
  });

  const project = document.getElementById("project")
  const startForm = document.getElementById("startForm")

  project.addEventListener("click",()=>{
    startForm.style.display = "flex" 
    startForm.style.flexDirection = "column" 
    project.style.display = "none"
  })






