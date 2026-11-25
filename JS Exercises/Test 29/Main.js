// async function fetchData() {
//     console.log("Start fetching Data");
//     const response = await fetch('data.json');
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data =  await response.json();
//     console.log("Response ", data);
    
// }
// fetchData();

// 9. Fetch JSON Data Using Promise

function fetchData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            fetch("data.json")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }

                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });

        }, 2000);
    });
}

// Calling the function
fetchData()
    .then(data => {
        console.log("Data fetched successfully!");
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

// Other code runs while waiting
console.log("Other code is running...");



