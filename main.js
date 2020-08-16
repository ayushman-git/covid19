const summaryApi = "https://api.covid19api.com/summary";
let parsedData = null;
let graphObj = {
  date: [],
  case: [],
};
let selectedCoutrySlug = null;
const fetchCovidSummary = function () {
  fetch(summaryApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsedData = data;
      main();
    });
};

const main = function () {
  popHero();
  popDropdown();
  defaultGlobal();
};

const popDropdown = function () {
  const countries = getCountryName();
  const div = document.getElementById("countries");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.innerHTML = country.toUpperCase();
    option.value = country;
    div.appendChild(option);
  });
};

const getCountryName = function () {
  const countries = [];
  parsedData.Countries.forEach((countryObj) => {
    countries.push(countryObj.Country);
  });
  return countries;
};

const popHero = function () {
  let {
    TotalConfirmed: globalConfirmed,
    TotalRecovered: globalRecovered,
  } = parsedData.Global;

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
  let withComma =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return withComma;
};

const countrySubmit = function () {
  let selectedCountry = document.getElementById("countries").value;
  matchCountry(selectedCountry);
};

const popStats = function (selectedCountryStats) {
  const selCountryConfirmed = document.querySelector(
    ".selected-country-confirmed"
  );
  const selCountryDeaths = document.querySelector(".selected-country-deaths");
  const selCountryRecovered = document.querySelector(
    ".selected-country-recovered"
  );
  selCountryConfirmed.textContent = addComma(
    selectedCountryStats.TotalConfirmed
  );
  selCountryDeaths.textContent = addComma(selectedCountryStats.TotalDeaths);
  selCountryRecovered.textContent = addComma(
    selectedCountryStats.TotalRecovered
  );
};

const defaultGlobal = function () {
  popStats(parsedData.Global);
};

const matchCountry = function (selectedCountry) {
  let selectedCountryStats = null;
  parsedData.Countries.forEach((countryObj) => {
    if (selectedCountry === countryObj.Country) {
      selectedCountryStats = countryObj;
      selectedCoutrySlug = countryObj.Slug;
    } else if (selectedCountry === "Global") {
      selectedCountryStats = parsedData.Global;
    }
  });
  popStats(selectedCountryStats);

  fetch(
    `https://api.covid19api.com/total/dayone/country/${selectedCoutrySlug}/status/confirmed`
  )
    .then((response) => {
      return response.json();
    })
    .then((graphData) => {
      graph(graphData);
    });
};

const graph = function (graphData) {
  graphObj = {
    date: [],
    case: [],
  };
  graphData.forEach((day) => {
    let dateString = day.Date.toString();
    let dateFormatted = dateString.substr(0, dateString.indexOf("T"));
    graphObj.date.push(dateFormatted);
    graphObj.case.push(day.Cases);
  });

  let ctx = document.getElementById("country-chart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: graphObj.date,
      datasets: [
        {
          label: "Case per day",
          data: graphObj.case,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

window.addEventListener("load", fetchCovidSummary);
