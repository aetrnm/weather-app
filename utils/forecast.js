import request from 'postman-request';

export function forecast(lat, long, callback) {
    const url = `http://api.weatherstack.com/current?access_key=7d9c7c9da234e899f388b9330a25a91e&query=${lat},${long}&units=m`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            return callback('Unable to connect to weather API! :(', undefined);
        }
        if (response.body.success === 'false') {
            return callback('Unable to find location! :(', undefined);
        }
        const data = response.body;
        const temperature = data.current.temperature;
        const temperatureFeelsLike = data.current.feelslike;
        const weatherDescription = data.current.weather_descriptions[0];
        callback(undefined, `${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${temperatureFeelsLike} degrees out.`);
    })
}