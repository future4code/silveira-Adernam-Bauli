-- 1)
-- a) É uma chave refenciada de outra tablea, ou seja essa informação ja existe em outra tabela e está sendo referenciada na nova tabela.

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    film_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Films(id)
);

-- b)

INSERT INTO Rating
VALUES ("001", "Filme bom", 9, "001"), ("002", "Filme ruim, enredo fraco", 6, "002"), ("003", "Filme com história não muito empolgante", 7, "004");

-- c)

INSERT INTO Rating
VALUES ("004", "Filme ruim", 5, "003");

-- 14:33:14	INSERT INTO Rating VALUES ("004", "Filme ruim", 5, "003")
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814404-adernam-bauli`.`Rating`,
-- CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Films` (`id`))	0.187 sec

-- O erro diz que não foi possível fazer o update pois houve um problema com a chave estrangeira, pois não existe o id informado.

-- d)

ALTER TABLE Films DROP COLUMN rating;

-- e)

DELETE FROM Films
WHERE id = "004";

-- 14:37:32	DELETE FROM Films WHERE id = "004"	Error Code: 1451.
-- Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814404-adernam-bauli`.`Rating`,
-- CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Films` (`id`))	0.172 sec

-- Novamente deu erro por causa da chave estrangeira, pelo fato de estar vinculada a uma outra tabela.

-- 2)
-- a) Ela liga a tabela de atores com a tabela de filmes para que possa ocorres relação N:M entre os dados delas.

CREATE TABLE MovieCast (
		film_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- b)

INSERT INTO MovieCast
VALUES ("001", "001"), ("001", "004"), ("002", "004"), ("002", "002"), ("002", "001"), ("001", "002");

-- c)

INSERT INTO MovieCast
VALUES ("001", "003");

-- 14:47:17	INSERT INTO MovieCast VALUES ("001", "003")
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814404-adernam-bauli`.`MovieCast`,
-- CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.187 sec

-- Houve um problema na chave estrangeira do id do ator.

-- d)

DELETE FROM Actor
WHERE id = "002";

-- 14:49:10	DELETE FROM Actor WHERE id = "002"
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814404-adernam-bauli`.`MovieCast`,
-- CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.187 sec


-- Houve um problema pois o id do ator é uma chave estrangeira de outra tabela.

-- 3)
-- a) O operador ON é uma condição que exige o resultado onde o campo id seja o mesmo na tabela de Filmes e de Rating.

-- b)

SELECT Films.id, Films.name, Rating.id, Rating.rate FROM Films
INNER JOIN Rating ON Films.id = Rating.film_id;

















































