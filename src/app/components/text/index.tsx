import nlp from "compromise";
import { TextProps } from "@/app/types/interfaces";

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const ToPast = ({ text }: TextProps) => {
  let doc = nlp(text.toLowerCase());
  doc.verbs().toPastTense();
  return capitalize(doc.text());
};

export const ToPresentContinuous = ({ text }: TextProps) => {
  let doc = nlp(text.toLowerCase());
  doc.verbs().toGerund();
  return capitalize(doc.text().replace(/is /gi, ""));
};
