CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE messages (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `User` VARCHAR NULL DEFAULT NULL,
  `Text` VARCHAR(140) NOT NULL DEFAULT 'NULL',
  `Room` VARCHAR NULL DEFAULT NULL,
  `Created at` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Username` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Rooms`;
    
CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `Messages` ADD FOREIGN KEY (User) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (Room) REFERENCES `Rooms` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`User`,`Text`,`Room`,`Created at`) VALUES
-- ('','','','','');




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

