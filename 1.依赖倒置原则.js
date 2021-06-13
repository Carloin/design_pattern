// 底层类
function eat(){

}
class1.prototype.c1=function(){
    console.log('吃饭')
}
class1.prototype.c2=function(){
    console.log('吃肉')
}
// 上层调用 bad
function ieat(){
    var eater=new eat()
    eater.c1()
    eater.c2()
}
// good eatfood是一个依赖于抽象的方法
function eatfood(food){
    console.log(food)
}
function ieat(){
    eatfood('吃肉')
    eatfood('吃蔬菜')
}