try {
    window.odata
    .o(process.env.API_URL)
    .get()
    .query({ Authorization: process.env.API_KEY })
    .then((data) => console.log("DATA: ", data));
} catch {
    console.log('ERROR LOADING DATA');
};

// api does not allow fetch from local file system
// try using insomnia instead