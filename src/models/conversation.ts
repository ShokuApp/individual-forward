import { Message } from "./message";
import { Profile } from "./profile";

export type Conversation = {
  id: string;
  title: string;
  users: Profile[];
  messages: Message[];
};
