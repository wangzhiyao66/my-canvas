// import { LoadingService } from './app/shared/service';
declare const $;
export class LenovoPublic {
  timeoutCollect = {}; // 定义全局的延时器------以便于管理
  publicSetTimeout(timeoutParam, time, callback) {
    this.timeoutCollect[timeoutParam] = setTimeout(() => {
      // tslint:disable-next-line:no-unused-expression
      callback && callback();
    }, time);
  }
  // 清除延时器
  publicClearTimeout(timeoutParam) {
    if (timeoutParam === 'all') {
      // tslint:disable-next-line:forin
      for (const mm in this.timeoutCollect) {
        clearTimeout(this.timeoutCollect[mm]);
      }
    } else {
      clearTimeout(this.timeoutCollect[timeoutParam]);
    }
  }

  constructor(
    // public loadingService: LoadingService
  ) { }
  public trim(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }

  // 判断是否相等，基本的比较操作
  isEquals(a, b, type) {
    let isEquals = false;
    switch (type) {
      case '===':
        isEquals = a === b ? true : false;
        break;
      case '==':
        // tslint:disable-next-line:triple-equals
        isEquals = a == b ? true : false;
        break;
      case '>':
        isEquals = a > b ? true : false;
        break;
      case '<':
        isEquals = a < b ? true : false;
        break;
      case '>=':
        isEquals = a >= b ? true : false;
        break;
      case '<=':
        isEquals = a <= b ? true : false;
        break;
      default:
        isEquals = false;
    }
    return isEquals;
  }


  // 动态设置css样式
  setCss(ele, styleObj) {
    if (!ele) {
      console.log('当前元素不存在');
      return;
    }
    if (styleObj.empty) {
      // tslint:disable-next-line: no-string-literal
      ele['style'] = '';
      return;
    }

    // 如果是一个数组，那么给所有元素添加样式
    if (this.isArray(ele)) {
      ele.map(x => {
        for (const [key, value] of Object.entries(styleObj)) {
          // tslint:disable-next-line:no-string-literal
          x['style'][key] = value;
        }
      });
      return;
    }
    // 如果不是一个数组，那么单独给元素添加样式
    for (const [key, value] of Object.entries(styleObj)) {
      // tslint:disable-next-line: no-string-literal
      ele['style'][key] = value;
    }
  }

  /**
   * 获取当前元素的某一个样式
   * @param ele 1
   * @param singleStyle 1
   */
  getStyle(ele, singleStyle) {
    return ele.currentStyle ? ele.currentStyle[singleStyle] : getComputedStyle(ele, null)[singleStyle];
  }

  /**
   * @param ele 当前dom元素
   * @param parent 查找的父级元素
   */
  getParentEle(ele, parent) {
    if (parent.indexOf('.') !== -1 && ele.parentElement.className.indexOf(parent) !== -1) {
      return ele.parentElement;
    } else if (parent.indexOf('#') !== -1 && ele.parentElement.id === parent) {
      return ele.parentElement;
    } else if (ele.parentElement.tagName === parent.toUpperCase()) {
      return ele.parentElement;
    }
    if (ele.tagName === 'BODY') {
      alert('zhaobudao');
      return;
    }
    // console.log(ele, parent, ele.parentElement);
    return this.getParentEle(ele.parentElement, parent);
  }

  // 设置保留小数位数，看小数位数是不是大于要保存的小数位数，如果大于则保存，如果小于，直接返回  isPercentage 是否需要转换成百分比
  /**
   * @param param0 value 值
   * @param param0 num 小数保留位数
   * @param param0 param 要修改的参数
   * @param param0 isPercentage 是否需要乘100
   * @param param0 force 是否需要强制转换乘带小数的,即如果是整数或小数位数不足以保存那么多小数以0补足小数
   */
  toFixedNum({ value, num, param, isPercentage, force }) {
    let result = 0;
    if (isPercentage) {
      value = value * 100;
    }
    if (!force) {
      if (String(value).indexOf('.') !== -1) {
        const [integer, floatNum] = [String(value).split('.')[0], String(value).split('.')[1]];
        if (Number(num) > String(floatNum).length) {
          result = value;
        } else {
          if (value || value === 0) {
            result = Number(Number(value).toFixed(num));
          }
        }
      } else {
        result = Number(value);
      }
    } else {
      result = Number(Number(value).toFixed(num));
    }

    if (param) {
      this[param] = result;
    }
    return String(result);
  }

