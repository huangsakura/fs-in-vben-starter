import { defHttp } from '/@/utils/http/axios';
import { CaptchaResponse, CaptchaRequest } from './model/captchaModel';

export function fetchCaptchaApi(params: CaptchaRequest) {
  return defHttp.get<CaptchaResponse>({ url: '/api/open/captcha', params });
}
