import React from 'react'
import './index.scss'
import Header from './../../components/header/header'
import Footer from './../../components/footer/footer'
import JobScroll from './../../components/jobScroll/jobScroll'

const data = [{
  "effectiveDate": 1576913894000,
  "uneffectualDate": 1580400000000,
  "recruitNumber": 1,
  "firstCategory": "技术类",
  "secondCategory": "算法",
  "positionId": 66306,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576914000000,
  "effectiveDateDesc": "2019-12-21",
  "applyTimeDesc": "3分钟前",
  "departmentName": "阿里集团-新零售技术事业群-AE技术部-数据智能部",
  "workLocation": "杭州",
  "code": "GP527351",
  "name": "AliExpress-算法专家"
}, {
  "effectiveDate": 1576911880000,
  "uneffectualDate": 1583683200000,
  "recruitNumber": 1,
  "firstCategory": "综合类",
  "secondCategory": "财务及内控",
  "positionId": 78832,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576912200000,
  "effectiveDateDesc": "2019-12-21",
  "applyTimeDesc": "33分钟前",
  "departmentName": "阿里集团-盒马-盒马-运营财务",
  "workLocation": "上海",
  "code": "GP599797",
  "name": "盒马-财务分析专家（FP&A）-上海"
}, {
  "effectiveDate": 1576909501000,
  "uneffectualDate": 1584633600000,
  "recruitNumber": 1,
  "firstCategory": "综合类",
  "secondCategory": "综合管理",
  "positionId": 67310,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576909800000,
  "effectiveDateDesc": "2019-12-21",
  "applyTimeDesc": "1小时前",
  "departmentName": "阿里集团-盒马-盒马-盒区生活业务-本地生活项目组",
  "workLocation": "深圳",
  "code": "GP528882",
  "name": "盒马-mall项目深圳店总经理-深圳"
}, {
  "effectiveDate": 1576907725000,
  "uneffectualDate": 1577721600000,
  "recruitNumber": 5,
  "firstCategory": "技术类",
  "secondCategory": "开发",
  "positionId": 76897,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576908001000,
  "effectiveDateDesc": "2019-12-21",
  "applyTimeDesc": "1小时前",
  "departmentName": "阿里集团-新零售技术事业群-数字政务中台事业部-中台技术",
  "workLocation": "杭州",
  "code": "GP587717",
  "name": "数字政务中台事业部-数字政务高级技术工程师/技术专家-上海专场"
}, {
  "effectiveDate": 1576900167000,
  "uneffectualDate": 1580745600000,
  "recruitNumber": 1,
  "firstCategory": "综合类",
  "secondCategory": "工程建设",
  "positionId": 77221,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576900200000,
  "effectiveDateDesc": "2019-12-21",
  "applyTimeDesc": "3小时前",
  "departmentName": "菜鸟-智慧物流基础设施-地网-大中台-总师室&计划运营",
  "workLocation": "杭州",
  "code": "GP588712",
  "name": "菜鸟-总师室-运营管理专家/高级专家"
}, {
  "effectiveDate": 1576854852000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 1,
  "firstCategory": "运营类",
  "secondCategory": "运营综合",
  "positionId": 79379,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576888800000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "7小时前",
  "departmentName": "阿里集团-B类事业群-ICBU-中国供应商-深圳大区-市场部",
  "workLocation": "深圳",
  "code": "GP601847",
  "name": "ICBU-中国供应商-数字新媒体运营专家"
}, {
  "effectiveDate": 1576854342000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 1,
  "firstCategory": "运营类",
  "secondCategory": "商家运营",
  "positionId": 73285,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576888800000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "7小时前",
  "departmentName": "阿里集团-B类事业群-ICBU-中国供应商-深圳大区-龙华",
  "workLocation": "深圳",
  "code": "GP563608",
  "name": "ICBU-中国供应商-OEM商家运营（深圳）"
}, {
  "effectiveDate": 1576856476000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 1,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 79382,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576857000000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "15小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-商超体验运营部",
  "workLocation": "杭州",
  "code": "GP601849",
  "name": "新零售客户体验-高级体验运营专家-天猫超市"
}, {
  "effectiveDate": 1576856714000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 1,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 79383,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576857000000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "15小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-物流体验",
  "workLocation": "杭州",
  "code": "GP602322",
  "name": "新零售客户体验-体验运营专家-供应链体验"
}, {
  "effectiveDate": 1576856392000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 3,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 65539,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576856401000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "16小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-逆向&体验引擎运营部",
  "workLocation": "杭州",
  "code": "GP525045",
  "name": "新零售客户体验-体验运营专家-逆向退款体验"
}, {
  "effectiveDate": 1576855834000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 1,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 79380,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576856401000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "16小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-天猫行业体验运营部",
  "workLocation": "杭州",
  "code": "GP602405",
  "name": "新零售客户体验-高级体验运营专家-天猫商城"
}, {
  "effectiveDate": 1576856039000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 2,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 79381,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576856401000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "16小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-天猫行业体验运营部",
  "workLocation": "杭州",
  "code": "GP601848",
  "name": "新零售客户体验-体验运营专家-天猫商城（服饰汽车美家）"
}, {
  "effectiveDate": 1576855981000,
  "uneffectualDate": 1582905600000,
  "recruitNumber": 2,
  "firstCategory": "客服类",
  "secondCategory": "业务分析与运营",
  "positionId": 65530,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576856401000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "16小时前",
  "departmentName": "阿里集团-CCO线-集团客户体验事业部-新零售客户体验部-天猫行业体验运营部",
  "workLocation": "杭州",
  "code": "GP524848",
  "name": "新零售客户体验-体验运营专家-天猫商城（大快消）"
}, {
  "effectiveDate": 1576847749000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 1,
  "firstCategory": "综合类",
  "secondCategory": "采购",
  "positionId": 76935,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576851000000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "17小时前",
  "departmentName": "阿里集团-盒马-盒马-招采",
  "workLocation": "北京",
  "code": "GP587819",
  "name": "盒马-区域采购专家-北京"
}, {
  "effectiveDate": 1576850472000,
  "uneffectualDate": 1582387200000,
  "recruitNumber": 2,
  "firstCategory": "销售类",
  "secondCategory": "直销",
  "positionId": 72604,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576851000000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "17小时前",
  "departmentName": "阿里集团-大文娱事业群-优酷-内容商业化运营部-内容商业化营销中心-全国快消业务部-华北快消部",
  "workLocation": "北京",
  "code": "GP558508",
  "name": "大文娱优酷-快消行业营销顾问-北京"
}, {
  "effectiveDate": 1576847338000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 10,
  "firstCategory": "技术类",
  "secondCategory": "开发",
  "positionId": 79378,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576849200000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "18小时前",
  "departmentName": "阿里集团-阿里云智能事业群-达摩院-数据计算-计算技术-SOC-IO系统验证",
  "workLocation": "上海",
  "code": "GP601846",
  "name": "平头哥-IO Verification Engineer-上海"
}, {
  "effectiveDate": 1576847474000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 2,
  "firstCategory": "运营类",
  "secondCategory": "内容运营",
  "positionId": 71527,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576848000000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "18小时前",
  "departmentName": "菜鸟-客户运营中心-国际客户运营部",
  "workLocation": "杭州",
  "code": "GP547771",
  "name": "菜鸟-海外消费者服务体验运营资深专员/专家"
}, {
  "effectiveDate": 1576845043000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 2,
  "firstCategory": "市场拓展",
  "secondCategory": "BD",
  "positionId": 79377,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576845600000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "19小时前",
  "departmentName": "阿里集团-天猫事业群-天猫家装事业部-家装行业-大客户",
  "workLocation": "杭州",
  "code": "GP602404",
  "name": "天猫家装-大客户运营（高级）专家-杭州"
}, {
  "effectiveDate": 1576843590000,
  "uneffectualDate": 1584547200000,
  "recruitNumber": 1,
  "firstCategory": "客服类",
  "secondCategory": "流程优化",
  "positionId": 69653,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576843800000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "19小时前",
  "departmentName": "菜鸟-客户运营中心-国内供应链客户运营部",
  "workLocation": "杭州",
  "code": "GP539406",
  "name": "菜鸟-高级服务解决方案专家-ZW"
}, {
  "effectiveDate": 1576841330000,
  "uneffectualDate": 1579017600000,
  "recruitNumber": 1,
  "firstCategory": "项目管理",
  "secondCategory": "业务项目管理",
  "positionId": 76367,
  "applyed": false,
  "applyTimes": 0,
  "favoriteTimes": 0,
  "favorited": false,
  "expired": true,
  "gmtModified": 1576841400000,
  "effectiveDateDesc": "2019-12-20",
  "applyTimeDesc": "20小时前",
  "departmentName": "蚂蚁集团-智能科技事业群",
  "workLocation": "杭州",
  "code": "GP582139",
  "name": "蚂蚁金服-项目管理专家/高级专家"
}]

