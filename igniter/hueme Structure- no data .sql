-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 13, 2016 at 04:27 AM
-- Server version: 5.5.44-0+deb8u1
-- PHP Version: 5.6.19-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hueme`
--
CREATE DATABASE IF NOT EXISTS `hueme` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `hueme`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
`id` int(11) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` tinytext NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `posts_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mood_colours`
--

DROP TABLE IF EXISTS `mood_colours`;
CREATE TABLE IF NOT EXISTS `mood_colours` (
`id` int(11) NOT NULL,
  `colour` varchar(15) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notify`
--

DROP TABLE IF EXISTS `notify`;
CREATE TABLE IF NOT EXISTS `notify` (
  `id` int(11) NOT NULL,
  `IsRead` tinyint(1) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `post_id` int(11) DEFAULT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
`id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` tinytext NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `tags` varchar(50) DEFAULT NULL,
  `mood_colours_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='				';

-- --------------------------------------------------------

--
-- Table structure for table `session_record`
--

DROP TABLE IF EXISTS `session_record`;
CREATE TABLE IF NOT EXISTS `session_record` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `last_activity` int(10) NOT NULL,
  `data` blob NOT NULL,
  `timestamp` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stat_history`
--

DROP TABLE IF EXISTS `stat_history`;
CREATE TABLE IF NOT EXISTS `stat_history` (
  `id` int(11) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext,
  `users_id` int(11) NOT NULL,
  `mood_colours_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(44) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `photo_url` tinytext,
  `dob` date DEFAULT NULL,
  `description` tinytext,
  `gender` varchar(1) DEFAULT NULL,
  `status` tinytext,
  `country` varchar(45) DEFAULT NULL,
  `region` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `access_level` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `tos_checked` tinyint(1) NOT NULL DEFAULT '1',
  `age_checked` tinyint(1) NOT NULL DEFAULT '1',
  `mood_colours_id` int(11) NOT NULL DEFAULT '2'
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
 ADD PRIMARY KEY (`id`,`users_id`), ADD KEY `fk_comments_posts1_idx` (`posts_id`), ADD KEY `fk_comments_users1_idx` (`users_id`);

--
-- Indexes for table `mood_colours`
--
ALTER TABLE `mood_colours`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notify`
--
ALTER TABLE `notify`
 ADD PRIMARY KEY (`id`,`users_id`), ADD KEY `fk_notify_users1_idx` (`users_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
 ADD PRIMARY KEY (`id`,`mood_colours_id`,`users_id`), ADD KEY `fk_posts_mood_colours1_idx` (`mood_colours_id`), ADD KEY `fk_posts_users1_idx` (`users_id`);

--
-- Indexes for table `session_record`
--
ALTER TABLE `session_record`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stat_history`
--
ALTER TABLE `stat_history`
 ADD PRIMARY KEY (`id`,`users_id`,`mood_colours_id`), ADD KEY `fk_stat_history_users1_idx` (`users_id`), ADD KEY `fk_stat_history_mood_colours1_idx` (`mood_colours_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`,`mood_colours_id`), ADD UNIQUE KEY `username` (`username`,`email`), ADD KEY `fk_users_mood_colours1_idx` (`mood_colours_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `mood_colours`
--
ALTER TABLE `mood_colours`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=200;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
