//Promise.all() misslyckas om EN promise misslyckas:
//Promise.all() tar en array av Promises och väntar tills alla är klara, sedan returnerar den en array med alla resultat.
const getUserCompleteData = async (userId: number) => {
    try {
      const [user, posts, todos] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(r => r.json()),
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(r => r.json())
      ]);
      
      console.log('User:', user.name);
      console.log('Posts:', posts.length);
      console.log('Todos:', todos.length);
      
      return { user, posts, todos };
      
    } catch(error) {
      console.log('Error:', error);
    }
  };
  
  getUserCompleteData(1);