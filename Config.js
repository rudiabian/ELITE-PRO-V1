require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"uFYKdqlzC0VKcaM+GtNesfVgihcmAmDxA1LRbbVBglg="},"public":{"type":"Buffer","data":"vo7AC9U8OudWoYVw2Zbd8M5UWahitjqTgJ7SLTKc4CU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kIAlXqzOPWRrpQ5rO87X0gFr9+K+X8Q1pK5kbWKAR1Y="},"public":{"type":"Buffer","data":"5aTuE9xNhcmFsCkGfdr+GtqpDXbpjyM1JJwfIsqds3c="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gE6yRwSeN5wlzM9G8iSJ3OinZscBPmqOcMfEuPqkXmI="},"public":{"type":"Buffer","data":"W1bBU11c/RTvZ+bA9MsKVTr3FF2m//4QDiQP82aUZ3k="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CMYX3i2+7svCWHLJwdCGigEKCKxYi149/TpcIeb2+Ww="},"public":{"type":"Buffer","data":"vB/qtrVk+4T6+ZySd5XKgXGUxlB3u9Tgcxqjc6q9+Xc="}},"signature":{"type":"Buffer","data":"aLmErcIP+33E/LovDLYbj/ULoYhsx2yqzEYqBrvG4fYI/R9AEGtI3dTY39/MQqjY+9nicRuYo77nLKScnviHCg=="},"keyId":1},"registrationId":137,"advSecretKey":"ePyISB4ofpylErheVOZXTJc34iaT9LNUJF2IcXrsras=","processedHistoryMessages":[{"key":{"remoteJid":"60142808841@s.whatsapp.net","fromMe":true,"id":"DE564BA5CC76C63949C4782087147E40"},"messageTimestamp":1755445423},{"key":{"remoteJid":"60142808841@s.whatsapp.net","fromMe":true,"id":"66B02DA5B9C9C5348B4DD963F9F12AE2"},"messageTimestamp":1755445424}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"TKW6Y624","me":{"id":"60142808841:2@s.whatsapp.net","lid":"209547696320576:2@lid","name":"ARR"},"account":{"details":"CMe5+34QgvGHxQYYCSAAKAA=","accountSignatureKey":"ffLsScuG6VeU92/DUuTW9bdr/wddOa2H1kwEvi20izw=","accountSignature":"mIgMBZ+n/IfW8zYOZfbhG+T5lO5NycdtUvrEIdpgv9oNnCuu6ChWRLakqcFfsP0ZsbcXr0idoF/iU/olTsk3DA==","deviceSignature":"/4TRhKDcGST3q2NlgmjzaERwheov/xNLENXl69VrxnBPOLdXR6GptykB1AqNRuRpLHilViBEGmbi82laiNFLDA=="},"signalIdentities":[{"identifier":{"name":"60142808841:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BX3y7EnLhulXlPdvw1Lk1vW3a/8HXTmth9ZMBL4ttIs8"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0ICA=="},"lastAccountSyncTimestamp":1755445418,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAANo3"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '60142808841';
global.ownername = process.env.bang ARR || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-Dark_Side';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});