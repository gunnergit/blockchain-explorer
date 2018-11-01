import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from './locale';

/**
 * 将时期国际化
 * @param(dateInstance :date) Date对象实例
 * @returns { year, month, day, hour, min, sec } 属性皆为数值
 */
const transformDate = (dateInstance, locale) => {
  if (!dateInstance instanceof Date)
    throw new TypeError('参数应为一个Date实例');
  // const year = dateInstance.getUTCFullYear();
  // const month = dateInstance.getUTCMonth()+1;
  // const date = dateInstance.getUTCDate();
  // const hour = dateInstance.getUTCHours()+1;
  // const min = dateInstance.getUTCMinutes();
  // const sec = dateInstance.getUTCSeconds();
  const value = dateInstance.toLocaleString(locale);
  return {
    value
  };
};

/**
 * @prop:(locale: string, id:string || array, variable: object) 本地的locale值和配置文件中的标识名,需要被格式化的数据
 */
const IntlFormat = ({ locale, id, type }, value) => {
  let val = null;
  let query = null;
  if (Array.isArray(id)) {
    query = MESSAGES[locale];
    id.forEach(key => {
      if (!query) return console.log('The key before ' + key + ' is not exist');
      query = query[key];
    });
  } else {
    query = MESSAGES[locale][id];
  }
  query = query || MESSAGES.default;
  const myFormat = new IntlMessageFormat(query, locale);
  switch (type) {
    case 'number':
      break;
    case 'date':
      val = transformDate(value, locale);
      break;
    case 'currency':
      break;
    default:
      val = { value };
      break;
  }
  return myFormat.format(val);
};

export default IntlFormat;
