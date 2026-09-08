const { writeFileSync } = require('fs');
const path = require('path');
require('dotenv').config();

const targetPathProduction = path.resolve(__dirname, '../src/environments/environment.ts');
const targetPathDevelopment = path.resolve(__dirname, '../src/environments/environment.development.ts');

// Valores padrão caso não existam no .env
const googleClientId = process.env.GOOGLE_CLIENT_ID || '1018169699705-vgvkpisbmjgrvudab5mrdnsvgid7bjk7.apps.googleusercontent.com';
const apiUrl = process.env.API_URL || 'https://wp.tiweb.app.br/wp-json';
const graphqlUrl = process.env.GRAPHQL_URL || (apiUrl.endsWith('/wp-json') ? apiUrl.replace('/wp-json', '/graphql') : 'https://wp.tiweb.app.br/graphql');

const envConfigFileProduction = `export const environment = {
  production: true,
  googleClientId: '${googleClientId}',
  apiUrl: '${apiUrl}',
  graphqlUrl: '${graphqlUrl}'
};
`;

const envConfigFileDevelopment = `export const environment = {
  production: false,
  googleClientId: '${googleClientId}',
  apiUrl: '${apiUrl}',
  graphqlUrl: '${graphqlUrl}'
};
`;

// Escreve os arquivos
writeFileSync(targetPathProduction, envConfigFileProduction);
writeFileSync(targetPathDevelopment, envConfigFileDevelopment);

console.log('✅ Arquivos de environment gerados com sucesso a partir do .env!');
