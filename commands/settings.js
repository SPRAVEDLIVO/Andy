const database = require("../database")

let commands = {
    setChannel:  {
        "run": (message) => {
            let channel = message.mentions.channels.first()
            if (!channel) throw "You need to specify channel."
            database.updateGuild(message.guild.id, "bannedChannel", channel.id)
            message.channel.send("Channel was updated.")
        },
        help: "[#channel] - channel for bans monitor",
        permissions: "ADMINISTRATOR"
    },
    setPrefix: {
        "run": (message, args) => {
            if (!args[0]) throw "You need to specify new prefix."
            database.updateGuild(message.guild.id, "prefix", args[0])
            message.channel.send("Prefix was updated.")
        },
        help: "[newPrefix] - set a prefix for bot",
        permissions: "ADMINISTRATOR"
    }
}

module.exports = {commands}