export default ({app},inject)=>{
    app.myFun =(string)=>console.log('服务端注入测试',string)
}