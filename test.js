var url




function updateUrl(){
    const id = document.getElementById("input-id").value
    url = "https://jsonplaceholder.typicode.com/users/" + id
}

document.getElementById("load").onclick = (evt) =>{
    updateUrl()
    getData()
}

document.getElementById("load-all").onclick = (evt) =>{
    url = "https://jsonplaceholder.typicode.com/users/"
    getAllData()
}




function getData(){
    fetch(url)
        .then((r)=>{
            console.log(r.headers)
            if(!r.ok){
                return Promise.reject("Ups", r.status)
            }
        return r.json()
        })
        .then(data =>{
            //Her skal der arbejdes med data
            const name = `
            <li>
                ${data.name}
            </li>
            <li>
                ${data.email}
            </li>
            `
            document.getElementById("my-ul").innerHTML = name
            console.log(data)
        })
        .catch(e => {
            console.error(e)
            console.error(e.status)
        })
}



/* POST REQUEST
const options = {
    method: "POST",
    headers: {"Content-type:": "application/json"},
    body: JSON.stringify({
        name: "Kurt Wonnegut"
    })
}


fetch(url, options)
    .then(r => r.json())
    .then(data => {
        console.log(data)
    })
    */

