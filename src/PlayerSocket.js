import { Socket } from "phoenix";
import { SOCKET_ENDPOINT } from "./variables";

export default class PlayerSocket {
  constructor(playerId) {
    if (typeof PlayerSocket.instance !== "undefined") {
      return PlayerSocket.instance;
    }

    PlayerSocket.instance = this;

    this.socket = new Socket(SOCKET_ENDPOINT, {
      params: { player_id: playerId },
    });

    return this;
  }

  connect() {
    return this.socket.connect();
  }

  channel(name) {
    return this.socket.channel(name);
  }
}
