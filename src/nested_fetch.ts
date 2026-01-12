// Hämta användare -> posts -> kommentarer
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log('User:', user.name);
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
  })
  .then(response => response.json())
  .then(posts => {
    console.log('Posts count:', posts.length);
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id);
  })
  .then(response => response.json())
  .then(comments => {
    console.log('Comments on first post:', comments.length);
  })
  .catch(error => {
    console.log('Error:', error);
  });

//   const getUserData = async () => {
//     try {
//       const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const user = await userResponse.json();
//       console.log('User:', user.name);
      
//       const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//       const posts = await postsResponse.json();
//       console.log('Posts count:', posts.length);
      
//       const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
//       const comments = await commentsResponse.json();
//       console.log('Comments on first post:', comments.length);
      
//     } catch(error) {
//       console.log('Error:', error);
//     }
//   };
  
//   getUserData();