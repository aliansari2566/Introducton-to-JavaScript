








// as above just wraoing it into async function

  const createTodo = async() =>{ 
    let options ={
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      // JSON.stringify() JS object ko string mein convert krta hai 
      body: JSON.stringify({
         title: 'foo',
         body: 'bar',
         userId: 101
    
      })
    }
      let p = await fetch('https://jsonplaceholder.typicode.com/posts',options) 
      let response =p.json()
      return response
  }
    
 
    
    const  main = async () =>{
      let todo = await createTodo()
      console.log(todo);
    }
main()

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
    