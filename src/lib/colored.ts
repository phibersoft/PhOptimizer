export const colored = (
  message: string,
  type: "info" | "error" | "success" = "info"
): string => {
  const colors = {
    info: "\x1b[36m%s\x1b[0m",
    error: "\x1b[31m%s\x1b[0m",
    success: "\x1b[32m%s\x1b[0m",
  };

  return `${colors[type]}${message}\x1b[0m`;
};
