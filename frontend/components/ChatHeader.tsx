export default function ChatHeader({ status }: { status: string }) {
  return (
    <div className="border h-15 bg-zinc-800">
      <h1>Biscord {status}</h1>
    </div>
  )
}
