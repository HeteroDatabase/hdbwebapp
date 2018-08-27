const API_EXECUTE_QUERY='http://localhost:8083/mds/executeQuery';

export function callExecuteScriptAPI(queryData,successHandler) {
	console.log(queryData);
	fetch(API_EXECUTE_QUERY, {
		method: 'post',
		body : JSON.stringify(queryData),
		headers: {
			'Content-Type' : 'application/json'
		},
	}).then(response => response.json())
	.then(successHandler)
	.catch(function(error) {
		console.log("Error in executeScript API call");
	});
}
