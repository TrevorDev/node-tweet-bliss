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
		consumer_key: 'qByylQXicFG9gsewQyoLIg',
		consumer_secret: 'HnNcQkrKzUpMz6d4VYbPU3VHSMenY9kPvUQvoGg0lY',
		access_token_key: '942738733-vzWtli9S4PiiL0TcYMeovV618pMikAzOWXbXwp6Q',
		access_token_secret: 'IVmwO9heZSbXSy2jmJT7ZN02cJqzmHAjPGlWlTTPM'
	});

### Basic Streaming tweets by keyword

	bliss.stream('#add', function(fromUserName, tweetText){
		//handle tweets that contain #add
	});

### Basic tweeting

	bliss.composeTweet(tweetText, function(err){
		//tweet has been sent
	});

## Contributors

- [Trevor Baron](https://github.com/TrevorDev) (author)