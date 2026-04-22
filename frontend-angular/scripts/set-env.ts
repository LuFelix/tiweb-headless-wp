import { writeFileSync } from 'fs';
import { config } from 'dotenv';

// Carrega variáveis do .env
config();

const targetPathProduction = './src/environments/environment.ts';
const targetPathDevelopment = './src/environments/environment.development.ts';

// Valores padrão caso não existam no .env
const envConfigFileProduction = `export const environment = {
  production: true,
  googleClientId: '${process.env['GOOGLE_CLIENT_ID'] || 'COLE_SUA_CHAVE_AQUI'}',
  apiUrl: '${process.env['API_URL'] || '/wp-json'}'
};
`;

const envConfigFileDevelopment = `export const environment = {
  production: false,
  googleClientId: '${process.env['GOOGLE_CLIENT_ID'] || 'COLE_SUA_CHAVE_AQUI'}',
  apiUrl: '${process.env['API_URL'] || 'http://localhost:8080/wp-json'}'
};
`;

// Escreve os arquivos
writeFileSync(targetPathProduction, envConfigFileProduction);
writeFileSync(targetPathDevelopment, envConfigFileDevelopment);

console.log('✅ Arquivos de environment gerados com sucesso a partir do .env!');