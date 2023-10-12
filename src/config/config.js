// const { initializeApp } = require('firebase-admin/app');
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://platinum-8b28f-default-rtdb.firebaseio.com"
});
// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("users");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

