document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8080/api/users') // Adjust the URL according to your backend endpoint
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
            data.forEach(user => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                const cell5 = row.insertCell(4);
                const cell6 = row.insertCell(5);
                const cell7 = row.insertCell(6);
            });
        })
        .catch(error => console.error('Error fetching customer data:', error));
});
