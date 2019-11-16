// only expose APIs once the keys are entered in .env
module.exports = {
    ...(process.env.BANDSINTOWN_API_KEY && { bandsintown: require('./bandsintown') }),
    ...(process.env.UMG_API_KEY && { umg: require('./umg') }),
    ...(process.env.DOLBY_API_KEY && { dolby: require('./dolby') }),
    ...(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET &&
      { cloudinary: require('cloudinary') }
    )
  };
  
  if (module.exports.cloudinary) {
    module.exports.cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key: process.env.CLOUDINARY_API_KEY, 
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
  }