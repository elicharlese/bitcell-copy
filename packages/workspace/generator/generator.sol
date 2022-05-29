pragma solidity ^0.6.0

contract Generator {
    function build_generator() public {
        //FIXME: Build out the Generator
    }
    function generator_dict() Storage.put('test.txt', 'Protected Content', {
        level: 'private',
        contentType: 'text/plain'
    })
    .then ( (result) => { 
        console.log(result); 
    })
    .catch( (err) => { 
        console.log(err);
    });
    function Storage.configure({
        bucket: // Your bucket ARN;
        region: // Specify the region your bucket was created in;
        identityPoolId: // Specify your identityPoolId for Auth and Unauth access to your bucket;
    });
    function s3_upload() public {
        //FIXME: Store the dictionary of generated assets in AWS S3
    }
}