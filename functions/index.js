const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require("cors")({
  origin: true,
});
admin.initializeApp()
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest(async (request, response) => {
  const result = await admin.auth().listUsers(1000);
  functions.logger.info("Hello logs!", {structuredData: true});
  return cors(request, response, () => {
    response.status(200).send({data: result});
  });
});