  isArray(param) {
    return Object.prototype.toString.apply(param) === '[object Array]';
  }
  isUndefined(param) {
    return Object.prototype.toString.apply(param) === '[object Undefined]';
  }
  isString(param) {
    return Object.prototype.toString.apply(param) === '[object String]';
  }
  isObject(param) {
    return Object.prototype.toString.apply(param) === '[object Object]';
  }
  isBoolean(param) {
    return Object.prototype.toString.apply(param) === '[object Boolean]';
  }
  isNumber(param) {
    return Object.prototype.toString.apply(param) === '[object Number]';
  }
  isNull(param) {
    return Object.prototype.toString.apply(param) === '[object Null]';
  }
  isDate(param) {
    return Object.prototype.toString.apply(param) === '[object Date]';
  }
  // 是否是多个类型中的一个，例如当前参数是否属于null或者undefined
  isSomeType(type: string[], param) {
    return type.some(x => this[x](param));
  }

  /**
   * 求和
   * @param argument 求和的所有参数
   */
  public getSum() {
    return Array.from(arguments).reduce(function (preValue, curValue, index, array) {
      console.log(parseInt(preValue, 10), parseInt(curValue, 10));
      return parseInt(preValue, 10) + parseInt(curValue, 10);
    });
  }

  /**
   * 求差值
   * @param argument 求差值的所有参数
   */
  public getDifferenceVal() {
    return Array.from(arguments).reduce(function (preValue, curValue, index, array) {
      console.log(parseInt(preValue, 10), parseInt(curValue, 10));
      return parseInt(preValue, 10) - parseInt(curValue, 10);
    });
  }

  // 是否显示loading
  public isShowGetJsonLoading(isShow?) {
    // isShow ? this.loadingService.showLoading() : this.loadingService.hideLoading();
  }

  // 获取到当前路由
  public getCurRoute() {
    return window.location.hash;
  }

  /**
   * @param callback 选择文件成功后的回调函数
   * @param vm this指向，用于保存当前上传文件的文件详细信息
   */
  public getFile(callback, vm) {
    vm.files = [];
    vm.files.length = 0;

    const ipt = document.createElement('input');
    ipt.accept = '.xlsx,.xls';

    ipt.id = 'uploadFileOnlyId';
    ipt.title = '';
    ipt.type = 'file';
    ipt.name = 'file';
    document.body.appendChild(ipt);

    ipt.click();
    const that = this;
    ipt.onchange = function () {
      // tslint:disable-next-line: no-string-literal
      that.selfLog2(() => console.log(this, this['files'][0]));
      // tslint:disable-next-line: no-string-literal
      vm.fileList.push(this['files'][0]);
      // console.log(vm.fileList);
      // tslint:disable-next-line:no-unused-expression
      callback && callback(vm);
      setTimeout(() => {
        document.body.removeChild(document.getElementById('#uploadFileOnlyId'));
      }, 10000000);
    };
    this.selfLog2(() => console.log(vm.fileList));
  }

