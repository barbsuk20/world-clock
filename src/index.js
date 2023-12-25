function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Buenos Aires
  let bairesElement = document.querySelector("#buenos-aires");
  if (bairesElement) {
    let bairesDateElement = bairesElement.querySelector(".date");
    let bairesTimeElement = bairesElement.querySelector(".time");
    let bairesTime = moment().tz("America/Buenos_Aires");

    bairesDateElement.innerHTML = bairesTime.format("MMMM Do, YYYY");
    bairesTimeElement.innerHTML = bairesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Caracas
  let caracasElement = document.querySelector("#caracas");
  if (caracasElement) {
    let caracasDateElement = caracasElement.querySelector(".date");
    let caracasTimeElement = caracasElement.querySelector(".time");
    let caracasTime = moment().tz("America/Caracas");

    caracasDateElement.innerHTML = caracasTime.format("MMMM Do, YYYY");
    caracasTimeElement.innerHTML = caracasTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".city-container");
  citiesElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <br />
        <a href="/" id="back">Back to home</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
