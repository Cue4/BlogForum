document.addEventListener('DOMContentLoaded', function () {
    const blogPostsSection = document.getElementById('blog-posts');
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    if (blogPosts.length === 0) {
        blogPostsSection.innerHTML = '<p>No blog posts found.</p>';
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><strong>Author: </strong>${post.username}</p>
                `;
            blogPostsSection.appendChild(postElement);
        });
    }

document.getElementById('back-btn').addEventListener('click', function () {
        window.location.href = 'index.html'; 
    });
});