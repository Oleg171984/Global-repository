const contacts = [
    {
        id: 1,
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || "Contact not found";
};

Book.prototype.add = function (contact) {
    if (this.contacts.some(existingContact => existingContact.id === contact.id)) {
        return "Contact with this ID already exists";
    }
    this.contacts.push(contact);
    return "Contact added successfully";
};

Book.prototype.remove = function (id) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
        return "Contact not found";
    }
    this.contacts.splice(index, 1);
    return "Contact removed successfully";
};

Book.prototype.update = function (id, updatedInfo) {
    const contact = this.contacts.find(contact => contact.id === id);
    if (!contact) {
        return "Contact not found";
    }
    Object.assign(contact, updatedInfo);
    return "Contact updated successfully";
};

const mappedContacts = contacts.map(el => new Contact(el));
const book = new Book(mappedContacts);

console.log(book); 
console.log(book.find("Serhii")); 
console.log(book.add(new Contact({ id: 2, name: "Anna", phone: "+380888888888", email: "anna@email.com" })));
console.log(book.remove(1)); 
console.log(book.update(2, { phone: "+380777777777" })); 
console.log(book); 
