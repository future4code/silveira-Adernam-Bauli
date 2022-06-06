CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a) VARCHAR é string, PRIMARY KEY é a coluna principal, DATE é o tipo de DATE (YYYY-MM-DD), NOT NULL significa que nao pode ficar vazio.

SHOW DATABASES;

SHOW TABLES;

-- b) SHOW DATABASES mostra o banco de dados, e SHOW TABLES mostra as tabelas do banco.

DESCRIBE Actor;


-- c) ela descreve o que é esperado em cada campo da tabela.alter


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- 2-
-- a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Adernam",
  1000000,
  "1998-01-24", 
  "male"
);

-- b)Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.172 sec
--   Está dizendo que ja existe esse id.


INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- c) por que só foi informado que enviaria id nome e salário mas foi enviado todos os campos


INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);


-- d) nao foi enviado o nome.


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);


-- e) a data foi passada sem aspas, e ficou como valor e não como DATE.


-- f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);


-- 3-
-- a)

SELECT * FROM Actor WHERE gender = "female";

-- b)

SELECT salary from Actor WHERE name = "Tony Ramos";

-- c)

SELECT * FROM Actor WHERE gender = "invalid";

-- Não deu erro, apenas não retornou nada pois nenhum ator foi encontrado com essas condições.

-- d)

SELECT id, name, salary from Actor WHERE salary > 500000;

-- e)

SELECT id, nome from Actor WHERE id = "002";

-- Não existe campo chamado "nome", existe apenas "name".

SELECT id, name from Actor WHERE id = "002";

-- a)

-- Seleciona um ator que comece com A ou J, e que ganhe mais de 300 mil.
-- Depois com BETWEEN podemos encontrar um ator que ganhe entre 300 mil e 500 mil por exemplo, ou que nao ganhe entre 300 mil e 500 mil.

-- b)

SELECT * FROM Actor
WHERE name LIKE "A%" AND salary > 350000;

-- c)

SELECT * FROM Actor
WHERE name LIKE "%g%";

-- d)

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

-- 5-
-- a) O tipo VARCHAR tem um limite de 8000 caracteres, o TEXT é usado para maiores que isso.

CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

-- b)

INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "004", 
  "Os Penetras",
  "Desprezado pela ex-namorada, Beto tenta o suicídio e é salvo pelo vigarista Marco Polo, que promete ajudar seu novo amigo a reatar com a amada. Mas quando Marco Polo conhecer esta mulher, os planos mudam.",
  "2012-11-30", 
  6
);

-- 6-
-- a)

SELECT id, name, rating FROM Films
WHERE id = 001;

-- b)

SELECT * FROM Films
WHERE name = "Os penetras";

-- c)

SELECT id, name, synopsis FROM Films
WHERE rating >= 7;

-- 7-
-- a)

SELECT * FROM Films
WHERE name LIKE "%vida%";

-- b)

SELECT * FROM Films
WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";

-- c)

SELECT * FROM Films;

-- d)

SELECT * FROM Films
WHERE name LIKE "%professora%" OR synopsis LIKE "%professora%" AND rating >= 7;














































