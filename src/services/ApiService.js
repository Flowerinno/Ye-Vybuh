
function ApiService() {
	const url = "http://46.101.141.117:8000/";
	const userToken = localStorage.getItem("userToken");
	const headers = {
		headers: {Authorization: `Bearer ${userToken} `},
	};
	return {
		url,
		headers,
	};
}

export default ApiService;

