export default function MessageList({ messages }: { messages: string[] }) {
  console.log(messages);
  return (
    <div className="border h-150 overflow-auto bg-zinc-700">
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.split(":")[0]}
            <br/>{msg.split(":")[1]}
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}
