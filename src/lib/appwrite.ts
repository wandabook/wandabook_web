import { Client, Account, Functions, ExecutionMethod, Databases, ID } from 'appwrite';
export { ID } from 'appwrite';
export const client = new Client();
const databases = new Databases(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('671629940021dc2b8ecb'); // Replace with your project ID

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
