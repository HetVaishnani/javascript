document.getElementById("clic").addEventListener("click", fetchdog);

function fetchdog() {
    fetch(`https://dog.ceo/api/breeds/image/random`)

        .then(res => res.json())

        .then(res => {
            document.getElementById("image").src = res.message;
        })
        .catch(err => console.log(err))
}

fetchdog()