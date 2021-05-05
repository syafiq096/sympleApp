import { GraphQLList, GraphQLString } from 'graphql'
import { UserType } from '../TypeDefs/User'
import { Users } from '../../Entities/User'
import { Like } from 'typeorm';


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const SEARCH_USERS = {
    type: new GraphQLList(UserType),
    args: {
        name: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        return Users.find({name: Like(`%${args.name}%`)});
    }
}