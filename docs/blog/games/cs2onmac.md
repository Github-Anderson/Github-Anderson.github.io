---
comments: true
---

# 在 macOS 上畅玩 CS2

!!! warning "请勿过度玩梗！"
    
    此文章所介绍的梗或由此衍生出的梗，可能有被滥用的风险。 不分场合随意使用此梗可能会引来诸多人的厌恶。

### 序言

提起用 Mac 打游戏，大家肯定会想起这样一张meme图：

![](img/mac-gaming.jpg){width="300"}

不过梗终究还是梗，我们不妨实操一下看看 Mac 是不是真的不能打游戏。

以我投入时间较多的 *Counter-Strike 2*[^1]为例，这款游戏由于基于 DX12 开发，显然未像 [*CS:GO*]("Counter-Strike: Global Offensive") 一样对 Mac 和 Linux进行适配，从开发乃至内测阶段就与 Mac 无缘了。

[^1]: *Counter-Strike 2* 是一款由 Valve 开发的多人在线第一人称射击游戏。这款游戏延续了 [*CS:GO*]("Counter-Strike: Global Offensive") 的核心玩法，并结合了新的技术和功能。<https://www.counter-strike.net/cs2>

那么为何我还是能在 Mac 上和室友一起下厨呢？答案在下文：

### 0. 确认环境

- 确保使用的是 arm Mac，也就是搭载M系列SoC的 Mac，比如我这台 MacBook Pro 14"。

- 确保已更新到 macOS Sonoma 14.0 或更新。[^2]

[^2]: 需更新至 macOS Sonoma 以使用 Game Porting Toolkit，从而转译 DX12 的游戏。<https://developer.apple.com/download/all/>

### 1. 使用 CrossOver 运行 Windows 应用程序

官网下载 [CrossOver](https://www.codeweavers.com/crossover)，推荐使用正版。这里我所使用的版本为23.7。

### 2. 安装 Steam & 游戏本体

- 点击 "安装" $\to$ "Steam" $\to$ "安装"

![](img/co01.png)

- 容器选择 "Windows 10" 及更高，这里以 "Windows 10" 为例。

- 等待安装完字体、创建完容器后，以正常方式运行登录 Steam 并下载游戏。

- 下完后关闭 Steam，来到容器界面，可以看到有五个选项：

![](img/co03.png)

  |选项|介绍|
  |:--:|:--:|
  |**D3DMetal**|Game Porting Toolkit 中的图形API翻译层，支持 DirectX 11/12 游戏。<br />启用后，使用D3DMetal代替DXVK或wined3d默认值 :material-information-outline:{ title="与 DXVK 不可同时开启" }|
  |**DXVK**|基于Vulkan的翻译层，支持 DirectX 10/11 游戏。启用后，使用DXVK代替wined3d默认值 :material-information-outline:{ title="与 D3DMetal 不可同时开启" }|
  |**ESync**|基于 Eventfd 的同步，可提高帧率 :material-information-outline:{ title="与 MSync 不可同时开启" }|
  |**MSync**|基于 Memory 的同步，可提高帧率 :material-information-outline:{ title="与 ESync 不可同时开启" }|
  |**高分辨率模式**|启用 HiDPI 来运行游戏，无需开启|

- 现在可以成功运行 CS2 了！

!!! quote "提示"

    在游戏启动选项中添加"**-nojoy**"以提高帧率。

但运行一段时间后会发现：帧率还是太低了，强如 M1 Max 也只能跑60~70帧左右。那么有没有办法进一步提高帧率呢？

### 3. 运行 CXPatcher 对 CrossOver 进行优化

!!! example "警告"

    接下来的内容涉及修改软件本体，不属于官方支持和服务范围内！

- 需要到 <https://github.com/italomandara/CXPatcher> 下载 CXPatcher，这里我使用的是V0.4.10，对应CrossOver 23.7 & 23.7.1。

- 在输入"我不会向 CodeWeavers 请求支持或退款" 后，安装GStreamer。

- 在高级选项中禁用"使用独立的容器路径"，并将 CrossOver.app 拖入框中完成打补丁。

- 完成！至此，可以在 Mac 上高帧率畅玩 CS2 了。

### 后记

- CXPatcher 似乎只适用于 *CS2*，其他游戏如 *Cyberpunk 2077* 和 *幻兽帕鲁* 等游戏还未验证，需使用 D3DMetal 转译。