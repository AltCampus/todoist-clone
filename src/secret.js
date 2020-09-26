var request = require("request");

var options = {
  method: "POST",
  url: "https://todoist.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body:
    '{"client_id":"WNUA4fHiIgEbUrPwiDkHSkHj1peLib5O","client_secret":"ZPHXWA955EhsotPjZplmFX6p5Rcf_H0PasfBd0C_U1MVBOJnuvSm1TsGNjq61zCN","audience":"https://todoist.in/api/v1","grant_type":"client_credentials"}',
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
