# NEN小程序数据接口文档

_日期：2019-04-08_
## 接口说明

### 用户信息录入
`保存、更新用户信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/setUserInfo`
#### 请求地址示例
http://localhost:3000/api/v1/setUserInfo
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
setUserInfo| 接口名称

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
code | String | code（用于获取用户的openId等信息）
nickName | String | 昵称
avatarUrl | String | 头像
gender | String | 性别
city | String | 所在城市
province | String | 所在省份
country | String | 所在国家

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
userInfo | Object | 用户信息（openid，昵称，头像等基本信息及业余相关信息）

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"错误信息提示",
  "user":{
    "id":17,
    "open_id":"ofgCK5Sj_bND4ondm5y2Tx_4QTzk",
    "avatarUrl":"https头像地址",
    "nick_name":"亦余心之所善兮",
    "gender":"1",
    "city":"西安",
    "province":"陕西",
    "country":"中国"
  }
}
```

### 首页顶部banner轮播图获取
`获取图片地址`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getBannerList`
#### 请求地址示例
http://localhost:3000/api/v1/getBannerList
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
bannerList | Array | 图片地址列表

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "bannerList":[
    {"img":"https地址", "id": "1"},
    {"img":"https地址", "id": "1"},
  ]
}
```


### 首页专家推荐展示
`获取三个推荐医师的信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsList`
#### 请求地址示例
http://localhost:3000/api/v1/getDoctorsList
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
doctorsList | Array | 医师列表

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "doctorsList":[
    {'id': '1', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
    {'id': '1', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
  ]
}
```

### 首页专家推荐展示
`获取三个推荐医师的信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsList`
#### 请求地址示例
http://localhost:3000/api/v1/getDoctorsList
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
doctorsList | Array | 医师列表

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "doctorsList":[
    {'id': '1', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
    {'id': '1', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
  ]
}
```

### 专家列表页展示
`获取诊所各个科室的医师`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsListAll`
#### 请求地址示例
http://localhost:3000/api/v1/getDoctorsListAll
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
departmentListAll | Array | 医师列表

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "departmentListAll":[
    {
      'departmentName': '科室1',
        'departmentList': [
          {'id': '10', 'name': '杨泽方', 'expertOffice': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
          {'id': '10', 'name': '杨泽方', 'expertOffice': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
      ]
    },
    {
      'departmentName': '科室1',
        'departmentList': [
          {'id': '10', 'name': '杨泽方', 'expertOffice': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
          {'id': '10', 'name': '杨泽方', 'expertOffice': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
      ]
    }
  ],
  "pageNum": {
    "previousPage": "上一页地址（http://localhost:3000/api/v1/getDoctorsListAll?clinicid=2）"
    "nextPage": "下一页地址（http://localhost:3000/api/v1/getDoctorsListAll?clinicid=4）"
  }
}
```

### 获取医师详情
`获取医师信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsInfo`
#### 请求地址示例
http://localhost:3000/api/v1/getDoctorsInfo
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID
doctorsId | String | 医师ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | Object | 错误提示信息
doctorsInfo | Array | 医师 信息

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "doctorsInfo":[
    {
      'id': '11',
      'name': '杨泽方',
      'info': '主治医师·从业18年',
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'description': '儿科主治医师，18年儿科执行经验，云诊室参与者，国内权威医药生物专业论坛担任专业儿科版主及资深论坛管理员，致力于全科医学及儿科健康管理新模式的不断探索。',
      'department': ['儿科', '儿科', '儿科', '儿科', '儿科', '儿科']
    }
  ]
}
```

### 获取诊所科室列表
`获取诊所科室列表--数量不限制，包含所有`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDepartmentList`
#### 请求地址示例
http://localhost:3000/api/v1/getDepartmentList
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
departmentList | Array | 科室列表
id | String | 科室ID
name | String | 科室名称
selected | int | 是否选中显示 1-显示 0-不显示

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "departmentList":[
    {'id': '11', 'name': '儿科', 'selected': 1},
    {'id': '11', 'name': '儿科', 'selected': 1},
    {'id': '11', 'name': '儿科', 'selected': 1}
  ]
}
```

### 获取诊所科室详情
`获取诊所科室详情`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDepartmentInfo`
#### 请求地址示例
http://localhost:3000/api/v1/getDepartmentInfo
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
departmentInfo | Object | 科室详情
description | String | 科室描述信息
#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "departmentInfo":{
    'description': '描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
  }
}
```

### 获取文章列表
`获取文章列表--三条`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getArticleList`
#### 请求地址示例
http://localhost:3000/api/v1/getArticleList
#### 请求路径说明

#### 请求参数说明
参数名  |  数据类型 | 参数说明
-----  | -------- | --------
clinicId | String | 诊所ID

#### 返回参数说明

参数名  | 返回值类型 | 参数说明 |
------ | ------ | ----------
result | String | 操作结果
errcode | int | 错误状态码
errmsg | String | 错误提示信息
articleList | Array | 文章列表
id | String | 文章ID
name | String | 文章名
views | int | 浏览量
department | String | 文章内容

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "departmentList":[
    {
      'id': '11',
      'name': '文章名',
      'views': 300
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    }
  ]
}
```
## 更新日志
时间      | 操作人 | 详情
-----     | ----- | ----
2019-04-14  | LuoW  | bosaInfo,deviceInfo,labelInfo表的数据写入和读取的接口更新
