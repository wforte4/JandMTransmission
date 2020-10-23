import { catchAxiosError } from "./error";
import { post, get , postFile} from "./restservice";
import Router from 'next/router';

export async function submitContact(name, message, email, cellphone) {
    // Request data to post to createprofile route on rest api
    const newfetch = await fetch('http://localhost:3600/contact', {
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
    .then(function(res) {
        return res.status
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

    if(newfetch) {
        return newfetch
    } else {
        return 404
    }
}