-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2022 at 07:47 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `penjualan`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user`, `password`) VALUES
('Smit', '_smit_OK');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `idproduct` varchar(18) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `price` int(6) DEFAULT NULL,
  `currency` varchar(5) DEFAULT NULL,
  `discount` int(6) DEFAULT NULL,
  `dimension` varchar(50) DEFAULT NULL,
  `unit` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idproduct`, `name`, `price`, `currency`, `discount`, `dimension`, `unit`) VALUES
('SKUGIV', 'Giv Biru', 11000, 'IDR', 0, '5 cm x 12 cm', 'PCS'),
('SKUSKILNP', 'So klin Pewangi', 15000, 'IDR', 10, '13 cm x 10 cm', 'PCS'),
('SKUSKILQ', 'SO Klin Liquid', 18000, 'IDR', 0, '20 cm x 20 cm', 'PCS');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `document_code` varchar(3) NOT NULL,
  `document_number` varchar(10) NOT NULL,
  `user` varchar(50) NOT NULL,
  `total` int(10) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`document_code`, `document_number`, `user`, `total`, `date`) VALUES
('TRX', '001', 'Smit', 675000, '2021-04-05'),
('TRX', '002', 'Smit', 18000, '2021-09-09');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_detail`
--

CREATE TABLE `transaction_detail` (
  `document_code` varchar(3) NOT NULL,
  `document_number` varchar(10) NOT NULL,
  `idproduct` varchar(18) NOT NULL,
  `price` int(6) DEFAULT NULL,
  `quantity` int(6) DEFAULT NULL,
  `unit` varchar(5) DEFAULT NULL,
  `subtotal` int(10) DEFAULT NULL,
  `currency` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`document_code`, `document_number`, `idproduct`, `price`, `quantity`, `unit`, `subtotal`, `currency`) VALUES
('TRX', '001', 'SKUSKILNP', 13500, 5, 'PCS', 67500, 'IDR'),
('TRX', '002', 'SKUSKILQ', 18000, 1, 'PCS', 18000, 'IDR');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idproduct`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`document_code`,`document_number`),
  ADD KEY `fk_transaction_login_idx` (`user`);

--
-- Indexes for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD PRIMARY KEY (`document_code`,`document_number`,`idproduct`),
  ADD KEY `fk_transaction_has_product_product1_idx` (`idproduct`),
  ADD KEY `fk_transaction_has_product_transaction1_idx` (`document_code`,`document_number`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_transaction_login` FOREIGN KEY (`user`) REFERENCES `login` (`user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD CONSTRAINT `fk_transaction_has_product_product1` FOREIGN KEY (`idproduct`) REFERENCES `product` (`idproduct`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_transaction_has_product_transaction1` FOREIGN KEY (`document_code`,`document_number`) REFERENCES `transaction` (`document_code`, `document_number`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
