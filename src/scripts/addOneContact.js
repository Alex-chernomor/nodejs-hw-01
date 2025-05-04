import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
   try {
    const contactsArray = await readContacts();
    contactsArray.push(createFakeContact());
    await writeContacts(contactsArray);
   } catch (error) {
    console.log(error);
   }
};

addOneContact();


