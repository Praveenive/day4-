var request=new XMLHttpRequest();
//Step  02:specifiy the API url
request.open("GET","https://restcountries.com/v2/all");
//Step 03:sending the request
request.send();
//Step 04: Once the requested data is there in server
//once the data is successfully loaded, server response 
//will be of 200 status code
//Functions: they are used to perform specific task
//Functions applications: used in all js events
request.onload=function(){
var result=JSON.parse(request.response);
for(let i=0;i<result.length;i++)
console.log(result[i].flags);
}