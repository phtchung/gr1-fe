let LINK =  'http://localhost:9000';
const api = async (url, method, body) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');

    let token = localStorage.getItem('token');
    console.log(token)
    if (token)
        myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions = body === null ? {
        method: method,
        headers: myHeaders,

    } : {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body),

    };

    let response = await fetch(LINK + url, requestOptions);
    let result = await response.json();
    result.status = response.status;
    return result;
}

export default api;
