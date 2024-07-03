import { Message } from "@/model/User";
export interface ApiResponse {
  success: boolean;
  message: string;
  isAccepectingMessages?: boolean;
  messages?: Array<Message>;
}
