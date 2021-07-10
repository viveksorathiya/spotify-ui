import { secureGet } from '../utils/api.provider'
import 

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Authorization": `Bearer ${authenticationService.currentUserValue.tokens.access.token}`,
			},
		};
		return secureGet(restApiService.create, requestOptions);
}