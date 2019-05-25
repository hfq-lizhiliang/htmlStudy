/*
1、函数常见写法
 */
function run() {
    alert("常见写法");
}

run(); // 调用

/*
2、函数匿名写法
 */
var run1 = function () {
    alert("匿名函数");
};
run1(); // 调用

/*
3、方法作为一个对象
 */

// 作为对象方法，函数写法，这里创建了两个函数外面用{}包裹起来
var ObjFunc = {
    fun1: function () {
        alert("放在对象内部 fun1");
    },
    fun2: function () {
        alert("放在对象内部 fun2");

    }
};

ObjFunc.fun1();
ObjFunc.fun2();

/*
4、构造函数中给对象添加方法

javascript中的每个对象都有prototype属性，Javascript中对象的prototype属性的解释是：返回对象类型原型的引用。
 */
var funName = function () {
    
};
funName.prototype.way = function () {
    alert('这是在funName函数上的原始对象上加了一个way方法，构造函数中用到');
};

var funname = new funName();
funname.way();

/*
5、自执行函数
 */
//方法1：最前最后加括号
(
    function () {
        alert("最前最后加括号，方法1");
    }()
);

//方法2：function外面加括号
(function () {
    alert("function外面加括号, 方法2");
})();

//方法3：function前面加运算符，常见的是!与void
!function () {
    alert("function前面加运算符 !，方法3");
}();

void function () {
    alert("function前面加运算符 void，方法3")
}();

