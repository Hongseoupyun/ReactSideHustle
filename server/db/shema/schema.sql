DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE todo (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255) NOT NULL
);
