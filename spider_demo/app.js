var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');


/*cheerio官方api使用范例 */
// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>

/*目标文本 */
// <div class="footer_right">
//   <div class="follow">
//     <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3323830796&amp;site=qq&amp;menu=yes" target="_blank"><span class="s-qq" title="与我QQ在线聊天"></span></a>
//     <a href="http://weibo.com/huaankeji" target="_blank"><span class="s-weibo" title="访问我的新浪微博"></span></a>
//   </div>
//   <div>
//     <p>© 2016华安科技版权所有</p>
//     <p style="color: #666">
//       <a href="http://weibo.com/huaankeji" target="_blank">
//              冀ICP备12020248号
//       </a>
//     </p>
//   </div>
// </div>

app.get('/',function(req,res){
  request('http://www.wallone.com.cn',function(error,response,body){
    if(!error&&response.statusCode==200){
      $ = cheerio.load(body);
      var recordname = $('.footer_right div p').slice(1).eq(0).text();
      var copyrightname = $('.footer_right div p').slice(0).eq(0).text();
      res.json({
        'recordname':recordname,
        'copyrightname':copyrightname
      });
    }
  })
});
console.log('go Server start');
app.listen(3000);
console.log(('linstening port 3000,check localhost:3000/ now'));
