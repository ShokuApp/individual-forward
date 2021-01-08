import { Message } from "../models";
import { Repository } from "./repository";
import { ProfileRepository } from "./profile";

import messages from "../../data/messages/data.json";

const profileRepository = new ProfileRepository();

// deepcode ignore no-any: JSON
async function fromJSON(messageJson: any): Promise<Message> {
  const profile = await profileRepository.get(messageJson.sender);

  return {
    id: messageJson.id,
    sender: profile,
    content: messageJson.content,
    timestamp: messageJson.timestamp,
  };
}

export class MessageRepository implements Repository<Message> {
  async get(id: string): Promise<Message> {
    const message = messages.find((item) => item.id === id);

    if (message === undefined) {
      throw Error("Message not found");
    }

    return message;
  }

  async set(message: Message): Promise<void> {
    const index = messages.findIndex((item) => item.id === message.id);

    if (index !== -1) {
      messages[index] = message;
    } else {
      messages.push(message);
    }
  }

  async list(): Promise<Message[]> {
    return Promise.all(
      messages.map((messageJson) => {
        return fromJSON(messageJson);
      })
    );
  }
}
