-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2020 at 06:36 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbplay`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `name`, `age`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Bon Jovi', 25, 'Band', '1983', '2020-06-23 04:22:20', '2020-06-23 04:22:20'),
(2, 'Linkin Park', 19, 'Band', '1996', '2020-06-23 08:19:14', '2020-06-23 08:19:14'),
(3, '30 Second to mars', 15, 'Band', '2006', '2020-06-23 09:31:09', '2020-06-23 09:31:09'),
(4, 'Evanescence', 18, 'band', '1995', '2020-06-23 14:53:15', '2020-06-23 14:53:15'),
(5, 'My Chemical Romance', 15, 'band', '1998', '2020-06-23 15:07:35', '2020-06-23 15:07:35'),
(6, 'Aimer', 29, 'solo', '2011', '2020-06-29 18:37:46', '2020-06-29 18:37:46'),
(7, 'Fall Out Boy', 19, 'band', '2001', '2020-06-30 09:55:22', '2020-06-30 09:55:22'),
(8, 'Good Charlotte', 15, 'band', '1996', '2020-07-03 04:19:24', '2020-07-03 04:19:24'),
(9, 'Luck Life', 12, 'band', '2008', '2020-07-12 07:32:28', '2020-07-12 07:32:28'),
(10, 'Chiai Fujikawa', 25, 'solo', '2015', '2020-07-12 08:01:20', '2020-07-12 08:01:20'),
(11, 'Haruka Tomatsu', 30, 'solo', '2009', '2020-07-12 08:03:17', '2020-07-12 08:03:17'),
(12, 'EGOIST', 9, 'solo', '2011', '2020-07-12 08:17:45', '2020-07-12 08:17:45'),
(13, 'Slipknot', 25, 'band', '2004', '2020-07-12 08:58:44', '2020-07-12 08:58:44'),
(14, 'Guns N\' Roses', 32, 'band', '1987', '2020-07-12 08:59:54', '2020-07-12 08:59:54');

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `artistId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `musicLink` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `music`
--

