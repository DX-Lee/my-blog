(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{532:function(t,e,_){"use strict";_.r(e);var v=_(4),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("Time_Wait 状态是"),_("strong",[t._v("主动断开方")]),t._v("才会进入的一个状态，且状态会持续 2 MSL （Max Segment LifeTime）")]),t._v(" "),_("p",[_("strong",[t._v("MSL (Max Segment LifeTime)")])]),t._v(" "),_("p",[t._v("MSL 指的是 TCP 报文在网络中的最大生存时间。这个值与 IP 报文头中的 TTL 字段有密切的联系。")]),t._v(" "),_("p",[t._v("IP 报文头中有一个 8 位的存活时间字段（Time to live, TTL）如下图。 这个存活时间存储的不是具体的时间，而是一个 IP 报文最大可经过的路由数，每经过一个路由器，TTL 减 1，当 TTL 减到 0 时这个 IP 报文会被丢弃。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/14/16b54c4b9038f7aa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("blockquote",[_("p",[t._v("TIME_WAIT 存在的意义是什么？")]),t._v(" "),_("ol",[_("li",[t._v("为了让迷途的数据包在网络中过期失效，避免用相同源端口和目标端口的连接 收到 旧连接的数据包，造成数据混乱")]),t._v(" "),_("li",[t._v("为了避免最终的 ACK 包丢失后，对端重发的 FIN 包可以接收到")])])]),t._v(" "),_("blockquote",[_("p",[t._v("TIME_WAIT 为什么是 2 MSL？")]),t._v(" "),_("ul",[_("li",[t._v("1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端")]),t._v(" "),_("li",[t._v("1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达")])])]),t._v(" "),_("blockquote",[_("p",[t._v("TIME_WAIT 带来的问题")]),t._v(" "),_("p",[t._v("如果有大量处于 TIME_WAIT 状态的连接，导致连接表无法复用，socket 结构体内存占用。")]),t._v(" "),_("p",[t._v("缓解紧张的端口资源，一个可行的方法是重用“浪费”的处于 TIME_WAIT 状态的连接，当开启 net.ipv4.tcp_tw_reuse 选项时，处于 TIME_WAIT 状态的连接可以被重用。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);