  // 格式化日期为字符串格式
  public formatDateToString(date) {
    // console.log(date);
    if (!date) {
      return;
    }
    if (this.isDate(date)) {
      const time = date ? new Date(date) : new Date();
      // tslint:disable-next-line: max-line-length
      const year = String(time.getFullYear()), month = (time.getMonth() + 1) < 10 ? '0' + String((time.getMonth() + 1)) : String((time.getMonth() + 1)), day = time.getDate() < 10 ? '0' + String(time.getDate()) : String(time.getDate());
      return year + '-' + month + '-' + day;
    } else {
      console.warn('当前不是日期格式', date);
      if (date.indexOf('/') !== -1 || date.indexOf('.') !== -1) {
        return date.replace(/\/|\./g, '-');
      } else {
        console.warn('当前格式不匹配');
        return date;
      }
    }
  }

  // 根据字符串的日期格式拆分成单独的年月日
  public getYearMonthDate(data: string) {
    // console.log(data);
    // tslint:disable-next-line:one-variable-per-declaration
    let year, month, date;
    // if (month <= 0) {
    //     month = 12;
    //     year = year - 1;
    // }
    if (data.length >= 10) {
      year = data.split('-')[0];
      month = data.split('-')[1];
      date = data.split('-')[2];
    } else if (data.length === 7) {
      year = data.split('-')[0];
      month = data.split('-')[1];
    }
    return {
      year: Number(year), month: Number(month), date: Number(date)
    };
  }

  // 组合字符串格式的时间
  public joinYearMonthDate(year, month, date) {
    // console.log(year, month, date);
    if (month <= 0) {
      // console.log('%c 小于0', 'color:#bada55;font-size:18px;');
      month = 12 - Math.abs(month);
      year = year - 1;
    } else if (month > 12) {
      month = month - 12;
      year = year + Math.ceil(month / 12);
    }

    year = String(year);
    month = month < 10 ? '0' + month : String(month);
    if (date) {
      date = date < 10 ? '0' + date : String(date);
      return [year, month, date].join('-');
    } else {
      return [year, month].join('-');
    }
  }


  // tslint:disable-next-line:member-ordering
  isAllowLog = false; // 是否开始log打印
  // lenovoPublic.selfLog2(() => console.log('asdlfkajsd'));
  selfLog2(callback) {
    if (this.isAllowLog) {
      // tslint:disable-next-line:no-unused-expression
      callback && callback();
    }
  }

  // 获取hash值
  public urlHash() {
    return window.location.hash;
  }

  // 判断当前是AI预测还是人工预测还是单组预测
  public curAIOrHumanOrSingle() {
    const obj = {
      singlePrediction: 'singlePrediction',
      batchPrediction: 'singlePrediction',
      AIPrediction: 'AIPrediction',
      humanPrediction: 'humanPrediction',
    };
    return obj[this.urlHash().split('#')[1].split('/')[1]] || undefined;
  }

  // 添加时进行查找是否存在相同的pn
  pnListIsRepeat(param, obj) {
    // this.selfLog2(() => console.log(param, obj));
    return param.some((item) => {
      // 如果是添加新的组则不用判断id，如果是在对比组中点击完成按钮时，则需要通过id过滤到当前项，用于判断多个组中是否相等
      // tslint:disable-next-line: max-line-length
      return ((obj.id && item.id && obj.id !== item.id) || (!obj.id)) && item['pnList'] && obj['pnList'] && item['pnList'].length !== 0 && obj['pnList'].length !== 0 && item['pnList'].sort().toString() === obj['pnList'].sort().toString();
    });
  }

  // 执行某个操作时查找自身数组是否存在相同的pn，用于判断一个组的pn号是否存在相同的
  findSelfPnListIsRepeat(array) {
    let result = false;
    let equal = 0;
    for (let i = 0; i < array.length; i++) {
      if (array.some((item, itemIndex) => {
        if (itemIndex !== i) {
          // tslint:disable-next-line: max-line-length
          return item['pnList'] && item['pnList'].length !== 0 && array[i]['pnList'].length !== 0 && item['pnList'].sort().toString() === array[i]['pnList'].sort().toString();
        }
      })) {
        result = true;
        equal++;
        break;
      }
    }
    return result;
  }
}
