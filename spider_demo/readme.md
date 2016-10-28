#调试环境 
    supervisor
#爬虫依赖库 
    request express cheerio


#全局安装supervisor  
    npm install supervisor -g 

# 创建项目
    express spider_demo
# 安装依赖包
    npm install request --save -dev
    npm install cheerio --save -dev

# 编写爬虫逻辑
    1、request api   
    2、cheerio api

#supervisor启动app.js 
    supervisor start app.js  
#supervisor启动后可在终端查看输出结果 修改文件后自动热重启。

#request相关api
    https://www.npmjs.com/package/request
        本例中使用实例：
        var request = require('request');
        request('http://www.google.com', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
          }
        })
#cheerio相关api   
    https://www.npmjs.com/package/cheerio
        关键点在于 :
            var cheerio = require('cheerio');
            $ = cheerio.load(body);
        此处$ 即为  body的DOM选择器。 可以通过类似jquery 选择器的方式获取DOM元素值。




