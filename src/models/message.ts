import { Profile } from "./profile";

export type Message = {
  id: string;
  sender: Profile;
  content: string;
  //Timestamp format: milliseconds
  timestamp: number;
};
