const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then(({data}) => {
            data.forEach(({first_name, last_name}) => {
                
                console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
            })
        })
        .catch((error) => console.log(error)); 
}
ambilDataUser()

export {ambilDataUser}