module.exports = {
    definition: `
        extend type UsersPermissionsMe {
            postEmailNotificationsEnabled: Boolean!
        }
    `,
    query: ``,
    mutation: `
        subscribeEmailToNewPostEmails(name: String!, email: ID!): Boolean!
    `,
    type: {},
    resolver: {
        Query: {
        },
        Mutation: {
            subscribeEmailToNewPostEmails: {
                description: 'Subscribe a user to get email alerts for new posts.',
                resolverOf: 'User.me',
                resolver: async (obj, options, { context }) => {
                    const user = context.state.user;
                    const data = context.request.body;
                    return strapi.services.email.subscribeEmailToNewPostEmails(user, data);
                }
            }
        }
    },
  };