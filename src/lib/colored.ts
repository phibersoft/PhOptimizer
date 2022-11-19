export const colored = (
  message: string,
  type: "info" | "error" | "success" = "info"
): string => {
  const colors = {
    info: "\x1b[36m",
    error: "\x1b[31m",
    success: "\x1b[32m",
  };

  return `${colors[type]}${message}\x1b[0m`;
};
