document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const dob = document.getElementById('signup-dob').value;
    const password = document.getElementById('signup-password').value;

    const user = {
      name: name,
      email: email,   
      password: password,
      dob: dob
    }
 console.log(user);
    const url=`http://localhost:8080/users`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

    xhr.onreadystatechange = () =>{
      if(xhr.status == 200 && xhr.readyState == 4){
        console.log(xhr.responseText);
        document.location.href=`http://127.0.0.1:5500/client/chatgpt-explorer/index.html`;
      }
    }
    xhr.send( JSON.stringify(user) );
  });
  