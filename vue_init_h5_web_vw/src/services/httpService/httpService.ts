import {
  SERVICE_URL
} from "../contants/contants";
import axios from "axios";

export default class HttpService {
  /**
   * @name get请求方法类型普通@Content-type 是json
   * @param {url} url 
   * @param {body} 一个对象 
   */
  get(url:string, body:any = null) {
    // debugger
    // 如果为空,证明在查找全部列表
    if (Object.keys(body).length == 0) {
      return axios.get(SERVICE_URL + url)
      // 如果不为空,证明正在请求一个固定有效的资源
    } else if (Object.keys(body).length !== 0) {
      let urlParam = null;
      if (body["id"] != undefined || body["id"] != null) {
        // let urlParam = null;
        for (let key in body) {
          urlParam = body[key]
        }
        return axios.get(`${SERVICE_URL}${url}/${urlParam}`)
      } else {

        return axios.get(SERVICE_URL + url, {
          params: body
        })
      }
    }
  }
  /**
   *@name post请求方法  类型 普通 
   *@Content-type json
   *@param {url} url
   *@param {body} 一个对象
   */
  post(url:string, body:any) {
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return axios.post(SERVICE_URL + url, body, config)
  };
  /**
   *@name post表单请求 类型 表单
   *@Content-Type multipart/form-data
   *@param {url} 地址
   *@param {body} 一个表单对象,会自动进行混入formData
   */
  postFormData(url:string, body:any) {
    // body = this.formatBody(body);
    let formData = new FormData();

    // 混入表单对象对象
    for (let key in body) {
      formData.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    return axios.post(SERVICE_URL + url, formData, config)
  };
  /**
   *@name post字符编码模式请求 类型 x-www-form-urlencoded 
   *@Content-Type x-www-form-urlencoded
   *@param {url} 地址
   *@param {body} 一个参数对象
   */
  postXWwwFormUrlEncoded(url:string, body:any) {
    // 格式化参数,防止缓存
    // body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new URLSearchParams();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json;charset=utf-8',
      }
    };
    return axios.post(SERVICE_URL + url, urlSearchParams, config)
  }
  /**
   *@name put请求, 类型 普通 和post的x-www-form-urlencoded是一样的
   *@param url 地址
   *@param body 参数
   */
  put(url:string, body:any) {
    // body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new FormData();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        //   // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        //   // 'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'multipart/form-data'
      }
    };
    return axios.put(SERVICE_URL + url, urlSearchParams, config)
  }
  /**
   * @name delete方式请求删除资源,和get的使用方式是一样的,
   * @param {*} url 
   * @param {*} body 
   */
  delete(url:string, body:any = null) {
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json;charset=utf-8',
      }
    };
    if (Object.keys(body).length == 0) {
      console.error("delete请求需要参数");
    } else {
      let urlParam = "";
      let bodyKey = "";
      for (let key in body) {
        // bodyKey.push(key);
        bodyKey = key
        urlParam += `${key}=${body[key]}`;

      }
      // 等于id则是单个删除
      switch (bodyKey) {
        case "id":
          urlParam = urlParam.replace(/=|&|id/ig, '');
          break;
        case "ids":
          urlParam = `?${urlParam}`
          break;
      }
      return axios.delete(`${SERVICE_URL}${url}/${urlParam}`);
    }
  }
  // 判断是不是对象
  isObj(obj:any) {
    for (let item in obj) {
      return true;
    }
    return false;
  }


  /**************************这里都是一些特殊处理的HTTP请求****************************************************/
  getReturn(url:string, body:any = null) {
    return axios.get( url, {
      params: body
    });
  }
}

 