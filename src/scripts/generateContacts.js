import { createFakeContact } from "../utils/createFakeContact.js";
import {readContacts} from '../utils/readContacts.js';
import {writeContacts} from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
const contactsArray = await readContacts();
for (let i = 0; i < number; i++) {
  contactsArray.push(createFakeContact());
}
await writeContacts(contactsArray);
};

await generateContacts(5);
  
