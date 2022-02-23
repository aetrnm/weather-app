import chalk from 'chalk';
import { geocode } from './utils/geocode.js';
import { forecast } from './utils/forecast.js';

const location = process.argv[2];

if (!location) {
    console.log(chalk.yellow.inverse('Please, provide an address!'))
    process.exit();
}


geocode(location, (error, data) => {
    if (error) {
        return console.log(error);
    }

    forecast(data.lat, data.long, (error, response) => {
        if (error) {
            return console.log(error);
        }

        console.log(data.location);
        console.log(response);
    })
})