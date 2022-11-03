export function convertToCurrency(
  value: number,
  option = { format: 'en-US', currency: 'USD' },
): string {
  return value.toLocaleString(option.format, { style: 'currency', currency: option.currency });
}

export function convertMonthToWord(month: number): string {
  if (month >= 1 && month <= 12) {
    const words = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return words[month - 1];
  }
  return '';
}

export function formatVie(str: string): string {
  if (str) {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    // some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    // remove special characters
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // remove whitespace and replace it with the character -
    str = str.replace(/(\s+)/g, '-');
    // remove part - at the beginning
    str = str.replace(/^-+/g, '');
    // remove residual - at the end
    str = str.replace(/-+$/g, '');
    // remove extra spaces
    str = str.trim();
    return str;
  }
  return '';
}
