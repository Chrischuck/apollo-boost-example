CREATE TABLE IF NOT EXISTS todo (
  id serial PRIMARY KEY,
  title varchar (50),
  textData varchar (500),
  createdAt INT
)