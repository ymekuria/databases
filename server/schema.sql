drop database if exists chat;

create database chat;

USE chat;

drop table if exists users;

create table users (
  id int not null auto_increment,
  username varchar(30) not null,
  primary key (id)
);

drop table if exists rooms;

create table rooms (
  id int not null auto_increment,
  roomname varchar(30) not null,
  primary key (id)
);

drop table if exists messages;

create table messages ( 
  id int not null auto_increment, 
  user int not null, 
  text varchar(140) not null, 
  room int not null, 
  created_at varchar(100) not null, 
  primary key (id),
  FOREIGN KEY (user) REFERENCES users (id),
  FOREIGN KEY (room) REFERENCES rooms (id)
  );

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

