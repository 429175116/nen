# NEN小程序数据接口文档

_日期：2019-04-08_
## 接口说明

### 用户信息录入
`保存、更新用户信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/setUserInfo`
#### 请求地址示例
https://localhost:3000/api/v1/setUserInfo
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
id | String | 用户ID
openId | String | 该小程序中用户绝对唯一的ID--通过code获得
nickName | String | 昵称
avatarUrl | String | 头像
gender | String | 性别
city | String | 所在城市
province | String | 所在省份
country | String | 所在国家

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
    ···业务相关信息
  }
}
```

### 获取诊所信息
`获取诊所信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getClinicInfo`
#### 请求地址示例
https://localhost:3000/api/v1/getClinicInfo
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getClinicInfo | 接口名称

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
clinicInfo | Object | 诊所信息（基本信息及业余相关信息）
id | String | 诊所ID
name | String | 诊所名称
address | String | 诊所地址
mobile | String | 联系电话
longitude | String | 经度
latitude | String | 纬度

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"错误信息提示",
  "clinicInfo":{
    "id":17,
    "name":"诊所名称",
    "address":"诊所地址",
    "mobile":"18888888888",
    "longitude":"经度",
    "latitude":"纬度"
  }
}
```

### 首页顶部banner轮播图获取
`获取图片地址`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getBannerList`
#### 请求地址示例
https://localhost:3000/api/v1/getBannerList
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getBannerList | 接口名称

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
    "https地址",
    "https地址"
  ]
}
```


### 首页专家推荐展示
`获取三个推荐医师的信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsList`
#### 请求地址示例
https://localhost:3000/api/v1/getDoctorsList
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getDoctorsList | 接口名称

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
id | String | 医师ID
name | String | 医师名称
position | String | 医师职位
img | String | 医师头像

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
https://localhost:3000/api/v1/getDoctorsListAll
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getDoctorsListAll | 接口名称

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
pageNum | Object | 列表翻页信息
previousPage | String | 上一页地址
nextPage | String | 下一页地址
departmentListAll | Array | 医师列表
id | String | 医师ID
name | String | 医师名称
position | String | 医师职位
img | String | 医师头像

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
          {'id': '10', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
          {'id': '10', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
      ]
    },
    {
      'departmentName': '科室1',
        'departmentList': [
          {'id': '10', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'},
          {'id': '10', 'name': '杨泽方', 'position': '主治医师', 'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png'}
      ]
    }
  ],
  "pageNum": {
    "previousPage": "上一页地址（https://localhost:3000/api/v1/getDoctorsListAll?page=2）"
    "nextPage": "下一页地址（https://localhost:3000/api/v1/getDoctorsListAll?page=2）"
  }
}
```

### 获取医师详情
`获取医师信息`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDoctorsInfo`
#### 请求地址示例
https://localhost:3000/api/v1/getDoctorsInfo
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getDoctorsInfo | 接口名称

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
errmsg | String | 错误提示信息
doctorsInfo | Object | 医师 信息
id | String | 医师ID
name | String | 医师名称
position | String | 医师职位
img | String | 医师头像
description | String | 医师描述信息
department | String | 擅长科室

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
      'position': '主治医师·从业18年',
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'description': '儿科主治医师，18年儿科执行经验，云诊室参与者，国内权威医药生物专业论坛担任专业儿科版主及资深论坛管理员，致力于全科医学及儿科健康管理新模式的不断探索。',
      'department': ['儿科', '儿科', '儿科', '儿科', '儿科', '儿科']
    }
  ]
}
```

### 获取诊所科室列表
`获取诊所科室列表--数量不限制，包含所有（客户预先定义，使用者选择显示）`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getDepartmentList`
#### 请求地址示例
https://localhost:3000/api/v1/getDepartmentList
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getDepartmentList | 接口名称

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
https://localhost:3000/api/v1/getDepartmentInfo
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getDepartmentInfo | 接口名称

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
https://localhost:3000/api/v1/getArticleList
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getArticleList | 接口名称

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
img | String | 图片
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
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    }
  ]
}
```


### 获取文章所有列表
`获取文章列表--所有`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getArticleListAll`
#### 请求地址示例
https://localhost:3000/api/v1/getArticleListAll
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getArticleListAll | 接口名称

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
pageNum | Object | 列表翻页信息
previousPage | String | 上一页地址
nextPage | String | 下一页地址
articleList | Array | 文章列表
id | String | 文章ID
name | String | 文章名
img | String | 图片
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
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    {
      'id': '11',
      'name': '文章名',
      'views': 300,
      'img': 'http://www.enuoe.cn/enuoe/upload/201807/1532076107.png',
      'department': '文章内容文章内容文章内容文章内容文章内容文章内容'
    }
  ],
  "pageNum": {
    "previousPage": "上一页地址（https://localhost:3000/api/v1/getArticleListAll?page=2）"
    "nextPage": "下一页地址（https://localhost:3000/api/v1/getArticleListAll?page=2）"
  }
}
```

### 获取首页就医环境
`获取首页就医环境--三张图`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getSurroundingsList`
#### 请求地址示例
https://localhost:3000/api/v1/getSurroundingsList
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getSurroundingsList | 接口名称

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
SurroundingsList | Array | 环境图片

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "SurroundingsList":[
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png"
  ]
}
```

### 获取首页就医环境
`获取首页就医环境--所有图`
#### 接口请求地址
`[URL_PREFIX]/api/v1/getSurroundingsListAll`
#### 请求地址示例
https://localhost:3000/api/v1/getSurroundingsListAll
#### 请求路径说明

参数名  | 参数说明
-----  | --------
api    | 服务
v1    　| 版本号
getSurroundingsListAll | 接口名称

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
pageNum | Object | 列表翻页信息
previousPage | String | 上一页地址
nextPage | String | 下一页地址
SurroundingsList | Array | 环境图片

#### 返回值示例
```
{"result": true}表示成功
{"result": false}表示失败

{
  "result":true,
  "errcode":0,
  "errmsg":"",
  "SurroundingsList":[
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png",
    "http://www.enuoe.cn/enuoe/upload/201807/1532076107.png"
  ]
  "pageNum": {
    "previousPage": "上一页地址（https://localhost:3000/api/v1/getSurroundingsListAll?page=2）"
    "nextPage": "下一页地址（https://localhost:3000/api/v1/getSurroundingsListAll?page=2）"
  }
}
```
## 更新日志
时间      | 操作人 | 详情
-----     | ----- | ----
2019-04-14  | LuoW  | 接口文档更新--主显示