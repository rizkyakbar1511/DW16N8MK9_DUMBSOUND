-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 07, 2020 at 04:15 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `Artists`
--

CREATE TABLE `Artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Artists`
--

INSERT INTO `Artists` (`id`, `name`, `age`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Evanescence', 20, 'band', '2002', '2020-07-08 13:10:04', '2020-07-08 13:10:04'),
(2, 'Simple Plan', 25, 'band', '1999', '2020-07-08 13:15:30', '2020-07-08 13:15:30'),
(3, 'System of a down', 26, 'band', '1994', '2020-07-08 13:19:32', '2020-07-08 13:19:32'),
(4, 'Ikimono Gakari', 20, 'band', '1999', '2020-07-08 14:01:24', '2020-07-08 14:01:24'),
(5, 'Aimer', 29, 'solo', '2011', '2020-07-08 14:07:54', '2020-07-08 14:07:54'),
(6, 'Samson', 15, 'band', '2001', '2020-07-09 03:50:35', '2020-07-09 03:50:35');

-- --------------------------------------------------------

--
-- Table structure for table `Music`
--

CREATE TABLE `Music` (
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
-- Dumping data for table `Music`
--

INSERT INTO `Music` (`id`, `artistId`, `title`, `year`, `thumbnail`, `musicLink`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Bring Me To Life', '2003', 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg', 'https://nl06.mp3pro.xyz/c3223dfb5a9edda22d78f/Evanescence-Bring%20Me%20To%20Life.mp3', '2020-07-08 13:12:56', '2020-07-08 13:12:56'),
(2, 2, 'Perfect', '2002', 'https://3.bp.blogspot.com/__KbibfFe7TM/TSLi4-EDX4I/AAAAAAAAApw/BHMT-yn15QI/s1600/album-simple-plan.jpg', 'https://nl03.mp3pro.xyz/25c3eded5a9edee863a44/Simple%20Plan%20-%20Perfect.mp3', '2020-07-08 13:17:59', '2020-07-08 13:17:59'),
(3, 3, 'Toxicity', '2001', 'https://images.genius.com/be6e91a03c917482ee2c5c8e1598a31c.1000x1000x1.jpg', 'https://fr01.mp3pro.xyz/c16bf9ac5a9edf92821fa/System%20of%20a%20down%20-%20Toxicity%20-.mp3', '2020-07-08 13:20:48', '2020-07-08 13:20:48'),
(4, 4, 'Sakura', '2006', 'https://images.genius.com/312820b7ce348b5ad75e9d97628e644d.600x600x1.jpg', 'https://nl02.mp3pro.xyz/b36c54ea5a9ee8baba10d/%E3%81%84%E3%81%8D%E3%82%82%E3%81%AE%E3%81%8C%E3%81%8B%E3%82%8A%28Ikimonogakari%29%20-%20SAKURA%20%28Kan%20Rom%20Eng%20Esp%29.mp3', '2020-07-08 14:03:10', '2020-07-08 14:03:10'),
(5, 4, 'Last Scene', '2016', 'https://4.bp.blogspot.com/-VFVPF1AFCzI/V9Z5GubvV3I/AAAAAAAAEpU/ZFLFMYOGGUIyNReKZBCvZzFGhv5ILqotQCLcB/s1600/last_scene1.jpg', 'https://nl01.mp3pro.xyz/c9c941c05a9ee9688f3b7/Ikimono%20Gakari%20-%20Last%20Scene%20%5BWith%5D.mp3', '2020-07-08 14:05:26', '2020-07-08 14:05:26'),
(6, 5, 'Words', '2013', 'https://i.ytimg.com/vi/Z3GkiupDtZM/sddefault.jpg', 'https://fr02.mp3pro.xyz/f13a2d675a9eea51a8f55/%E3%80%90HD%E3%80%91After%20Dark%20-%20Aimer%20-%20words%E3%80%90%E4%B8%AD%E6%97%A5%E5%AD%97%E5%B9%95%E3%80%91.mp3', '2020-07-08 14:09:06', '2020-07-08 14:09:06'),
(7, 6, 'Kenangan Terindah', '2005', 'https://i.ytimg.com/vi/X0YDGxu1dCQ/maxresdefault.jpg', 'https://i.ytimg.com/vi/X0YDGxu1dCQ/maxresdefault.jpg', '2020-07-09 03:52:20', '2020-07-09 03:52:20');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200623040620-create-user.js'),
('20200623040703-create-transaction.js'),
('20200623040724-create-artist.js'),
('20200623040733-create-music.js');

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
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
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`id`, `userId`, `startDate`, `dueDate`, `accountNumber`, `attachment`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2020-07-08', '2020-08-07', 'Invalid date', 'https://gotra.sgp1.cdn.digitaloceanspaces.com/web-upload/1527432881_27-05-2018_photo6077615961109801020.jpg', 'approved', '2020-07-08 13:33:09', '2020-07-08 13:33:59'),
(2, 5, '2020-07-08', '1970-01-01', 'Invalid date', 'https://mediakonsumen.com/files/2018/07/5b55cc555966e.jpg', 'rejected', '2020-07-08 16:57:48', '2020-07-20 15:39:48'),
(3, 4, '2020-08-11', '2020-08-10', 'Invalid date', 'https://mediakonsumen.com/files/2018/07/5b55cc555966e.jpg', 'approved', '2020-07-08 16:59:28', '2020-07-11 06:18:45'),
(4, 7, '2020-07-09', '1970-01-01', 'Invalid date', 'https://mediakonsumen.com/files/2018/07/5b55cc555966e.jpg', 'rejected', '2020-07-08 17:14:02', '2020-07-16 13:32:56');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
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
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `fullName`, `email`, `password`, `gender`, `phone`, `address`, `subscription`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Muhammad Rizki Akbar', 'rizkyakbar1511@gmail.com', '$2b$10$eL83bhy/w5A8bOJehdKfBOo4A.blvOga1lJmkcWPvGRG9wmtAhPOu', 'male', '083802595929', 'Jl.Sako Baru, Komplek Graha Bukit Raflesia Blok Q-5', 1, 1, '2020-07-08 13:06:30', '2020-07-08 13:06:30'),
(2, 'M Iqbal Alexander', 'iqbal@dumbsound.com', '$2b$10$/lCKF.xUdVW5LTGH4vDfke6j2/DGqsKrTII9cAifmLOeAqc5Ycjz.', 'male', '08127879873', 'Jl. H. Noerdin Pandji, No 15', 1, 0, '2020-07-08 13:29:51', '2020-07-08 13:33:59'),
(3, 'Irvan Immaduddin', 'Irvan@dumbsound.com', '$2b$10$GtdDAibO6Gxd4PjO8T5Uo.HtFiPw7bFQIXMP3BC30xcEEu2XvHofy', 'male', '085398234634', 'Jl.Kalidoni Lr. Santun No. 10', 0, 0, '2020-07-08 15:08:00', '2020-07-08 15:08:00'),
(4, 'Rezky Maulana', 'rezky@dumbsound.com', '$2b$10$p.7Awkg6KyU7GOBOYkljxOKC0PiDhvrh8MiuIlPU7puHNpIRIfVZ6', 'male', '085692345123', 'Jl.Yayasan 2 No 103', 1, 0, '2020-07-08 16:02:41', '2020-07-11 06:18:45'),
(5, 'Rendy Ario', 'rendy@dumbsound.com', '$2b$10$hgwN.TN0sLtidJuv/c3HFOI7obc1j4qgW2P5MoGcv.4SJRSrptGNy', 'male', '081293847343', 'Jl. Matador No. 13', 0, 0, '2020-07-08 16:05:37', '2020-07-20 15:39:48'),
(6, 'Muhammad Aldyali', 'aldyali@dumbsound.com', '$2b$10$l1HPegFPQJzdRlbRtHosMee3T.WCtp9JTOgX4wZ9yQ51uUPmFjZQW', 'male', '085683293465', 'Jl. Yayasan 1 No 203', 0, 0, '2020-07-08 16:07:34', '2020-07-08 16:07:34'),
(7, 'Ryan Dwi Melshi', 'ryan@dumbsound.com', '$2b$10$V7lwVTXuJMjmDf.GceDJx.qWtqR/FMkgXCTElxFjkK6Ze/SoixkVu', 'male', '087634231325', 'Jl. Polda Raya', 0, 0, '2020-07-08 16:40:51', '2020-07-16 13:32:56'),
(8, 'Iqbal Maulana', 'iqbalm@dumbsound.com', '$2b$10$BLgzk4urh8IGCqHb/FeWV.IBYcdgot0N7.BPIQnmKQm7Cdfoue/X.', 'male', '087512345323', 'Jl. Talang Gading No. 10', 0, 0, '2020-07-09 03:48:04', '2020-07-09 03:48:04'),
(9, 'Rilo Vambudi', 'rilo@dumbsound.com', '$2b$10$Pa9I8Un.nPp9ZuXYsltCOOyVLdyE3VKlP9IQlCZRCETVgXzUyiw7q', 'male', '087462394929', 'Jl. Tanjung Perak No 120', 0, 0, '2020-07-11 06:47:10', '2020-07-11 06:47:10'),
(10, 'Doni Primateo', 'doni@dumbsound.com', '$2b$10$WaGW7nQLUf42hPnllXt5KONMyf0dc.Fu3dh/UDIBZWXeazFjZcjQe', 'male', '085703948538', 'Jl. Kebangkan No 1000', 0, 0, '2020-07-11 06:58:25', '2020-07-11 06:58:25'),
(11, 'Sheila Marcia', 'sheila@dumbsound.com', '$2b$10$kwHDxVHNnj1wRpd.fMlU5uVyJseKLI2ueudqudXj4FbZkgT65BOuy', 'male', '0896830239458', 'Jl. Kuto No 102', 0, 0, '2020-07-11 07:00:30', '2020-07-11 07:00:30'),
(12, 'Royman', 'roy@dumbsound.com', '$2b$10$lM4Q0uldmghNnHEtxLdoYOeB9KonkVA/GMZwP3FDOcFVp/LZ3fKi2', 'male', '0856372839123', 'Jl. Kepandaian NO 100', 0, 0, '2020-07-11 07:02:46', '2020-07-11 07:02:46'),
(13, 'Tika Apriyani', 'tika@dumbsound.com', '$2b$10$Vga4DeUVJRE0w.VXVE0gnO8IVKlVUwtnKsW6F4OqE2FRCGA0XQ/bK', 'male', '0812847234923', 'Jl.Sapta Marga, Komp, Citra Damai II', 0, 0, '2020-07-11 07:28:53', '2020-07-11 07:28:53'),
(14, 'Ardina', 'dina@dumbsound.com', '$2b$10$Qvc.xr1AGz33PTlQDHnu7e3hiWomuFwByuW1FjbrbhHk3fAaVokIC', 'male', '081274929392', 'Jl. Triantama No 12', 0, 0, '2020-07-11 07:35:48', '2020-07-11 07:35:48'),
(15, 'Rezky', 'rezky@gmail.com', '$2b$10$LHuPEFFbbNzT1YygyFvX5uYCsWMDhT2zSjRizo6bGf.iwiHtUqofS', 'male', '081274623626', 'Jl. Yayasan 3 no 15', 0, 0, '2020-07-13 13:06:42', '2020-07-13 13:06:42'),
(16, 'hamidi rahman', 'rahman@dumbsound.com', '$2b$10$e7G4ftoNZpzeQzl6vQQTou11biHbCl3dtYilp..rmtim06KNZsDkK', 'male', '081274829382', 'Jl. 22 ilir, ', 0, 0, '2020-07-13 13:15:50', '2020-07-13 13:15:50'),
(17, 'isabella', 'isabella@gmail.com', '$2b$10$gkMBZma.RMsvHluIVBCj5.wSC0BXvfoBdcacPpeIedXTlL8KcE10y', 'female', '0812345682392', 'Jl.Sako Baru, Komplek Graha Bukit Raflesia Blok Q-5', 0, 0, '2020-07-13 13:24:07', '2020-07-13 13:24:07'),
(18, 'fahriz', 'fahriz@gmail.com', '$2b$10$iJV.XFzZK6UydN7e6.pA9.VI80cKHsenz0R3CnSrgGkZkjzAmR0xe', 'female', '0812345682392', 'Jl.Sako Baru, Komplek Graha Bukit Raflesia Blok Q-5', 0, 0, '2020-07-13 13:28:37', '2020-07-13 13:28:37'),
(19, 'Ridwan', 'ridwan@dumbsound.com', '$2b$10$kxW2PXSotfH5s12esDA1pOIbTDWekIQ/S21Y.4.8pIjLON1PAvSEC', 'male', '0812746236238', 'Jl. Tanjung perak no 3', 0, 0, '2020-07-13 13:32:57', '2020-07-13 13:32:57'),
(20, 'iwan', 'iwan@dumbsound.com', '$2b$10$gaVz.hjaHsXLQCscJgJ86OTjRFiBD7OOieW2.qfZIVW0t0tyP6SFW', 'male', '0856742381293', 'Jl. Kalidoni no 15', 0, 0, '2020-07-13 13:35:48', '2020-07-13 13:35:48'),
(21, 'irvan', 'irvan15@dumbsound.com', '$2b$10$K39Vp3Gn6TJ2D6crRrPFbebAau3NgfDqpQiKpmnT9djMsF44FWBh.', 'male', '08237124723848', 'jl. sekip ujung no 15', 0, 0, '2020-07-13 13:36:55', '2020-07-13 13:36:55'),
(22, 'Andre ', 'andre@dumbsound.com', '$2b$10$ZhpofPMnwQQvGVx1WCLTI.4XSQWeqq8wJmlz0I9Af3.nDBYk9tvxW', 'male', '08561234823842', 'jl. Graha bukit raflesia', 0, 0, '2020-07-13 13:38:54', '2020-07-13 13:38:54'),
(23, 'haris', 'haris@outlook.com', '$2b$10$OdwdoJAcgV3W9BEivPVa3uj2JQqxwBEY/FjTj9sdWGnL.DyGEKFNK', 'male', '0812742834234', 'jl. ajen no 25', 0, 0, '2020-07-13 13:42:14', '2020-07-13 13:42:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Artists`
--
ALTER TABLE `Artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Music`
--
ALTER TABLE `Music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Artists`
--
ALTER TABLE `Artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Music`
--
ALTER TABLE `Music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Music`
--
ALTER TABLE `Music`
  ADD CONSTRAINT `Music_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `Artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD CONSTRAINT `Transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
