-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 25 sep 2024 om 10:50
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tle1groep2`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `aitestdata`
--

CREATE TABLE `aitestdata` (
  `aiId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` tinyint(3) DEFAULT NULL,
  `score` tinyint(3) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `aitestdata`
--

INSERT INTO `aitestdata` (`aiId`, `name`, `age`, `score`, `date`) VALUES
(1, 'Piet', 67, 5, '2024-09-24'),
(2, 'Jannes', 19, 9, '2024-09-24');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `weblink`
--

CREATE TABLE `weblink` (
  `webID` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `score` tinyint(3) DEFAULT NULL,
  `response` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `weblink`
--

INSERT INTO `weblink` (`webID`, `link`, `score`, `response`) VALUES
(2, 'https://nos.nl', 90, 'This is a test response.'),
(3, 'https://nos.nl', 90, 'This is a test response.'),
(4, 'https://nos.nl', 90, 'hoi'),
(5, 'https://www.nu.nl', 85, 'Score: 85 / 100\n\n**Redenen voor deze score:**\n\n* **Reputatie:** NU.nl is een van de grootste en meest bekende nieuwswebsites in Nederland, met een lange geschiedenis en een reputatie voor betrouwbaarheid.\n* **Journalistieke standaarden:** De website heeft een team van ervaren journalisten die zich houden aan professionele ethische normen.\n* **Feitencontrole:** NU.nl streeft naar nauwkeurigheid en controleert de informatie die het publiceert.\n* **Transparantie:** De website vermeldt duidelijk de bronnen van zijn informatie en heeft een duidelijke redactionele structuur.\n* **Divers aanbod:** NU.nl biedt een breed scala aan nieuwsartikelen, van binnenlandse en buitenlandse politiek tot cultuur en sport.\n\n**Potentiële tekortkomingen:**\n\n* **Clickbait-titels:** Zoals veel online nieuwsmedia, gebruikt NU.nl soms clickbait-titels om aandacht te trekken.\n* **Commerciele invloeden:** Als onderdeel van een grote mediaorganisatie, kan NU.nl mogelijk onder invloed staan van commerciële belangen.\n\n**Conclusie:**\n\nOver het algemeen is NU.nl een betrouwbare nieuwsbron. De website voldoet aan de meeste journalistieke standaarden en biedt een breed scala aan nieuwsartikelen. Hoewel er potentiële tekortkomingen zijn, zoals clickbait-titels, is het een van de beste bronnen voor actueel nieuws in Nederland. \n'),
(6, 'https://ongehoordnederland.tv', 20, 'Score: 20 / 100\n\n**Redenen voor de lage score:**\n\n* **Gebrek aan onafhankelijkheid en transparantie:** Ongehoord Nederland is een platform dat sterk gelieerd is aan de politieke partij Forum voor Democratie. Dit roept vragen op over de objectiviteit van de gepresenteerde informatie.\n* **Verspreiding van onjuiste of misleidende informatie:** Ongehoord Nederland is herhaaldelijk bekritiseerd voor het verspreiden van onjuiste of misleidende informatie. \n* **Gebruik van emotionele taal en polariserende retoriek:** De website maakt vaak gebruik van emotionele taal en polariserende retoriek om een bepaald perspectief te promoten. \n* **Gebrek aan bronvermelding en feitencontrole:** De website heeft een zwakke reputatie op het gebied van bronvermelding en feitencontrole. \n\n**Belangrijk:** \n\nHet is aan te raden om informatie van Ongehoord Nederland kritisch te beoordelen en te vergelijken met informatie van andere betrouwbare bronnen. \n');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `aitestdata`
--
ALTER TABLE `aitestdata`
  ADD PRIMARY KEY (`aiId`);

--
-- Indexen voor tabel `weblink`
--
ALTER TABLE `weblink`
  ADD PRIMARY KEY (`webID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `aitestdata`
--
ALTER TABLE `aitestdata`
  MODIFY `aiId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `weblink`
--
ALTER TABLE `weblink`
  MODIFY `webID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
