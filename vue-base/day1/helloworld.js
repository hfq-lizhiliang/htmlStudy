var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world'
    }

});


var app2 = new Vue({
    el: '#app2',
    data:{
        message: "页面加载于" + new Date().toLocaleString()
    }
});



var app3 = new Vue({
    el: '#app3',
    data:{
        seen: true
    }
});

var app4 = new Vue({
    el: '#app4',
    data:{
        todos:[
            {text: '学习 JavaScript'},
            {text: '学习 java'},
            {text: '学习 python'}
        ]
    }
});

var app5 = new Vue({
    el: '#app5',
    data:{
        message: 'hello world'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }

});

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello Vue!'
    }
});


var obj = {
    foo: 'bar'
};

// 阻止修改现有的属性，也意味着响应系统无法再追踪变化。
Object.freeze(obj);

var app8 = new Vue({
    el: '#app8',
    data: obj
});


// 数据与方法
var data = { a: 1 };
var vm = new Vue({
    el: '#app9',
    data: data
});


console.log(vm.$data === data);
console.log(vm.$el === document.getElementById('app9'));
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
    // 这个回调将在 `vm.a` 改变后调用
    console.log(newValue, oldValue)
});

