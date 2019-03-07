
export default ({app}, inject)=>{
    inject('TogetherFun',(string)=>console.log('vue实例，服务端，vuex同时注入方法',string))
}