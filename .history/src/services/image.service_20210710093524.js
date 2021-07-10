import { secureGet } from '../utils/api.provider'
import config from '../../config'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Bearer ${config.ACCESS_KEY}`,
			},
		};
		return secureGet(restApiService.create, requestOptions);
}