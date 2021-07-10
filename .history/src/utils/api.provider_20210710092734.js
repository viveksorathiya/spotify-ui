import axios from "axios";

import config from "../../config";

const endpoint = config.API_ENDPOINT;

const secureGet = (relativeUrl, options) => {
	return axios.get(endpoint + relativeUrl, options);
};
const securePost = (relativeUrl, data, options) => {
	return axios.get(endpoint + relativeUrl, data options);
};
