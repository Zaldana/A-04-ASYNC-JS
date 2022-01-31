// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
const fetchData = require('./fetchDataLibrary')


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const consumePromise = fetchData().then(
    data => console.log(data),
    error => console.log(error)
)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function asyncFunc() {
    const result = await fetchData();
    console.log(result);
}