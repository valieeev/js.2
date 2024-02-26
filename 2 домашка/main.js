function getUserInfo() {
    var userId = document.getElementById("userIdInput").value;

    if (userId >= 1 && userId <= 10) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                displayUserInfo(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Введите число от 1 до 10.');
    }
}

function displayUserInfo(user) {
    var userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
        <h2>Информация о пользователе:</h2>
        <p><strong>Имя:</strong> ${user.name}</p>
        <p><strong>Имя пользователя:</strong> ${user.username}</p>
        <p><strong>Телефон:</strong> ${user.phone}</p>
    `;
}

document.getElementById("userIdInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getUserInfo();
    }
});
