alert('你好');

axios.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

axios.get('127.0.0.1:8000/polls/')
    .then(function (response) {
        alert(response);

        console.log(response);
    })
    .catch(function (err) {
        alert(err);

        console.log(err);
    });