'use strict';

/**
 * `email` service.
 */

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }
  subscribeEmailToNewPostEmails: async (user, { name, email }) => {
    try {
      // Create contact in Mailjet
      const contactCreationResponse = await strapi.plugins.email.provider.createContact({
        email,
        name,
        excludeFromCampaigns: false
      });
      console.log(contactCreationResponse.Data[0])
      const contactId = contactCreationResponse.Data[0].ID;

      if (!contactId) {
        throw Error('No Mailjet ContactId was returned.')
      }
      
      // Save contactId on the user object
      await strapi.query('user', 'users-permissions').update({ id: user.id }, { mailjetContactId: contactId });

      // Add the contactId to the new post email list
      const listAdditionResponse = await strapi.plugins.email.provider.addContactToList({
        id: contactId,
        listId: "1693",
      });

      console.log({ listAdditionResponse });

      return true;
    } catch (e) {
      console.warn(e);
      return false;
    }
  }
};
