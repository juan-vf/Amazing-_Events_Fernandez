
async function getData() {
    const dataApi = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(res => res.json())
        .then(resJ => {
            return resJ
        })
        .catch(error => {
            return console.log("ERROR: ", error.message);
        });
        // console.log(dataApi);
        return dataApi
}
async function a(){
    let dataNes = await getData()
    // console.log(dataNes);
}