var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World",
        seen: true
    }

});

app.message = 'this is first vue';


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});
// 控制台输入 aapp2.message="新消息"，鼠标悬浮在上面一会，会出现新消息三个字

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
app3.seen = false;


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
});
//在控制台输入 app4.todos.push({ text: '新项目' })，会在列表后面添加一个新元素


var app5 = new Vue({
    el: "#app-5",
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});


var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
app6.message = "Hello, down";