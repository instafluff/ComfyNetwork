// Enter here the user flows and custom policies for your B2C application
// To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
// To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview

const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_Signup",
    },
    authorities: {
        signUpSignIn: {
            authority: "https://comfycorner.b2clogin.com/comfycorner.onmicrosoft.com/B2C_1_Signup",
        },
    },
}
