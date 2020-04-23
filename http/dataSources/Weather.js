var http = require('http');
var querystring = require('querystring');
var DataSourceClass = require('./DataSourceClass')

function parseWeatherData (data) {
  data = JSON.parse(data);
    let {
      weather: [
        {
          main: weather,
          description: weatherDescription,
          icon
        }
      ],
      name: city,
      main: {
        temp,
        feels_like: feelsLike
      },
      wind: { 
        speed: windSpeed 
      } 
    } = data

    return {
      city,
      weather, 
      weatherDescription,
      temp,
      feelsLike,
      windSpeed,
      iconUrl: `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
}

class WeatherDataSource extends DataSourceClass {
  constructor () {
    super ('WEATHER')
  }

  subscribeToDataUpdate (fn) {
    let apiKey = process.env.weatherApiKey || ''
    if (!apiKey) return
    this.startTick(async function () {
      var data = querystring.stringify({
        id: 2950159,
        units: "metric",
        appid: apiKey // ed7221842fab6edb077f6e85fa5a3b8c
      });
      
      var options = {
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?' + data,
        method: 'GET',
        family: 4
      };
      var httpreq = http.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
          fn(parseWeatherData(chunk))
        });
      });
      httpreq.on('error', function (err) {
        console.error(err)
      })
      httpreq.write('');
      httpreq.end();
    }, (process.env.refreshWeatherDataSeconds * 1000) || 600000)
  }

}

module.exports = new WeatherDataSource()