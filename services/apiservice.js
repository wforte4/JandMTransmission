import { catchAxiosError } from "./error";
import { post, get , postFile} from "./restservice";
import Router from 'next/router';

export async function submitContact(name, message, email, cellphone) {
    // Request data to post to createprofile route on rest api
    fetch('http://localhost:3600/contact', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "message": message,
            "cellphone": cellphone,
            "email": email
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
}