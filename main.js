const summaryApi = "https://api.covid19api.com/summary";
const fetchCovidSummary = function () {
  fetch(summaryApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      storeData(data);
      console.log(data);
    });
};

const storeData = function (data) {
  let { TotalConfirmed: globalConfirmed, TotalRecovered: globalRecovered } = data.Global;
  const countries = [];
  
  data.Countries.forEach(countryObj => {
    countries.push(countryObj.Country);
  })
  popDropdown(countries);
  popStats(data, countrySubmit());

  popHero(globalConfirmed, globalRecovered);
};

const popDropdown = function(countries) {
const div = document.getElementById("countries");
countries.forEach(country => {
  const option = document.createElement("option");
  option.innerHTML = country.toUpperCase();
  option.value = country;
  div.appendChild(option);
})
}

const popHero = function (globalConfirmed, globalRecovered) {
  const confirmedDiv = document.querySelector(".hero-page-confirmed");
  const recoveredDiv = document.querySelector(".hero-page-recovered");

  confirmedDiv.textContent = addComma(globalConfirmed);
  recoveredDiv.textContent = addComma(globalRecovered);
};

const addComma = function (withoutComma) {
  withoutComma = withoutComma.toString();
  let lastThree = withoutComma.substring(withoutComma.length - 3);
  let otherNumbers = withoutComma.substring(0, withoutComma.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  let withComma = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return withComma;
};

const countrySubmit = function() {
  let selectedCountry = document.getElementById("countries").value;
  return selectedCountry;
}

const popStats = function(data, countrySubmit) {
  console.log(countrySubmit);
}

window.addEventListener("load", fetchCovidSummary);
