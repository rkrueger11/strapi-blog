module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'ryans-leukemia-journey',
        api_key: env("CLOUDINARY_PUBLIC_KEY"),
        api_secret: env("CLOUDINARY_SECRET_KEY"),
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