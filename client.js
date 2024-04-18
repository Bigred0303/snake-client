const net = require("net");
const { IP, PORT, Name } = require("./constant.js");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
    conn.end();
  });

  conn.on('connect', () => {
    console.log("Connected to game server");
  });

  conn.on('connect', () => {
    conn.write(`Name: ${Name}`)
  });

//   conn.on('connect', () => {
//     conn.write("Move: up")
//   });

  return conn;
};

module.exports = connect;