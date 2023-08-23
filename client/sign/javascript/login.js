document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
  
    const url = `http://localhost:8080/users`;  // Correct your API endpoint
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        
          const users = JSON.parse(xhr.responseText);
          console.log(users);
          const foundUser = users.find(user => user.email === email && user.password === password);
          if (foundUser) {
            console.log('Login successful:', foundUser);
            // Handle successful login here
           window.location.href = `http://127.0.0.1:5500/client/chatgpt-explorer/index.html`;
          } else {
            console.error('Invalid email or password');
            alert('Invalid email or password');
          }
        } else {
          console.error('Error:', xhr.status);
          // Handle error here
          alert('Error: ' + xhr.status);
        }
      }
    };
  
    xhr.send();
  });
  
