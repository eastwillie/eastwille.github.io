export const parseJSON = (data) => {
  try {
    return JSON.parse(data);
  } catch (ex) {
    return data;
  }
};

export const isObject = (data) => typeof data === 'object' && data !== null;
