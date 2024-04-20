let connection;

const keyMap = {
  '\u0077': 'up',
  '\u0061': 'left',
  '\u0073': 'down',
  '\u0064': 'right',
  '\u0068': 'Hello!',
  '\u0067': 'Goodbye!',
  '\u0076': 'Victory!'

};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    console.log("Exiting Game");
    process.exit();
  }
  const keyPress = keyMap[key];
  if (keyPress === 'up' || keyPress === 'left' || keyPress === 'down' || keyPress === 'right') {
    connection.write(`Move: ${keyPress}`);
  } else {
    connection.write(`Say: ${keyPress}`);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;