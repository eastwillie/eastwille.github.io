import { constants } from '@/libs/constants';
import { http } from '../http';

const langToPath = {
  [constants.lang.EN]: '/eng_named_entity',
  [constants.lang.AR]: '/arabic_named_entity',
};

export const modes = {
  CASE_SENSITIVE: 'CASE_SENSITIVE',
  CASE_INSENSITIVE: 'CASE_INSENSITIVE',
};

export const getNamedEntityRecognition = async ({ text, lang, mode } = {}) => {
  const langPath = langToPath[lang] || langToPath[constants.lang.EN];

  return http.post(`/nlp${langPath}`, {
    case: mode === modes.CASE_INSENSITIVE,
    text,
  });
};
