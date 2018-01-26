(function(){
  var Loader = {
    el: $('#loader'),
    init: function () {
      var maxEle = 100;
      var duration = 500;
      var toAnimate = [];
      var radius = window.innerWidth < window.innerWidth ? window.innerWidth : window.innerHeight;
      var distance = radius / 4 <= 150 ? 150 : radius / 4
      // var distance = 1500
      var colors = ['#fff'];

      var createElements = (function () {
        // 统一放置在fragement中
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < maxEle; i++) {
          var el = document.createElement('div');
          el.classList.add('particule');
          el.style.color = colors[0];
          el.style.width = (Math.floor(Math.random() * 10 + 1) * 0.1 * 1 + .6)+'rem';
          el.style.height = el.style.width;
          el.style.opacity = Math.floor(Math.random() * 10 + 1) * 0.1;
          el.style.backgroundColor = el.style.color;
          toAnimate.push(el);
          fragment.appendChild(el);
        }
       
        Loader.el[0].appendChild(fragment);
      })()

      var animate = function (el, i) {
        var angle = Math.random() * Math.PI * 2;
        var distanceSingle = Math.floor(Math.random() * 10 + 1) * 0.1 * distance
        var durationSingle = Math.floor(Math.random() * 10 + 1) * 0.1 * duration
        
        // anime({
        //   targets: el,
        //   translateX: [
        //     { value: Math.cos(angle) * distanceSingle},
        //     { 
        //       value: Math.cos(angle) * distanceSingle*2,
        //       delay: duration,
        //       duration: 500,
        //       easing: 'easeInBack'
        //     }
        //   ],
        //   translateY: [
        //     { value: Math.sin(angle) * distanceSingle},
        //     {
        //       value: Math.sin(angle) * distanceSingle * 2,
        //       delay: duration,
        //       duration: 100,
        //       easing: 'easeInBack'
        //     }
        //   ],
        //   scale: [
        //     // { value: [0, 1], duration: distanceSingle , easing: 'easeOutBack' },
        //     { value: [0, 1], duration: 100 , easing: 'easeOutBack' },
        //     // { value: 0, duration: 400, delay: duration - 800, easing: 'easeInBack' }
        //   ],
        //   
        //   // 时间上的偏移
        //   // offset: (duration / maxEle) * i,
        //   // duration: duration,
        //   // 动画结束的时长
        //   // duration: (durationSingle / maxEle) * i,
        //   // duration: (duration / maxEle) * i,
        //   duration: duration,
        //   // duration: 10000,
        //   easing: 'easeOutSine',
        //   elasticity: 500
        //   // loop: true
        // });

        var myTimeline = anime.timeline();

        myTimeline
          .add({
            targets: el,
            // translateX: { value: [0, Math.cos(angle) * distanceSingle] },
            translateX: [
              { 
                value: Math.cos(angle) * distanceSingle,
                elasticity: 500
              },{ value: Math.cos(angle) * distanceSingle*10,}
            ],
            // translateY: { value: [0, Math.sin(angle) * distanceSingle] },
            translateY: [
              { 
                value: Math.sin(angle) * distanceSingle,
                elasticity: 500 
              }, { value: Math.sin(angle) * distanceSingle * 10, }
            ],
            opacity: {
              value: 0,
              duration: duration,
              // offset: '-=600',
              // delay: duration,
              easing: 'easeInBack'
            },
            duration: duration
          })
          .add({
            targets: el,
            // translateX: {
            //   value: [Math.cos(angle) * distanceSingle, Math.cos(angle) * distanceSingle * 10],
            //   // value: Math.cos(angle) * distanceSingle * 10,
            //   delay: duration,
            //   duration: 500, 
            //   easing: 'easeInBack'
            // },
            // translateY: {
            //   value: [Math.sin(angle) * distanceSingle, Math.sin(angle) * distanceSingle * 10],
            //   // value: Math.sin(angle) * distanceSingle * 10,
            //   delay: duration,
            //   duration: 500, 
            //   easing: 'easeInBack'
            // },
            opacity: {
              value: 0,
              // duration: 400, 
              duration: 1000, 
              delay: duration, 
              easing: 'easeInBack'
            },
          })
      }

      toAnimate.forEach(animate)

    },
    hide: function () {
      setTimeout(function () {
        Loader.el.addClass('hidden');
        var ele = $('#c_n1')
        ele.remove()
      }, 4000);
    }
  }

  setInterval(function(){
    Loader.init()
  }, 3400)
  
  getWeekReport()
  getData(EchartsOptions)
  
  function getWeekReport() {
    $.ajax({
      type: 'GET',
      url: '/userAnnualReport/getUserEmailWeekReport.do?year=2017',
      async: false,
      success: function (p) {
        if (p.success === true) {
          var res = p.data.weeklySendData
          
          EchartsOptions.chart3.setSeries({
            xAxis: {
              data: res.sendDateList
            },
            series: [{
              name: '请求数',
              data: res.requestNumList
            }, {
                name: '送达数',
                data: res.deliveredNumList
            }]
          })

          var data = p.data
          $('.chart3-title').find('span').eq(0).text(toThousands(data.maxSendWeek))
          $('.chart3-title').find('span').eq(1).text(toThousands(data.maxRequestNum))
          $('.chart3-title').find('span').eq(2).text(toThousands(data.maxDelieverdNum))
          $('.chart3-title').find('span').eq(3).text(toThousands(data.avgRequestNum))
          $('.chart3-title').find('span').eq(4).text(toThousands(data.avgDeliveredNum))
        }
      }
    })
  }

  function getData(charts) {
    $.ajax({
      type: 'GET',
      url: '/userAnnualReport/getUserYearReportData.do?year=2017',
      async: false,
      success: function (p) {
        if (p.status == 1) {
          var res = p.data
          // [x].statKey 邮箱名  statValue 邮箱数量
          var chart1_data = res.email_delivered_domain_count // [] 邮箱触达人群域名占比
          charts.chart1.setSeries(chart1_data)
          $('.chart1-title-l').find('span').text(chart1_data[maxIndex(chart1_data, 'statValue')].statKey)

          // 邮件
          var email_req_num = res.email_request_num[0].statValue // 请求数
          var email_delivered_num = res.email_delivered_num[0].statValue // 送达数
          var email_reached_num = res.email_delivered_user_count[0].statValue // 触达数
          charts.chart2.setSeries([email_req_num, email_delivered_num, email_reached_num])
          $('.chart1-title-r').find('span').eq(0).text(toThousands(email_req_num))
          $('.chart1-title-r').find('span').eq(1).text(toThousands(email_delivered_num))
          $('.chart1-title-r').find('span').eq(2).text(toThousands(email_reached_num))

          // [x].statKey 数字地域代码 statValue 阅读量
          var chart4_data = res.email_open_position // 阅读地域分布
          $('.chart4-title-l').find('span').text(chart4_data[maxIndex(chart4_data, 'statValue')].statKey)
          // console.log(chart4_data[maxIndex(chart4_data, 'statValue')].statKey);
          charts.chart4.setSeries(chart4_data)

          // [x].statKey 0-23代表时间 statValue 阅读量
          var chart5_data = res.email_open_hour // 24小时阅读分布
          charts.chart5.setSeries(chart5_data)
          // chart5_data[maxIndex(chart5_data, 'statValue')].statKey
          var time = chart5_data[maxIndex(chart5_data, 'statValue')].statKey
          $('.chart5-title-r').find('span').text(setTime(time))
          

          // [x].statKey 数字阅读端代码 statValue 阅读数量
          var chart6_data = res.email_open_device // 阅读端分布
          charts.chart6.setSeries(chart6_data)

          // [x].statKey 数字品牌代码 statValue 阅读量
          var chart7_data = res.email_open_phone // 阅读移动品牌分布
          charts.chart7.setSeries(chart7_data)
          

          // [x].statKey 发送时长("10s~1min"，"1min~5min"，"3s~10s"，"<3s"，">5min") statValue 阅读量
          var email_duration = res.email_tran_duration // 邮件发送时长
          var total = 0,
              less = 0,
              more = 0
          email_duration.forEach(function (ele) {
            total += ele.statValue
            if (ele.statKey === "3s~10s" || ele.statKey === "<3s") {
              less += ele.statValue
            } else {
              more += ele.statValue
            }
          })

          $('.icon-title').eq(0).find('span').text(Math.round(less / total * 100, 0) + '%')
          $('.icon-title').eq(1).find('span').text(99 + '%')
          

          // 短信
          // [x].statKey 数字内容类型代码 statValue 短信量
          var chart8_data = res.sms_type // 短信内容分布
          if (chart8_data) {
            charts.chart8.setSeries(chart8_data)
            var sms_req_num = res.sms_request_num[0].statValue // 请求
            var sms_delivered_num = res.sms_delivered_num[0].statValue // 送达
            var sms_reached_num = res.sms_delivered_user_count[0].statValue // 触达
            $('.chart8-title').find('span').eq(0).text(toThousands(sms_req_num))
            $('.chart8-title').find('span').eq(1).text(toThousands(sms_delivered_num))
          } else {
            $('#sms-one').remove()
          }
          // $('#sms-one').remove()

          // [x].statKey 数字业务类型代码 statValue 短信量
          var chart9_data = res.msg_type // 短信业务分布
          if (chart9_data) {
            charts.chart9.setSeries(chart9_data)
          }
        
          // [x].statkey 运营商()  statValue 短信量
          var chart10_data = res.sms_delivered_operator_count // 触达运营商占比
          
          if (chart10_data) {
            charts.chart10.setSeries(chart10_data)
            $('.chart10-title').find('span').text(toThousands(sms_reached_num))
          } else {
            $('#sms-two').remove()
          }
        }
      }
    }).done(function () {
      
      // Loader.hide()
    })
  } 

})()