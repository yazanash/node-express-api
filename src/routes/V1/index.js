const express = require("express");
const authRoute = require("./auth.routes");

const router = express.Router()

/******************************************** 
  #              R O U T E S                #
 *******************************************/

const mainRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
];

module.exports = router;