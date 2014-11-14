var Twitter = require('node-tweet-stream')
var request = require("request")
var Promise = require("bluebird")

function TwitterClient(consumer_key, consumer_secret, access_key, access_secret){
    this.auth = {
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            token: access_key,
            token_secret: access_secret
        }
    return this;
}

TwitterClient.prototype.stream = function (keyWords, userID, eventHandler, errorHandler){
    t = new Twitter(this.auth)

    t.on('tweet', function (tweet) {
      eventHandler(tweet.user.screen_name, tweet.text)
    })

    t.on('error', function (err) {
        if(errorHandler){
            errorHandler(err)
        }
    })

    if(keyWords){
        t.track(keyWords)
    }
    
    if(userID){
        t.follow(userID)//942738733
    }

    return t;
};

TwitterClient.prototype.composeTweet = function (text){
    var self = this
    return new Promise(function(resolve, reject) {
        request({
             url: 'https://api.twitter.com/1.1/statuses/update.json',
             method: 'POST',
             oauth: self.auth,
             qs: {
                 status: text
             }
         }, function(error, response, body){
            if(error){
                reject(error)
            }else{
                resolve({response: response, body: body})
            }
         });
      })
};

exports.createClient = function (auth) {
    return new TwitterClient(auth.consumer_key, auth.consumer_secret, auth.access_token_key, auth.access_token_secret);
};