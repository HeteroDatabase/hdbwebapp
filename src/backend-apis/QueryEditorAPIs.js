const API_EXECUTE_QUERY='http://192.168.99.1:8083/mds/executeQuery';

export function executeScript(queryData,successHandler) {
	console.log(queryData);
	fetch(API_EXECUTE_QUERY, {
		method: 'post',
		body : queryData,
		headers: {
			'content-type' : 'application/json'
		},
	}).then(successHandler);
}
