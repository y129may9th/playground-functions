import * as functions from "firebase-functions";
import user = require("./user");

export const execute = functions.https.onRequest(async (request, response) => {
  const result = await user.selectUser(request.body);
  response.send(result.record);
});
