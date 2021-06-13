// 例子1 完成功能需要调用abc方法
// a()
// b()
// c()
// // 为了简化，提供高级接口
// // 为了简化调用，吧一大堆子系统手动调用，封装为一个更高级的接口，
// // 使用者只需要调用一个接口即可
// function d() {
//     a()
//     b()
//     c()
// }
// d()
// // 例子2
// function addEvent(dom,type,fn,) {
//     if(dom.addEventListenter){
//         dom.addEventListenter(type,fn,)
//     }else if(dom.addEventListenter){
//         dom.attachEvent(type,fn,)
//     }else {
//         dom["on"+type]=fn
//     }
// }
// addEvent()
// 例子3 画圆
// 
ctx.beginPath()
ctx.arc(95, 50, 40)
ctx.stroke()
// 画三角形 bad
ctx.biginPath()
ctx.moveTo(250, 50)
ctx.lineTo(200, 200)
ctx.lineTo(300, 300)
ctx.closePath()
ctx.stroke()
// good
function circle(point, r) {
    ctx.beginPath()
    ctx.arc(point[0], point[1], r)
    ctx.stroke()
}
circle([10, 20], 30)
// good
function triangle(point1, point2, point3) {
    ctx.biginPath()
    ctx.moveTo(250, 50)
    ctx.lineTo(200, 200)
    ctx.lineTo(300, 300)
    ctx.closePath()
    ctx.stroke()
}