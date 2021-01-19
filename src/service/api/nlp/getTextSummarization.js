import { constants } from '@/libs/constants';
import { http } from '../http';

const langToPath = {
  [constants.lang.EN]: '/eng_text_summarize',
  [constants.lang.AR]: '/arabic_text_summarize',
};

export const getTextSummarization = async ({ text, lang } = {}) => {
  const langPath = langToPath[lang] || langToPath[constants.lang.EN];

  return http.post(`/nlp${langPath}`, { text });
};
