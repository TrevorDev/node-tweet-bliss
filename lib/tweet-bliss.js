var client;

exports.authenticate = function (consumer_key, consumer_secret, access_key, access_secret){
    client = require('twitter-api').createClient();
    client.setAuth (
        consumer_key,
        consumer_secret,
        access_key,
        access_secret
    );
};

exports.stream = function (trackKeywords, callback){
    client.stream( 'statuses/filter', { track: trackKeywords}, function( json ){
        var tweet = JSON.parse( json );
        callback(tweet.user.screen_name, tweet.text);
    });
};

exports.composeTweet = function (text, callback){
        var tweet = {};
        tweet.status=text;
        client._rest('POST', 'statuses/update', tweet,function(data, err){
                callback(err);
        });
};