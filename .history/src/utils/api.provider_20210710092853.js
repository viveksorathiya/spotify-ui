import axios from "axios";

import config from "../../config";

const endpoint = config.API_ENDPOINT;

const secureGet = (relativeUrl, options) => {
	return axios.get(endpoint + relativeUrl, options);
};
const securePost = (relativeUrl, data, options) => {
	return axios.post(endpoint + relativeUrl, data, options);
};
const securePut = (relativeUrl, data, options) => {
	return axios.put(endpoint + relativeUrl, data, options);
};
const secureDelete = (relativeUrl, options) => {
	return axios.delete(endpoint + relativeUrl, options);
};
