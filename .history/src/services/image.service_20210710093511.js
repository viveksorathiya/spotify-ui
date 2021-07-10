import { secureGet } from '../utils/api.provider'
import config from '../../config'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Bearer ${}`,
			},
		};
		return secureGet(restApiService.create, requestOptions);
}