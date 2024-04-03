/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
//export const contractConst = "";0xbc5c874f205B6f43C8c0dbc2212d21AA13c53884
export const contractConst = "0xe30eD81EE83b828F2f959c9F429981fa956e4281";
// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
export const chainConst = "polygon";

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra old 391dcbef1a8a54843de2a174da5aa932
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "03b5621dbadc58eed4d63cbaa4cca7c9";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

export const clerkId ="pk_live_Y2xlcmsuZXZhc3dvcmxkLm5ldCQ";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
