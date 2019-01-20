import gql from 'graphql-tag';

export const CreateRelation = gql`
mutation ($followingUserId: Int, $followedUserId: Int) {
  createRelation(
    followingUserId: $followingUserId,
    followedUserId: $followedUserId
   ){
     relation{
       following{
          id
          username
          asAtsign
        }
        followed{
          id
          username
          asAtsign
        }
      }
      ok
  }
}
`;