// 例子1,把最终的类分成不同的组成部分，独立出去，然后组合在一起构建成最终的类
// function builder(){
//     this.part1=new builderMode1()
//     this.part2=new builderMode2()
// }
// function builderMode1(){

// }
// function builderMode2(){
    
// }

// 例子2 bad
function NewsnoPic(){

}
function NewsnoDescipt(){
    
}
function NewsAll(){

}
// good
function content(){

}
function pic(){

}
function news(config){
    config.contetent?this.content=new content(config.content):null
    config.pic?this.pic=new pic(config.pic):null
    config.title?this.title=new this.title(config.title):null
}
// a
new News({
    pic:"xxx",
    title:"this is title"
})
// b
new news({
    pic:"xxx",
    title:"this is title"
})
