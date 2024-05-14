import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6642259b0032a1a1dafe"); // Replace with your project ID

export const account = new Account(client);
export const db = new Databases(client);
export { ID } from "appwrite";
