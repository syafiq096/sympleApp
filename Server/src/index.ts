import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import {Users} from './Entities/User'
import cors from 'cors';
import { createConnection } from 'typeorm';

const main = async () => {

    await createConnection({
        type: "mariadb",
        database: "crud",
        username: "root",
        password: "0000",
        logging: true,
        synchronize: false,
        entities: [Users],
    });

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log(`SERVER RUNNING.....`)
    })

}

main().catch((err) => {
    console.log(err)
});