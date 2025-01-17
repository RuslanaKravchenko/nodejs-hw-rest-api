const { ContactsRepository } = require("../repository");

class ContactsService {
  constructor() {
    this.repositories = {
      contacts: new ContactsRepository(),
    };
  }
  async getAllContacts(userId, query) {
    const data = await this.repositories.contacts.getAllContacts(userId, query);
    const { docs: contacts, totalDocs: total, limit, page, totalPages } = data;
    return {
      contacts,
      total,
      totalPages,
      limit,
      page,
    };
  }

  async getContactById(userId, { contactId }) {
    const data = await this.repositories.contacts.getContactById(
      userId,
      contactId
    );
    return data;
  }
  async createContact(userId, body) {
    const data = await this.repositories.contacts.createContact(userId, body);
    return data;
  }
  async updateContact(userId, { contactId }, body) {
    const data = await this.repositories.contacts.updateContact(
      userId,
      contactId,
      body
    );
    return data;
  }
  async removeContact(userId, { contactId }) {
    const data = await this.repositories.contacts.removeContact(
      userId, contactId
    );
    return data;
  }
}

module.exports = ContactsService;
