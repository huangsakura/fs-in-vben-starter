/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  captcha: string;
  captchaId: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  // userId: string | number;
  token: string;
  // role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // roles: RoleInfo[];
  roleIds: number[];
  // 用户id
  // userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  name: string;
  // 头像
  avatar?: string;
  // 手机号
  phoneNo?: string;
  // 邮箱
  email?: string;
  // 介绍
  // desc?: string;
}
