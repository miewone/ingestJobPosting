

SELECT category, COUNT(*) FROM category GROUP BY category ORDER BY category ;
SELECT COUNT(*) FROM category;
SELECT COUNT(*) FROM skills;



SELECT skills FROM jobposting;

SELECT COUNT(*) FROM jobposting WHERE skills LIKE "%java%";
SELECT benefits FROM jobposting;

INSERT INTO classification_skills (skill,category)
SELECT sk.skill ,ct.category from skills sk
INNER JOIN category ct
ON sk.skill = ct.skill;

CREATE TABLE `classification_skills` (
	`id` INT not null AUTO_INCREMENT PRIMARY KEY,
	`skill` VARCHAR(50) ,
	`category` VARCHAR(50)
);

ALTER TABLE classification_skills MODIFY id INT NOT null KEY AUTO_INCREMENT;

SELECT category,COUNT(*) FROM classification_skills GROUP BY skill ORDER BY COUNT(*) desc;