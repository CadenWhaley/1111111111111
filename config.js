module.exports = {
  /* The token of your Discord Bot */
  token: "ODkwMjIzNjA1ODY1MTM2MTg5.YUsrVw.FwLR8T6iv437bezYaantY6xQCZ4",
  /* For the support server */
  support: {
    id: "discord.gg/no", // The ID of the support server
    logs: "946677031737888778", // And the ID of the logs channel of your server (new servers for example)
  },
  /* Dashboard configuration */
  dashboard: {
    enabled: true, // whether the dashboard is enabled or not
    secret: "qcUJtJyDuqEYisjpiczWxwvOi0iE0omj", // Your discord client secret
    baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
    logs: "946677031737888778", // The channel ID of logs
    port: 8080, // Dashboard port
    expressSessionPassword: "1111", // Express session password (it can be what you want)
    failureURL: "https://1111111111111-production.up.railway.app" // url on which users will be redirected if they click the cancel button (discord authentication)
  },
  mongoDB: "mongodb+srv://tc3NXXu7mzhk4lJq:hGauMckbookWz6g6@cluster0.chlqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // The URl of the mongodb database
  prefix: ".", // The default prefix for the bot
  /* For the embeds (embeded messages) */
  embed: {
    color: "#0091fc", // The default color for the embeds
    footer: "" // And the default footer for the embeds
  },
  /* Bot's owner informations */
  owner: {
    id: "878096206587363418", // The ID of the bot's owner
    name: "Maxxy#7052" // And the name of the bot's owner
  },
  /* DBL votes webhook (optional) */
  votes: {
    port: 5000, // The port for the server
    password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
    channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
  },
  /* The API keys that are required for certain commands */
  apiKeys: {
    // BLAGUE.XYZ: https://blague.xyz/
    blagueXYZ: "XXXXXXXXXXX",
    // FORTNITE TRN: https://fortnitetracker.com/site-api
    fortniteTRN: "XXXXXXXXXXX",
    // FORTNITE FNBR: https://fnbr.co/api/docs
    fortniteFNBR: "XXXXXXXXXXX",
    // DBL: https://discordbots.org/api/docs#mybots
    dbl: "XXXXXXXXXXX",
    // AMETHYSTE: https://api.amethyste.moe
    amethyste: "c6a339fe73ec2f59f932410e3aa46982f1148aeabb065640ef1859c5faa63ae20cbb366e91408536632b5e288339269ad60ba97c88f59cd6bf53e6558e9570dd",
  },
  /* The others utils links */
  others: {
    github: "", // Founder's github account
    donate: "" // Donate link
  },
  /* The Bot status */
  status: [
    {
      name: "@NattoBot helpin on {serversCount} servers",
      type: "LISTENING"
    },
    {
      name: "my website : Nope :3",
      type: "PLAYING"
    }
  ]
};
