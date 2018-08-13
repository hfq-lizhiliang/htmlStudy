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


var app7 = new Vue({
    el: '#app-7',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});


var app8 = new Vue({
    el: '#app-8',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
});

new Vue({
    el: '#app-10'
});

// 注册自定义组件
Vue.component('runoob', {
    template: '<h1>自定义组件!</h1>'
});

// 创建根实例
new Vue({
    el: '#app-11'
});

new Vue({
    el: "#app-12",
    data: {
        counter: 0
    }
});

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

new Vue({
    el: "#app-13"
});


new Vue({
    el: '#app-14',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
});


Vue.component('alert-box', {
    template: '<div class="demo-alert-box"> ' +
    '<strong>Error!</strong>' +
    '<slot></slot> ' +
    '</div>'
});

new Vue({
   el: "#app-15"
});
