


let getHadith = document.querySelector(".getHadith");
let hadithNumber = document.querySelector(".hadithNumber");
let hadithArabic = document.querySelector(".hadithArabic");
let hadithStatus = document.querySelector(".hadithStatus");


getHadith.addEventListener("click", function () {

  fetch("https://hadithapi.com/api/hadiths?apiKey=$2y$10$QYd9SalOt1tObAYPIYYIqQfUHNrrFZkpXX0OReSOCH7F59sySDcm")
    .then((response) => response.json())
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.hadiths.data.length);
      let randomHadith = data.hadiths.data[randomIndex];
      hadithNumber.innerHTML = randomHadith.hadithNumber;
      hadithArabic.innerHTML = randomHadith.hadithArabic;
      hadithStatus.innerHTML = randomHadith.status;
    })
    .catch((error) => {
      console.log(error);
    });

    hadithArabic.innerHTML = "Loading...";

});