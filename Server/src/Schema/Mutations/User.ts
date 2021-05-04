import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import {Users} from '../../Entities/User'



export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {name, username, password} = args;
        Users.insert({name, username, password})
        return args;
    }
}