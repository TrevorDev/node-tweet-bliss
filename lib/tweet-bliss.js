function TwitterClient(consumer_key, consumer_secret, access_key, access_secret){
    this.client = require('twitter-api').createClient();
    this.client.setAuth (
        consumer_key,
        consumer_secret,
        access_key,
        access_secret
    );
    return this;
}

TwitterClient.prototype.stream = function (trackKeywords, callback){
    this.client.stream( 'statuses/filter', { track: trackKeywords}, function( json ){
        var tweet = JSON.parse( json );
        callback(tweet.user?tweet.user.screen_name:"", tweet.text?tweet.text:"");
    });
};

TwitterClient.prototype.streamUser = function (user, callback){
    this.client.stream( 'statuses/filter', { follow: user}, function( json ){
        var tweet = JSON.parse( json );
        callback(tweet.user?tweet.user.screen_name:"", tweet.text?tweet.text:"");
    });
};

TwitterClient.prototype.composeTweet = function (text, callback){
        var tweet = {};
        tweet.status=text;
        this.client._rest('POST', 'statuses/update', tweet,function(data, err){
                callback(err);
        });
};

exports.createClient = function (auth) {
    return new TwitterClient(auth.consumer_key, auth.consumer_secret, auth.access_token_key, auth.access_token_secret);
};