const HomePage = () => {
  return(
    <div className="homepage">
      <Header />
      {/* banner */}
      <div className="banner">
        <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="bannerImg"/>
        <div className="mask-layer"></div>
        {/* 搜索区 */}
        <div className="search-box">
          <div className="search-box-content">
            <p>If not now, when?</p>
            <p>If not me, who?</p>
            <p>此时此刻，非我莫属！</p>
            {/* 搜索框 */}
            <div className="search-input-box">
              <div className="search-bg"></div>
              <input className="search-input" placeholder="请输入职位关键词" type="text"/>
              <input className="search-sub" type="submit"/>
            </div>
            {/* 热门搜索 */}
            <div className="hot-search">
              热门搜索：
              <a href="www.baidu.com">JAVA</a>
              <a href="www.baidu.com">IOS</a>
              <a href="www.baidu.com">数据</a>
              <a href="www.baidu.com">安全</a>
              <a href="www.baidu.com">搜索</a>
              <a href="www.baidu.com">算法</a>
              <a href="www.baidu.com">运营</a>
              <a href="www.baidu.com">视觉</a>
              <a href="www.baidu.com">交互</a>
              <a href="www.baidu.com">前端</a>
            </div>
          </div>
        </div>
      </div>
      {/* 职位展示区 */}
      <div className="job-box">
        <div className="job-content">
          <div>
            <JobScroll data={data} />
          </div>
          <div>
            <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt="阿里云"/>
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="阿里巴巴企业智能"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default HomePage