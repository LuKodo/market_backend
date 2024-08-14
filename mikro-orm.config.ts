import { defineConfig } from '@mikro-orm/mysql';

export default defineConfig ({
  entities: ['dist/**/*.entity{.js}'],
  entitiesTs: ['src/**/*.entity{.ts}'],
  dbName: 'virtualstore',
  host: 'triton.inversioneslacentral.com',
  port: 3307,
  user: 'root',
  password: 'S4nt4Luc14*./',
  debug: true,
})