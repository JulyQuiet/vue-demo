
import $http from './index';

//获取验证码 并  验证验证码
 export let getVerCode = (paramsChek) =>{
   paramsChek.GM_FUNC="LOGINSENDSMS";
  return $http.post("GM_INF_POST.v1/POST",paramsChek)
 };
//  //上传文件
// export let uploadFile = (par) =>{
//   let params = {};
//   params.GM_PARAM = par;
//   params.GM_FUNC = "UPLOADFILES";
//   return $http.post("GM_INF_POST.v1/POST",params)
// };

//头条信息发布
export let releaseHeadInfo = (paramsChek) =>{

  return $http.post("GM_INF_POST.v1/POST",paramsChek)
};
//头条导航菜单
export let getHeadineMenu = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//头条导航菜单修改
export let updataHeadineMenu = (paramsChek) =>{
  return $http.post("GM_INF_POST.v1/POST",paramsChek)
};
//头条列表
export let headLinList = (paramsChek) =>{

  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//查看头条列表详情
export let headLinDetail = (paramsChek) =>{
  paramsChek.GM_FUNC="HEADLINEDTL";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//查看头条列表详情
export let adddiscuss = (paramsChek) =>{

  return $http.post("GM_INF_POST.v1/POST",paramsChek)
};
//点赞or取消点赞
export let LIKEHeadLine = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//收藏 or 取消收藏
export let collectHeadLine = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//我的头条主页中的 所有数量集合
export let myHeadLineSum = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//撤销我发布的头条
export let cancelMyHeadLine = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//撤销我发布的头条
export let delectMyComment = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//我头条收藏的列表

//我的评论
export let myComment = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};

//头条评论列表
export let headLineConmentList = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};

//头条搜索
export let serchHeadLine = (paramsChek) =>{
  return $http.post("GM_INF_POST.v1/POST",paramsChek)
};
//热门头条
export let hotHeadLine = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};


//获取天气预报
export let getComment = (paramsChek) =>{
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};

//获取天气预报
export let getWeather = (paramsChek) =>{
  let city = {city:paramsChek};
  return $http.getwin("weather",city)
};



//  //上传文件
// export let uploadFile = (par) =>{
//   let params = {};
//   params.GM_PARAM = par;
//   params.GM_FUNC = "UPLOADFILES";
//   return $http.post("GM_INF_POST.v1/POST",params)
// };
//查看文件url
export let viewFiles = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "VIEWFILES";
  // 0000123201861416910swiper-4.2.6.min.css
  console.log(params);
  return $http.get("GM_INF_PKG_OP.v1",params)
};

 //获取用户信息
  export let getUserInfo = (paramsChek) =>{
    paramsChek.GM_FUNC="GETBASEINFO";
    return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
  };
//获取用户档案信息
export let getRecord = (paramsChek) =>{
  paramsChek.GM_FUNC="GETEMPLOYEEINFO";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//修改用户档案信息
export let changeRecord = (paramsChek) =>{
  paramsChek.GM_FUNC="UPDATAPERSONINFO";
  return $http.post("GM_INF_POST.v1/POST",paramsChek)

};
//下拉列表- 用户档案修改选择
export let selectType = (paramsChek) =>{
  paramsChek.GM_FUNC="GETTRANSLATEDESCR";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)

};

  //获取消息中最新消息
  export let selectNotifyTotal = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "SRCHNOTIFYTOTAL";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  }; //获取消息列表
  export let selectNotifyDetail = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "NOTIFYLISTDTL";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  }; //获取发现列表
  export let selectFIND = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "FINDLISTDTL ";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  };
  //获取发现详情
  export let getFindDetail = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "FINDINFODTL";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  };
  //获取薪酬的年份
  export let getSalaryYears = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "GETPAYTIME";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  };//获取薪资单数据
  export let getSalaryTotal = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "GETPAYLIST";
    return $http.post("GM_INF_POST.v1/POST",params)
  };
  //获取薪资单详细数据
  export let getSalaryDtl = (par) =>{
    let params = {};
    params.GM_PARAM = par;
    params.GM_FUNC = "GETPAYLISTDTL";
    return $http.get("GM_INF_PKG_OP.v1/",params)
  };

  //上传附件
  export let uploadFile = (par) =>{
    return $http.postFile('fileUpload',par)
  };//删除附件
  export let deleteFile = (par) =>{
    par.aceess_key = "TCG4M6QWIUL0LLL0Z3ZY";
    par.secret_key="5NJSOlxcECHA71MkE7mUAc3vuLUHkHonyTOdaEEd";
    par.url="bjgc3.gos.gomedc.com";
    par.strBucketType="gm-headline";
    return $http.postFile1('fileDelete',par)
  };

  //美创
//发布新任务时校验是否拥有集团级、公司级、部门级权限，用于控制发布权限
export let getTaskpage = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "CHECKTASKPAGE";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};

