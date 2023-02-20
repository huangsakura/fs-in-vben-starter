import { defineStore } from 'pinia';
import { fetchCaptchaApi } from '/@/api/sys/captcha';
import { CaptchaRequest } from '/@/api/sys/model/captchaModel';

interface CaptchaState {
  captchaId: string | undefined;
}

export const useCaptchaStore = defineStore({
  id: 'app-captcha',
  state: (): CaptchaState => ({
    // 验证码id
    captchaId: undefined,
  }),
  actions: {
    async fetchCaptcha() {
      const param: CaptchaRequest = {
        captchaId: this.captchaId,
      };
      const data = await fetchCaptchaApi(param);
      const { base64, id } = data;
      this.captchaId = id;
      return base64;
    },
  },
});
