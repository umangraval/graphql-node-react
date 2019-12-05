import { gql } from 'apollo-boost';

const getAuthorQuery = gql`
{
    authors{ 
        name
        id
    }
}
`
const getBooksQuery = gql`
{
    books{ 
        name
        id
    }
}
`

const addbookmutation = gql`
mutation($name: String!,$genre: String!,$authorid: ID!){
    addBook(name:$name,genre:$genre,authorid:$authorid){
        name
        id
    }
}
`
export {getAuthorQuery, getBooksQuery,addbookmutation};