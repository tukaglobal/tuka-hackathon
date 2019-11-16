function fileUpload (req, res, next) {
    console.log('upload started');
    
    // this is so Buffer.concat doesn't error if nothing comes;
    const dataParts = [Buffer.alloc(0)];
    
    // collect the chunks of upload data
    req.on('data', d => {
      dataParts.push(d);
    });
    
    // once the last chunk arrives, store it
    req.on('end', e => {
      console.log('upload succeeded');
      // glue the chunks together into one buffer
      req.fileUpload = Buffer.concat(dataParts);
      next();
    });
    
    // there was an oops
    req.on('error', e => {
      console.error(e);
      res.sendStatus(500);
    });
  }
  
  module.exports = {
    fileUpload
  };