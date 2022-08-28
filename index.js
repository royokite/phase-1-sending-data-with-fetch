// Sending data with fetch!

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(response => response.json())
    .then(user => document.body.innerHTML = `${user.id}`)
    .catch(error => document.body.innerHTML = error.message);
}
