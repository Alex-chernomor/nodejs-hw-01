import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
export const removeLastContact = async () => {
    try {
        const contactsArray = await readContacts();
        if (contactsArray.length !== 0) {
            contactsArray.pop();
            await writeContacts(contactsArray);
        } else {
            console.log("You have no contacts!");
        }
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();
