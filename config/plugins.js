module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
    	accessKeyId: env('S3_ACCESS_KEY_ID'),
    	secretAccessKey: env('S3_ACCESS_KEY_SECRET'),
    	region: env('S3_REGION'),
    	params: {
    	  Bucket: env('S3_BUCKET')
    	}
    }
  }
});
