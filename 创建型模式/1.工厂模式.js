// 例子1
// function factory(type){
//     return new factory[type]()
// }
// factory.basketball=function(){

// }
// factory.tennis=function(){
    
// }
// factory('basketball')
// 2.例子2
// bad
function WarnPop(word){
    this.color='red';
    this.word=word
}
WarnPop.prototype.warnPopaction=function(){

}
function SuccessPop(word){
    this.color="green";
    this.word=word
}
SuccessPop.prototype.successPopaction=function(){

}
new WarnPop()
new SuccessPop()
// good
function popFactor(type,word){

}
popFactor.warnPop=fucntion(){
    
}
popFactor.warnPop.prototype.warnPopaction=function(){

}
popFactor.successPop=fucntion(){

}
popFactor.successPop.prototype.successPopaction=fucntion(){

}
