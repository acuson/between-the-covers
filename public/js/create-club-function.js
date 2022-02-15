

const options ={
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify()
}

fetch('/api/clubs/join', options)
.then(data => console.log(data.json))
.catch(err => console.log(err))