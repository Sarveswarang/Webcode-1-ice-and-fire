
var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
// https://www.anapioficeandfire.com/api/characters
async function name(){
    
    try{
        var data_fetch=await fetch(api)
        var final_out=data_fetch.json()
        var end_result=await final_out
         console.log(end_result)

         for(let i of end_result){
            var a=i.name
            var b=document.createElement('p').innerText=`${a}`
            document.querySelector(".class").append(b)
             var c= document.createElement("br")
            document.querySelector(".class"). append(c)
         
            
         }}
        
        catch(error){
    console.error(error)
    console.log(error)
}
        }
        name()

// ----------------------------------------------------------------------
        var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
        async function isbn(){

            try{
                var data_fetch=await fetch(api)
                var final_out=data_fetch.json()
                var end_result=await final_out
                 console.log(end_result)

                 for(let i of end_result){
                    var a=i.isbn
                    var b=document.createElement('p').innerText=`${a}`
                    document.querySelector(".class").append(b)
                     var c= document.createElement("br")
                    document.querySelector(".class"). append(c)
                 
                    
                 }}
                
                catch(error){
            console.error(error)
            console.log(error)
        }
                }
                isbn()
//  ----------------------------------------------
var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
async function numberOfPages(){
    
    try{
        var data_fetch=await fetch(api)
        var final_out=data_fetch.json()
        var end_result=await final_out
         console.log(end_result)
         
         for(let i of end_result){
            var a=i.numberOfPages
            var b=document.createElement('p').innerText=`${a}`
            document.querySelector(".class").append(b)
             var c= document.createElement("br")
            document.querySelector(".class"). append(c)
         
            
         }}
        
        catch(error){
    console.error(error)
    console.log(error)
}
        }
        numberOfPages()
//  ----------------------------------------------
var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
async function authors(){
    
    try{
        var data_fetch=await fetch(api)
        var final_out=data_fetch.json()
        var end_result=await final_out
         console.log(end_result)
         
         for(let i of end_result){
            var a=i.authors
            var b=document.createElement('p').innerText=`${a}`
            document.querySelector(".class").append(b)
             var c= document.createElement("br")
            document.querySelector(".class"). append(c)
         
            
         }}
        
        catch(error){
    console.error(error)
    console.log(error)
}
        }
        authors()
        //  ----------------------------------------------
var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
async function released(){
    
    try{
        var data_fetch=await fetch(api)
        var final_out=data_fetch.json()
        var end_result=await final_out
         console.log(end_result)
         
         for(let i of end_result){
            var a=i.released
            var b=document.createElement('p').innerText=`${a}`
            document.querySelector(".class").append(b)
             var c= document.createElement("br")
            document.querySelector(".class"). append(c)
         
            
         }}
        
        catch(error){
    console.error(error)
    console.log(error)
}
        }
        released()
// --------------------------------------------/
        var api='https://www.anapioficeandfire.com/api/books?page=1&pageSize=40'
        async function characters(){
            
            try{
                var data_fetch=await fetch(api)
                var final_out=data_fetch.json()
                var end_result=await final_out
                 console.log(end_result)
                 
                 for(let i of end_result){
                    var a=i.characters
                    var b=document.createElement('p').innerText=`${a}`
                    document.querySelector(".class").append(b)
                     var c= document.createElement("br")
                    document.querySelector(".class"). append(c)
                 
                    
                 }}
                
                catch(error){
            console.error(error)
            console.log(error)
        }
                }
                characters()
        
        