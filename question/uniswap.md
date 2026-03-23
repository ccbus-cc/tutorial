# Uniswap V3怎么加池子？

### Uniswap V3介绍

与 v2 相比，v3 主要有两点创新：集中流动性和多层级费率。

#### 集中流动性

在 Uniswap v2 中，流动性沿着 x\*y=k 的价格曲线均匀分布，为从 0 到无穷大的报价提供支撑。但对于大多数资金池来说，分布于曲线两端（即报价接近 0 或无穷大）的流动性其实从未被使用过，导致了 v2 资金池中资金使用率低下的问题。

Uniswap v3 通过「集中流动性」功能，允许 LP（流动性提供者） 为特定的价格区间提供流动性，并将不同用户对同一交易对提供的流动性汇总到一个池子里（形成一条综合曲线）供用户交易，从而提高资金利用率。

另外值得注意的是，由于用户在提供流动性时对价格区间设置的偏好不同，表示 LP 流动性凭证的代币格式从 ERC-20 变成了 NFT。

#### 多层级费率

Uniswap v3 为 LP 提供了三级费率，其官方推荐的稳定币、常规资产和小众资产的费率分别为 0.05%、0.3% 和 1%。通过费率分级，使 LP 所承受的风险和收益相匹配，也使资金池更加多样和平衡。

具体而言，为稳定币交易对提供流动性的 LP 承担的风险较小（即潜在的无常损失小），因此对应的交易对费率较低；而小众资产的价格波动往往较大，为其提供流动性的 LP 承担的风险更大，因此对应的交易对费率较高。

鉴于 Uniswap v3 的操作界面和设置发生了变化，CCBus准备了一份针对 v3 的教程，手把手教你在V3添加流动性

### Uniswap V3添加流动性教程

1.点击「资金池」-「+ New Position」，选择要添加的代币并设置手续费费率。0.05% 适合稳定币交易对，0.3% 适合常规资产交易对，1% 适合小众资产交易对。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/1/13206d68aed233965cc9a322c162d18c7b2ec404_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

2.设置价格区间。Min Price 是最低价，Max Price 是最高价，Current Price 是当前该资金池中的成交价（即当前汇率）。根据自己想要提供流动性的价格区间设置对应的 Min Price 和 Max Price 即可。

当市场价格在你设置的价格区间内时，一种资产将沿着综合曲线被部分兑换成另一种资产；当市场价格在价格区间外时，一种资产将会被完全兑换成另一种资产，直到市场价格重新进入你指定的价格区间或者你也可以选择重新调整价格区间。

注意，你只能获得在你所设置的价格区间内成交交易的手续费奖励；如果成交价格超出你指定的价格区间，那么你将无法获得对应交易的手续费奖励。因此建议将价格区间设置得较宽一些。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/4/4832cfcd1d086f75890a39dac77c18bddddfbabf_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

3.设置要投入的代币数量。如果你是第一次提供某币种的流动性，则需要先对该币种进行授权。图中以 USDT 为例，点击「Approve USDT」进行授权，授权成功后再点击「Add」进入下一步。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/d/d33306a7adff7dfbb85bb1cd721bf4eea73a4fdf_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

4.再次点击「Add」确认提供流动性，当交易发出后需要等待处理。成功后，即可在 Uniswap 的资金池页面看到存入的流动性。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/2/2ebc0eed78bd073d9049053a892e89ba82acd405_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

5.点击「In range」即可查看在 Uniswap v3 存入流动性获取的 NFT（即流动性凭证），该 NFT 是一张动态的图片，展示了交易对、手续费率、ID 和价格区间等信息。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/a/ad3fc92f01283f628a03334abac4075b36a19eb8_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

### 如何退出流动性 <a href="#e5a682e4bd95e98080e587ba" id="e5a682e4bd95e98080e587ba"></a>

1.同上面兑换教程先在 DApp 浏览页面找到并打开 Uniswap，切换至资金池页面。接着点击「Remove Liquidity」，输入要退出流动性的资金数额，如果要全部退出，点击「Max」即可，然后点击「Remove」。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/4/419e0aae57f05d6179b0ba78829ba68971da4116_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

2.在弹出的流动性移除详情页中再次点击「Remove」-「确认」，交易发出后需要等待处理。成功后，即可在 Uniswap 的资金池页面看到提示。回到 imToken 资产页面也会看到同步更新的资产数额。

流动性移除后，LP 仍能在 Uniswap 和 imToken 看到代表仓位的 NFT，但此时该仓位会在 Uniswap 上显示为 Inactive（非活跃）的状态。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/9/9d9f0d4057e3cc1e05710980b06fb4dfe8df4a37_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

### v2->v3 流动性的迁移 <a href="#v2-v3" id="v2-v3"></a>

LP 在 Uniswap v2 和 SushiSwap 上的流动性可通过 Uniswap 官方提供的工具迁移至 v3。

1.在资金池页面点击「More」-「Migrate」。

<figure><img src="https://imtoken.fans/uploads/default/optimized/2X/f/f91713c6d568443c2fa3b7f1b7229d085bfd3fd0_2_668x500.jpeg" alt=""><figcaption></figcaption></figure>

2.选择要迁移的仓位，接着按照流动性添加的步骤设置价格区间和费率后，确认添加即可。
