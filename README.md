
# COVID19
[![Netlify Status](https://api.netlify.com/api/v1/badges/3c064434-1178-4228-8004-330967702cb7/deploy-status)](https://app.netlify.com/sites/covid19responsive)

<img src="https://lh3.googleusercontent.com/pw/ACtC-3daO0KVnT-TLMXDNPagSlmL5Z2bdMKcY6JhULysRdo8FS0-kdEPFR5HQEg7cr4Non8Jys_yMlZ9p10fEhieAMjLYbCYMAbHo3_N7AWC59Y1K4mCR2N7QFiJcArFgn9focBkZJHI3cabVbS_kwl1VuYL=w1920-h896-no" alt="cover image">

This is a brochure website for covid awareness. I was learning about CSS flexbox and responsive websites. So I tried to create a website with flexbox and also keeping it responsive
for all screen sizes. I wanted to practice CSS flexbox while creating a responsive website so I decided to create this website. You can view the [live preview](https://covid19responsive.netlify.app).
I used data provided by [WHO website](https://www.who.int/emergencies/diseases/novel-coronavirus-2019). 

![enter image description here](https://media.giphy.com/media/PkoCneYALsWSQrdz1z/giphy.gif)

## Statistics

For displaying statistics, I used [this API](https://documenter.getpostman.com/view/10808728/SzS8rjbc). You can access statistics for global as well as for every country. <br />
![enter image description here](https://lh3.googleusercontent.com/pw/ACtC-3fVgaqdAUyPVwT6rt6wkYV91ag445UmGxX6EmUkHo9XD-DmeNlq4ZXm34IvCemMaDnIJzynUGRsixkM-LGkJxAQC9shp-lzqcsn4vTJX4YVtDIGDgwT2bWsPn7MhFKsdN9eYBLVDXXnz9XwVDDTfQ57=w1920-h150-no)

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
  
  ![enter image description here](https://media4.giphy.com/media/lqYihUdrRu84DlojqY/giphy.gif)
