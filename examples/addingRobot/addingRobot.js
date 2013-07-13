var uuid = require('node-uuid');

var bliss = require('tweet-bliss').createClient({
		consumer_key: 'qByylQXicFG9gsewQyoLIg',
		consumer_secret: 'HnNcQkrKzUpMz6d4VYbPU3VHSMenY9kPvUQvoGg0lY',
		access_token_key: '942738733-vzWtli9S4PiiL0TcYMeovV618pMikAzOWXbXwp6Q',
		access_token_secret: 'IVmwO9heZSbXSy2jmJT7ZN02cJqzmHAjPGlWlTTPM'
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