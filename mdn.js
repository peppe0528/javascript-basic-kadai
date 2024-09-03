const today = new Date();

const year = today.getFullYear();

const month = today.getMonth() + 1;

const day = today.getDate();

//算術演算子+文字列を使って日本語に表記する
console.log(year + '年' + month + '月' + day + '日');