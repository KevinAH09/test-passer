const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                        alter table users add constraint primerikey_users primary key(pk_user);
                        insert into users values (123, 'Juan', true);
                        create table transactions(pk_transaction integer,fk_user integer, description text, amount float);
                        alter table transactions add constraint foreign_user foreign key(fk_user) references users(pk_user);
                        `);


module.exports = {
    postgresql
}