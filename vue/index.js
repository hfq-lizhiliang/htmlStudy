var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World",
        seen: true
    }

});

app.message = 'this is first vue';
// app.seen = false;

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});