const express = require("express")
const app = express()

const axios = require('axios').default;


app.get('/', (req, res) => {
  axios.get('https://api.openweathermap.org/data/2.5/forecast?q=place&appid=e4599163129ff29d293e4919907d1117')
    .then(function (response) {
      var array = [];
      // console.log(response.data.list);
      for (var i = 0; i < response.data.list.length; i++) {
        array.push(response.data.list[i].dt_txt)
        // console.log(response.data.list[i].dt_txt.split(" ")[0])

      }
      for (var i = 0; i < response.data.list.length; i++) {

        // console.log(response.data.list[i].dt_txt.split(" ")[0])
        // if (array[i].split(" ")[0] != array[0].split(" ")[0]) {

        // } else {
        //   console.log(array[i].split(" ")[0])
        // }
      }
    })
    .catch(function (error) {

      console.log(error);

    })


})

()




















app.listen(3000, (req, res) => {
  console.log("server has started")



})