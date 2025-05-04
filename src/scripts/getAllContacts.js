import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contactsArray = await readContacts();
        return contactsArray;
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
