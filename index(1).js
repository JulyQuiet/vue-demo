import axios from 'axios'
import qs from 'qs'
 import store from './../vuex/index.js';
import { AlertModule } from 'vux'


axios.defaults.withCredentials = true;

// 发送时
axios.interceptors.request.use(config => {
  // 开始
  return config
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        AlertModule.show({
          content: "请求错误",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 401:

        AlertModule.show({
          content: "未授权，请登录",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 403:
        AlertModule.show({
          content: "拒绝访问",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });

        break;

      case 404:

        AlertModule.show({
          content: "请求地址出错",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 408:

        AlertModule.show({
          content: "请求超时",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 500:
        AlertModule.show({
          content: "服务器内部错误",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 501:
        AlertModule.show({
          content: "服务未实现",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });

        break;

      case 502:
        AlertModule.show({
          content: "网关错误",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });
        break;

      case 503:
        AlertModule.show({
          content: "服务不可用",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });

        break;

      case 504:
        AlertModule.show({
          content: "网关超时",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });

        break;

      case 505:
        AlertModule.show({
          content: "HTTP版本不受支持",
          onHide () {
            window.location.href = 'index.html#/login';
          }
        });

        break;

      default:
    }
  }
  return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(response => {

    return response
}, err =>{
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            AlertModule.show({
              content: "请求错误",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 401:

            AlertModule.show({
              content: "未授权，请登录",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 403:
            AlertModule.show({
              content: "拒绝访问",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });

            break;

          case 404:

            AlertModule.show({
              content: "请求地址出错",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 408:

            AlertModule.show({
              content: "请求超时",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 500:
            AlertModule.show({
              content: "服务器内部错误",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 501:
            AlertModule.show({
              content: "服务未实现",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });

            break;

          case 502:
            AlertModule.show({
              content: "网关错误",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });
            break;

          case 503:
            AlertModule.show({
              content: "服务不可用",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });

            break;

          case 504:
            AlertModule.show({
              content: "网关超时",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });

            break;

          case 505:
            AlertModule.show({
              content: "HTTP版本不受支持",
              onHide () {
                window.location.href = 'index.html#/login';
              }
            });

            break;

          default:
        }
      }
      return Promise.reject(err.response)
})

// 检查状态码
function checkStatus(res) {
  let data;
  if(res.data["GM_INF_PKG_RESPONSE"]){
    data = JSON.parse(res.data.GM_INF_PKG_RESPONSE["GM_RESPONSE"]);
  }else if(res.data["REST_POST_RSP"]){
    data = JSON.parse(res.data.REST_POST_RSP["GM_RESPONSE"]);
  };
  if(data){
    if(data["msg_code"]==9){
      alert(data.msg_txt);
      window.location.href = 'index.html#/login';
    }
  };


  store.commit('updateLoadingStatus', {isLoading: false})
  // 结束
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  };
  return res
}


// 检查CODE值
function checkCode(res) {
  store.commit('updateLoadingStatus', {isLoading: false})
  if (res.code === 0) {
    throw new Error(res.msg)
  }

  return res
}

var dev = false;
var baseURL = '';
var URL = '';
var href = window.location.href;
if (process.env.NODE_ENV === "development") {
  dev = true;

  // store.commit('updateDev', {dev: true});
  let api = process.env.API_HOST;
  baseURL = `${api}PSIGW/RESTListeningConnector/PSFT_HR/`;
  console.log(baseURL,api);
} else {
  let index = href.lastIndexOf("ehrApp");
  href = href.substring(0, index);
  console.log(" http://" + href)
  console.log(href);
  const ps_httpstr = 'http://10.115.106.5:8000/';
  baseURL = ps_httpstr + `PSIGW/RESTListeningConnector/PSFT_HR/`;
  let httpstr = href;
  URL = httpstr + `ehrApp/EhrService`;
  console.log(baseURL)
}


// 备用路径

// const baseURL = 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/'
// const baseURL = 'https://easy-mock.com/mock/5a6fe597a52f145df7e8a38a/apis/'
export default {
  getwin(url,params){
    return axios({
      method: 'get',
      url: baseURL + url,
      params,
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  get(url, params1) {
    if(params1.GM_FUNC != 'CHECKTASKPAGE'&&params1.GM_FUNC != 'PUBLISHTASKLVLTOTAL'&&params1.GM_FUNC != 'MYACCEPTTASKSTATOTAL'&&params1.GM_FUNC != 'MYPUBLISHTASKSTATOTAL'){
    store.commit('updateLoadingStatus', {isLoading: true});
    }
    const TOKEN = localStorage.getItem('token');
    console.log(TOKEN);
    if (params1.GM_FUNC != 'LOGINSENDSMS' && params1.GM_FUNC != 'GET_USERAUTH') {
      if (TOKEN!='undefined'&& TOKEN!=''&& TOKEN != null) {
        params1.GM_PARAM.TOKEN = TOKEN
      } else {
        params1.GM_PARAM.TOKEN = '';
       window.location.href = 'index.html#/login';
      }
    }
    if (dev) {
      let GM_ID = {GM_ID: {"GM_ID": "APP"}};
      let GM_FUNC = {"GM_FUNC": {"GM_FUNC": params1.GM_FUNC}};
      let GM_PARAM = {"GM_PARAM": {"GM_PARAM": params1.GM_PARAM}};
      let params = {...GM_ID, ...GM_FUNC, ...GM_PARAM};
      if (!url) return;
      return axios({
        method: 'get',
        url: baseURL + url,
        params,
        timeout: 30000
      }).then(checkStatus).then(checkCode)
    } else {
      let obj = {};
      let GM_ID = {"GM_ID": "APP"};
      let GM_FUNC = {"GM_FUNC": params1.GM_FUNC};
      let GM_PARAM = {"GM_PARAM": params1.GM_PARAM};
      // let params = {...GM_ID,...GM_FUNC,...GM_PARAM};
      GM_ID = JSON.stringify(GM_ID);
      GM_FUNC = JSON.stringify(GM_FUNC);
      GM_PARAM = JSON.stringify(GM_PARAM);
      let paramsStr = '?GM_ID=' + GM_ID + '&GM_FUNC=' + GM_FUNC + '&GM_PARAM=' + GM_PARAM;
      obj.GM_ID = paramsStr;
      obj.strURL = baseURL + url;
      console.log('params', obj);
      if (!url) return;
      return axios({
        method: 'get',
        url: URL,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        params: obj,
        timeout: 30000
      }).then(checkStatus).then(checkCode)
    }

  },
  post(url, params1) {
    if (!url) return;
    const TOKEN = localStorage.getItem('token');
    console.log(TOKEN);
    if (params1.GM_FUNC != 'LOGINSENDSMS' && params1.GM_FUNC != 'GET_USERAUTH') {
      if (TOKEN!='undefined'&& TOKEN!=''&& TOKEN != null) {
        params1.GM_PARAM.TOKEN = TOKEN
      } else {
        params1.GM_PARAM.TOKEN = '';
        window.location.href = 'index.html#/login';

        // this.$router.push({
        //   path:'/login'
        // })
      }
    }
    store.commit('updateLoadingStatus', {isLoading: true});
    let GM_ID = {GM_ID: "APP"};
    let GM_FUNC = {GM_FUNC: params1.GM_FUNC};
    let GM_PARAM = {GM_PARAM: params1.GM_PARAM};
    let GM_URL = {GM_URL: baseURL + url};
    let data = {...GM_ID, ...GM_FUNC, ...GM_PARAM};
    let obj = {};
    obj.params = data;
    obj.strURL = baseURL + url;
    if (dev) {
      return axios({
        method: 'post',
        url: baseURL + url,
        /*qs.stringify(data)*/
        data: data,
        timeout: 30000
      }).then(checkStatus).then(checkCode)
    } else {
      return axios({
        method: 'post',
        url: URL,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        /*qs.stringify(data)*/
        data: obj,
        timeout: 30000
      }).then(checkStatus).then(checkCode)
    }
  },
  postFile(url,par) {
    // par.aceess_key = "TCG4M6QWIUL0LLL0Z3ZY";
    // par.secret_key = "5NJSOlxcECHA71MkE7mUAc3vuLUHkHonyTOdaEEd";
    // par.url = "bjgc3.gos.gomedc.com";
    let URL = href + `ehrApp/` + url;
    console.log('上传入参', par, URL);
    return axios({
      method: 'post',
      url: URL,
      data:par,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
    }).then(checkStatus).then(checkCode)
  },
  postFile1(url,par) {
    let URL = href + `ehrApp/` + url;
    // let URL = "http://10.115.106.5:8100/ehrApp/getBot";

    console.log('上传入参', par, URL);
    return axios({
      method: 'post',
      url: URL,
      data:par,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }).then(checkStatus).then(checkCode)
  },

}

