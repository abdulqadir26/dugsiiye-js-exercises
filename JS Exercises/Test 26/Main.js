console.log("1. Blocking Code (Synchronous)")
function blockingFunction() {
    const start = Date.now();

    // Wait for 2 seconds
    while (Date.now() - start < 2000) {
        // Waiting...
    }

    return "Message after 2 seconds";
}

console.log("Start");

const message = blockingFunction();

console.log(message);
console.log("End");

console.log("2. Non-Blocking Code (Asynchronous)")
function nonBlockingFunction() {
    setTimeout(() => {
        console.log("Message after 2 seconds");
    }, 2000);
}

console.log("Start");

nonBlockingFunction();

console.log("End");