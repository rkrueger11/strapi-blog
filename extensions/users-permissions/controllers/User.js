const { sanitizeEntity } = require('strapi-utils');

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });

module.exports = {
    async me(ctx) {
        const user = ctx.state.user;
    
        if (!user) {
          return ctx.badRequest(null, [
            { messages: [{ id: 'No authorization header was found' }] },
          ]);
        }
    
        const data = sanitizeUser(user);

        // Create this property for the postEmailNotificationsEnabled endpoint
        data.postEmailNotificationsEnabled = !!user.mailjetContactId;

        ctx.send(data);
    }
}