Twitter tweets to command arguments
======================================

[tweet-bliss] Aims to provide a simplified, asynchronous client by providing only the basic uses and abstracting away the complexity of the entire API

* Uses version 1.1 of Twitter's REST and Streaming APIs

* See examples directory for example usage

## Install

`npm install tweet-bliss`

## Requirements

You can install tweet-bliss and its dependencies with npm: `npm install tweet-bliss`.

- [node](http://nodejs.org/) v0.6+
- [twitter-api](https://github.com/timwhitlock/node-twitter-api)

## Getting started

1. Head over to https://dev.twitter.com/ and create an account and an app.

2. On your app page click settings and set application type to Read, Write and Access direct messages

3. Create access token

4. On the OAuth tool tab you can view your keys and secrets for use below

### Setup API (stable)

	var bliss = require('tweet-bliss').createClient({
		consumer_key: 'XXXXXXXXXXXXXXXXXXXXXX',
		consumer_secret: 'XXXXXXXXXXXXXXXXXXXXXX',
		access_token_key: 'XXXXXXXXXXXXXXXXXXXXXX',
		access_token_secret: 'XXXXXXXXXXXXXXXXXXXXXX'
	});

### Basic Streaming tweets by keyword

	bliss.stream('#add', null, function(fromUserName, tweetText){
		//handle tweets that contain #add
	});

### Basic Streaming tweets by userID (to get userid of user use http://gettwitterid.com/)

	bliss.stream(null, "942738733", function(fromUserName, tweetText){
		//handle tweets that contain #add
	});

### Basic tweeting (returns promise)

	bliss.composeTweet(tweetText)
	.then(function(resp){
		//tweet has been sent
	});

## Contributors

- [Trevor Baron](https://github.com/TrevorDev) (author)
