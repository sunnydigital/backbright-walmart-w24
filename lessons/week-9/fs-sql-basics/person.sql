CREATE TABLE person (
    person_id SERIAL PRIMARY_KEY,
    name VARCHAR(120) NOT NULL,
    age INTEGER,
    height FLOAT,
    city TEXT,
    favorite_color VARCHAR(120),
    person_id SERIAL
)

INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES ('Artie', 48, 180, 'Santa Cruz', 'Green');
INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES ('Bob', 48, 179, 'Los Angeles', 'Green');
INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES ('Peter', 48, 178, 'Las Vegas', 'Green');
INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES ('David', 48, 177, 'Santa Barbara', 'Green');
INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES ('Pedro', 48, 176, 'Santa Barbara', 'Green');

SELECT *
FROM person
ORDER BY height DESC

SELECT *
FROM person
ORDER BY height ASC

SELECT *
FROM person
ORDER BY age DESC

SELECT *
FROM person
WHERE age > 20

SELECT *
FROM person
WHERE age = 18

SELECT *
FROM person
WHERE age < 20 
AND age > 30

SELECT *
FROM person
WHERE age <> 27

SELECT *
FROM person
WHERE favorite_color <> 'red'

