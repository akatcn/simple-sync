const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/time") {
    const response = {
      timeStamp: performance.timeOrigin + performance.now(), // 현재 시간을 ms 단위로 반환
    };

    res.writeHead(200, { "Content-Type": "application/json", "access-control-allow-origin": "*", "Timing-Allow-Origin": "*" });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});