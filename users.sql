create table users (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(200) NOT NULL,
	UNIQUE (email)
);
insert into users (first_name, last_name, email, password) values ('Leo', 'Kinver', 'lkinver0@cnn.com', '5dix1EFIy86j');
insert into users (first_name, last_name, email, password) values ('Sosanna', 'Stanway', 'sstanway1@vinaora.com', '7YsKpGovTcs');
insert into users (first_name, last_name, email, password) values ('Ambros', 'Fellow', 'afellow2@clickbank.net', 'ypnjdQPxF');
insert into users (first_name, last_name, email, password) values ('Tremain', 'Murrhaupt', 'tmurrhaupt3@istockphoto.com', 'gfHuhpYafOY');
insert into users (first_name, last_name, email, password) values ('Lennie', 'Adaway', 'ladaway4@go.com', 'MySqgofHVAS');
insert into users (first_name, last_name, email, password) values ('Adelle', 'Coolican', 'acoolican5@foxnews.com', 'JI8VdZnA');
insert into users (first_name, last_name, email, password) values ('Sergent', 'Wigan', 'swigan6@prnewswire.com', 'VKz3yGa');
insert into users (first_name, last_name, email, password) values ('Nat', 'D''Ugo', 'ndugo7@spotify.com', 'APCcapy0');
insert into users (first_name, last_name, email, password) values ('Silvester', 'Berthod', 'sberthod8@wunderground.com', 'yxB19Fh');
insert into users (first_name, last_name, email, password) values ('Katine', 'Pele', 'kpele9@eepurl.com', 'mYTlKmga');
