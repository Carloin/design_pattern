// 例子1，创建不同大小的原型对象
// function  circle(radius) {
//     this.radius=radius
// }
// // bad
// var c1=new circle(10)
// var c2=new circle(5)
// // good
// var radiusArr=[1,2,3,4,5,6,7,8,8,9]
// circle.prototype.createCircle=function (radius) {

// }
// radiusArr.forEach((radius)=>{
//     new circle().createCircle(radius)
// })

// 例子2
// bad
// function uploader(file) {
//     this.file=file
// }
// uploader.prototype.up=function(){

// }
// new uploader(filebj).up()
// // good
// var fileArr=[file1,file2,file3]
// function uploader() {

// }
// uploader.prototype.uploadFile=function(file){

// }
// file.forEach((file)=>{
//     new uploader.uploadFile(file)
// })
// 例子3 需要使用if-else
// bad
function f1(num) {
    var all = 0
    if (num) {
        all += num
    } else {
        all += 1
    }
}
// good
function f1(num) {
    var all = 0
    var _num = 1
    if (num) {
        _num = _num
    }
    all += _num
}
// good
$.extend({
    a: 1
})
$.extend({
    a: 1
}, {
    b: 2
})
$extend = function () {
    // 将公用部分提取出来
    var target = arguments[0]
    var source = this
    if (arguments.length == 2) {
        target = arguments[1]
        source = arguments[0]
    }
    for (var item in target) {
        source[item] = target[item]
    }
}