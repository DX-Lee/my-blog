(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{539:function(s,e,_){"use strict";_.r(e);var v=_(4),o=Object(v.a)({},(function(){var s=this,e=s.$createElement,_=s._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("p",[_("strong",[s._v("一. HTTP 基本认证")])]),s._v(" "),_("p",[s._v("在 HTTP 中，基本方案是 HTTP Basic  Authentication。在请求时通过用户提供用户名和密码的方式，实现对用户的身份认证。")]),s._v(" "),_("p",[s._v("基本流程如下：")]),s._v(" "),_("p",[_("img",{attrs:{src:"E:%5Csanyuanblob%5Cmynblog%5Cpic%5ChttpAuthentication.png",alt:"httpAuthentication"}})]),s._v(" "),_("p",[s._v("在进行基本认证的过程中，HTTP 的请求头字段会包含 Authorization 字段，"),_("code",[s._v("Authorization: Basic <用户凭证>")]),s._v("，该用户凭证是 "),_("code",[s._v("用户名")]),s._v(" 和 "),_("code",[s._v("密码")]),s._v(" 的组合而成的 "),_("strong",[s._v("Base64 编码")]),s._v("。")]),s._v(" "),_("ol",[_("li",[s._v("用户访问了受限制的网页资源，但是没有提供用户的身份信息")]),s._v(" "),_("li",[s._v("服务器返回 401 ，要求用户进行认证，并附带一个认证域说明如何进行验证。")]),s._v(" "),_("li",[s._v("浏览器根据应答显示验证域给用户，要求用户输入用户名和密码。")]),s._v(" "),_("li",[s._v("用户输入用户名和密码后，浏览器会在原来的请求头中新增认证字段 Authenrization 并重新发送请求。")]),s._v(" "),_("li",[s._v("服务端验证 Authenrization 字段后如果合法则返回请求的网页资源，如果不合法则返回401重新认证。")])]),s._v(" "),_("p",[s._v("优点：实现简单被广泛支持")]),s._v(" "),_("p",[s._v("缺点：不安全")]),s._v(" "),_("p",[_("strong",[s._v("二.  Session + Cookie 认证")])]),s._v(" "),_("p",[s._v("利用 Cookie 保存用户状态")]),s._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"E:\\sanyuanblob\\mynblog\\pic\\session.svg",alt:"session"}}),s._v(" "),_("ol",[_("li",[s._v("当用户第一次请求的时候，服务器校验用户名和密码，如果校验通过，则创建一个 session 对象，并给这个 session 对象生成一个唯一的身份凭证 session_id，并把它放到 cookie 中发送给浏览器")]),s._v(" "),_("li",[s._v("当用户下一次请求时会自动带上这个 cookie，服务器检查 cookie 字段拿到 session_id，根据这个 id 去找保存的 session，判断请求是否合法")]),s._v(" "),_("li",[s._v("如果合法则返回请求数据，如果不合法则要求用户重新登陆")])]),s._v(" "),_("p",[_("strong",[s._v("Session 存储")]),s._v("：最常用的 Session 存储方式是 KV 存储，如"),_("a",{attrs:{href:"https://cloud.tencent.com/product/crs?from=10680",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis"),_("OutboundLink")],1),s._v("，在分布式、API 支持、性能方面都是比较好的，除此之外还有 mysql、file 存储。")]),s._v(" "),_("p",[_("strong",[s._v("Session Refresh")]),s._v("：Session 有过期时间，我们不能在用户登陆之后经过一段时间后就将用户踢出，如果用户在这期间一直操作，过期时间就应该刷新。另外 session_id 长期有效，cookie 泄露可能会带来安全问题，因此可以在生成 session_id 的同时在生成一个 refresh_id，在 session_id 过期后用 refresh_id 请求服务器生成新的 session_id 。")]),s._v(" "),_("p",[s._v("优点：cookie 简单易用，Session 保存在服务端容易管理")]),s._v(" "),_("p",[s._v("缺点：")]),s._v(" "),_("ol",[_("li",[s._v("不安全，容易被 CSRF 攻击")]),s._v(" "),_("li",[s._v("session 保存在服务端，增大服务器的开销")])]),s._v(" "),_("p",[_("strong",[s._v("三. JWT")])]),s._v(" "),_("p",[s._v("JWT 即 JSON Web Token ，由三部分组成：header(头部) + payload(载荷) + signature(签名)，这三部分以小数点连接起来")]),s._v(" "),_("p",[_("strong",[s._v("Header")])]),s._v(" "),_("p",[s._v("Header 部分是一个 JSON 对象，用来描述 JWT 的元信息。")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v('{\n\t"alg": \'HS256\',\n\t"typ": "JWT"\n}\n')])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br")])]),_("p",[s._v("alg 表示签名算法，默认是 HMAC SHA256(HS256)；typ 表示这个令牌的类型，JWT 令牌统一写成 JWT，最后将上面的 JSON 对象使用 Base64URL 算法转成字符串")]),s._v(" "),_("p",[_("strong",[s._v("Payload")])]),s._v(" "),_("p",[s._v("Payload 也是个 JSON 对象，用来存放实际需要传递的数据。除了官方字段，还可以定义私有字段")]),s._v(" "),_("p",[s._v("这个 JSON 对象也要用 Base64URL 转成字符串")]),s._v(" "),_("p",[_("strong",[s._v("Signature")])]),s._v(" "),_("p",[s._v("Signature 是对前两部分的签名，防止被篡改")]),s._v(" "),_("p",[s._v("首先需要指定一个密钥（secret）,这个密钥只有服务端知道，不能泄露。然后使用 header 中的算法进行签名，算出签名后将这三部分拼成一个字符串，用 "),_("code",[s._v(".")]),s._v(" 相隔，返回给用户。")]),s._v(" "),_("p",[s._v("客户端收到这个 JWT 后可以储存到 Cookie，也可以储存到 localStorage 中，之后每次与服务端通讯都要带上这个 JWT。")]),s._v(" "),_("p",[s._v("可以把 JWT 放在 Cookie 中，但是这样不能跨域，所以更高的办法是放到 HTTP 请求头中。另一种做法是跨域的时候，放在 POST 请求体里面。")]),s._v(" "),_("p",[_("strong",[s._v("JWT 优点")]),s._v("：")]),s._v(" "),_("ol",[_("li",[s._v("服务端不需要存储 session，减轻了服务端压力")]),s._v(" "),_("li",[s._v("可以跨域，应为 token 放在请求头里")])]),s._v(" "),_("p",[_("strong",[s._v("缺点：")])]),s._v(" "),_("ol",[_("li",[s._v("由于服务端不保存 session 状态，因此在使用中无法废除某个 token，也就是说在过期之前 token 始终有效")]),s._v(" "),_("li",[s._v("安全性，JWT 默认是不加密的，不要将敏感信息写入 JWT，但是也可以在生成原始 token 后再通过密钥加密一次。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);