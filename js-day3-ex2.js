
var url = "http://localhost:8080/api/cars/"

document.getElementById("find-car-to-edit").onclick = (evt) =>{
    var id = document.getElementById("id-for-edit").value
    getEditCarValues(id)
}

function getEditCarValues(id){
    fetch(url + id)
        .then((r)=>{
            return r.json()
        })
        .then(car =>{
            document.getElementById("put-brand").style.backgroundColor = null
            document.getElementById("put-brand").placeholder = car.brand

            document.getElementById("put-model").style.backgroundColor = null
            document.getElementById("put-model").placeholder = car.model

            document.getElementById("put-price").style.backgroundColor = null
            document.getElementById("put-price").placeholder = car.pricePerDay

            document.getElementById("put-best-discount").style.backgroundColor = null
            document.getElementById("put-best-discount").placeholder = car.bestDiscount
        })
}

document.getElementById("edit-car").onclick = (evt) =>{
    var brandValue = getValueOrPlaceholder("put-brand")
    var modelValue = getValueOrPlaceholder("put-model")
    var priceValue = getValueOrPlaceholder("put-price")
    var bestDiscountValue = getValueOrPlaceholder("put-best-discount")

    const EditCar = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            brand: brandValue,
            model: modelValue,
            pricePerDay: priceValue,
            bestDiscount: bestDiscountValue

        })
    };
    const id = document.getElementById("id-for-edit").value
    fetch(url + id, EditCar)
        .then(r => r.json())
        .then(status => {
            document.getElementById("status-for-edit").innerHTML = "Status: car changed."
        }).catch(e => {
        document.getElementById("status-for-edit").innerHTML = "Status: Something went wrong."
    })
}

function getValueOrPlaceholder(box){
    var variable = document.getElementById(box).value
    if (variable === ""){
        variable = document.getElementById(box).getAttribute("placeholder")
    }
    return variable
}


document.getElementById("submit-new-car").onclick = (evt) =>{
    makeCar()
}

function makeCar(){
    const POSTCar = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            brand: document.getElementById("input-brand").value,
            model: document.getElementById("input-model").value,
            pricePerDay: document.getElementById("input-price").value,
            bestDiscount: document.getElementById("input-best-discount").value

        })
    };

    fetch(url, POSTCar)
        .then(r => r.json())
        .then(newCar => {
            const newMemberData = "Car added:<br>Car id: " + newCar.id + " || Car brand: " + newCar.brand + " || Car model: " + newCar.model
                document.getElementById("status").innerHTML = "status: " + newMemberData
        }).catch(e => {
            document.getElementById("status").innerHTML = "Status: Something went wrong."
        })
}

document.getElementById("btn-get-all").onclick = (evt) =>{
    getAllCars()
}

function getAllCars(){
    fetch(url)
        .then((r)=>{
            return r.json()
        })
        .then(data =>{
            const allCars = data.map(car => `
                <span>Car id: ${car.id} || Car brand: ${car.brand} || Car model: ${car.model}<br></span>
                `).join("")
            document.getElementById("allCarsShow").innerHTML = allCars
        })
}


document.getElementById("btn-find-single").onclick = (evt) =>{
    const id = document.getElementById("text-for-id").value
    getSingleCar(id)
}

function getSingleCar(id){
    fetch(url + id)
        .then((r)=>{
            return r.json()
        })
        .then(car =>{
            const singleCar = `
                <span>Car id: ${car.id}<br>Brand: ${car.brand}<br>Model: ${car.model}<br>Price per day: ${car.pricePerDay}<br>Best discount: ${car.bestDiscount}</span>
                `
            document.getElementById("singleCarShow").innerHTML = singleCar
        })
}

