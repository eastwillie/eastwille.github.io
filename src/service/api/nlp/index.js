import { getDocumentClassification } from './getDocumentClassification';
import { getNamedEntityRecognition } from './getNamedEntityRecognition';
import { getReadingComprehension } from './getReadingComprehension';
import { getSentimentAnalysis } from './getSentimentAnalysis';
import { getTextSummarization } from './getTextSummarization';

export const nlp = {
  getDocumentClassification,
  getNamedEntityRecognition,
  getReadingComprehension,
  getSentimentAnalysis,
  getTextSummarization,
};
