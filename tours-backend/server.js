const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const fleetRoutes = require('./routes/fleetRoutes');
const loginRoutes = require('./routes/loginRoutes');
const driverRoutes = require('./routes/driverRoutes');
const customerRoutes = require('./routes/customerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', fleetRoutes, loginRoutes, driverRoutes, customerRoutes, bookingRoutes, enquiryRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
