// async function FechData() {
//     try {
//         console.log("Starting Fetching Data ")
//         //Get Method .......
//         const Response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         console.log("Response", Response)
//         if (!Response.ok) {
//             throw new Error(`HTTP error! ${Response.status}`);
            
            
//         }

//         const Data = await Response.json();
//         console.log(Data)

        
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }

// FechData();

// async function PostData() {
//     try {
//         const Response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: 'This is the Title of the Post',
//                 body: 'This is the body of the Post',
//                 id: 1
//             }) 
//         });

//         if (!Response.ok) {
//             throw new Error(`HTTP error! ${Response.status}`);
                      
//         }
//         console.log("Before Json Response", Response);
//         // The Next ....
//         const Data = await Response.json();
//         console.log("After Json Response", Data)

//         } catch (error) {
//         console.log(error);
//     }
// }
// PostData();



// Function to fetch users from API

async function fetchUsers() {
    try {
        // Make GET request
        const response = await fetch("https://jsonplaceholder.typicode.com/userssa");

        // Check HTTP response
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert response to JSON
        const users = await response.json();

        // Display all users
        console.log("Users List:", users);

        // Display individual user information
        users.forEach(user => {
            console.log("ID:", user.id);
            console.log("Name:", user.name);
            console.log("Username:", user.username);
            console.log("Email:", user.email);
            console.log("Phone:", user.phone);
            console.log("Website:", user.website);
            console.log("City:", user.address.city);
            console.log("Company:", user.company.name);

            console.log("----------------------");
        });

    } catch (error) {
        console.log("Error fetching users:", error.message);
    }
}

// Call function
fetchUsers();
