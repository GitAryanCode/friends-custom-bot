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
    if (messages.content.toLocaleLowerCase()==='?random'){
        let num = Math.random();
        num = num * 100;
        num = Math.floor(num + 1);
        messages.channel.send('Hello, ' + messages.author.username + ". Your Random Number is " + num); //reply hello word message with senders name
    }
})
client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='?help')
        messages.channel.send('Hello, ' + messages.author.username + " .The commands you do with this bot are " + "?random, hello, ?active, ?moan"); //reply hello word message with senders name
})
client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='?active')
        messages.channel.send('Hello, ' + messages.author.username + ".Yes this bot is active. 😀"); //reply hello word message with senders name
})
client.on('message', function (messages) {
    if (messages.content.toLocaleLowerCase()==='?moan')
        messages.channel.send('Hello, ' + messages.author.username + ".You wanted this, sad life. "); //reply hello word message with senders name
        messages.channel.send('😩🍆🍆🍑')
})



