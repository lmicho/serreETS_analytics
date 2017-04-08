-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 07, 2017 at 02:37 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `serreets_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Alert`
--

CREATE TABLE `Alert` (
  `ID` int(11) NOT NULL,
  `data_entry` varchar(255) COLLATE utf8_bin NOT NULL,
  `input_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Alert_Family`
--

CREATE TABLE `Alert_Family` (
  `ID` int(11) NOT NULL,
  `ID_Alert` int(11) NOT NULL,
  `ID_Family` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Alert_TypeAlert`
--

CREATE TABLE `Alert_TypeAlert` (
  `ID` int(11) NOT NULL,
  `ID_Alert` int(11) NOT NULL,
  `ID_TypeAlert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Arduino`
--

CREATE TABLE `Arduino` (
  `ID` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Arduino`
--

INSERT INTO `Arduino` (`ID`, `name`) VALUES
(1, '1'),
(2, '2'),
(3, 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `DataInfo`
--

CREATE TABLE `DataInfo` (
  `ID` int(11) NOT NULL,
  `data_entry` FLOAT NOT NULL,
  `input_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Family`
--

CREATE TABLE `Family` (
  `ID` int(11) NOT NULL,
  `unit` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `upperCriticalLimit` int(11) NOT NULL,
  `lowerCriticalLimit` int(11) NOT NULL,
  `upperBufferLimit` int(11) NOT NULL,
  `lowerBufferLimit` int(11) NOT NULL,
  `updateTime` time DEFAULT NULL,
  `communicationProtocol` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Location`
--

CREATE TABLE `Location` (
  `ID` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Location`
--

INSERT INTO `Location` (`ID`, `name`, `description`) VALUES
(1, 'B04', 'Bassin de rétention'),
(2, 'B01', 'Dernier bassin des poissons (près de la porte)'),
(3, 'EXT01', 'Extérieur'),
(4, 'P01-01', 'Bassin de plantes en haut à droite'),
(5, 'P03-04', 'Bassin de plantes en haut à gauche'),
(6, 'PL-01', 'Plantes à lampes'),
(7, 'P02-01', 'Bassin du milieu premier quart'),
(8, 'P02-02', 'Bassin du milieu deuxième quart'),
(9, 'SP-00', 'Spare'),
(10, 'P02-04', 'Bassin du milieu quatrième quart');

-- --------------------------------------------------------

--
-- Table structure for table `Member`
--

CREATE TABLE `Member` (
  `ID` int(11) NOT NULL,
  `firstName` varchar(50) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(50) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(150) COLLATE utf8_bin NOT NULL,
  `phone` char(11) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `firstVisitCheck` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Member`
--

INSERT INTO `Member` (`ID`, `firstName`, `lastName`, `email`, `password`, `phone`, `description`, `firstVisitCheck`) VALUES
(1, 'Lauriane', 'Michaud', 'laurianemichaud@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', '5149166126', 'Développement WEb', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Member_Project`
--

CREATE TABLE `Member_Project` (
  `ID` int(11) NOT NULL,
  `ID_Member` int(11) NOT NULL,
  `ID_Project` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Member_Project`
--

INSERT INTO `Member_Project` (`ID`, `ID_Member`, `ID_Project`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Project`
--

CREATE TABLE `Project` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Project`
--

INSERT INTO `Project` (`ID`, `name`, `description`) VALUES
(1, 'Unité aquaponique ÉAU Jean-Talon', 'Ce projet permettra à SerreÉTS de développer davantage son expertise en contrôle d’environnement et gestion énergétique des serres et à l’entreprise ÉAU de s’initier à ces domaines intimement liés à leur production et leurs profits.');

-- --------------------------------------------------------

--
-- Table structure for table `Project_Sensor`
--

CREATE TABLE `Project_Sensor` (
  `ID` int(11) NOT NULL,
  `ID_Project` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Project_Sensor`
--

INSERT INTO `Project_Sensor` (`ID`, `ID_Project`, `ID_Sensor`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 1, 22),
(23, 1, 23),
(24, 1, 24),
(25, 1, 25),
(26, 1, 26),
(27, 1, 27),
(28, 1, 28),
(29, 1, 29),
(30, 1, 30),
(31, 1, 31),
(32, 1, 32),
(33, 1, 33),
(34, 1, 34),
(35, 1, 35),
(36, 1, 36),
(37, 1, 37),
(38, 1, 38),
(39, 1, 39),
(40, 1, 40);

-- --------------------------------------------------------

--
-- Table structure for table `Sensor`
--

CREATE TABLE `Sensor` (
  `ID` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8_bin NOT NULL,
  `unit` varchar(20) COLLATE utf8_bin NOT NULL,
  `max_val` float NOT NULL,
  `min_val` float NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Sensor`
--

INSERT INTO `Sensor` (`ID`, `name`, `unit`, `max_val`, `min_val`, `description`) VALUES
(1, 'PH01', 'N/A', 14, 0, 'PH'),
(2, 'OR01', 'mV', 1019.9, -1019.9, 'Potentiel d\'oxyo-réduction'),
(3, 'OX01', '%', 54, 0, 'Taux d\'oxygène dans l\'eau, pourcentage de saturation'),
(4, 'EC01', 'uS', 200000, 0, 'Electrical conductivity'),
(5, 'TD01', 'mg/L', 0, 0, 'Total dissolved solids'),
(6, 'SA01', 'PSU', 0, 0, 'Salinity'),
(7, 'SG01', 'N/A', 0, 0, 'Specific gravity of sea water'),
(8, 'TE01', 'C', 0, 0, 'Température de l\'eau'),
(9, 'TE02', 'C', 0, 0, 'Température de l\'eau'),
(10, 'HU01', '%', 0, 0, 'Humidité de l\'air ambiant'),
(11, 'RR01', 'N/A', 255, 0, 'Couleur rouge de l\'eau (0-255)'),
(12, 'GG01', 'N/A', 255, 0, 'Couleur verte de l\'eau (0-255)'),
(13, 'BB01', 'N/A', 255, 0, 'Couleur bleu de l\'eau (0-255)'),
(14, 'TA02', 'C', 0, 0, 'Température de l\'air ambiante'),
(15, 'HU02', '%', 0, 0, 'Humidité de l\'air ambiante'),
(16, 'TA03', 'C', 0, 0, 'Température de l\'air ambiante'),
(17, 'HU03', '%', 0, 0, 'Humidité de l\'air ambiante'),
(18, 'TA04', 'C', 0, 0, 'Température de l\'air ambiante'),
(19, 'HU04', '%', 0, 0, 'Humidité de l\'air ambiante'),
(20, 'TE03', 'C', 0, 0, 'Température de l\'eau'),
(21, 'TE04', 'C', 0, 0, 'Température de l\'eau'),
(22, 'LU01', 'Lux', 0, 0, 'Lumière visible'),
(23, 'UV01', 'N/A', 0, 0, 'Induce UV'),
(24, 'LU02', 'Lux', 0, 0, 'Lumière visible'),
(25, 'IR02', 'Lux', 0, 0, 'Lumière infra rouge'),
(26, 'UV02', 'N/A', 0, 0, 'Indice UV'),
(27, 'LU03', 'Lux', 0, 0, 'Lumière visible'),
(28, 'IR03', 'Lux', 0, 0, 'Lumière infra rouge'),
(29, 'UV03', 'N/A', 0, 0, 'Indice UV'),
(30, 'LU04', 'Lux', 0, 0, 'Lumière visible'),
(31, 'IR04', 'Lux', 0, 0, 'Lumière infra rouge'),
(32, 'UV04', 'N/A', 0, 0, 'Indice UV'),
(33, 'CO', '%', 0, 0, 'Capteur de Co2'),
(34, 'PH02', 'N/A', 14, 0, 'PH'),
(35, 'OR02', 'V', 0, 0, 'Potentiel d\'oxydo-réduction en volt'),
(36, 'OX02', 'mg/L', 0, 0, 'Taux d\'oxygène dans l\'eau'),
(37, 'EC02', 'uS', 0, 0, 'Electrical conductivity'),
(38, 'TD02', 'mg/L', 0, 0, 'Total dissolved solids'),
(39, 'SA02', 'PSU', 0, 0, 'Salinity'),
(40, 'SG02', 'N/A', 0, 0, 'Specific gravity of sea water');

-- --------------------------------------------------------

--
-- Table structure for table `Sensor_Alert`
--

CREATE TABLE `Sensor_Alert` (
  `ID` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL,
  `ID_Alert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Sensor_Arduino`
--

CREATE TABLE `Sensor_Arduino` (
  `ID` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL,
  `ID_Arduino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Sensor_Arduino`
--

INSERT INTO `Sensor_Arduino` (`ID`, `ID_Sensor`, `ID_Arduino`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 2),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 2),
(15, 15, 2),
(16, 16, 2),
(17, 17, 2),
(18, 18, 2),
(19, 19, 2),
(20, 20, 2),
(21, 21, 2),
(22, 22, 2),
(23, 23, 2),
(24, 24, 2),
(25, 25, 2),
(26, 26, 2),
(27, 27, 3),
(28, 28, 3),
(29, 29, 3),
(30, 30, 2),
(31, 31, 2),
(32, 32, 2),
(33, 33, 2),
(34, 34, 3),
(35, 35, 3),
(36, 36, 3),
(37, 37, 3),
(38, 38, 3),
(39, 39, 3),
(40, 40, 3);

-- --------------------------------------------------------

--
-- Table structure for table `Sensor_DataInfo`
--

CREATE TABLE `Sensor_DataInfo` (
  `ID` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL,
  `ID_DataInfo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Sensor_Location`
--

CREATE TABLE `Sensor_Location` (
  `ID` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL,
  `ID_Location` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Sensor_Location`
--

INSERT INTO `Sensor_Location` (`ID`, `ID_Sensor`, `ID_Location`) VALUES
(41, 1, 1),
(42, 2, 1),
(43, 3, 1),
(44, 4, 1),
(45, 5, 1),
(46, 6, 1),
(47, 7, 1),
(48, 8, 1),
(49, 9, 2),
(50, 10, 3),
(51, 11, 1),
(52, 12, 1),
(53, 13, 1),
(54, 14, 4),
(55, 15, 4),
(56, 16, 5),
(57, 17, 5),
(58, 18, 6),
(59, 19, 6),
(60, 20, 4),
(61, 21, 5),
(62, 22, 7),
(63, 23, 7),
(64, 24, 8),
(65, 25, 8),
(66, 26, 8),
(67, 27, 9),
(68, 28, 9),
(69, 29, 9),
(70, 30, 10),
(71, 31, 10),
(72, 32, 10),
(73, 33, 4),
(74, 34, 9),
(75, 35, 9),
(76, 36, 9),
(77, 37, 9),
(78, 38, 9),
(79, 39, 9),
(80, 40, 9);

-- --------------------------------------------------------

--
-- Table structure for table `Sensor_Status`
--

CREATE TABLE `Sensor_Status` (
  `ID` int(11) NOT NULL,
  `ID_Sensor` int(11) NOT NULL,
  `ID_Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Sensor_Status`
--

INSERT INTO `Sensor_Status` (`ID`, `ID_Sensor`, `ID_Status`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 2),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 3),
(15, 15, 3),
(16, 16, 3),
(17, 17, 3),
(18, 18, 3),
(19, 19, 3),
(20, 20, 1),
(21, 21, 1),
(22, 22, 3),
(23, 23, 3),
(24, 24, 3),
(25, 25, 3),
(26, 26, 3),
(27, 27, 4),
(28, 28, 4),
(29, 29, 4),
(30, 30, 3),
(31, 31, 3),
(32, 32, 3),
(33, 33, 4),
(34, 34, 4),
(35, 35, 4),
(36, 36, 4),
(37, 37, 4),
(38, 38, 4),
(39, 39, 4),
(40, 40, 4);

-- --------------------------------------------------------

--
-- Table structure for table `Status`
--

CREATE TABLE `Status` (
  `ID` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Status`
--

INSERT INTO `Status` (`ID`, `name`) VALUES
(1, 'WET'),
(2, 'OUT'),
(3, 'DRY'),
(4, 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `TypeAlert`
--

CREATE TABLE `TypeAlert` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Alert`
--
ALTER TABLE `Alert`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Alert_Family`
--
ALTER TABLE `Alert_Family`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Alert_Famiy_Alert` (`ID_Alert`),
  ADD KEY `FK_Alert_Family_family` (`ID_Family`);

--
-- Indexes for table `Alert_TypeAlert`
--
ALTER TABLE `Alert_TypeAlert`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Alert_TypeAlert_Alert` (`ID_Alert`),
  ADD KEY `FK_Alert_TypeAlert_TypeAlert` (`ID_TypeAlert`);

--
-- Indexes for table `Arduino`
--
ALTER TABLE `Arduino`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `DataInfo`
--
ALTER TABLE `DataInfo`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Family`
--
ALTER TABLE `Family`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Location`
--
ALTER TABLE `Location`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Member`
--
ALTER TABLE `Member`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Member_Project`
--
ALTER TABLE `Member_Project`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Member_Project_Member` (`ID_Member`),
  ADD KEY `FK_Member_Project_Project` (`ID_Project`);

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Project_Sensor`
--
ALTER TABLE `Project_Sensor`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Project_Sensor_Project` (`ID_Project`),
  ADD KEY `FK_Project_Sensor_Sensor` (`ID_Sensor`);

--
-- Indexes for table `Sensor`
--
ALTER TABLE `Sensor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Sensor_Alert`
--
ALTER TABLE `Sensor_Alert`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Sensor_Alert_Data` (`ID_Sensor`),
  ADD KEY `FK_Sensor_Alert_Alert` (`ID_Alert`);

--
-- Indexes for table `Sensor_Arduino`
--
ALTER TABLE `Sensor_Arduino`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Sensor_Arduino_Sensor` (`ID_Sensor`),
  ADD KEY `FK_Sensor_Arduino_Arduino` (`ID_Arduino`);

--
-- Indexes for table `Sensor_DataInfo`
--
ALTER TABLE `Sensor_DataInfo`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Sensor_DataInfo_Sensor` (`ID_Sensor`),
  ADD KEY `FK_Sensor_DataInfo_DataInfo` (`ID_DataInfo`);

--
-- Indexes for table `Sensor_Location`
--
ALTER TABLE `Sensor_Location`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Sensor_Location_Sensor` (`ID_Sensor`),
  ADD KEY `FK_Sensor_Location_Location` (`ID_Location`);

--
-- Indexes for table `Sensor_Status`
--
ALTER TABLE `Sensor_Status`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Sensor_Status_Sensor` (`ID_Sensor`),
  ADD KEY `FK_Sensor_Status_Status` (`ID_Status`);

--
-- Indexes for table `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `TypeAlert`
--
ALTER TABLE `TypeAlert`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Alert`
--
ALTER TABLE `Alert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Alert_Family`
--
ALTER TABLE `Alert_Family`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Alert_TypeAlert`
--
ALTER TABLE `Alert_TypeAlert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Arduino`
--
ALTER TABLE `Arduino`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `DataInfo`
--
ALTER TABLE `DataInfo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Family`
--
ALTER TABLE `Family`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Location`
--
ALTER TABLE `Location`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `Member`
--
ALTER TABLE `Member`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Member_Project`
--
ALTER TABLE `Member_Project`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Project`
--
ALTER TABLE `Project`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Project_Sensor`
--
ALTER TABLE `Project_Sensor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `Sensor`
--
ALTER TABLE `Sensor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `Sensor_Alert`
--
ALTER TABLE `Sensor_Alert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Sensor_Arduino`
--
ALTER TABLE `Sensor_Arduino`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `Sensor_DataInfo`
--
ALTER TABLE `Sensor_DataInfo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Sensor_Location`
--
ALTER TABLE `Sensor_Location`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
--
-- AUTO_INCREMENT for table `Sensor_Status`
--
ALTER TABLE `Sensor_Status`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `Status`
--
ALTER TABLE `Status`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `TypeAlert`
--
ALTER TABLE `TypeAlert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Alert_Family`
--
ALTER TABLE `Alert_Family`
  ADD CONSTRAINT `FK_Alert_Family_family` FOREIGN KEY (`ID_Family`) REFERENCES `Family` (`ID`),
  ADD CONSTRAINT `FK_Alert_Famiy_Alert` FOREIGN KEY (`ID_Alert`) REFERENCES `Alert` (`ID`);

--
-- Constraints for table `Alert_TypeAlert`
--
ALTER TABLE `Alert_TypeAlert`
  ADD CONSTRAINT `FK_Alert_TypeAlert_Alert` FOREIGN KEY (`ID_Alert`) REFERENCES `Alert` (`ID`),
  ADD CONSTRAINT `FK_Alert_TypeAlert_TypeAlert` FOREIGN KEY (`ID_TypeAlert`) REFERENCES `TypeAlert` (`ID`);

--
-- Constraints for table `Member_Project`
--
ALTER TABLE `Member_Project`
  ADD CONSTRAINT `FK_Member_Project_Member` FOREIGN KEY (`ID_Member`) REFERENCES `Member` (`ID`),
  ADD CONSTRAINT `FK_Member_Project_Project` FOREIGN KEY (`ID_Project`) REFERENCES `Project` (`ID`);

--
-- Constraints for table `Project_Sensor`
--
ALTER TABLE `Project_Sensor`
  ADD CONSTRAINT `FK_Project_Sensor_Project` FOREIGN KEY (`ID_Project`) REFERENCES `Project` (`ID`),
  ADD CONSTRAINT `FK_Project_Sensor_Sensor` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`);

--
-- Constraints for table `Sensor_Alert`
--
ALTER TABLE `Sensor_Alert`
  ADD CONSTRAINT `FK_Sensor_Alert_Alert` FOREIGN KEY (`ID_Alert`) REFERENCES `Alert` (`ID`),
  ADD CONSTRAINT `FK_Sensor_Alert_Data` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`);

--
-- Constraints for table `Sensor_Arduino`
--
ALTER TABLE `Sensor_Arduino`
  ADD CONSTRAINT `FK_Sensor_Arduino_Arduino` FOREIGN KEY (`ID_Arduino`) REFERENCES `Arduino` (`ID`),
  ADD CONSTRAINT `FK_Sensor_Arduino_Sensor` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`);

--
-- Constraints for table `Sensor_DataInfo`
--
ALTER TABLE `Sensor_DataInfo`
  ADD CONSTRAINT `FK_Sensor_DataInfo_DataInfo` FOREIGN KEY (`ID_DataInfo`) REFERENCES `DataInfo` (`ID`),
  ADD CONSTRAINT `FK_Sensor_DataInfo_Sensor` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`);

--
-- Constraints for table `Sensor_Location`
--
ALTER TABLE `Sensor_Location`
  ADD CONSTRAINT `FK_Sensor_Location_Location` FOREIGN KEY (`ID_Location`) REFERENCES `Location` (`ID`),
  ADD CONSTRAINT `FK_Sensor_Location_Sensor` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`);

--
-- Constraints for table `Sensor_Status`
--
ALTER TABLE `Sensor_Status`
  ADD CONSTRAINT `FK_Sensor_Status_Sensor` FOREIGN KEY (`ID_Sensor`) REFERENCES `Sensor` (`ID`),
  ADD CONSTRAINT `FK_Sensor_Status_Status` FOREIGN KEY (`ID_Status`) REFERENCES `Status` (`ID`);




/*INSERT INTO DataInfo (data_entry, input_date) VALUES
(5, '2017-03-01'),
(5, '2017-03-02'),
(5, '2017-03-03'),
(5, '2017-03-04'),
(5, '2017-03-05'),
(6, '2017-03-06'),
(7, '2017-03-07'),
(7, '2017-03-08'),
(8, '2017-03-09'),
(8, '2017-03-10'),
(8, '2017-03-11'),
(8, '2017-03-12'),
(8, '2017-03-13'),
(4, '2017-03-14'),
(3, '2017-03-15'),
(3, '2017-03-16'),
(6, '2017-03-17'),
(6, '2017-03-18'),
(6, '2017-03-19'),
(6, '2017-03-20'),
(6, '2017-03-21'),
(5, '2017-03-22'),
(5, '2017-03-23'),
(13, '2017-03-24'),
(12, '2017-03-25'),
(11, '2017-03-26'),
(5, '2017-03-27'),
(5, '2017-03-28'),
(6, '2017-03-29'),
(6, '2017-03-30'),
(5, '2017-03-31');

--
INSERT INTO Sensor_DataInfo (ID_Sensor, ID_DataInfo) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31);
*/