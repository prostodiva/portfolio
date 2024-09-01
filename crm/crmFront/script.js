document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8080/api/customers') // Adjust the URL according to your backend endpoint
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('customersTable').getElementsByTagName('tbody')[0];
            data.forEach(customer => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.textContent = customer.id;
                cell2.textContent = customer.name;
                cell3.textContent = customer.password;
            });
        })
        .catch(error => console.error('Error fetching customer data:', error));
});

