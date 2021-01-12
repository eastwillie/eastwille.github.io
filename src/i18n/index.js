import VUE from 'vue';
import VUEI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import messages from './langs';

VUE.use(VUEI18n);
const i18n = new VUEI18n({
  locale: localStorage.lang || 'en',
  messages,
});
locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
