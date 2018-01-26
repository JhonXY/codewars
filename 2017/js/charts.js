// var chart1 = echarts.init($('#chart1')[0])
// var chart2 = echarts.init($('#chart2')[0])
// var chart3 = echarts.init($('#chart3')[0])
// var chart4 = echarts.init($('#chart4')[0])
// var chart5 = echarts.init($('#chart5')[0])
// var chart6 = echarts.init($('#chart6')[0])
// var chart7 = echarts.init($('#chart7')[0])
// var chart8 = echarts.init($('#chart8')[0])
// var chart9 = echarts.init($('#chart9')[0])
// var chart10 = echarts.init($('#chart10')[0])

var EchartsOptions = {
  chart1: {
    el: echarts.init($('#chart1')[0]),
    init: function(){
      this.el.setOption(this.options)
    },
    setSeries: function(more){
      // this.init()
      var data = more.map(function(ele, index){
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      }) 
      console.log(this.options);
        
      this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        text: '使用邮箱',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        },
        top: 0
      },
      color: ['#3e73ee', '#4395e9', '#00baff', '#43d7e4', '#49fdf7', '#3441ec', '#2e3fc2', '#2458d3'],
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      series: [{
        name: '邮箱名称',
        type: 'pie',
        radius: [50, 150],
        // center: ['50%', '50%'],
        roseType: 'area',
        // 接口获得
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }]
    }
  },
  chart2: {
    el: echarts.init($('#chart2')[0]),
    init:function(){
      this.el.setOption(this.options)
    },
    setSeries: function(more){
      var data = []
      data[0] = {name: '请求', value: more[0]}
      data[1] = {name: '送达', value: more[1]}
      data[2] = {name: '触达', value: more[2]}
      // var data = more.map(function (ele, index) {
      //   return ele = {
      //     value: ele.statValue,
      //     name: ele.statKey
      //   }
      // })
      this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        text: '发送情况',
        x: 'left',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        },
      },
      legend: {
        show: false
      },
      color: ['#4773f7', '#35b6fb', '#25f9ff'],
      grid: {
        top: '20%',
        left: '15%',
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
      },
      xAxis: {
        type: 'category',
        data: ['请求', '送达', '触达'],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        // 横向切割线
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        name: "邮件数",
        data: [120, 200, 150],
        itemStyle: {
          normal: {
            // color: ['#4773f7', '#35b6fb', '#25f9ff']
          }
        },
        type: 'bar',
        center: ['50%', '50%'],
        label: {
          show: false
        },
        barWidth: 98,
        // barMaxWidth: 98,
        // barGap: '100%',
        barCategoryGap: '100%'
      }]
    }
  },
  chart3: {
    el: echarts.init($('#chart3')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      this.init()
      this.el.setOption(more)
    },
    options: {
      title: {
        text: '周发送情况',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        },
        top: 0
      },
      grid: {
        top: '20%',
        bottom: '20%'
      },
      color: ['#1c577e', '#3aa3fa'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['请求数', '送达数'],
        textStyle: {
          fontSize: 14,
          color: '#fff',
        },
        // symbol: 'ci'
        left: 10,
        top: 35,
        // type: 'scroll',
        orient: 'vertical',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        // 横向切割线
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: '请求数',
          type: 'line',
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [],
          showSymbol: false,
          areaStyle: {
            normal: {
              color: '#1c577e'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' }
            ],
            symbolOffset: [-2, -45],
            symbol: 'image://img/request.png',
            symbolSize: [72, 88],
          }
        },
        {
          name: '送达数',
          type: 'line',
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [],
          lineStyle: {
            color: '#4c3ff3'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4675f7'
              }, {
                offset: 1,
                color: '#23ffff'
              }])
            }
          },
          markPoint: {
            data: [{ type: 'max', name: '最大值' },],
            symbolOffset: [-2, -45],
            symbol: 'image://img/delivered.png',
            symbolSize: [72, 88],
          }
        }
      ]
    }
  },
  chart4: {
    el: echarts.init($('#chart4')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var forMax = []
      var data = more.map(function(ele, index){
        forMax.push(ele.statValue)
        return ele = { 
          name: provinceForShort(ele.statKey),
          value: ele.statValue
        }
      })  

      var max = Math.max.apply(Math, forMax)
      
      this.options.visualMap.max = max
      this.options.series[1].data = data
      this.init()
    },
    options: {
      tooltip: {},
      title: {
        text: '阅读地域分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        }
      },
      visualMap: {
        min: 0,
        max: 50000,
        left: 'left',
        bottom: '10%',
        text: ['高', '低'],
        seriesIndex: [1],
        inRange: {
          color: ['#25f8ff', '#2c54d4']
        },
        textStyle: {
          color: '#ffffff'
        },
        calculable: true
      },
      geo: {
        map: 'china',
        roam: true,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#ffffff',
            },
            position: 'center',
            fontSize: 10,
            verticalAlign: 'middle'
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            areaColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        regions: [
          { name: '南海诸岛', itemStyle: { normal: { opacity: 0 } }, label: { normal: { show: false } } },
          { name: '青海', label: { normal: { padding: [0, 90, 0, 0] } } },
          { name: '江苏', label: { normal: { padding: [0, 0, 20, 30] } } },
          { name: '黑龙江', label: { normal: { padding: [0, 0, 30, 40] } } },
          { name: '河北', label: { normal: { padding: [0, 0, 5, 5] } } },
          { name: '山西', label: { normal: { padding: [5, 0, 0, 0] } } },
          { name: '浙江', label: { normal: { padding: [20, 0, 0, 0] } } },
          { name: '湖南', label: { normal: { padding: [15, 20, 0, 0] } } },
          { name: '湖北', label: { normal: { padding: [0, 20, 10, 0] } } },
          { name: '广西', label: { normal: { padding: [0, 0, 10, 5] } } },
          { name: '云南', label: { normal: { padding: [10, 15, 0, 0] } } },
          { name: '台湾', label: { normal: { padding: [10, 10, 0, 0] } } },
          { name: '宁夏', label: { normal: { padding: [5, 0, 0, 0] } } },
          { name: '新疆', label: { normal: { padding: [40, 10, 0, 0] } } },
          { name: '西藏', label: { normal: { padding: [0, 20, 20, 0] } } },
          { name: '重庆', label: { normal: { padding: [0, 0, 5, 10] } } },
          { name: '内蒙古', label: { normal: { padding: [0, 8, 10, 0] } } },
          // { name: '香港', label: { normal: { show: false } } },
          // { name: '澳门', label: { normal: { show: false } } }
        ]
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          label: {
            normal: {
              formatter: '{b}',
              position: 'center',
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#F06C00'
            }
          }
        },
        {
          name: '阅读量',
          type: 'map',
          geoIndex: 0,
          data: [
            { name: '北京', value: 123 },
            { name: '天津', value: 11 },
            { name: '上海', value: 233 },
            { name: '重庆', value: 4354 },
            { name: '河北', value: 743 },
            { name: '河南', value: 134 },
            { name: '云南', value: 134 },
            { name: '辽宁', value: 24 },
            { name: '黑龙江', value: 213 },
            { name: '湖南', value: 3435 },
            { name: '安徽', value: 354 },
            { name: '山东', value: 76 },
            { name: '新疆', value: 9898 },
            { name: '江苏', value: 090 },
            { name: '浙江', value: 12 },
            { name: '江西', value: 46456 },
            { name: '湖北', value: 123 },
            { name: '广西', value: 3213 },
            { name: '甘肃', value: 21312 },
            { name: '山西', value: 43 },
            { name: '内蒙古', value: 123 },
            { name: '陕西', value: 431 },
            { name: '吉林', value: 123 },
            { name: '福建', value: 43 },
            { name: '贵州', value: 12 },
            { name: '广东', value: 43 },
            { name: '青海', value: 123 },
            { name: '西藏', value: 34 },
            { name: '四川', value: 12313 },
            { name: '宁夏', value: 432 },
            { name: '海南', value: 12 },
            { name: '台湾', value: 43 },
            { name: '香港', value: 123 },
            { name: '澳门', value: 141 }
          ]
        }
      ]
    }
  },
  chart5: {
    el: echarts.init($('#chart5')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var arr = []         
      more.map(function (ele, index) {
        var key = +ele.statKey
        arr[key] = ele.statValue
      })
      var max = Math.max.apply(Math, arr)
      this.options.radar.indicator = this.options.radar.indicator.map(function (ele, i){
        return { 
          text: ele.text,
          max: max 
        }
      })
      this.options.series[0].data[0].value = arr      
      this.init()
    },
    options: {
      title: {
        text: '24小时阅读时间分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        }
      },
      legend: {
        show: false
      },
      radar: {
        // clockWise
        indicator: (function () {
          var res = [];
          for (var i = 1; i <= 24; i++) {
            // 这里的max需要获取
            res.push({ text: i });
          }
          return res;
        })(),
        splitArea: {
          areaStyle: {
            color: [],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        },
        splitNumber: 3,
        radius: 180 // 控制图的大小
      },
      series: [{
        type: 'radar',
        // clockWise: false,
        data: [{
          name: '阅读量',
          areaStyle: {
            normal: {
              color: '#567eff',
              opacity: 0.5
            }
          },
          symbol: 'none',
          lineStyle: {
            normal: {
              color: '#23408d'
            }
          },
          itemStyle: {
            normal: {
              color: '#23408d'
            }
          },
          // 接口获取
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
        }]
      }]
    }
  },
  chart6: {
    el: echarts.init($('#chart6')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        text: '阅读端分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        },
        top: 0
      },
      color: ['#b187ff', '#e8abff', '#8cffd2', '#0beaeb', '#3dbdf2', '#4778fa', '#8273eb'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: [135, 180],
          avoidLabelOverlap: false,
          label: {
            show: true,
            // position: 'center',
            emphasis: {
              show: true,
              position: 'center',
              textStyle: {
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    }
  },
  chart7: {
    el: echarts.init($('#chart7')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var tmp = 0,
          tmpArr = [],
          tmpIndex = 0
      var data = more.map(function (ele, index) {
        // 少量的与-1统一归其他
        if (ele.statValue <= 1000) {
          tmp += ele.statValue
        } else if (ele.statKey === '其他'){
          tmpIndex = index
          return ele = {
            value: ele.statValue,
            name: ele.statKey
          }
        } else if (ele.statKey === '-1'){
          tmp += ele.statValue
        } else {
          return ele = {
            value: ele.statValue,
            name: ele.statKey
          }
        }
      })
      data[tmpIndex].value += tmp
      data[tmpIndex].name = '其他'

      this.options.series = (function (data) {
        var series = [];
        for (var i = 0; i < 30; i++) {
          series.push({
            name: '移动品牌分布',
            type: 'pie',
            // clockwise: true,
            hoverAnimation: false,
            startAngle: 0 - i * 2, // 实现旋涡，+-控制漩涡转向
            label: {
              // show: false,
              show: i == 29,
              // position: 'center',
              emphasis: {
                show: false
              }
            },
            labelLine: {
              show: i == 29,
              // show: false,
              emphasis: {
                show: false
              }
            },
            radius: [i * 4.7 + 43.5, i * 4.7 + 46],
            data: data
          })
        }
        return series;
      })(data)
      // this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        text: '移动品牌分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
        },
        top: 0
      },
      color: ['#3472ff', '#2eabff', '#14d0ff', '#588aff', '#2d24ff'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        show: false
      },
      calculable: false,
      series: []
    }
  },
  chart8: {
    el: echarts.init($('#chart8')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        // show:false
        text: '内容类型占比',
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
        },
      },
      color: ['#b187ff', '#439bf5', '#3dbdf2'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: 180,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          label: {
            normal: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    }
  },
  chart9: {
    el: echarts.init($('#chart9')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = data
      this.init()
    },
    options: {
      title: {
        // show:false
        text: '业务类型占比',
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
        },
      },
      color: ['#47b9fa', '#0beaeb', '#8cffd2', '#0beaeb', '#4778fa'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: 180,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          label: {
            normal: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: []
        }
      ]
    }
  },
  chart10: {
    el: echarts.init($('#chart10')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var total = 0 
      more.forEach(function(ele){
        total+=ele.statValue
      })
      
      more.sort(function(pre, cur){
        return pre.statValue - cur.statValue
      })
      var data = []
      for(var i=0; i<more.length; i++){
        var ele = more[i]
        data[i] = {
          percent: Math.round(ele.statValue / total * 10000) / 100.00,
          value: 20 + i*20,
          name: ele.statKey,
          num: ele.statValue
        }
      }
      this.options.series[0].data = data
      this.options.series[1].data = data     
      this.init()
    },
    options: {
      title: {
        // show:false
        text: '运营商占比图',
        bottom: 2,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
        },
        padding: [100, -100, 0, 0]
      },
      // color: ['#24a6dc', '#00c5c6', '#50cf9d', '#0085ec'],
      color: ['#50cf9d', '#00c5c6', '#24a6dc', '#0085ec'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '占比',
          type: 'funnel',
          itemStyle: {
            borderWidth: 0
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            textStyle: {
              fontSize: 14
            },
            emphasis: {
              textStyle: {
                fontSize: 15
              },
            }
          },
          labelLine: {
            show: false
          },
          data: []
        },
        {
          name: '占比',
          type: 'funnel',

          itemStyle: {
            borderWidth: 0
          },
          label: {
            show: true,
            position: 'inside',
            formatter: function (obj) {
              return obj.data.percent+'%'
            },
            textStyle: {
              color: '#fff'
            },
            emphasis: {
              textStyle: {
                fontSize: 15
              },
              formatter: function (obj) {
                return obj.data.num
              },
            }
          },
          data: []
        }
      ]
    }
  },
}