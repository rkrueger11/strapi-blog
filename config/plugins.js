module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'ryans-leukemia-journey',
        api_key: '436952556186331',
        api_secret: 'o1Mr-LORnlYtBUJQJfaEd86nRYs',
      },
  },
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: env("MAILJET_PUBLIC_KEY"),
      secretApiKey: env("MAILJET_SECRET_KEY"),
    },
    settings: {
      defaultFrom: "alerts@ryansjourney.blog",
      defaultFromName: "Ryan Krueger",
      defaultTo: "rkrueger11@gmail.com",
      defaultToName: "Ryan Krueger (test)",
    },
  },
    // ...
});