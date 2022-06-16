SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema frase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema frase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `frase` DEFAULT CHARACTER SET utf8 ;
USE `frase` ;

-- -----------------------------------------------------
-- Table `frase`.`fre_frase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `frase`.`fre_frase` (
  `fre_codigo` INT NOT NULL AUTO_INCREMENT,
  `fre_texto` LONGTEXT NULL,
  `fre_autor` VARCHAR(45) NULL,
  `fre_cadastro` DATE NULL,
  PRIMARY KEY (`fre_codigo`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;