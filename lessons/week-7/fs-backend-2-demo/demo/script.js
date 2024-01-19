console.log("connected ...")

const form = document.querySelector('form');

function formHandler (e){
    e.preventDefault();
    // get all form data
    let formData = {
        username: "",
        firstName: "",
        lastName: "",
        age: 51
    }
    
    // send a POST request to the server with the form data (formData object)
    axios.post("http://localhost:4001/createNewUser", formData)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log(err))

}

form.addEventListener('submit', formHandler);