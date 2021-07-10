import { secureGet } from '../utils/api.provider'
import config from '../config'
import config from '../constants/'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Client-ID ${config.ACCESS_KEY}`,
			},
		};
		return secureGet(``, requestOptions);
}

export {
    getRandomImage
}