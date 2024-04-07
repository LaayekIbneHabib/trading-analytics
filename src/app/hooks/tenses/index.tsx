import nlp from "compromise";

interface UseTensesParams {
  text: string;
}

export const useTenses = ({ text }: UseTensesParams) => {
  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const ToPast = () => {
    let doc = nlp(text.toLowerCase());
    doc.verbs().toPastTense();
    return capitalize(doc.text());
  };

  const ToPresentContinuous = () => {
    let doc = nlp(text.toLowerCase());
    doc.verbs().toGerund();
    return capitalize(doc.text().replace(/is /gi, ""));
  };

  return { ToPresentContinuous, ToPast };
};
