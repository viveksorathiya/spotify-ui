import { secureGet } from '../utils/api.provider'
import config from '../config'
import API from '../constants/api.constants'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Client-ID ${config.ACCESS_KEY}`,
			},
		};
		return secureGet(`${API.PHOTOS}/$`, requestOptions);
}

export {
    getRandomImage
}