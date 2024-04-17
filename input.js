let connection;

const keyMap = {
    '\u0077': 'up',
    '\u0061': 'left',
    '\u0073': 'down',
    '\u0064': 'right'
  };

const handleUserInput = function (key) {
    if (key === "\u0003") {
        console.log("Exiting Game")
        process.exit();
      }
      const direction = keyMap[key];
      if (direction) {
        connection.write(`Move: ${direction}`);
      }
  };

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  module.exports = setupInput;