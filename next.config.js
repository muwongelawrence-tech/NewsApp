module.exports = {
  // reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "platform-lookaside.fbsbx.com", 
    "firebasestorage.googleapis.com", "www.google.co.uk","upload.wikimedia.org"],
  },

  env : {
     api_key : process.env.API_KEY
  },

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-api-key',
            value: '',
          },
          
        ],
      },
    ]
  },



}