//发布任务
export let addTask = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SUBMITTASK ";
  return $http.post("GM_INF_POST.v1/POST",params)
};

//查询任务抢单列表
export let selectTaskIngList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "PUBLISHTASKLIST";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//搜索查询任务抢单列表
export let searchselectTaskIngList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SRCHPUBLISHLIST";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//查询任务筛选列表总数
export let getTaskFilter = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "PUBLISHTASKLVLTOTAL";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//查询我的任务列表
export let selectMyTaskList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "MYACCEPTTASKLIST";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//搜索查询我的任务列表
export let searchselectMyTaskList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SRCHMYACCEPTLIST";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//查询我的任务筛选列表总数
export let getMyTaskFilter = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "MYACCEPTTASKSTATOTAL";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//查询我的悬赏列表
export let selectMyRewardList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "MYPUBLISHTASKLIST";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//搜索查询我的悬赏列表
export let searchselectMyRewardList = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SRCHMYPUBLISHLIST";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//查询我的悬赏筛选列表总数
export let getMyRewardFilter = (par) =>{
  let params = {};
  params.GM_PARAM =par;
  params.GM_FUNC = "MYPUBLISHTASKSTATOTAL";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//按姓名查询通讯录
export let selectContacts = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "LOOKUPEMP";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//查询任务详情
export let getTaskDtl = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SRCHTASKDTL";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//抢单
export let taskRobbing = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "ACCEPTTASK";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//选标
export let chooseTaskTeam = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "CHOOSETASKTEAM";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//终止任务
export let finishTask = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "TERMINATETASK";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//申请验收
export let receivingTask = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "RECEIVINGTASK";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//验收评分
export let taskGradeFun = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "EXECTASKRSLT";
  console.log(params)
  return $http.post("GM_INF_POST.v1/POST",params)
};
//乙方评分
export let teamGrade = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "EXECMEMBERRSLT";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//检测是否存在敏感词
export let checkWord = (par) =>{
  return $http.postFile1("replaceWord",par)
};
//检测是否设置薪资查询密码
export let isSetPsw = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "IFSETPAYPASSWORD";
  return $http.post("GM_INF_POST.v1/POST",params)
};
//设置薪资查询密码
export let setPsw = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "SETPAYPASSWORD";
  return $http.post("GM_INF_POST.v1/POST",params)
};//验证薪资查询密码
export let checkPsw = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "CHECKPASSWORDINT";
  return $http.post("GM_INF_POST.v1/POST",params)
};//修改薪资查询密码
export let updatePsw = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "UPDATEPASSWORD";
  return $http.post("GM_INF_POST.v1/POST",params)
};

//
// export let getWeather = (cityName) =>{
//   return $http.get('http://api.map.baidu.com/telematics/v3/weather?location='+cityName+'&output=json&ak=E4805d16520de693a3fe707cdc962045')
// };

//提交意见反馈
export let toFeedback = (paramsChek) =>{
  return $http.post("GM_INF_POST.v1/POST",paramsChek)
};
//提交个人档案的意见反馈
export let feedbackByRecord = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC = "ADDSUGGESTINFO";
  return $http.post("GM_INF_POST.v1/POST",params)
};


//获取我的意见列表
export let getMySuggestion = (paramsChek) =>{
  paramsChek.GM_FUNC="GETMYSUGGESTION";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//获取员工姓名和身份证信息
export let getEmplInfo = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="GETEMPLINFO";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
//申请员工关爱
export let applyEmplCare= (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="APPLYEMPLCARE";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};//取消申请员工关爱
export let cancelApplyEmplCare= (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="CANCELEMPLCARE";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};//查询活水计划列表
export let gethslist= (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="GETPOSNLIST";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};//查询活水计划职务详情
export let getJobDtl= (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="GETPOSNDETAIL";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};//申请活水计划职务
export let applyPosn = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="APPLYPOSN";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};

//机器人回答
export let robotA = (paramsChek) =>{
  // paramsChek.GM_FUNC="GETMYSUGGESTION";
  return $http.postFile1("getBot",paramsChek)
};
//getHRDefaultQuestion

export let getHRDefaultQuestion = (paramsChek) =>{

  paramsChek.GM_FUNC="GETHRDEFAULTQUESTION";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
export let getHRRanomQuestion = (paramsChek) =>{
  paramsChek.GM_FUNC="GETHRRANOMQUESTION";
  return $http.get("GM_INF_PKG_OP.v1/",paramsChek)
};
//员工关爱 平安保险详情埋点
export let pinganPointer = (par) =>{
  let params = {};
  params.GM_PARAM = par;
  params.GM_FUNC="GETEMPLCAREBROWSENUMBER";
  return $http.get("GM_INF_PKG_OP.v1/",params)
};
