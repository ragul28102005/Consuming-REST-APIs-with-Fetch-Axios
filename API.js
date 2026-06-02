<!DOCTYPE html>
<html>
<head>
    <title>REST API Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <style>
        .user-card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <h2>User List</h2>

    <button onclick="createUser()">Create User</button>

    <p id="loading">Loading...</p>

    <div id="users"></div>

    <script>
        const loading = document.getElementById("loading");
        const usersDiv = document.getElementById("users");

        async function fetchUsers() {
            loading.style.display = "block";

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );

                usersDiv.innerHTML = "";

                response.data.forEach(user => {
                    usersDiv.innerHTML += `
                        <div class="user-card">
                            <h3>${user.name}</h3>
                            <p>${user.email}</p>
                        </div>
                    `;
                });
            } catch (error) {
                usersDiv.innerHTML = "<p>Failed to load users.</p>";
                console.error(error);
            } finally {
                loading.style.display = "none";
            }
        }

        async function createUser() {
            try {
                const response = await axios.post(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        name: "John Doe",
                        email: "john@example.com"
                    }
                );

                alert("User Created: " + response.data.name);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsers();
    </script>

</body>
</html>
