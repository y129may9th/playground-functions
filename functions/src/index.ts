import * as functions from "firebase-functions";
import user = require("./user");

export const execute = functions.https.onRequest(async (request, response) => {
  const returnContext = await user.selectUser(request);
  response.send(returnContext.record);
});
