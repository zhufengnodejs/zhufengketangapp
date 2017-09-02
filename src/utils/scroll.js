/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
export default function (element, callback,top) {
  let listener = () => {
    let contentHeight = element.scrollHeight;
    let scrollTop = element.scrollTop;
    let screenHeight = element.offsetHeight;
    if (scrollTop + screenHeight + 10 > contentHeight) {
      callback();
    }
  }
  let timer;
  element.addEventListener('scroll', event => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(listener, 500);
  });
  element.scrollTop = top;
}