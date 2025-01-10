import { Client, Account, Functions, ExecutionMethod, Databases, ID } from 'appwrite';
export { ID } from 'appwrite';
export const client = new Client();
const databases = new Databases(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('671629940021dc2b8ecb'); // Replace with your project ID
const databaseId = '671bb8f9000c6e9bf6a0';
export const account = new Account(client);
const functions = new Functions(client);

export const addNewUser = async (data: any) => {
    const result = await functions.createExecution(
        '6724cc3e00047f95c411', // functionId
        data, // body (optional)
        false, // async (optional)
        'patron', // path (optional)
        ExecutionMethod.POST, // method (optional)
        {}, // headers (optional)
    );
    return result;
}

export const createNewUser = async (data: any) => {
    return databases.createDocument(
        '671bb8f9000c6e9bf6a0',
        '671bb91d000cd2063080',
        ID.unique(),
        data
    );
}
export const createDocumentGlobal = async (collectionId: string, data: any) => {
    return await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        data
    );
}
export const getDocumentsGlobal = async (collectionId: string) => {
    return await databases.listDocuments(
        databaseId,
        collectionId,
        [
        ]
    );
}

export const getDocumentsWithFilerGlobal = async (collectionId: string, filters: string[]) => {
    return await databases.listDocuments(
        databaseId,
        collectionId,
        filters
    );
}

export const editDocumentGlobal = async (collectionId: string, documentId: string, data: any) => {
    return await databases.updateDocument(
        databaseId,
        collectionId,
        documentId,
        data
    );
}