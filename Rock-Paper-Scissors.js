
let container = document.querySelector(".container");
let userResult = document.querySelector(".user_result img");
let cpuResult = document.querySelector(".cpu_result img");
let result = document.querySelector(".result");
let optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) => {
  image.addEventListener("click", (e) => {
   image.classList.add("active");

   userResult.src = cpuResult.src = "Rock.png";
   result.textContent = "Wait...";
   optionImages.forEach((image2,index2) => {
    index !== index2 && image2.classList.remove("active");
   });

   container.classList.add("start");
  //  set timeout to delay the result calculation
   let time = setTimeout(()=>{

    container.classList.remove("start");

    let imgSrc = e.target.closest(".option_image").querySelector("img").src;
    userResult.src = imgSrc;

      let randomNumber = Math.floor(Math.random()*3);
      let cpuImages = ["Rock.png", "Paper.png", "Scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];
      // console.log(userValue, cpuValue);

      let outcomes = {
        RR : "Match Draw",
        RP : "Cpu Win !!",
        RS : "You Win !!",
        PR : "You Win !!",
        PP : "Match Draw",
        PS : "Cpu Win !!",
        SR : "Cpu Win !!",
        SP : "You Win !!",
        SS : "Match Draw",
      };

      let outcomeValue = outcomes[userValue + cpuValue];
      // console.log(outcomeValue);

      result.textContent = outcomeValue;

   },2500)
  });
});

