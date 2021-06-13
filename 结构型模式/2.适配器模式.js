// 例子1,原本在所有代码里都条用了a方法，突然有一天，有人把a方法的名字改成了b,但已经在很多地方调用了a方法，
// 可以如下做法，适配器思想
// var a=function(){
//     blur()
// }
// 例子2 现在A.c方法用JQ框架的$.css A.on用$.on方法，做法如下
A.c = function () {
    return $.css()
}
// 例子3，为避免参数不适配昌盛问题，很多框架会有一个参数适配操作
// mane,age必传参数
function f1(obj) {
    var _default = {
        name: 'xxx',
        age: 18
    }
    for (var item in _default) {
        obj[item] = obj[item] || _default[item]
    }
}