---
description: 在Turbos上创建CLMM资金池
---

# Turbos创建CLMM流动性资金池教程

[Turbos Finance](https://turbos.finance/) 是第一个建立在 Sui 上的去中心化零滑点永续合约交易和现货交易平台，由 Sui（Turbos）驱动的去中心化永续交易平台，交易效率更快、手续费更低、清算风险更低。

Turbos提供具有集中流动性做市商(CLMM) 模型和衍生品交易功能的自动做市商(AMM) 去中心化交易所，主打一个用户友好。

<img src="/images/1-首页.png" alt="" />

::: tip 提示
注意：本文仅作为教学演示，所涉及到的资金池和代币均**没有任何实际价值**，大家也不要进行任何形式的交易。如果因此造成资金损失，CCBus无法对此负责
:::

## 一、创建CLMM资金池

和[Cetus](cetus.md)类似，在Turbos上也只能创建CLMM资金池，无法创建AMM资金池。

### 1、连接钱包

连接钱包是所有操作的第一步，老手可以直接忽略。我们打开Turbos的官网：[https://app.turbos.finance/](https://app.turbos.finance/)，点击右上角Connect Wallet按钮，进行钱包连接

<img src="/images/2-连接钱包 (2).png" alt="" />

在弹出的钱包选项中，CCBus推荐大家选择[Suiet钱包](suiet.md)

<img src="/images/3-suiet钱包.png" alt="" />

和所有的DAPP一样，连接成功后，右上角会出现钱包地址。此时我们点击[Earn](https://app.turbos.finance/#/pools)这个按钮，即可找到创建池子的页面

<img src="/images/4-钱包连接成功.png" alt="" />

### 2、创建交易对

当然，我们也可以直接通过链接进入加池页面：[https://app.turbos.finance/#/pools](https://app.turbos.finance/#/pools)  ，进来之后，我们找到**Creat a Pool**这个位置，点击进入即可

<img src="/images/5-创建池子.png" alt="" />

第一步，我们需要先选择代币

<img src="/images/6-选择代币.png" alt="" />

* **base token：**基础代币，就是你发行的土狗币
* **quote token：**报价代币，就是SUI、USDT、USDC这种主流币

例如我通过合约地址选择CCBus作为基础代币，SUI作为报价代币，就是下面这样

<img src="/images/7-找到代币.png" alt="输入合约地址找到代币" />

<img src="/images/8-找到交易对.png" alt="找到交易对" />

确认好两个代币交易对之后，我们继续进入下一步

### 3、设置资金池

在资金池设置页面，我们需要设置费率、初始价格、价格范围等内容，具体可参考下图所示：

<img src="/images/9-资金池设置 (1).png" alt="" />

创建资金池可能涉及到的选择

* **费率/滑点：**虽然给出了多个等级，但是默认只能**选择1%**，没有其他选项
* **设置初始价格：**即代币的上线价格，如果是SUI池子，则该价格以SUI计价，例如我要设置CCBus的上线价格是0.0000001 SUI，那么在这个输入框里填入0.0000001即可
* **设置流动性范围：**其实就是该流动性的价格波动范围，这个大家请直接选择**Full**，即**全范围**，表示代币价格没有下限或上限。如果选择Custom，则需要设定一个价格下限与上限，这样不利于项目的长期运作
* **加池数量：**填写你要放入资金池的代币数量
* **提示：**最后会有一个提示，大概意思就是说，池子不能小于100U

了解完所有选项配置之后，CCBus填写的参数示意如下

<img src="/images/10-资金池设置.png" alt="" />

填写完成之后，点击Create Turbos pool and deposit（创建池子并存入代币），进行二次确认

<img src="/images/11-再次确认.png" alt="" />

再次确认信息无误之后，点击按钮，会弹出钱包进行确认

<img src="/images/11-钱包确认.png" alt="" />

钱包点击Approve后，等待几秒钟，Trubos会提示你创建成功

<img src="/images/12-创建成功.png" alt="" />

### 3、交易代币

池子创建成功后，就可以交易了。我们进入到Trurbos的官网首页：[https://app.turbos.finance/](https://app.turbos.finance/)  ，选择卖出CCBus代币3000万个

::: tip 提示
注意：做完池子后，等待至少30分钟后，才能交易。流动性池子初始化需要时间，无法立即开始交易
:::

<img src="/images/13-代币交易.png" alt="" />

点击Trade后，钱包确认即可完成交易

<img src="/images/14-交易成功.png" alt="" />

## 二、增加与撤出流动性池子

池子创建好之后，在哪里加池子和撤池子呢？首先，我们进入到Turbos的流动性管理页面：[https://app.turbos.finance/#/pools](https://app.turbos.finance/#/pools) ，选择[Manage Positions and Rewards](https://app.turbos.finance/#/pools?tab=position)（管理流动性与奖励）

<img src="/images/15-管理流动性.png" alt="管理流动性" />

之后就能看到你钱包里面的所有流动性了，包括流动性的金额、范围、APR等都很清晰的展示，我们选择要增加或者撤出的流动性交易对

<img src="/images/16-流动性png.png" alt="" />

在进入的页面里，就可以对这个流动性进行管理了，包括增加或者撤出流动性

<img src="/images/17-增加与撤出流动性.png" alt="" />

* Increase Liquidity：增加流动性（加池子）
* Remove Liquidity：撤出流动性（撤池子）

假设我们点击**增加流动性**，就可以按照比例进行增加相应的代币，然后钱包确认即可

<img src="/images/18-增加流动性.png" alt="加池子-增加流动性" />

假设我们点击撤出流动性，就可以按照比例进行移除相应的代币，然后钱包确认即可

<img src="/images/19-移除流动性.png" alt="撤池子-移除流动性" />

## 三、疑问解答

**1、为什么我加了池子后看不到自己的池子，也不能交易？**

* 答：池子初始化需要一些时间，大概30分钟之后才能看到池子，才能交易

**2、创建资金池的过程中不弹出钱包怎么办？**

* 答：如果在页面操作时间过久，就会这样，可以刷新页面重试。或者查看一下钱包是否锁住，如果上锁了，把钱包解锁后刷新页面就可以了

**3、Turbos创建池子要收费吗？**

* 答：根据实际操作经验来看，在Turbos创建池子不收取费用

如有大家还有不明白或者不清楚的地方，请加入官方电报Telegram群：[https://t.me/CCBus](https://t.me/CCBus)
