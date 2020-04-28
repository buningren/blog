(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(t,e,p){"use strict";p.r(e);var n=p(33),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[p("a",{attrs:{href:"https://www.cnblogs.com/cckui/p/11506514.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),p("OutboundLink")],1)]),t._v(" "),p("p",[t._v("10分钟彻底搞懂Http的强制缓存和协商缓存")]),t._v(" "),p("p",[t._v("浏览器缓存\n浏览器缓存是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。")]),t._v(" "),p("p",[t._v("所以根据上面的特点，浏览器缓存有下面的优点：")]),t._v(" "),p("p",[t._v("减少冗余的数据传输\n减少服务器负担\n加快客户端加载网页的速度\n浏览器缓存是Web性能优化的重要方式。那么浏览器缓存的过程究竟是怎么样的呢？")]),t._v(" "),p("p",[t._v("在浏览器第一次发起请求时，本地无缓存，向web服务器发送请求，服务器起端响应请求，浏览器端缓存。过程如下：")]),t._v(" "),p("p",[t._v("在第一次请求时，服务器会将页面最后修改时间通过Last-Modified标识由服务器发送给客户端，客户端记录修改时间；服务器还会生成一个Etag，并发送给客户端。")]),t._v(" "),p("p",[t._v("浏览器后续再次进行请求时：")]),t._v(" "),p("p",[t._v("浏览器缓存主要分为强强缓存（也称本地缓存）和协商缓存（也称弱缓存）。根据上图，浏览器在第一次请求发生后，再次发送请求时：")]),t._v(" "),p("p",[t._v("浏览器请求某一资源时，会先获取该资源缓存的header信息，然后根据header中的Cache-Control和Expires来判断是否过期。若没过期则直接从缓存中获取资源信息，包括缓存的header的信息，所以此次请求不会与服务器进行通信。这里判断是否过期，则是强缓存相关。后面会讲Cache-Control和Expires相关。\n如果显示已过期，浏览器会向服务器端发送请求，这个请求会携带第一次请求返回的有关缓存的header字段信息，比如客户端会通过If-None-Match头将先前服务器端发送过来的Etag发送给服务器，服务会对比这个客户端发过来的Etag是否与服务器的相同，若相同，就将If-None-Match的值设为false，返回状态304，客户端继续使用本地缓存，不解析服务器端发回来的数据，若不相同就将If-None-Match的值设为true，返回状态为200，客户端重新机械服务器端返回的数据；客户端还会通过If-Modified-Since头将先前服务器端发过来的最后修改时间戳发送给服务器，服务器端通过这个时间戳判断客户端的页面是否是最新的，如果不是最新的，则返回最新的内容，如果是最新的，则返回304，客户端继续使用本地缓存。\n一 强制缓存\n强制缓存整体流程比较简单，就是在第一次访问服务器取到数据之后，在过期时间之内不会再去重复请求。实现这个流程的核心就是如何知道当前时间是否超过了过期时间。")]),t._v(" "),p("p",[t._v("强制缓存的过期时间通过第一次访问服务器时返回的响应头获取。在 http 1.0 和 http 1.1 版本中通过不同的响应头字段实现。")]),t._v(" "),p("p",[t._v("http 1.0\n在 http 1.0 版本中，强制缓存通过 Expires 响应头来实现。 expires 表示未来资源会过期的时间。也就是说，当发起请求的时间超过了 expires 设定的时间，即表示资源缓存时间到期，会发送请求到服务器重新获取资源。而如果发起请求的时间在 expires 限定的时间之内，浏览器会直接读取本地缓存数据库中的信息（from memory or from disk），两种方式根据浏览器的策略随机获取。")]),t._v(" "),p("p",[t._v("http 1.1\n在 http 1.1 版本中，强制缓存通过 Cache-Control 响应头来实现。Cache-Control 拥有多个值：")]),t._v(" "),p("p",[t._v("private：客户端可以缓存\npublic：客户端和代理服务器均可缓存；\nmax-age=xxx：缓存的资源将在 xxx 秒后过期；\nno-cache：需要使用协商缓存来验证是否过期；\nno-store：不可缓存\n最常用的字段就是 max-age=xxx ，表示缓存的资源将在 xxx 秒后过期。一般来说，为了兼容，两个版本的强制缓存都会被实现。")]),t._v(" "),p("p",[t._v("总结\n强制缓存只有首次请求才会跟服务器通信，读取缓存资源时不会发出任何请求，资源的 Status 状态码为 200，资源的 Size 为 from memory 或者 from disk ，http 1.1 版本的实现优先级会高于 http 1.0 版本的实现。")]),t._v(" "),p("p",[t._v("二 协商缓存")]),t._v(" "),p("p",[t._v("协商缓存与强制缓存的不同之处在于，协商缓存每次读取数据时都需要跟服务器通信，并且会增加缓存标识。在第一次请求服务器时，服务器会返回资源，并且返回一个资源的缓存标识，一起存到浏览器的缓存数据库。当第二次请求资源时，浏览器会首先将缓存标识发送给服务器，服务器拿到标识后判断标识是否匹配，如果不匹配，表示资源有更新，服务器会将新数据和新的缓存标识一起返回到浏览器；如果缓存标识匹配，表示资源没有更新，并且返回 304 状态码，浏览器就读取本地缓存服务器中的数据。")]),t._v(" "),p("p",[t._v("在 http 协议的 1.0 和 1.1 版本中也有不同的实现方式。")]),t._v(" "),p("p",[t._v("http 1.0")]),t._v(" "),p("p",[t._v("在 http 1.0 版本中，第一次请求资源时服务器通过 Last-Modified 来设置响应头的缓存标识，并且把资源最后修改的时间作为值填入，然后将资源返回给浏览器。在第二次请求时，浏览器会首先带上 If-Modified-Since 请求头去访问服务器，服务器会将 If-Modified-Since 中携带的时间与资源修改的时间匹配，如果时间不一致，服务器会返回新的资源，并且将 Last-Modified 值更新，作为响应头返回给浏览器。如果时间一致，表示资源没有更新，服务器返回 304 状态码，浏览器拿到响应状态码后从本地缓存数据库中读取缓存资源。")]),t._v(" "),p("p",[t._v("这种方式有一个弊端，就是当服务器中的资源增加了一个字符，后来又把这个字符删掉，本身资源文件并没有发生变化，但修改时间发生了变化。当下次请求过来时，服务器也会把这个本来没有变化的资源重新返回给浏览器。")]),t._v(" "),p("p",[t._v("http 1.1\n在 http 1.1 版本中，服务器通过 Etag 来设置响应头缓存标识。Etag 的值由服务端生成。在第一次请求时，服务器会将资源和 Etag 一并返回给浏览器，浏览器将两者缓存到本地缓存数据库。在第二次请求时，浏览器会将 Etag 信息放到 If-None-Match 请求头去访问服务器，服务器收到请求后，会将服务器中的文件标识与浏览器发来的标识进行对比，如果不相同，服务器返回更新的资源和新的 Etag ，如果相同，服务器返回 304 状态码，浏览器读取缓存。")]),t._v(" "),p("p",[t._v("总结\n协商缓存每次请求都会与服务器交互，第一次是拿数据和标识的过程，第二次开始，就是浏览器询问服务器资源是否有更新的过程。每次请求都会传输数据，如果命中缓存，则资源的 Status 状态码为 304 而不是 200 。同样的，一般来讲为了兼容，两个版本的协商缓存都会被实现，http 1.1 版本的实现优先级会高于 http 1.0 版本的实现。")])])}),[],!1,null,null,null);e.default=v.exports}}]);