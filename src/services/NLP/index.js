import apis from '@/apis';
import http from '@/http';

export default {
  async getDocumentClassification({
    language,
    text,
  }) {
    const endpoint = language === 'ar' ? apis.documentClassificationAr : apis.documentClassificationEn;
    const response = await http.post(endpoint, { text });
    return response.data.result;
  },
};
