const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("B")
const ownerid = ('474730486787211265')
const moment = require("moment");
const fs = require('fs');

console.log("Iginte");

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗');
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
  });

client.on("ready", async () => {
    if(client.guilds.size > 1) {
        client.user.setGame(`*help | Servers : ${client.guilds.size}`,'https://www.twitch.tv/hamodi1299');
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`)
    } else {
        client.user.setGame(`*help | Servers : ${client.guilds.size}`,'https://www.twitch.tv/hamodi1299');
        console.log(`${client.user.username} is online on ${client.guilds.size} server!`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setGame(`*help | Servers : ${client.guilds.size}	`,'https://www.twitch.tv/hamodi1299');
    } else {
        client.user.setGame(`*help | Servers : ${client.guilds.size}	`,'https://www.twitch.tv/hamodi1299');
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setGame(`*help | Servers : ${client.guilds.size}	`,'https://www.twitch.tv/hamodi1299');
    } else {
        client.user.setGame(`*help | Servers : ${client.guilds.size}	`,'https://www.twitch.tv/hamodi1299');
    }
});


client.on('guildCreate', guild => {
    
  client.channels.get("493070792905588757")
const embed = new Discord.RichEmbed()
   .setAuthor(`البوت دخل سيرفر جديد ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('F9 Bot' , client.user.avatarURL)
           client.channels.get("493070792905588757").send({embed});
}

);
client.on('guildDelete', guild => {
  client.channels.get("493070824375582722")
const embed = new Discord.RichEmbed()
   .setAuthor(`البوت خرج من سيرفر ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('F9 Bot' , client.user.avatarURL)
           client.channels.get("493070824375582722").send({embed});
}

);
  
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("493092420523917313").send({ embed: stewart });
    }
});

//---------------------------------------------------------------------------help----------------------------------------------------------------------------- 

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
        message.react("☑")




        message.author.sendMessage(`
  **To activate the server log, create Text channel named "log"**
  
        	__**Staff commands :gear:**__
			
  ❖ **bc ** ==> Broadcast to all your server members or to specific role.
  ❖ **vkick <user> ** ==> To kick any user from voice channels.
  ❖ **move <user> ** ==> To move any user to your channel.
  ❖ **all-move ** ==> To move all users to your channel.
  ❖ **kick <user> <reason> ** ==> To kick any user from the server.
  ❖ **band <user> <reason> ** ==> To ban any user from the server.
  ❖ **mute <user> <time> <reason> ** ==> To mute any user.
  ❖ **unmute <user> ** ==> To unmute muted people.
  ❖ **clear ** ==> To clear the chat.
  ❖ **antiinvites ** ==> To toggle the anti advertisement off or on in your server.
  ❖ **antiinvites-info ** ==> To see the anti advertisement if it's on or off.
  ❖ **antilinks ** ==> To toggle the anti links off or on in your server.
  ❖ **antilinks-info ** ==> To see the anti links if it's on or off.
  
        	__**General Commands :coffee:**__
			
  ❖ **server ** ==> To see server info
  ❖ **id ** ==> To see your ID.
  ❖ **bot ** ==> Bot Info.
  ❖ **invite ** ==> To invite the bot to your server.
  ❖ **members ** ==> To see all members in the server.
  ❖ **member <number> ** ==> To see member info.
  ❖ **avatar ** ==> To see any profile picture of anyone.
  
  Support server:
  https://discord.gg/fmpAbNd
    
  By : Ignite#2002 | 
  `);
message.channel.send('**Check your Private Messages! | :ballot_box_with_check:**')

  }
  });

//---------------------------------------------------------------------------Breadcast-----------------------------------------------------------------------------  

client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bc')) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("** :no_entry: - You don't have 'ADMINISTRATOR' permission**");
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 Broadcast sends to a specific role without embed
 
 🏅 Broadcast sends to a specific role with embed
 
 📭 Broadcast sends for all members with embed
 
 📧 Broadcast sends for all members without embed
 
 🔵 Broadcast sends for online members only without embed
 
 🔷 Broadcast sends for online members only with embed
 
 ❌ To Cancel the process
 -=-=-=-=-=-=-=-=-=-=
 `)
 
 message.channel.sendEmbed(recembed).then(msg => {
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() =>  msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))
 
 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
 
             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
 
             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
 
             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
 
             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {
 
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
   
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'yes') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'no') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
 
                if(collected.first().content === 'yes') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
               
 
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
m.send(`${m}`)      
       
    })
}
if(collected.first().content === 'no') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
               
    })}
})
})
        })
    })
})
 
 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
   
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle('Successfully Canceled :x:')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});

