-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2022 at 11:20 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_places`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cuisine` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `url` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `cuisine`, `price`, `url`) VALUES
(3, 'Gmarket', 'american', '2', 'asdads'),
(5, 'McDonalds', 'american', '2', 'https://www.mcdonalds.co.kr/eng/menu/list.do'),
(7, 'hello hello ', 'spanish', '3', 'hihi.com'),
(8, 'github.com', 'spanish', '1', 'ww'),
(9, 'Gmarket', 'japanese', '3', 'a new url'),
(10, 'amazon.co.uk', 'korean', '5', 'hihihi'),
(11, '123', 'korean', '-2', '123'),
(12, 'Gmarket', 'japanese', '3', 'dfsdsff'),
(13, 'amazon.co.uk', 'korean', '4', 'sdsdfsdf'),
(14, 'amazon.co.uk', 'korean', '4', 'sdsdfsdf'),
(15, 'hello talk 123', 'japanese', '4', 'new123'),
(16, 'My New Rest', 'korean', '3', 'dfs'),
(17, 'zz', 'korean', '3', 'sdsfd'),
(18, 'dsfgfdg', 'japanese', '2', 'dfssdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
