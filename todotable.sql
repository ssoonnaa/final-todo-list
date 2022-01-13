CREATE TABLE `todotable` (
	`no` INT(10) NOT NULL AUTO_INCREMENT,
	`mylist` VARCHAR(5000) NOT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`no`) USING BTREE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;
