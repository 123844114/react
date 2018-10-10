/**
 * 自定义验证函数
 * funtion(value): string
 * 返回空字符串代表验证成功， 返回不为字符串为错误信息
*/
export const required = (label, msg) => value => (!value ? (msg || `请输入${label}`) : '');

export const email = (value) => {
  const reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(value) ? '' : '输入正确email格式';
};

/**
 * formik本身没有提供基于字段的多个验证函数的方式
 * chain函数的作用为串联多个验证函数
 * 用法:
 * chain(validator1, validator2, ...)
*/
export const chain = (...validators) => (value) => {
  for (let i = 0; i < validators.length; i++) {
    const error = validators[i](value);
    if (error) {
      return error;
    }
  }
  return '';
};
