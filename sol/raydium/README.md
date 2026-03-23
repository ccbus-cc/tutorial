---
description: Sol链上最大DEX
---

# Raydium V3加池子教程

V3是Raydium最新推出的一个流动性产品，具有以下特点：

* **新的做市逻辑：**采用了新的 CPMM 做市模式，有别于之前V2的AMM
* **不需要市场ID：**CPMM不再需要Openbook市场ID，可省去一笔ID创建费用
* **创池成本更低：**V3的池子创建收费0.2sol，是原先V2池子的一半
* **支持度不够：**例如PEPE机器人等尚不支持V3版本，只有我们的市值机器人支持
* **交易问题 ：**加了V3池子之后，偶尔可能会遇到无法交易的问题

### 1、加池子

我们打开Raydium的官网：[https://raydium.io/liquidity-pools/](https://raydium.io/liquidity-pools/)，点击右边的`创建`按钮

<figure><img src="../../.gitbook/assets/创建池 (2).png" alt=""><figcaption></figcaption></figure>

打开之后，选择**标准AMM池**，然后继续下一步

* 集中池创建麻烦，且价格不能波动太大，所以一般我们推荐创建标准AMM池

<figure><img src="../../.gitbook/assets/标准AMM池 (1).png" alt=""><figcaption></figcaption></figure>

### 2、确定价格和比例

在新的页面，我们需要填写相应的代币与数量，进行流动性创建

<figure><img src="../../.gitbook/assets/代币数量与sol数量 (2).png" alt=""><figcaption></figcaption></figure>

* **代币数量：**你要添加到池子里面的代币数量（你发行的代币）
* **Sol数量：**你的交易对代币（报价代币）
* **开盘时间：**代币开始交易的时间。这个时间之前，池子无法交易（UTC时间，与北京时间有8个小时时差）
* **开盘价格：**也就是代币初始价格，取决于你的代币数量与Sol数量。例如，我初始放入1亿枚代币和1个sol进入池子，那么我的开盘价格就是：0.00000001sol，换算成USDT就是0.00000182U

例如我填好的，类似于下面这样：

<figure><img src="../../.gitbook/assets/开盘时间 (1).png" alt=""><figcaption></figcaption></figure>

关于开盘时间这一块，在设置的时候，Raydium很人性化的给予了自动转换时区的功能，UTC时间与北京时间自动转换，所以设置起来就比较方便了，例如下面这样

<figure><img src="../../.gitbook/assets/时间设置 (1).png" alt=""><figcaption></figcaption></figure>

确定好没问题之后，点击初始化流动性，钱包确认支付费用就可以了。（注：加池手续费大概0.2sol左右）

<figure><img src="../../.gitbook/assets/sol钱包确认 (1).png" alt=""><figcaption></figcaption></figure>

池子创建成功后，会有个提示给你，如下图所示

<figure><img src="../../.gitbook/assets/池子创建成功 (1).png" alt=""><figcaption></figcaption></figure>

### 4、撤池子

池子加好之后怎么撤呢？这里也和大家说一下

我们打开Raydium，找到`我的投资组合`，页面链接：[https://beta.raydium.io/portfolio/](https://beta.raydium.io/portfolio/)选择标准流动池，就能看到自己的池子了

<figure><img src="../../.gitbook/assets/撤池子按钮 (1).png" alt=""><figcaption></figcaption></figure>

* 注：如果你设置了开盘时间，那要等到开盘后，才能看到池子

此时，如果你想撤池子，选择那个“-”按钮就可以了，如下所示：

<figure><img src="../../.gitbook/assets/撤池子比例 (1).png" alt=""><figcaption></figcaption></figure>

选择你要撤池子的比例，点击`移除流动性`，然后钱包确认，就可以了

### 5、相关问题

**1）`V3`有什么优点/缺点？**

* 答：V3的优点就是不用创建市场ID，省了笔钱。缺点就是一些狙击机器人不支持V3，没法用

**2）加了V3池子后能`锁池`吗？**

* 答：同样可以烧池子，具体等待我们开发

**3）代币没有关闭冻结权限，怎么办？**

<figure><img src="../../.gitbook/assets/微信截图_20240528170459.png" alt=""><figcaption></figcaption></figure>

* 答：需要去权限管理工具那里关闭冻结权限：[https://solana.ccbus.cc/control](https://solana.ccbus.cc/control)，方可继续操作。如果还是有提示，可能是raydium有缓存，需要更换网络或者刷新重试

**4）“应用程序错误：发生了客户端异常”应该怎么解决**

<figure><img src="../../.gitbook/assets/微信截图_20241001101529.png" alt=""><figcaption></figcaption></figure>

* 答：出现这个问题的原因主要是在谷歌浏览器开启翻译导致的，只要将翻译关闭，重新刷新试一下，这个问题就不会出现了

以上就是关于Raydium V3加池子/撤池子的全部教程了，如果有任何问题，请进入我们的电报群：[https://t.me/ccbus](https://t.me/ccbus)，找志愿者解答，谢谢
