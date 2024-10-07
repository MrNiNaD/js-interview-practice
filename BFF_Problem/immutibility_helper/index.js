/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  // your code here
  if ('$push' in command) {
    return [...data, ...command['$push']];
  }

  if ("$merge" in command) {
    if (typeof data !== 'object') {
      throw new Error('Not an object')
    }

    return {
      ...data,
      ...command['$merge'],
    }
  }

  if ("$set" in command) {
    return command["$set"];
  }

  if ("$apply" in command) {
    return command["$apply"](data);
  }

  const newData = Array.isArray(data) ? [...data] : {...data};
  for (const key in command) {
    newData[key] = update(newData[key], command[key]);
  }

  return newData;
}