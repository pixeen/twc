export const replace = (pattern, data) => {
  return pattern.replace(/\${(\w+)}/g, (_, match) => {
    return data[match];
  });
};
