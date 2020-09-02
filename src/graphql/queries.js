/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDoc = /* GraphQL */ `
  query GetDoc($id: ID!) {
    getDoc(id: $id) {
      id
      name
      address
      dob
      type
      docdate
      photoid
      other
      contact
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listDocs = /* GraphQL */ `
  query ListDocs(
    $filter: ModelDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        dob
        type
        docdate
        photoid
        other
        contact
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
