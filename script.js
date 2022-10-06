try {
    window.odata
    .o(apiUrl)
    .get()
    .query({ Authorization: apiKey })
    .then((data) => console.log("DATA: ", data));
} catch {
    console.log('ERROR LOADING DATA');
};

// api does not allow fetch from local file system
// try using insomnia instead