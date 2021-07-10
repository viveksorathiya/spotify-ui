import { secureGet } from '../utils/api.provider'

function getRandomImage() {
    const requestOptions = {
			headers: {
				"Content-Type": "multipart/form-data",
				"Authorization": `Bearer ${authenticationService.currentUserValue.tokens.access.token}`,
			},
		};
		return securePost(restApiService.create, data, requestOptions);
}