INSERT INTO `music` (`id`, `artistId`, `title`, `year`, `thumbnail`, `musicLink`, `createdAt`, `updatedAt`) VALUES
(2, 1, 'Always', '1994', 'https://m.media-amazon.com/images/M/MV5BYzk5NmZhZTUtMmUyMC00ZmQ3LWFmZWEtMmE2ZGIxNzk3NmJlXkEyXkFqcGdeQXVyNTk1NTMyNzM@._V1_UY1200_CR137,0,630,1200_AL_.jpg', 'https://download.mp3-here.icu/c/Bon-Jovi-Always.mp3', '2020-06-23 04:22:35', '2020-06-23 04:22:35'),
(3, 2, 'Numb', '2003', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Linkin_Park_-_Numb_CD_cover.jpg', 'https://download.mp3-here.icu/k/Linkin-Park-Numb.mp3', '2020-06-23 08:22:31', '2020-06-23 08:22:31'),
(4, 3, 'The kill', '2006', 'https://www.ultimate-guitar.com/static/article/news/7/87297_ver1552057031.jpg', 'https://fr02.mp3pro.xyz/ce58407c5a9d667a42d0a/The%20Kill%20%28Bury%20Me%29%20-%2030%20Seconds%20To%20Mars%20HQ.mp3', '2020-06-23 09:36:47', '2020-06-23 09:36:47'),
(5, 3, 'From Yesterday', '1995', 'https://echelonsfl.files.wordpress.com/2011/11/fyposter.jpg?w=584', 'http://fr04.mp3pro.xyz/882ebb4d5a8f7ce30d1f1/30%20Seconds%20To%20Mars%20From%20Yesterday.mp3', '2020-06-23 12:31:07', '2020-06-23 12:31:07'),
(6, 4, 'Bring Me To Life', '2003', 'https://3.bp.blogspot.com/-jjPPddWRL38/WGR0hCznqbI/AAAAAAAAAxo/Dly72q_qJ-QubMd_FNooc-O-aH6endryACPcB/s1600/lirik%2Bterjemah%2Bevanescence.jpg', 'http://fr05.mp3pro.xyz/aaa2004d5a8f7c73a8e07/Evanescence-Bring%20Me%20To%20Life.mp3', '2020-06-23 15:06:57', '2020-06-23 15:06:57'),
(7, 2, 'In The End', '2002', 'https://i1.sndcdn.com/artworks-000596358704-vv29dg-t500x500.jpg', 'http://nl02.mp3pro.xyz/a4538e415a8fa2cf855bc/In%20the%20end%20-%20Linkin%20Park%20%28with%29.mp3', '2020-06-26 10:29:23', '2020-06-26 10:29:23'),
(8, 6, 'Polaris', '2013', 'https://c-sf.smule.com/rs-s78/arr/ae/d5/3b8e32b4-6026-4ee0-b1d2-f45cccf3dfce_1024.jpg', 'https://nl05.mp3pro.xyz/b5d934615a9d66e1f4372/Aimer%20Polaris.mp3', '2020-06-29 18:43:13', '2020-06-29 18:43:13'),
(10, 7, 'Dead On Arrival', '2003', 'https://vignette.wikia.nocookie.net/falloutboy/images/3/30/Take_This_to_Your_Grave.jpg/revision/latest?cb=20150405011117', 'https://nl02.mp3pro.xyz/a8b6a6435a9d671e842ae/Fall%20Out%20Boy%20-%20Dead%20On%20Arrival.mp3', '2020-06-30 09:56:56', '2020-06-30 09:56:56'),
(11, 8, 'Broken Heart Parade', '2007', 'https://img.discogs.com/o9eaFw3l4cwXeov7G_UejgHJrIU=/fit-in/599x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-938881-1175080409.jpeg.jpg', 'http://fr01.mp3pro.xyz/5cfc7fc95a981d66c34a2/Good%20Charlotte-Broken%20Hearts%20Parade%20-.mp3', '2020-07-03 04:21:32', '2020-07-03 04:21:32'),
(12, 5, 'Cancer', '2016', 'https://i.pinimg.com/originals/e3/11/c9/e311c99055a5f158f3b999fd11009a42.jpg', 'https://nl01.mp3pro.xyz/405106875a9d2ae4b2445/My%20Chemical%20Romance%20-%20%5BCancer%5D.mp3', '2020-07-07 04:55:51', '2020-07-07 04:55:51'),
(13, 8, 'The River', '2007', 'https://upload.wikimedia.org/wikipedia/en/2/2f/The_river_cover.jpg', 'https://nl05.mp3pro.xyz/50af19445a9d64f30a9d2/The%20River%20-%20Good%20Charlotte%20%28with%29.mp3', '2020-07-07 09:07:53', '2020-07-07 09:07:53'),
(14, 9, 'Lily', '2019', 'https://www.generasia.com/w/images/thumb/1/17/Luck_Life_-_Lily_artist.jpg/250px-Luck_Life_-_Lily_artist.jpg', 'https://nl04.mp3pro.xyz/3831da6d5aa39978e662e/%E3%80%8CLily%E3%80%8D-%20Luck%20Life%20Bungou%20Stray%20Dogs%203%20ED%20%5BLEGENDADO%20PT-BR%5D.mp3', '2020-07-12 07:35:04', '2020-07-12 07:35:04');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200623040620-create-user.js'),
('20200623040703-create-transaction.js'),
('20200623040724-create-artist.js'),
('20200623040733-create-music.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `accountNumber` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `startDate`, `dueDate`, `accountNumber`, `attachment`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2020-06-21', '2020-07-29', '15090101', 'https://skripsilive.com/wp-content/uploads/2019/09/buktitranfermhsskripsilive143.jpg', 'approved', '2020-06-23 04:16:42', '2020-06-28 18:28:53'),
(7, 7, '2020-06-25', '2020-07-26', '15090107', 'https://1.bp.blogspot.com/-aDTJn_UbwsI/XpV8pKryEuI/AAAAAAAACs8/JI_uvQxkPYc2bzIrokHLaCGdYcIIku4CgCLcBGAsYHQ/s1600/Langkah%2Bterakhi.JPG', 'approved', '2020-06-25 09:18:36', '2020-06-25 18:23:05'),
(29, 2, '2020-06-30', '2020-08-05', '15090103', 'https://2.bp.blogspot.com/-bfPwSboPr5A/WTTtimmy5fI/AAAAAAAAF1c/pTi-d_7xFHYMbdn-BbxrfvdNT-pzE5sAwCLcB/s1600/Bayar%2BIuran%2BBPJS%2BKesehatan%2Bdi%2BATM%2BBCA%2B10.jpg', 'approved', '2020-06-30 03:38:13', '2020-07-05 18:39:17'),
(30, 37, '2020-06-30', '2020-08-16', '15090107', 'https://www.asuransiku.id/support/images/upload-photos/media/mbanking_06.png', 'approved', '2020-06-30 09:52:53', '2020-07-17 12:09:51'),
(32, 55, '2020-07-20', '1970-01-01', '150901020', 'https://2.bp.blogspot.com/-bfPwSboPr5A/WTTtimmy5fI/AAAAAAAAF1c/pTi-d_7xFHYMbdn-BbxrfvdNT-pzE5sAwCLcB/s1600/Bayar%2BIuran%2BBPJS%2BKesehatan%2Bdi%2BATM%2BBCA%2B10.jpg', 'rejected', '2020-07-20 08:15:37', '2020-07-20 08:18:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscription` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `gender`, `phone`, `address`, `subscription`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Muhammad Rizki Akbar', 'rizkyakbar1511@gmail.com', '$2b$10$mD3mur1jlWiM15oiYOlrL.fVYpAkMxUeSdBTwCgYKAG3s2pFKvUsa', 'male', '083802595929', 'Jl.Sako Baru, Komplek Graha Bukit Raflesia Blok Q-5', 1, 1, '2020-06-23 04:13:50', '2020-06-28 18:28:53'),
(2, 'Rendy Ario', 'rendy@dumbsound.com', '$2b$10$C3H/dsrJmYp8r5p5.z8OluRkDYNfNoQJRKVIJROtIjZXhALL128Aa', 'male', '08123456789', 'jl. sako baru test test', 1, 0, '2020-06-23 07:24:36', '2020-07-05 18:39:17'),
(7, 'Dzaka Raihan', 'dzaka@dumbsound.com', '$2b$10$dGelKRvTXBK9r7bW7gcAAeXlxsv8UgR6i4s2evOP996CHpBcXwqtK', 'male', '0873649234235', 'jl. sako sako sako', 1, 0, '2020-06-24 13:39:45', '2020-06-25 18:23:05'),
(37, 'M Iqbal Alexander', 'iqbal@dumbsound.com', '$2b$10$CrS7nH9wT3gIRgk1X3MGBuefw7/ZVgx4Yy4W6PWyZCrDwaVsfgPQe', 'male', '081238471923', 'jl. Kalidoni No 10', 1, 0, '2020-06-30 09:51:18', '2020-07-17 17:49:20'),
(53, 'Rezky Maulana', 'rezky@dumbsound.com', '$2b$10$jrB75ZAbJobiM6Fu.reXsuESDtaXpAm8zBHa4m.KIXS6gjJYG/oKm', 'male', '0853726382737', 'Jl. Yayasan 2 No 30 Blok R5', 0, 0, '2020-07-14 17:39:36', '2020-07-14 17:39:36'),
(54, 'Ferdian Dwi Cahya', 'ferdian@dumbsound.com', '$2b$10$Dihcr4C7O6jvEqVARUclYOZV6meqiru3GZF4Q5k7kgFhpobGAOUD2', 'male', '081273827372', 'Jl. Kalidoni, Lr. Damai No 25', 0, 0, '2020-07-14 17:42:28', '2020-07-14 17:42:28'),
(55, 'Ifandi Khainur Rahim', 'ifandi@dumbsound.com', '$2b$10$un8e3KBboq3snw8QaqeawuGxpLYVMMH0Vu5h9JfOmkgNxpbBkIJx6', 'male', '083802919283', 'Jl. Bintaro Raya No 14', 0, 0, '2020-07-14 18:05:21', '2020-07-20 08:18:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
