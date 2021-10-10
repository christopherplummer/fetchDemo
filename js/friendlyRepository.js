export async function getUsers() {
    let users = await fetch('https://friendly-api.azurewebsites.net/users').then(
        function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }
    );

    return users;
}

export async function createUser() {
    let users = await ('https://friendly-api.azurewebsites.net/users').then(
        function(response) {
            if (response.status != 201) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response.status);
            return response.json();
        }
    );

    return users;
}