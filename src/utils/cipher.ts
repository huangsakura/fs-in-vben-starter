import { encrypt, decrypt } from 'crypto-js/aes';
import { parse } from 'crypto-js/enc-utf8';
import pkcs7 from 'crypto-js/pad-pkcs7';
import ECB from 'crypto-js/mode-ecb';
import md5 from 'crypto-js/md5';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'crypto-js/sha256';
import { JSEncrypt } from 'jsencrypt';

export interface EncryptionParams {
  key: string;
  iv: string;
}

export class AesEncryption {
  private key;
  private iv;

  constructor(opt: Partial<EncryptionParams> = {}) {
    const { key, iv } = opt;
    if (key) {
      this.key = parse(key);
    }
    if (iv) {
      this.iv = parse(iv);
    }
  }

  get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    };
  }

  encryptByAES(cipherText: string) {
    return encrypt(cipherText, this.key, this.getOptions).toString();
  }

  decryptByAES(cipherText: string) {
    return decrypt(cipherText, this.key, this.getOptions).toString(UTF8);
  }
}

export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64);
}

export function decodeByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8);
}

export function encryptByMd5(password: string) {
  return md5(password).toString();
}

/**
 * sha256散列
 */
export function hashBySha256(password: string) {
  return sha256(password).toString();
}

/**
 * rsa加密
 */
export function encryptByRsa(value0: string): string {
  const encryptor = new JSEncrypt();
  const publicKey =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/FSNAuRuG5PbL4O1Eh4kXZcaftK4eWi84GIBJs+k/7Fpb9cQgQqyBAqD2nsRUSWtSE0OFWNmqYfOeBKQSGqPJEPrfaY2P5kq3Xev1byNc6MLrPBHMAiBQAiZq3acgDWoTD0F5G83XgJCnN2HM93Z4oOX8EUMIHiV5lz4wY3FBRQIDAQAB';
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(value0) || '';
}
