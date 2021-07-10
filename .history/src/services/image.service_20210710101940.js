import { secureGet } from '../utils/api.provider'
import config from '../config'
import API from '../constants/api.constants'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
			},
		};
		return secureGet(`${API.PHOTOS}/${API.RANDOM}`, requestOptions);
}

export {
    getRandomImage
}