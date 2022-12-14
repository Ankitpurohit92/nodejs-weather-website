const request= require('request')
const forecast=(latitude,longitude,callback)=>{
const url=`http://api.weatherstack.com/current?access_key=c60598acd4aedf7b1af2aebaa821802e&query=${latitude},${longitude}`

request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect weather service',undefined)
    }
     else if(body.error){
        callback('Unable to find location',undefined)
    }
    else{
        callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`)
    }
})
}
module.exports=forecast