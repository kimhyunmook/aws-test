CREATE TABLE `likes` (
	`num` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`icon` VARCHAR(10) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`type` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`hit` INT(10) NULL DEFAULT '0',
	PRIMARY KEY (`num`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;