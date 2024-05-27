import { createClient } from 'contentful';

const client = createClient({
  space: 'Space ID', //  
  accessToken: ' Access Token', //
  environment: 'master' 
});

export default client;
