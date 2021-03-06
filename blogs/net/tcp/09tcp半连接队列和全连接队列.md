---
title: TCP 半连接队列和全连接队列
date: 2021-1-8
tags:
 - TCP
categories:
 - 网络协议
---



#### 全连接队列和半连接队列概念

当服务器调用 listen 函数时，TCP 的状态从 CLOSED 状态变为 LISTEN 状态，同时在内核中创建两个队列，半连接队列和全连接队列。

**半连接队列 (SYN Queue)**

当客户端发送 SYN 包到服务端，服务端回复 SYN + ACK ，这是服务端状态从 LISTEN 变为 SYN_RCVD 状态，此时会将这个连接信息放入半连接队列，半连接队列被称为 SYN Queue，存储的是 “ inbound SYN packets”

服务器回复 SYN + ACK 后会开启一个定时器，如果超时还未收到 ACK 包就会重传 SYN + ACK，重传次数由 tcp_synack_retries 值确定，

当收到 ACK 后， 服务器就会**尝试**把他加入全连接队列。

![img](https://user-gold-cdn.xitu.io/2019/6/28/16b9dae5efc47de8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**全连接队列(Accept Queue)**

完成三次握手，但是还未被 accept() 取走的连接队列。如果全连接队列满，那么服务器会舍弃 客户端回复的 ACK 包。（应用层会认为这次连接还未建立）

**SYN Flood攻击**

SYN Flood 是一种广为人知的 DoS（拒绝服务攻击），通过客户端伪造大量 IP 发送 SYN 包，服务器端返回 SYN + ACK 到这些未知 IP 地址，会导致大量的连接处于 SYN_RCVD 状态，半连接队列很快就被占满，不能接收正常的用户请求。

**如何应对 SYN Flood攻击**

- 增大 SYN 连接数：tcp_max_syn_backlog

- 减少重传次数： tcp_synack_retries

- SYN Cookie 机制：简单来说就是三次握手的最后阶段才分配资源。 服务器收到 SYN 包后不马上分配资源，而是根据这个 SYN 包计算出一个 cookie值，作为第二次握手的序列号回复 SYN+ACK，等到对方回应 ACK 包时，检验回复的 ACK 值是否合法，如果合法才三次握手成功，分配资源。

  SYN Cookie 计算：（seq 序列号，MSS，时间戳）

  SYN Cookie 看起来比较完美，但是有不少问题：

  - 参与计算cookie的 MSS 只能是少数几种
  - 其他 TCP 选用项将不能使用，例如 WScale、SACK，因为服务器会在信息被用其他方式存储时丢弃 SYN 队列条目