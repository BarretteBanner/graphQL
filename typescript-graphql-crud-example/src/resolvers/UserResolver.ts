import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { User } from '/Users/barrettebanner/graphQL/typescript-graphql-crud-example/src/entity/User';

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async createUser(
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    await User.insert({ email, password });
    return true;
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => [User])
  async getUser(
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    let user = await User.find({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(email);
    return user;
  }
}
