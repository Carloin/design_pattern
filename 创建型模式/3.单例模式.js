// 例子1 通过一个标识，来判断是否已经实例化，如果已经实例化过一次，这个标识就会标识已经实例化过，接下来的实例化将会无效。
// function single(a){
//     if(single.instanced){
//         return single.instanced
//     }else{
//         this.a=a
//         single.instanced=this
//     }
// }
// single.instanced=null
// 例子2
// function store() {
//     if (store.installed) {
//         return store.installed
//     } else {
//         this.cache = {}
//         store.installed = this
//     }

// }
// store.prototype.addData = function (name, value) {
//     this.cache[name] = value
// }
// 例子3
let _vue

function install(vue) {
    if (_vue === vue && install.installed) return
    _vue = vue
    install.installed = true
}