export const getTime: (timestamp: number) => string = (timestamp: number) => {
  const date = new Date(timestamp).toLocaleString();
  const now = new Date().toLocaleString().slice(0, 10);
  return date.slice(0, 10) !== now ? date.slice(0, 5) : date.slice(12, 17);
};
