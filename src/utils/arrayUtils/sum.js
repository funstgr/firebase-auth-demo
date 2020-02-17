const sumArrayKey = (items, prop) => items.reduce((a, b) => a + parseInt(b[prop], 10), 0);

export default sumArrayKey;
