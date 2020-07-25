CREATE TABLE merchants (
  id                SERIAL         PRIMARY KEY NOT NULL,
  merchant_name     VARCHAR(255)   NOT NULL,
  country_id        INTEGER        NOT NULL REFERENCES countries(id),
  created_at        TIMESTAMP      NOT NULL,
  admin_id          INTEGER        NOT NULL,
  merchant_type_id  INTEGER        NOT NULL,
  FOREIGN KEY (admin_id) REFERENCES users(id),
  FOREIGN KEY (merchant_type_id) REFERENCES merchant_types(id)
);