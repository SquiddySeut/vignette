const Discord = require('discord.js');
const client = new Discord.Client();
var cs;
var sp;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content==="ughh"){
        sp=getRandomInt(2)
        if (sp===0&&cs===0){           
            message.channel.send("Thanks for inviting me Satania");
            cs=2;
        }
        if (sp===1&&cs===0){
            message.channel.send("Are you okay, Satania?");
            cs=2;
        }
        if (sp===3&&cs===0){
            message.channel.send("I wonder if Gabriel will come...");
            cs=2;
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
