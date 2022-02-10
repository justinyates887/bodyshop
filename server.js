const routes = require('./routes')

const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}))

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Hello Server: ${PORT}`);
});