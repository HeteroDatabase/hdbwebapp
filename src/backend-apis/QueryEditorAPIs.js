import axios from 'axios';
import {BACKEND_BASE_URL} from '../utility/Constants.js';

const API_EXECUTE_QUERY= BACKEND_BASE_URL + '/executeQuery'

export function callExecuteScriptAPI(queryData,successHandler) {
	console.log(queryData);
	let headers = {
		'Content-Type' : 'application/json'
	};
	axios.post(API_EXECUTE_QUERY,queryData,headers)
		.then(response => response.json())
		.then(successHandler)
		.catch(function(error) {
			console.log("Error in executeScript API call");
		});
}
