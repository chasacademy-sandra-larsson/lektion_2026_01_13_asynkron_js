
// Helper-funktioner med async/await
async function fetchUser(userId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
}

async function fetchPosts(userId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

async function fetchTodos(userId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
}

async function getUserCompleteData(userId: number) {
  try {
    // Promise.all() tar en array av Promises
    // Alla fetch-anrop startar SAMTIDIGT (parallellt)
    // await väntar tills ALLA är klara innan vi fortsätter
    
    const [user, posts, todos] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId),
      fetchTodos(userId)
    ]);
    
    // När ALLA promises är klara, får vi en array med resultat
    // Array destructuring: [user, posts, todos] = [resultat1, resultat2, resultat3]
    console.log('User:', user.name);
    console.log('Posts:', posts.length);
    console.log('Todos:', todos.length);
    
    return { user, posts, todos };
    
  } catch (error) {
    // Om NÅGON av promises misslyckas, hoppar vi hit
    console.log('Error:', error);
  }
}

getUserCompleteData(1);

