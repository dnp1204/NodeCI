const AWS = require('aws-sdk');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');
const uuid = require('uuid/v1');

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});

module.exports = app => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;

    // putObject is the name of the operation we want to create the presigned URL for
    // check the AWS sdk for javascript documents for more details
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'dnp-blog-bucket-1204',
        ContentType: 'image/jpeg',
        Key: key
      },
      (err, url) => res.send({ key, url })
    );
  });
};
