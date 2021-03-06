const { createSideBarConfig } = require('./util')

const JAVASCRIPT_PATH = '/blogs/javascript'
const BROWSER_PATH = '/blogs/browser'
const CSS_PATH = '/blogs/css'
const HTML_PATH = '/blogs/html'
const NET_PATH = '/blogs/net'
const ALGORITHM_PATH = '/blogs/algorithm'
const PERFORMANCE_PATH = '/blogs/performance'
const INTERVIEW_PATH = 'blogs/interview'
const DAILY_PATH = 'blogs/daily'
const OTHER_PATH = 'blogs/other'
const FRAME_PATH = 'blogs/frame'
module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JavaSript-基础', JAVASCRIPT_PATH)
  ],
  [CSS_PATH]: [
    createSideBarConfig('CSS系列', CSS_PATH)
  ],
  [HTML_PATH]: [
    createSideBarConfig('HTML相关', HTML_PATH)
  ],
  [BROWSER_PATH]: [
    createSideBarConfig('浏览器相关', BROWSER_PATH)
  ],
  [NET_PATH]: [
    createSideBarConfig('HTTP协议', NET_PATH + '/http'),
    createSideBarConfig('TCP协议', NET_PATH + '/tcp')
  ],
  [ALGORITHM_PATH]: [
    createSideBarConfig('算法系列', ALGORITHM_PATH)
  ],
  [PERFORMANCE_PATH]: [
    createSideBarConfig('性能优化', PERFORMANCE_PATH)
  ],
  [INTERVIEW_PATH]: [
    createSideBarConfig('面试', INTERVIEW_PATH)
  ],
  [DAILY_PATH]: [
    createSideBarConfig('日常', DAILY_PATH)
  ],
  [FRAME_PATH]: [
    createSideBarConfig('Vue框架', FRAME_PATH + '/vue'),
    createSideBarConfig('React框架', FRAME_PATH + '/react')
  ],
  [OTHER_PATH]: [
    createSideBarConfig('杂项', OTHER_PATH)
  ]
}