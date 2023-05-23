


//Sending POST request with Fetch API


// post method and fetch api data post krne k liye




  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
    



// as above just wraping it into async function

  const createTodo = async(mytodo) =>{ 
    let options ={
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      // JSON.stringify() JS object ko string mein convert krta hai 
      // hum ye console object khud pass bhi kr skte hain 
      body: JSON.stringify(mytodo)
    }
      let p = await fetch('https://jsonplaceholder.typicode.com/posts',options) 
      let response =p.json()
      return response
  }
    
 
    
    const  main = async () =>{
      let mytodo =  {  title: 'foo',
      body: 'bar',
      userId: 101
 
   }
      let todo = await createTodo(mytodo)
      console.log(todo);
    }
main()

