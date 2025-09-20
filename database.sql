DROP TABLE post;

CREATE TABLE post (
    UserName VARCHAR(15),
    LevelName VARCHAR(20),
    DatePosted INT,
    LevelCodeId INT
);

INSERT INTO post VALUES (
    'John Daily',
    'so cool',
    09202025,
    10
);

INSERT INTO post VALUES (
    'Jane Doe',
    'i dont speak english',
    09212025,
    11
);

INSERT INTO post VALUES (
    'Mr Sonic',
    'me cool you stool',
    09212025,
    12
);


SELECT * FROM post ORDER BY username DESC ;
