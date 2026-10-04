import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames) {
  return twMerge(clsx(classNames));
}

export function eventTypeToName(eventType) {
  switch (eventType) {
    case "league":
      return "League";
    case "glc":
      return "Gym Leader Challenge";
    case "challenge":
      return "League Challenge";
    case "cup":
      return "League Cup";
    default:
      return eventType;
  }
}
