const { writeFileSync } = require('fs');
require('dotenv').config();

const targetPathProduction = './src/environments/environment.ts';
const targetPathDevelopment = './src/environments/environment.development.ts';

// Valores padrão caso não existam no .env
const googleClientId = process.env.GOOGLE_CLIENT_ID || 'COLE_SUA_CHAVE_AQUI';
const apiUrl = process.env.API_URL || 'http://localhost:8080/wp-json';

const envConfigFileProduction = `export const environment = {
  production: true,
  googleClientId: '${googleClientId}',
  apiUrl: '${apiUrl.replace('http://localhost:8080', '')}'
};
`;

const envConfigFileDevelopment = `export const environment = {
  production: false,
  googleClientId: '${googleClientId}',
  apiUrl: '${apiUrl}'
};
`;

// Escreve os arquivos
writeFileSync(targetPathProduction, envConfigFileProduction);
writeFileSync(targetPathDevelopment, envConfigFileDevelopment);

console.log('✅ Arquivos de environment gerados com sucesso a partir do .env!');