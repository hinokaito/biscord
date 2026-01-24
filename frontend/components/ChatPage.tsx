"use client"

import { useChatSockets } from "@/hooks/useChatSockets"
import SideBar from "./SideBar"
import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageInput from "./MessageInput"

export default function ChatPage() {
  const { messages, sendMessages, status } = useChatSockets();

  return (
    <div className="h-full flex">
      <SideBar />
      <div className="w-full">
        <ChatHeader status={status} />
        <MessageList messages={messages} />
        <MessageInput onSend={sendMessages} />
      </div>
    </div>
  )
}