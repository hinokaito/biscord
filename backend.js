// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('クライアントが接続しました');

  // 接続直後にメッセージを送る
  ws.send('サーバーからの挨拶: こんにちは！');

  // 2秒ごとに現在時刻を送るテスト
  setInterval(() => {
    ws.send(`現在のサーバー時刻: ${new Date().toLocaleTimeString()}`);
  }, 2000);
});

console.log('WebSocketサーバーがポート8080で起動しました');