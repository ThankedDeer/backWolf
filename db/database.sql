create database hackathon;
use hackathon;

create table reportes(
	idReporte int primary key not null auto_increment,
	Nombre varchar not null ,
	Apellido varchar not null,
    Telefono varchar not null,
    TelefonoAtacante varchar not null,
    Descripcion varchar null
    
);

create table usuarios(
	idUsuariio integer unsigned primary key not null auto_increment,
	NombreUsuario varchar(50) not null unique,
	Contraseña varchar(256)
);

insert into reportes values ("eduardo","salinas", "4491230025", "44925365655" ,"vb sfnvbsjvbsfjvsbrgiusrbhgiusrghuidsrgbhiu orig hwroighroi r iurt y")