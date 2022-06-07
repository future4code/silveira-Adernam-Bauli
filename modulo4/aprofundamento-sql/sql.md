-- 1)
-- a) Exclui a coluna de salarios.
-- b) Muda o nome da coluna gender pra sex e coloca um limite de 6 caracteres.
-- c) Simula uma mudança na coluna, porém como foi informado o mesmo nome que o atual, nada vai 
-- d) 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2)

-- a)

UPDATE Actor
SET name = "Moacyr Franco" AND birth_date = "1978-02-20"
WHERE id = "003";

-- b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c)

UPDATE Actor
SET name = "Adernam", salary = 700000, birth_date = "1978-02-20", gender = "male"
WHERE id = "005";

-- d) Não deu erro, apenas disse que nenhuma linha foi afetada/modificada.

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "010";

-- 3)
-- a)

DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

-- b)

DELETE FROM Actor
WHERE salary > 1000000;


-- 4)
-- a)

SELECT MAX(salary) FROM Actor;

-- b)

SELECT MIN(salary)
FROM Actor
WHERE gender = "female";

-- c)

SELECT COUNT(*)
FROM Actor
WHERE gender = "female";

-- d)

SELECT SUM(salary)
FROM Actor;

-- 5)
-- a) Ele retorna uma contagem/quantidade de elementos do grupo informado, nesse caso retornou 3 homens

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- b)

SELECT id, name FROM Actor
ORDER BY name DESC;

-- c)

SELECT * FROM Actor
ORDER BY salary ASC;

-- d)

SELECT * FROM Actor
ORDER BY salary ASC
LIMIT 3;

-- e)

SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- 6)
-- a)

ALTER TABLE Films ADD playing_limit_date DATE;

-- b)

ALTER TABLE Films CHANGE rating rating FLOAT;

-- c)

UPDATE Films
SET playing_limit_date = "2022-06-07"
WHERE id = "001";

UPDATE Films
SET playing_limit_date = "2022-06-05"
WHERE id = "002";

-- d) Não da erro, apenas diz que nenhuma linha foi afetada

DELETE FROM Films
WHERE id = "003";

UPDATE Films
SET synopsis = "Alguma sinopse bem legal aqui :)"
WHERE id = "003";
















-- SET SQL_SAFE_UPDATES = 0;















































