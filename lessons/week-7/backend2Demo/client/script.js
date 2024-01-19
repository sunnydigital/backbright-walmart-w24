console.log("conneccted ...")

const form = document.querySelector('form');

function formHandler(e) {
    e.preventDefault()
    let formData = {
        username: "RingBearer",
        firstName: "Frodo",
        lastName: "Baggins",
        age: 51
    }

    axios.post("http://localhost:4001/createNewUser", formData)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))

}

form.addEventListener('submit', formHandler);