//---------------------------------------------------------------------------Server-----------------------------------------------------------------------------  

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
	if(!msg.channel.guild) return;
	if (msg.author.bot) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`*${msg.guild.name}`)
      .addField('🌐**__Region__**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__Members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__Online Members__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__Txt Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__Voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__Established in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//---------------------------------------------------------------------------Invite-----------------------------------------------------------------------------  

client.on('message', message => {
	 if (message.author.bot) return;
     if (message.content === prefix + "invite") {
	 message.channel.send('**Check your Private Messages! | :ballot_box_with_check:**')
     let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Click Here to invite F9 Bot")
.setAuthor("F9 Bot", "https://cdn.discordapp.com/icons/236505073537122304/d37e2e2b8f83f8679afe97cd07918e84.jpg")
.setTimestamp()
.setURL("https://discordapp.com/oauth2/authorize?client_id=491317130315169793&permissions=21469588398&scope=bot")
  message.author.sendEmbed(embed);
    }
});

//---------------------------------------------------------------------------Clear-----------------------------------------------------------------------------  

client.on('message', message => {
	if (message.author.bot) return;
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'clear')) {
 if(!message.channel.guild) return;
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("** :no_entry: - You don't have 'MANAGE_MESSAGES' permission**");
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let request = `Requested By ${message.author.username}`;
 message.channel.send(`**Are you sure you want to clear the chat?**`).then(msg => {
 msg.react('✅')
 .then(() => msg.react('❌'))
 .then(() =>msg.react('✅'))

 let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
 let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
 message.channel.send(`Clearing ...`).then(m => m.delete(5000));
 var msg;
         msg = parseInt();

       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
	   title: "`` Chat cleared ``",
         color: 0x06DF00,
         footer: {

         }
       }}).then(msg => {msg.delete(3000)});

 })
 reaction2.on("collect", r => {
 message.channel.send(`**The order has been cancelled**`).then(m => m.delete(5000));
 msg.delete();
 })
 })
 }
 });

