
# COVID19
[![Netlify Status](https://api.netlify.com/api/v1/badges/3c064434-1178-4228-8004-330967702cb7/deploy-status)](https://app.netlify.com/sites/covid19responsive)

![enter image description here](https://i.ibb.co/vHDDX7x/cover.png)

This is a brochure website for covid awareness. I was learning about CSS flexbox and responsive websites. So I tried to create a website with flexbox and also keeping it responsive
for all screen sizes. I wanted to practice CSS flexbox while creating a responsive website so I decided to create this website. You can view the [live preview](https://covid19responsive.netlify.app).
I used data provided by [WHO website](https://www.who.int/emergencies/diseases/novel-coronavirus-2019). 

![enter image description here](https://i.ibb.co/WknB1k4/who.gif)

## Statistics

For displaying statistics, I used [this API](https://documenter.getpostman.com/view/10808728/SzS8rjbc). You can access statistics for global as well as for every country. <br />
![enter image description here](https://i.ibb.co/qxsv6Hj/global-stats.png)

**For global** these stats includes - 
```
 "Global": {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  }
  ```
  **For countries** it includes - 
  ```
  {
      "Country": "India",
      "CountryCode": "IN",
      "Slug": "india",
      "NewConfirmed": 515,
      "TotalConfirmed": 3082,
      "NewDeaths": 14,
      "TotalDeaths": 86,
      "NewRecovered": 37,
      "TotalRecovered": 229,
      "Date": "2020-04-05T06:37:00Z"
    }
  ```
  We can also access all covid cases from the first case detected in a region to the most recent one. I inserted these data in chartjs to create a line graph. 
  ![enter image description here](https://i.ibb.co/gdW4vMC/graph.gif)
