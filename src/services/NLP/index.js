import apis from '@/apis';
import axios from '@/axios';

export default {
  async getDocumentClassification({
    language,
    text,
  }) {
    const endpoint = language === 'ar' ? apis.documentClassificationAr : apis.documentClassificationEn;
    const response = await axios.post(endpoint, { text });
    return response.data.result;
  },
};
