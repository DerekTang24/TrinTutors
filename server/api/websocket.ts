const globalChat = "CHAT";
export default defineWebSocketHandler({
  open(peer) {
    console.log("opened websocket", peer);
    peer.subscribe(globalChat);
    peer.publish(globalChat, "User joined the chat");
  },
  close(peer) {
    console.log("Closed websocket", peer);
  },
  error(peer, error) {
    console.log("Error on websocket", peer, error);
  },
  message(peer, message) {
    console.log("Message on websocket", peer, message);
    peer.publish(globalChat, message.text());
  },
});
