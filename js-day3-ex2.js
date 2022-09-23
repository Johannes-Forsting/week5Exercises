
var url = "http://localhost:8080/api/cars/"

const options = {
    method: "GET",
    headers: {"Content-type:": "application/json"},
    body: ""
}


document.getElementById("btn-get-all").onclick = (evt) =>{
    getAllCars()
}

document.getElementById("btn-find-single").onclick = (evt) =>{
    const id = document.getElementById("text-for-id").value
    console.log(id)
    getSingleCar(id)
}


function getAllCars(){
    fetch(url)
        .then((r)=>{
            return r.json()
        })
        .then(data =>{
            const allCars = data.map(car => `
                <span>Car id: ${car.id} Car brand: ${car.brand}<br></span>
                `).join("")
            document.getElementById("allCarsShow").innerHTML = allCars
        })
}

function getSingleCar(id){
    fetch(url + id)
        .then((r)=>{
            return r.json()
        })
        .then(car =>{
            const singleCar = `
                <span>Car id: ${car.id} Car brand: ${car.brand}</span>
                `
            document.getElementById("singleCarShow").innerHTML = singleCar
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