//---------------------------------------------------------------------------Muted-----------------------------------------------------------------------------  

  client.on('message', async message => {
  if (message.author.bot) return;
  if(!message.channel.guild) return;
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("** :no_entry: - You don't have 'MESSAGE_MANAGER' permission**");

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("** :no_entry: - I don't have 'MANAGE_ROLES' permission**");

    let mention = message.mentions.members.first();
    if(!mention) return message.channel.send(`
			__**Usage :ok_hand:**__

** :mute: Please mention a user first**
❖ **mute <user> <time> <reason> ** ==>**To mute any user.**
`).then(msg => {
    });
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.channel.send("** :no_entry: -  You can't mute this user!**");
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.channel.send("** :no_entry: - I can't mute this user!**");
    if(mention.id === message.author.id) return message.channel.send("** :no_entry: - You can't mute yourself!**");
	if(mention === message.member.guild.owner) return message.channel.send("**:no_entry: - I can't mute the ownership**");

    let duration = args[2];
    if(!mention) return message.channel.send`
			__**Usage :ok_hand:**__

** :clock: Please Select a time first! (time in minutes)**
❖ **mute <user> <time> <reason> ** ==>**To mute any user.**
`.then(msg => {
    });

    if(isNaN(duration)) return message.channel.send(`
			__**Usage :ok_hand:**__

** :timer: Select a correct time (time in minutes)**
❖ **mute <user> <time> <reason> ** ==>**To mute any user.**
`).then(msg => {
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "No reason";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('You have been muted')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - Server',message.guild.name,true)
    .addField('# - You have muted by',message.author,true)
    .addField('# - reason',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("** :no_entry: - You don't have 'MESSAGE_MANAGER' permission**").then(msg => {
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("** :no_entry: - You don't have 'MESSAGE_MANAGER' permission**").then(msg => {
    });

    if(!mention) return message.channel.send(`
			__**Usage :ok_hand:**__

** :zipper_mouth: Please mention a user first**
❖ **unmute <user> ** ==>**To unmute muted people.**
`).then(msg => {
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});

//---------------------------------------------------------------------------Kick----------------------------------------------------------------------------- 

client.on('message',function(message) {
	if (message.author.bot) return;
	if(!message.channel.guild) return;
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("** :no_entry: - You don't have 'KICK_MEMBERS' permission**");
	   if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("** :no_entry: - I don't have 'KICK_MEMBERS' permission**");
	   if(!toKick) return message.channel.send(`
			__**Usage :ok_hand:**__

** :oncoming_automobile: Please mention a user first**
❖ **kick <user> <reason> ** ==>**To kick any user from the server.**
`);
       if(toKick.kickable) return message.channel.send("** :no_entry: - I can't kick this user**");
       if(!toReason) return message.channel.send(`
			__**Usage :ok_hand:**__

** :oncoming_automobile:  You have to type a reason**
❖ **kick <user> <reason> ** ==>**To kick any user from the server.**
  `)
	   if(toKick.id === ("491317130315169793")) return message.channel.send("** :no_entry: - I can't kick myself!**");
	   if(toKick === message.member.guild.owner) return message.channel.send("**:no_entry: - I can't kick the ownership**");
       if(toKick.id === message.author.id) return message.channel.send("** :no_entry: - You can't kick yourself!**")
       if(!message.guild.member(toKick).kickable) return message.channel.send("** :no_entry: - I can't kick this user!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

//---------------------------------------------------------------------------Ban----------------------------------------------------------------------------- 

client.on("message", function(message) {
	if (message.author.bot) return;
	if(!message.channel.guild) return;
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("** :no_entry: - You don't have 'BAN_MEMBERS' permission**");
	   if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("** :no_entry: - I don't have 'BAN_MEMBERS' permission**");
       if(!toBan) return message.channel.send(`
			__**Usage :ok_hand:**__

** :butterfly:  Please mention a user first**
❖ **band <user> <reason> ** ==>**To ban any user from the server.**
`);
       if(toBan.id === ("491317130315169793")) return message.channel.send("** :no_entry: - I can't ban myself!**");
       if(toBan === message.member.guild.owner) return message.channel.send("**:no_entry: - I can't ban the ownership**");
       if(toBan.bannable) return message.channel.send("** :no_entry: - I can't ban this user!**");
       if(!toReason) return message.channel.send(`
			__**Usage :ok_hand:**__

** :oncoming_automobile:  Please typ a reason**
❖ **band <user> <reason> ** ==>**To ban any user from the server.**
`)
       if(toBan.id === message.author.id) return message.channel.send("** :no_entry: - You can't ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.channel.send("** :no_entry: - I can't ban this user!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You hav been baned!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**:white_check_mark:  Done! I banned: ${toBan}**`))
       );

   }
});

//---------------------------------------------------------------------------ID----------------------------------------------------------------------------------- 

 client.on('message', message => {
    if(message.content.startsWith (prefix + 'id')) {
	if (message.author.bot) return;
	if(!message.channel.guild) return;
     moment.locale('EN');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total number of members recruited in the invitation: ${v.uses}.\n`+ p, `\nServer: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total members recruited:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Your account created in:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField('Entered the server in:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('You have invited:', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});

//---------------------------------------------------------------------------MoveAll----------------------------------------------------------------------------- 

   client.on('message', message => {
	if (message.author.bot) return;
	if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'all-move')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("** :no_entry: - You don't have 'MOVE_MEMBERS' permission**");
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("** :no_entry: - I don't have 'MOVE_MEMBERS' permission**");
    if (message.member.voiceChannel == null) return message.channel.send(`** :no_entry: - You have to enter a voice Channel!**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`** :white_check_mark: I have moved all users in voice channels to your channel.**`)


     }
       });

//---------------------------------------------------------------------------Move----------------------------------------------------------------------------- 

client.on('message', message => {
if (message.author.bot) return;
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send(`
			__**Usage :ok_hand:**__
			
**:diamonds: Please mention a user to move!**
❖ **move <user> ** ==>**To move any user to your channel.**
`);
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`You have been moved <@${usermentioned}> to your voice channel ✅`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send(" :no_entry: - **<@${usermentioned}> is not on a voice channel!")
}
} else {
 message.channel.send("** :no_entry: - You have to enter a voice Channel!**")
}
} else {
message.react("❌")
 }}});
 
//---------------------------------------------------------------------------VoiceKick----------------------------------------------------------------------------- 

client.on("message", message => {
  if (message.author.bot) return;
  if(!message.channel.guild) return;
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send(`
			__**Usage :ok_hand:**__
			
**:walking: Please mention a user to move!**
❖ **vkick <user> ** ==>**To kick any user from voice channels.**
`);
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send(" :no_entry: - ** ${men.username} is not on a voice channel!**");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("** :no_entry: - You don't have 'MOVE_MEMBERS' permission**")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("** :no_entry: - I don't have 'MOVE_MEMBERS' permission**");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("** :no_entry: - I don't have 'MANAGE_CHANNELS' permission**")

    message.guild.createChannel("F9 Bot VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**I have been kicked \`\`${men.username}\`\` from the voice channel**`)
} catch (e) {
  message.channel.send(" :no_entry: - I can't do that, I don't know why!");
}
  }
});

//---------------------------------------------------------------------------MembersMember-----------------------------------------------------------------------------

  client.on('message', message => {
    if(message.author.bot) return; 
	if(!message.channel.guild) return;
    if(message.channel.type === 'dm') return;
   
    var args = message.content.toLowerCase().split(' '); 
    var command = args[0];
    var prefix = '*'; 
   
    if(command == prefix + 'members') {
        var memberS = message.guild.members.size; 
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {
            var number = 1;
 
            if(memberS > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}members 2\`\` (${Math.round(memberS / 10)} pages)`;
            }else {
                var more = '__'; 
            }
 
            let embedS = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **${memberS}** Members.`) 
            .setColor('GREEN')
            .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(0, 10).join('\n')}__\n${more}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
 
            message.channel.send(embedS);
        }else if(!isNaN(args[1])) {
            var number = 1;
 
            if(memberS > 10) {
                var more = `choose **1** To **${Math.round(memberS / 10)}**`;
            }else {
                var more = 'This server have **1** Page only.'; 
            }
 
            if(Math.round(args[1].replace('-', '')) * 10 - 9 > memberS) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${more}`);
 
           let embedS = new Discord.RichEmbed()
           .setTitle(`:white_check_mark: **${memberS}** Members.`)
           .setColor('GREEN')
           .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}\n\n:sparkles: **More?** \`\`${prefix}members ${Math.round(args[1].replace('-', '')) + 1}\`\` (${Math.round(memberS / 10)} pages)`)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           message.channel.send(embedS);
       }
   }
   if(command == prefix + 'member') {
       if(!args[1]) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(isNaN(args[1])) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(args[1] > message.guild.members.size) return message.channel.send(`:no_entry: | I couldn\'t find the user. Please selecte number from 1 to ${message.guild.members.size}`);
 
       let memberInfo = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: Informations about **${message.guild.members.map(m => m.user.tag).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}**`)
       .setThumbnail(`${message.guild.members.map(m => m.user.avatarURL).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}`)
       .setColor('GREEN')
       .setDescription(`__\n__**INFORMATIONS USER:**\n\n**User ID:** \`\`${message.guild.members.map(m => m.user.id).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Tag:** \`\`#${message.guild.members.map(m => m.user.discriminator).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Created at:** \`\`${message.guild.members.map(m => Days(m.user.createdAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Joined at:** \`\`${message.guild.members.map(m => Days(m.joinedAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Status:** \`\`${message.guild.members.map(m => m.user.presence.status).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Roles Amount:** \`\`${message.guild.members.map(m => m.roles.size - 1).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))} Role.\`\`\n**User Bot:** \`\`${message.guild.members.map(m => m.user.bot).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\``)
       .setTimestamp()
       .setFooter(message.author.tag, message.author.avatarURL) 
 
       message.channel.send(memberInfo);
   } 
});
function Days(date) {
   let now = new Date();
   let diff = now.getTime() - date.getTime();
   let days = Math.floor(diff / 86400000);
   return days + (days == 1 ? " day" : " days") + " ago"; 
}

//---------------------------------------------------------------------------Bot------------------------------------------------------------------------------

client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
	if (!message.channel.guild) return;
    if (message.author.bot) return;
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField('``My Prefix``' , `[ * ]` , true)
            .addField('``My Language``' , `[ Java Script ]` , true)
    })
}
});

