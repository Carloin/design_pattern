// 例子1 原方法
function a() {
    console.log(1)
}
// 扩展a得此下面的功能
function extenda() {
    a()
    console.log(2)
}
// 例子2 
// var decorator=function(dom,fn){
//     if(typeof dom.onclick=="function"){
//          var _old=dom.onclick
//          dom.onclick=function(){
//              _old()
//              fn()
//          }

//     }

// }
// decorator(dom,function(){
//     console.log("删除成功")
// })
// 例子3
var arrProto = Array.prototype
var arrayMethods = Object.create(arrProto)
arrProto.forEach((menthod) => {
    arrayMethods[method] = function () {
        var original = arrProto[method];
        var result = origin.apply(this, args)
        departFocus.notify()
        return result
    }
})