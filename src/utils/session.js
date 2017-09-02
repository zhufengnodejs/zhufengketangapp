/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
export default {
  set(key,value){
    switch(typeof value){
      case 'object':
        value = JSON.stringify(value);
        break;
      case 'number':
        value = ''+value;
        break;
    }
    sessionStorage.setItem(key,value);
  },
  get(key){
    let val = sessionStorage.getItem(key)||'';
    if(val.startsWith('{')||val.startsWith('[')){
      val = JSON.parse(val);
    }
    return val;
  }
}