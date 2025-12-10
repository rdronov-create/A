const { KameleoonClient, CustomData } = KameleoonSDK;
import { Environment, KameleoonClient } from '@kameleoon/javascript-sdk';

// -- Optional configuration
const configuration = {
  updateInterval: 20,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = new KameleoonClient({ siteCode: '294h8yvn1w', configuration });

// -- Waiting for the client initialization using `async/await`
async function init() {
  await client.initialize();
}

init();

// -- Waiting for the client initialization using `Promise.then()`
client
  .initialize()
  .then(() => {})
  .catch((error) => {});