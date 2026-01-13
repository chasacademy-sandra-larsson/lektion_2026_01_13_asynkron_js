



// Vi ska hämta data och den datan ska vara beroende av fetch-resultatet 

// Async / await
async function getUserData() {
    try {
        // Hämta användardata
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
         // true → Status 200-299 (lyckade svar)
        // false → 400, 404, 500, etc. (fel)
        if(!userResponse.ok) {
             throw new Error('Failed to fetch user');
        }
        const user = await userResponse.json();
        console.log(user);

        // Hämta inlägg baserat på användarens id
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if(!postResponse.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await postResponse.json();
        console.log(posts);


    } catch(error) {
        console.log("Error", error);
    }

}

getUserData();


// Promise - chaining
fetch("https://jsonplaceholder.typicode.com/users/1")
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
    .catch(error => {
        console.log('Error:', error);
    });