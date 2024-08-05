import { defineConfig } from '@mikro-orm/mysql';

export default defineConfig ({
  entities: ['dist/**/*.entity{.js}'],
  entitiesTs: ['src/**/*.entity{.ts}'],
  dbName: 'virtualstore',
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '123456',
  debug: true,
})