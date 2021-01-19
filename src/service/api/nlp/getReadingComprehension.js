import { constants } from '@/libs/constants';
import { http } from '../http';

const langToPath = {
  [constants.lang.EN]: '/reading_comprehend',
};

export const getReadingComprehension = async ({ text, questions, lang } = {}) => {
  const langPath = langToPath[lang] || langToPath[constants.lang.EN];

  return http.post(`/nlp${langPath}`, { context: text, questions });
};
