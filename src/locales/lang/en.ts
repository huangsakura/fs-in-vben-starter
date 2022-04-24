import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/en_US';
// import momentLocale from 'moment/dist/locale/en-us';
// import momentLocale from 'moment/dist/locale/eu';
import enFsLocale from '@fast-crud/fast-crud/dist/locale/lang/en.js';

const modules = import.meta.globEager('./en/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'en'),
    antdLocale,
    fs: enFsLocale.fs, //fast-crud的i18n配置
  },
  dateLocale: null,
  dateLocaleName: 'en',
};
