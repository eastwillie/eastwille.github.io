import apis from '@/apis';
import axios from '@/axios';

export default {
  getDocumentClassification: ({
    lang,
    text,
  }) => new Promise((resolve) => {
    const endpoint = lang === 'ar' ? apis.documentClassificationAr : apis.documentClassificationEn;
    axios.post(endpoint, { text })
      .then((response) => {
        resolve(response.data.result);
      });
  }),
};
