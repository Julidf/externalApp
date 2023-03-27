import AWS from "aws-sdk";

export const adminCreateCognitoUser = async ({ formData }) => {
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
    UserPoolId: "ap-northeast-1_LltEnD0Ol",
    Username: formData.email,
    UserAttributes: [
      {
        Name: "given_name",
        Value: formData.firstName,
      },
      {
        Name: "family_name",
        Value: formData.lastName,
      },
      {
        Name: "birthdate",
        Value: formData.dateOfBirth,
      },
    ],
  };

  await cognitoidentityserviceprovider.adminCreateUser(
    params,
    function (err, data) {
      if (err) {
        // an error occurred
        console.log(err, err.stack);
      } else {
        // successful response
        console.log(data);
        return data;
      }
    }
  );
};
