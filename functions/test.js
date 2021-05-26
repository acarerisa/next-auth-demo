exports.handler = async () => {
    console.log('function ran')

    const data = {name:'cenk', age : 24, job:'programmer'}

    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}