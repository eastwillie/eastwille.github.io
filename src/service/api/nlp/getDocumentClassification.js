import { constants } from '@/libs/constants';
import { http } from '../http';

const langToPath = {
  [constants.lang.EN]: '/eng_document_classification',
  [constants.lang.AR]: '/arabic_document_classification',
};

export const getDocumentClassification = async ({ text, lang } = {}) => {
  const langPath = langToPath[lang] || langToPath[constants.lang.EN];

  return http.post(`/nlp${langPath}`, { text });
};
