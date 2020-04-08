const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;


var client_id = 'BV6CW6BHCbyhbhvCoVZz';
var client_secret = 'tc2Mq_9dYw';

app.use(cors());

app.use(bodyParser.json());
app.use('/api', (req, res)=> {
	// naver axios request
	// result
  console.log(req.query);
	var api_url = 'https://openapi.naver.com/v1/search/shop?query=' + encodeURI(req.query.query); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       console.log(body);
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
});


app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})