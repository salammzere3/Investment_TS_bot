/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input Password:
  keyboard: 
  aliases: 
CMD*/

let msg = "Access denied. Password is: `Incorrect` /login"

if(message=="Ay@5802"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);