//---------------------------------------------------------------------------antiinvites------------------------------------------------------------------------------

let antiinvites = JSON.parse(fs.readFileSync(`./antiinvites.json`, `utf8`)); 
client.on('message', message => {
    
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;
  
    if (!antiinvites[message.guild.id]) antiinvites[message.guild.id] = {
        onoff: 'Off'
    }
  
    if (message.content === prefix + "antiinvites-info") {
    if(!message.channel.guild) return;
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.channel.send("** :no_entry: - You don't have 'MANAGE_GUILD' permission**")
        var embed = new Discord.RichEmbed()
            .setDescription(`Now antiinvites state is : ${antiinvites[message.guild.id].onoff}`)
            .setColor(`BLACK`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + "antiinvites") {
    if(!message.channel.guild) return message.channel.send(':no_entry: - **This command is just for servers**');
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.channel.send("** :no_entry: - You don't have 'MANAGE_GUILD' permission**")
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (antiinvites[message.guild.id].onoff === 'Off') return [message.channel.send(`The antiinvites event has been toggled to On!🛡`), antiinvites[message.guild.id].onoff = 'On']
            if (antiinvites[message.guild.id].onoff === 'On') return [message.channel.send(`The antiinvites event has been toggled to Off!:x: `), antiinvites[message.guild.id].onoff = 'Off'] 
  
        }
    }
	if (message.content.includes('discord.gg/')) {
        if (antiinvites[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('discord.gg')) {
        if (antiinvites[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('.gg/')) {
        if (antiinvites[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('gg/')) {
        if (antiinvites[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('.gg')) {
        if (antiinvites[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
     
    fs.writeFile("./antiinvites.json", JSON.stringify(antiinvites), (err) => {
        if (err) console.error(err)
    });
});
 
//---------------------------------------------------------------------------antilink--------------------------------------------------------------------------------------

let antilink = JSON.parse(fs.readFileSync(`./antilink.json`, `utf8`)); 
client.on('message', message => {
    
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;
  
    if (!antilink[message.guild.id]) antilink[message.guild.id] = {
        onoff: 'Off'
    }
  
    if (message.content === prefix + "antilinks-info") {
    if(!message.channel.guild) return;
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.message.channel.send("** :no_entry: - You don't have 'MANAGE_GUILD' permission**")
        var embed = new Discord.RichEmbed()
            .setDescription(`Now antilink state is : ${antilink[message.guild.id].onoff}`)
            .setColor(`BLACK`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + "antilinks") {
    if(!message.channel.guild) return;
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.channel.send("** :no_entry: - You don't have 'MANAGE_GUILD' permission**")
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (antilink[message.guild.id].onoff === 'Off') return [message.channel.send(`**The antilinks event has been toggled to On!🛡**`), antilink[message.guild.id].onoff = 'On']
            if (antilink[message.guild.id].onoff === 'On') return [message.channel.send(`**The antilinks event has been toggled to Off!:x: **`), antilink[message.guild.id].onoff = 'Off'] 
  
        }
    }
    if (message.content.includes('https://')) {
        if (antilink[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('htps://')) {
        if (antilink[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('www.')) {
        if (antilink[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('.net')) {
        if (antilink[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
	if (message.content.includes('.com')) {
        if (antilink[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
    }
     
    fs.writeFile("./antilink.json", JSON.stringify(antilink), (err) => {
        if (err) console.error(err)
    });
});

//---------------------------------------------------------------------------uptime------------------------------------------------------------------------------

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec` + "`");

}
});

//---------------------------------------------------------------------------ping------------------------------------------------------------------------------

client.on("message", message => {
      if (message.content === "*ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong! :ping_pong: :**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

//---------------------------------------------------------------------------avatar------------------------------------------------------------------------------

  client.on('message', message =>{
    let args = message.content.split(' ');
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});



//---------------------------------------------------------------------------OwnerCommands------------------------------------------------------------------------------

client.on('message', async message => {
  if(message.content.startsWith(prefix + "all-bc")) {
    let i = client.users.size;
    if(message.author.id !== '474730486787211265') return message.channel.send(":negative_squared_cross_mark: » No one can use this command, just me :)");
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send(':negative_squared_cross_mark: » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
 
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    if (command == "leave") {
        // if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry, you don't have permission to use this!**");
        
 
        if(message.author.id != "474730486787211265") return message.reply("**Sorry, you don't have permission to use this!**");

        
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }     
})

client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '**seceretcommand-serverslist') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
 


let tokens = process.argv.slice(2)

if(!tokens[0]) {
  console.log("Supply a number of token")
  process.exit(0)
}

let token;


if(tokens[0] === "1") {
  token = "NTU1ODIwMzgzMjI0NDYzMzYw.D2wvtA.6JPaz0O9r14PFgZ7Iw4HTuVY8rg"
} else if(tokens[0] === "2") {
  token = "NDg2NTc5NjE1MjcyNDAzMDIx.Dok4QQ.ze6z3GpSAcjX80U74K0tYiSGcO4"
} /* else  if(tokens[0] === "3") {
  token = "token"
}
*/
client.login(token);