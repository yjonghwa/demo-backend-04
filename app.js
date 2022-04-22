'use strict';
const express = require('express');

var AWSXRay = require('aws-xray-sdk');
var http = AWSXRay.captureHTTPs(require('http'));
AWSXRay.config([AWSXRay.plugins.EC2Plugin, AWSXRay.plugins.ECSPlugin]);
AWSXRay.setDaemonAddress('xray-service.default:2000');

var app = express();
app.use(express.json());

const image_list = [
    {
        name: '01',
        url: 'https://image.aladin.co.kr/product/29023/52/cover150/k202836736_1.jpg',
        value: '돈독한 트레이닝 from backend-04',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290235245'
    },
    {
        name: '02',
        url: 'https://image.aladin.co.kr/product/29023/26/cover150/k642836735_1.jpg',
        value: '알페스×퀴어',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290232607'
    },
    {
        name: '03',
        url: 'https://image.aladin.co.kr/product/29022/31/cover150/8992074794_1.jpg',
        value: '뉴 로맨틱 사이보그',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290223168'
    },
    {
        name: '04',
        url: 'https://image.aladin.co.kr/product/29022/0/cover150/8964461983_1.jpg',
        value: '일인칭으로 말 걸기',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290220012'
    },
    {
        name: '05',
        url: 'https://image.aladin.co.kr/product/29021/94/cover150/k252836732_1.jpg',
        value: '[세트] 크리스퍼가 온다 + 코드 브레이커 - 전2권',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290219417'
    },
    {
        name: '06',
        url: 'https://image.aladin.co.kr/product/29021/93/cover150/k102836732_2.jpg',
        value: '심해수 1~5 특별한정판 세트 - 전5권',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290219311'
    },
    {
        name: '07',
        url: 'https://image.aladin.co.kr/product/29021/87/cover150/k002836732_1.jpg',
        value: '[세트] 사내 맞선 1~2 - 전2권',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290218772'
    },
    {
        name: '08',
        url: 'https://image.aladin.co.kr/product/29021/61/cover150/8965465028_1.jpg',
        value: '알레르기',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290216183'
    },
    {
        name: '09',
        url: 'https://image.aladin.co.kr/product/29021/50/cover150/8925578638_1.jpg',
        value: '내일 14',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290215089'
    },
    {
        name: '10',
        url: 'https://image.aladin.co.kr/product/29020/91/cover150/k652836739_1.jpg',
        value: '뽀짜툰 9',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290209141'
    },
]

app.use(AWSXRay.express.openSegment('demo-backend-04'));  //required at the start of your routes

app.get('/newbooks04/all', function (req, res) {
  console.log(`${req.method} ${req.url}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send({outcome : image_list});
});

app.use(AWSXRay.express.closeSegment());  //required at the end of your routes / first in error handling routes

var server = app.listen(3004, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is working : ', host, port);
});
