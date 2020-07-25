CREATE TABLE users (
  id          SERIAL       PRIMARY KEY NOT NULL,
  full_name   VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP    NOT NULL
);