import request from 'postman-request';

export function geocode(address, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWV0cm5tIiwiYSI6ImNreno1bzl3czA2eHEzYm54cWk5eXc2NmwifQ.SStLDKNCoJbO3AzBkA-f7Q&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            return callback('Unable to connect to location API! :(', undefined);
        }
        else if (response.body.features.length === 0) {
            return callback('Unable to find location! :(', undefined);
        }
        const data = response.body.features[0];
        const long = data.center[0];
        const lat = data.center[1];
        const location = data.place_name;
        callback(undefined, { long: long, lat: lat, location: location })
    })
}