import axios from 'axios'

axios.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

axios.get('http://127.0.0.1:8888/polls/')
    .then(function (response) {
        alert(response);

        console.log(response);
    })
    .catch(function (err) {
        alert(err);

        console.log(err);
    });