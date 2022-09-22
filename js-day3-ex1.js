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
    console.log()
}
function getAllData(){
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

            const allData = data.map(person => `
                <tr>
                    <td>${person.name}</td>
                    <td>${person.email}</td>
                </tr>
                `).join("\n")
            document.getElementById("tbody").innerHTML = allData

            //document.getElementById("my-ul").innerHTML = name

        })
        .catch(e => {
            console.error(e)
            console.error(e.status)
        })
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
            <tr>
                    <td>${data.name}</td>
                    <td>${data.email}</td>
                </tr>
                `
            document.getElementById("tbody").innerHTML = name

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

