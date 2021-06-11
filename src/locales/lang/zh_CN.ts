import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import momentLocale from 'moment/dist/locale/zh-cn';
import zhFsLocale from '@fast-crud/fast-crud/dist/locale/lang/zh-cn.js';

const modules = import.meta.globEager('./zh_CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh_CN'),
    antdLocale,
    fs: zhFsLocale.fs, //fast-crud的i18n配置
  },
  momentLocale,
  momentLocaleName: 'zh-cn',
};
