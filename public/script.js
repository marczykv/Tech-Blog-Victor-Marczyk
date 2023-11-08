document.querySelector('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      window.location.href = '/dashboard'; // Redirect on successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  
  
  document.querySelector('.comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comment-text').value;
    const post_id = document.querySelector('#post-id').value;
  
    const response = await fetch('/comment/add', {
      method: 'POST',
      body: JSON.stringify({ text, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // Handle successful comment submission
      const commentData = await response.json();
      const commentList = document.querySelector('.comment-list');
      const newComment = document.createElement('li');
      newComment.textContent = commentData.text;
      commentList.appendChild(newComment);
    } else {
      alert('Error adding comment. Please try again.');
    }
  });
  