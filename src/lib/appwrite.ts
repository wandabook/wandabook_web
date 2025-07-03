import { Client, Account, Functions, ExecutionMethod, Databases, ID } from 'appwrite';
export { ID } from 'appwrite';
export const client = new Client();
const databases = new Databases(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APP_PROJECT_ID); // Replace with your project ID
const databaseId = import.meta.env.VITE_APP_ACTIVITY_DATABASE_ID;
export const account = new Account(client);
const functions = new Functions(client);

export const addNewUser = async (data: any) => {
    const result = await functions.createExecution(
        import.meta.env.VITE_APP_PATRON_FUNCTION_ID, // functionId
        data, // body (optional)
        false, // async (optional)
        'patron', // path (optional)
        ExecutionMethod.POST, // method (optional)
        {}, // headers (optional)
    );
    return result;
}
export const deletePatron = async (data: any) => {
    const result = await functions.createExecution(
        import.meta.env.VITE_APP_PATRON_FUNCTION_ID, // functionId
        data, // body (optional)
        false, // async (optional)
        'patron', // path (optional)
        ExecutionMethod.DELETE, // method (optional)
        {}, // headers (optional)
    );
    return result;
}
export const getPatron = async (data: any) => {
    const result = await functions.createExecution(
        import.meta.env.VITE_APP_PATRON_FUNCTION_ID, // functionId
        data, // body (optional)
        false, // async (optional)
        'patron', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
    );
    return result;
}
export const createNewUser = async (data: any) => {
    return databases.createDocument(
        databaseId,
        import.meta.env.VITE_APP_PATRON_COLLECTION_ID, // collectionId
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