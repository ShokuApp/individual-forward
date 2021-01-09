import { MessageRepository } from "./message";
import { Conversation, Message, Profile } from "../models";
import { Repository } from "./repository";

import conversations from "../../data/conversations/data.json";
import { ProfileRepository } from "./profile";

const messageRepository = new MessageRepository();
const profileRepository = new ProfileRepository();

// deepcode ignore no-any: JSON
async function fromJSON(conversationJson: any): Promise<Conversation> {
  const messages: Message[] = await Promise.all(
    conversationJson.messages.map(async (id: string) => {
      return messageRepository.get(id);
    })
  );

  const users: Profile[] = await Promise.all(
    conversationJson.users.map(async (id: string) => {
      return profileRepository.get(id);
    })
  );

  return {
    id: conversationJson.id,
    title: conversationJson.name,
    users,
    messages,
  };
}

function toJSON(conversation: Conversation) {
  return {
    id: conversation.id,
    title: conversation.title,
    users: conversation.users.map((user) => user.id),
    messages: conversation.messages.map((message) => message.id),
  };
}

export class ConversationRepository implements Repository<Conversation> {
  async get(id: string): Promise<Conversation> {
    const conversationJson = conversations.find((item) => item.id === id);

    if (conversationJson === undefined) {
      throw Error("Conversation not found");
    }

    return fromJSON(conversationJson);
  }

  async set(conversation: Conversation): Promise<void> {
    const index = conversations.findIndex(
      (item) => item.id === conversation.id
    );
    const conversationJson = toJSON(conversation);

    if (index !== -1) {
      conversations[index] = conversationJson;
    } else {
      conversations.push(conversationJson);
    }
  }

  async list(): Promise<Conversation[]> {
    return Promise.all(
      conversations.map((conversationJson) => {
        return fromJSON(conversationJson);
      })
    );
  }
}
