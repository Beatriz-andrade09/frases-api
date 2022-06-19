SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Criação do banco frase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `frase` DEFAULT CHARACTER SET utf8 ;
USE `frase` ;

-- -----------------------------------------------------
-- Criação da tabela fre_frase
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

-- -----------------------------------------------------
-- Inserindo frases
-- -----------------------------------------------------

INSERT INTO `frase`.`fre_frase`
			(`fre_texto`,
			`fre_autor`,
			`fre_cadastro`)
VALUES ('Não ganhe o mundo e perca sua alma, sabedoria é melhor que prata e ouro.',
			'Bob Marley',
			'2022-06-16');
            
            
INSERT INTO `frase`.`fre_frase`
			(`fre_texto`,
			`fre_autor`,
			`fre_cadastro`)
VALUES ('Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.',
			'Clarice Lispector',
			'2022-06-19');


INSERT INTO `frase`.`fre_frase`
			(`fre_texto`,
			`fre_autor`,
			`fre_cadastro`)
VALUES ('É mais fácil obter o que se deseja com um sorriso do que à ponta da espada.',
			'William Shakespeare',
			'2022-06-19');
