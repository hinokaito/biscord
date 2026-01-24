"use client"

import { useState } from "react";

export default function MessageInput({ onSend }: { onSend: (msg: string) => void }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend({ username: username, content: message});
      setMessage("");
    }
  };

  return (
    <div className="border h-full bg-zinc-700">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="名前を入力"
        className="mr-2 p-1"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力"
        className="mr-2 p-1"
      />
      <button onClick={handleSend} className="p-1 bg-indigo-500 text-white">✈</button>
    </div>
  )
}