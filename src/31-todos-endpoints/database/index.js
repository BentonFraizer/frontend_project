import PG from 'pg';

const { Pool } = PG;

export const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'task_manager',
  host: 'localhost',
  port: '9000',
});
