/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDoc = /* GraphQL */ `
  mutation CreateDoc(
    $input: CreateDocInput!
    $condition: ModelDocConditionInput
  ) {
    createDoc(input: $input, condition: $condition) {
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
export const updateDoc = /* GraphQL */ `
  mutation UpdateDoc(
    $input: UpdateDocInput!
    $condition: ModelDocConditionInput
  ) {
    updateDoc(input: $input, condition: $condition) {
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
export const deleteDoc = /* GraphQL */ `
  mutation DeleteDoc(
    $input: DeleteDocInput!
    $condition: ModelDocConditionInput
  ) {
    deleteDoc(input: $input, condition: $condition) {
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
