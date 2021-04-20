const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "jon-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://kx2t1uhvic.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_JLfFMSAAx",
        APP_CLIENT_ID: "4ijc2j6tdbvoh5u97cncfdnsav",
        IDENTITY_POOL_ID: "us-east-1:2efdf5f6-174d-489e-b0b2-24d11b9415cd",
    },
};

export default config;