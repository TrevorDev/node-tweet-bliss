var uuid = require('node-uuid');

var bliss = require('tweet-bliss').createClient({
		consumer_key: 'XXXXXXXXXXXXXXXXXXXX',
		consumer_secret: 'XXXXXXXXXXXXXXXXXXXX',
		access_token_key: 'XXXXXXXXXXXXXXXXXXXX',
		access_token_secret: 'XXXXXXXXXXXXXXXXXXXX'
	});

function main(){
	bliss.stream('#add', function(user, text){
		console.log('received- '+user+': '+text);
		addTweet(text, function(ans, success){
			if(success){
				var tweetText = '@'+user+' AddRobot Calculated: '+ans + " ResultCode:" +uuid.v1();
				bliss.composeTweet(tweetText, function(err){
					if(err){
						console.log(err);
					}
					console.log('Sent- '+tweetText);
				});
			}else{
				console.log('Unable to add tweet');
			}
		});
	});
}

function addTweet(tweetText, callback){
	var args = tweetText.split(' ');
	var success = true;
	var ans = 0;
	for(var i = 1;i<args.length;i++){
		var number = parseFloat(args[i]);
		if(isNaN(number)){
			success = false;
			break;
		}
		ans += number;
	}
	callback(ans, success);
}

main();
