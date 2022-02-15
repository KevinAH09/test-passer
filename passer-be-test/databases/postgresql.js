const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                        alter table users add constraint primerikey_users primary key(pk_user);
                        insert into users values (123, 'Juan', true);
                        create table transaction(pk_transaction integer,fk_user integer, description text, amount float);
                        alter table transaction add constraint foreign_user foreign key(fk_user) references users(pk_user);
                        insert into transaction values (1, 123, 'transaccion nueva',122)`);


module.exports = {
    postgresql
}