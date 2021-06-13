// 例子1 abc方法都有一个相同的clg(1)操作，可以吧clg(1)独立出来，再桥接
// function a() {
//     console.log(1)
//     console.log(2)
// }
// function b() {
//     console.log(1)
//     console.log(3)
// }
// function c() {
//     console.log(1)
//     console.log(4)
// }
// // 提取
// function common() {
//     console.log(1)
// }
// 例子2
// bad
// function createMen1() {
//     var _dom=document.createElement('div')
//     _dom.innerHTML="this is menu1"
//     _dom.onmouseover=function () {
//         _dom.style.backgroundColor='red'
//     }

// }
// function createMen2() {
//     var _dom=document.createElement('div')
//     _dom.innerHTML="this is menu2"
//     _dom.onmouseover=function () {
//         _dom.style.backgroundColor='red'
//     }

// }
// function createMen3() {
//     var _dom=document.createElement('div')
//     _dom.innerHTML="this is menu3"
//     _dom.onmouseover=function () {
//         _dom.style.backgroundColor='red'
//     }  
// }
// function createMenu(word, action) {
//     var _dom = document.createElement('div')
//     _dom.innerHTML = word
//     _dom.onmouseover = function () {
//         action
//     }
// }
// var data = [{
//     word: "this is menu1",
//     action: function () {
//         _dom.style.backgroundColor = "red";
//     }
// }, {
//     word: "this is menu2",
//     action: function () {
//         _dom.style.backgroundColor = "white";
//     }
// }]
// data.forEach((menu)=>{
//     createMenu(menu.word,menu.action)
// })
// 例子3 注册post，put，patch
// bad
// axios.prototype.post = function () {

// }
// axios.prototype.put = function () {

// }
// axios.prototype.patch = function () {

// }
// good
var arr = ['post', 'put', 'patch']
arr.forEach((method) => {
    axios.prototype[method] = function (url, data, cofig) {
        return this.request(merge(config || {}, {
            method: method,
            data: data,
            url: url
        }))
    }
})