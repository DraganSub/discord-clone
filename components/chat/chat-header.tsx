import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { UserAvatar } from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}


export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl
}: ChatHeaderProps) => {
  return <div className="text-md font-semibold px-3 flex items-center h-12 dark:border-neutral-800 border-b-2">
    <MobileToggle serverId={serverId} />
    {type === "channel" && (
      <Hash className="w-4 h-4 text-zinc-500 dark:text-zinc-400 ml-2 " />
    )}
    {type === "conversation" && (
      <UserAvatar
        src={imageUrl}
        className="h-7 w-7 md:w-7 md:h-7 mr-2"
      />
    )}
    <p className="font-semibold text-md text-black dark:text-white ml-1">
      {name}
    </p>
    <div className="ml-auto flex items-center">
      {type === "conversation" && (
        <ChatVideoButton />
      )}
      <SocketIndicator />
    </div>
  </div>
}

export default ChatHeader;