import pg from "pg"
export const client=new pg.Client({
    host: "localhost",
    password: "root",
    port: 5432,
    database: "postgres",
    user: "postgres"
})
await client.connect()
const table_query=[
    `Create table if not exists users(
        id serial primary key,
        name varchar(50),
        email varchar(50),
        password varchar(100)
    );`,
    `Create table if not exists boards(
        id serial primary key,
        title text not null,
        columns text not null
    );`,
    `Create table if not exists tasks(
        id serial primary key,
        title text,
        orders text,
        description text,
        userId int,foreign key(userId) references users(id) on delete set null on update cascade,
        boardId int,foreign key(boardId) references boards(id) on delete cascade on update cascade,
        columnId int
    );`
]
export const create_tables=async()=>{
    try {
        for (const iterator of table_query) {
            await client.query(iterator)
        }
        return "Table yaratildi"
    } catch (error) {
        return "Table allaqachon yaratilgan"
    }    
}
await create_tables()