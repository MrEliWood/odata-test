// try {
//     window.odata
//     .o(process.env.API_URL)
//     .get()
//     .query({ Authorization: process.env.API_KEY })
//     .then((data) => console.log("DATA: ", data));
// } catch {
//     console.log('ERROR LOADING DATA');
// };

// api does not allow fetch from local file system
// try using insomnia instead

// fetch successful from deployed site but returned error
// try using insomnia

// include gzip in header


const propertiesDiv = document.getElementById('render-past-sales');


// search products
const getProperties = async () => {

    await fetch(`https://www.compass.com/agents/samantha-burnstead/`)
        .then(response => {
            const doc = new DOMParser().parseFromString(response.responseText, 'text/html');
            propertiesDiv.innerHTML = doc.getElementsByClassName('closedDeals-container');
        })
        .then(response => response.products ? setSearchResults(response) : getSuggestions(search))
        .catch(err => console.error(err));

};

getProperties();