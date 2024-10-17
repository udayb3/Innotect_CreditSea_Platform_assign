// setting up express server
const express= require("express");
const app= express();

// defining the port, if no port is defined port number 4002 will be taken
const PORT= process.env.PORT || 4000;

app.listen(PORT, () => { console.log(`server running on http://localhost:${PORT}/`); });

