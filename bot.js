require("dotenv").config(); //to start process from .env file
const {
    Client,
    Intents
} = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS, //adds server functionality
        Intents.FLAGS.GUILD_MESSAGES //gets messages from our bot.
    ]
});
client.once("ready", function () {
    console.log("BOT IS ONLINE"); //message when bot is online
})

client.login(process.env.TOKEN);

client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='hello')
        messages.channel.send('Hello, ' + messages.author.username); //reply hello word message with senders name
})
client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='?coin'){
        let flipCoin = ["Heads", "Tails"]
        let coin = Math.random()
        coin = coin * flipCoin.length
        coin = Math.floor(coin + 1)
        coin = flipCoin[coin]
        messages.channel.send('Hello, ' + messages.author.username + ". You flipped " + coin); //reply hello word message with senders name
    }
})
client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='?random'){
        let num = Math.random();
        num = num * 100;
        num = Math.floor(num + 1);
        messages.channel.send('Hello, ' + messages.author.username + ". Your Random Number is " + num); //reply hello word message with senders name
    }
})



