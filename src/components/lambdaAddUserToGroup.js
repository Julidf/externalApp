import React from "react";

export const lambdaAddUserToGroup = () => {
  const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(
    {
      region: "ap-northeast-1",
      credentials: {
        accessKeyId: "TU_ACCESS_KEY_ID",
        secretAccessKey: "TU_SECRET_ACCESS_KEY",
      },
    }
  );

  const params = {
    GroupName: "STRING_VALUE" /* required */,
    UserPoolId: "STRING_VALUE" /* required */,
    Username: "STRING_VALUE" /* required */,
  };

  cognitoidentityserviceprovider.adminAddUserToGroup(
    params,
    function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    }
  );
};
