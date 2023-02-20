export interface CaptchaResponse {
  base64: string;
  id: string;
}

export interface CaptchaRequest {
  captchaId: string | undefined;
}
