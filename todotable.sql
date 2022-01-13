CREATE TABLE `mytodotable` (
	`no` INT(10) NOT NULL AUTO_INCREMENT,
	`list` VARCHAR(1000) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`no`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;