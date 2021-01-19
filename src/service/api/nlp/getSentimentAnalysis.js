import { constants } from '@/libs/constants';
import { http } from '../http';

const langToPath = {
  [constants.lang.EN]: '/eng_sentiment_analysis',
  [constants.lang.AR]: '/arabic_sentiment_analysis',
};

export const getSentimentAnalysis = async ({ text, lang } = {}) => {
  const langPath = langToPath[lang] || langToPath[constants.lang.EN];

  return http.post(`/nlp${langPath}`, { text });
};
