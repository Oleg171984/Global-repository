const contactBook = {
    contacts: [
      {
        name: "John Doe",
        phone: "123-456-7890",
        email: "johndoe@gamil.com",
      },
      {
        name: "Jane Smith",
        phone: "987-654-3210",
        email: "janesmith@ssbo.com",
      },
    ],
  

    findContactByName(name) {
      return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || "Contact not found";
    },
  
   
    addContact(newContact) {
   
      if (this.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        return "Contact with this name already exists";
      }
  

      this.contacts.push(newContact);
      return "Contact added successfully";
    }
  };
  
  console.log(contactBook.findContactByName("John Doe"));
  console.log(contactBook.addContact({ name: "Alice Johnson", phone: "555-123-4567", email: "alice@example.com" })); // Додасть новий контакт
  console.log(contactBook.contacts); 
  