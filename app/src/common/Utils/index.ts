import { isAddress } from "viem";

export const getUsernameInitials = (username?: string | null) => {
  if (!username) return "?";
  if (isAddress(username)) return "0x";
  return username
    .split(/[-.\s]/)
    .filter((word) => word !== "stability")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);
};
