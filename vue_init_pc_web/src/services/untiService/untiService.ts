import HttpService from "./../httpService/httpService"
 
export default class UntiService {
  constructor(public httpService:HttpService) {

  }
  dateFormat(date:any) {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  deepClone(source:any) {
    const targetObj:any = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
    for (let keys in source) { // 遍历目标
      if (source.hasOwnProperty(keys)) {
        if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
          targetObj[keys] = source[keys].constructor === Array ? [] : {};
          targetObj[keys] = this.deepClone(source[keys]);
        } else { // 如果不是，就直接赋值
          targetObj[keys] = source[keys];
        }
      }
    }
    return targetObj;
  };
  //去掉所有的html标记
  delHtmlTag(str:any) {
    return str.replace(/<[^>]+>/g, "");
  };

 /**
  * @name 逆地理定位
  * @param {经度} lng 
  * @param {纬度} lat 
  * @param {精度范围,默认值1000米} radius 
  */
  getRegeoByAmap(lng:String,lat:String,radius="1000") {


    let param:any = {
      key:"f62ba94f3cc29b4cf62ba6d8d931115b",
      location:`${lng},${lat}`,
      radius
    } 
   return  this.httpService.getReturn('https://restapi.amap.com/v3/geocode/regeo',param)
  }

  /**
   *@name 根据文本查询地理position 
   *@param {查询关键字}  keywords
   *@param {查询城市}  city 
   * 
   */
  //切换城市
  getAMapLngLat(keywords=""){
    let param:any = {
      key:"f62ba94f3cc29b4cf62ba6d8d931115b",
      keywords, 
    }
   return  this.httpService.getReturn('https://restapi.amap.com/v3/place/text',param)

    
  }
}
