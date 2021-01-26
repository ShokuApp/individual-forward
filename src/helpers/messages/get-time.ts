export const getTime: (timestamp: number) => string = (timestamp: number) => {
  const messageDate = new Date(timestamp);
  const nowDate = new Date();

  if (nowDate.toLocaleDateString() === messageDate.toLocaleDateString()) {
    return messageDate
      .toLocaleTimeString()
      .split(":")
      .slice(0, 2)
      .join(":");
  }

  return messageDate
    .toLocaleDateString()
    .split("/")
    .slice(0, 2)
    .join("/");
};