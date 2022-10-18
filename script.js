const options = {
  headers: new Headers({
    "Accept-Encoding": "gzip,deflate",
    "Authorization": process.env.API_KEY,
  }),
};

try {
  window.odata
    .o(process.env.API_URL, options)
    .get("resource")
    .then((data) => console.log("DATA: ", data));
} catch {
  console.log("ERROR LOADING DATA");
}