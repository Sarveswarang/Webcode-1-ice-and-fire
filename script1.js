var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
// var api="https://www.anapioficeandfire.com/api/characters?page=1&pageSize=40"
async function ice(){
    try{
        var data_fetch=await fetch(api)
        var final_out=data_fetch.json()
        var end_result=await final_out
         console.log(end_result)
         for(let i of end_result){
            var a=i.aliases
            document.querySelector(".class").innerHTML=`${"a"}
        //    var c= document.createElement("br")
        //    document.querySelector("body"). append(c)
         }}
        
        catch(error){
    console.error(error)
    console.log(error)
}
        }
ice()
for(let i of end_result){
    var a=i.name
    var b=document.createElement('p')
    b.setAttribute('p',a)
    document.querySelector("body").append(a)
    
 }}