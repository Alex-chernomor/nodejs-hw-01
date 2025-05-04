import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contactsArray = await readContacts();
        return contactsArray.length;
        
    } catch (error) {
        console.log(error);        
    }
};

console.log(await countContacts());
