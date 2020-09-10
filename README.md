
# COVID19
[![Netlify Status](https://api.netlify.com/api/v1/badges/3c064434-1178-4228-8004-330967702cb7/deploy-status)](https://app.netlify.com/sites/covid19responsive)

<img src="https://lh3.googleusercontent.com/R_oKdADix4AZHSmIRnFumWjkUKi2MicdQaK3o165o_F6B89eRvP4qCV5uWEJU9X3vg77hKvBqbM8ZYfCj5ivbMmZV9KX5RXvNCKLjksdwX97e5EW632YnXAhD5hZOxNLo_kqlyy99NGf4c81Isn3pDnqXMRaUGHop80C1auSlnSyoSL8MIWP3DuijC1Xcnp0as2DHvILIA9tRwBqNK7ZOhW70sY3Zz-nillePp0YpyQyQcQ5sfD5DaT22WmXTVgDOGUiIxCbGVKaJ1zkQ-LW-w9pCQge_AOdMamfmVoUDhVuW5Q13Cgcs9s4vJzFUU5Esd5KJyfjAz88VWSQOdj0SElX57E5L96x_yHFkX-GB9PutFHu7hV9TAPpQK3r5iVr1xhiONhhg02UASfpV_GvAJWD1cASQdUtUSH1QvST9A_5CZo55agW9CpQP3pJffisOP2wtbIVcEUN-GzeGOl4cicCFuc2EhWYKYogwwX3NJ3P1gUg7HZyqEFHudBACuU7NXfl68sBUPZNIPpDHGhXSWtdDawe1mC-PDCdL_lkt27nlYMWttlGwTuSSPyQsP6NjOm1T0SUZvZ9UQA7BnwL7Xfyylx0vrJU7N4QK2XFm24uwHYm4LwWzxYa30-YKZ1NfyXl5KV5UVGfGwm2BWZjSYCOo0oA0eg2T-tMHrJH5-UkUVX_sj35FiFX94Y9=w1920-h896-no?authuser=0" alt="cover image">

This is a brochure website for covid awareness. I was learning about CSS flexbox and responsive websites. So I tried to create a website with flexbox and also keeping it responsive
for all screen sizes. I wanted to practice CSS flexbox while creating a responsive website so I decided to create this website. You can view the [live preview](https://covid19responsive.netlify.app).
I used data provided by [WHO website](https://www.who.int/emergencies/diseases/novel-coronavirus-2019). 

![enter image description here](https://media.giphy.com/media/PkoCneYALsWSQrdz1z/giphy.gif)

## Statistics

For displaying statistics, I used [this API](https://documenter.getpostman.com/view/10808728/SzS8rjbc). You can access statistics for global as well as for every country. <br />
![enter image description here](https://lh3.googleusercontent.com/FCTsebrIqhfaL_y9vEHxTj8Q_VDcbsKvnDG5KvZ1vWrECSGDouNl2QRqk_ZXE87JChEYADPVxL8Hep6C6MA5mpCUL-GX0fqwHkCh8U3GBndYyBUx4dgnEIB67Cm6o-D_VrgBZgY7rK8q8VJENGpNPh2OTZHFNqzJ0UxrQ-i7vBVH58uSLv30TbXaYw_EnLjj_cUNQ4hWOQGD1ySPo68M8hXO_S_Gr-QxRPRzDVjTa9vV1UdC7wm5v-bgbJN26GuzxB91iP3iapaEpKPIltuIoGJ2YFYL9BYmvCoqzfA1TNipQvBWtb0k3Zvm93Y31AG_eAyO07HYYKTdA7z2Es1bpBWjyZZcacFZdK8Kz-QoaXKxOoGbNAqCgRXU-Yh04vu9PKvLB8ScrKRzA97CYHtna1Y1vM0KqRWLMuyjKV90nkk8AnI-V0vXZjpiZpF85rZlu3Oo5iW6w07J_0A4ijXALRrlkrBaUIEf_ctsMC4TFEtZ6PEtmzP4CX_DtNXogXbui7SKZjL-MvsMYSuC7ZK-w0QMdCeZuLaFiY4qxoSCtT1u6ceJRopswsDj-fUSYfxZYPTaz8208sDUksn3rM4RYVqwlOdnGE4fI3UJJwoPrnIbmE4PtzyCvkEB0HApDw-yMs1cRbc74G1_0MHRydU9HUEW62Cd2vSzV55w-W2I81lza46khEToUozTiwsm=w1920-h150-no?authuser=0)

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
