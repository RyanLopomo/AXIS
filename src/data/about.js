import { translations } from "./translations";

export const aboutItems = translations["pt-BR"].about.items.slice(0, 3).map((item, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: item.title,
  text: item.text,
}));
