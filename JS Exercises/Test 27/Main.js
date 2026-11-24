function getData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const success = false;
            if (success) {
                resolve("Data fetched successfully!");
            }else {
                console.log("Error ayaa jiro")
            }
            
        }, 2000);

    });
} 

//the Promise
getData()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });