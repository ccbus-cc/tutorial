import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'CCBus 帮助文档',
  description: 'CCBus - 区块链工具箱帮助文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '快速开始', link: '/zh/guide/getting-started' },
      { text: '联系我们', link: '/zh/contact' },
      { text: '服务费用', link: '/zh/price' },
    ],

    sidebar: sidebarZh(),

    editLink: {
      pattern: 'https://github.com/ccbus-lab/ccbus-lab.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: 'CCBus - 区块链工具箱',
      copyright: `Copyright © ${new Date().getFullYear()} CCBus`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
}

function sidebarZh(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '入门指南',
      collapsed: false,
      items: [
        { text: '关于 CCBus', link: '/zh/' },
        { text: '快速开始', link: '/zh/guide/getting-started' },
        { text: '工具导航', link: '/zh/navigation' },
        { text: '联系我们', link: '/zh/contact' },
        { text: '服务费用', link: '/zh/price' },
      ],
    },
    {
      text: '代币创建',
      collapsed: false,
      items: [
        { text: '标准代币', link: '/zh/createtoken/stardand' },
        { text: '分红本币', link: '/zh/createtoken/holdreflection' },
        { text: '多功能代币创建教程', link: '/zh/createtoken/simplecontrol' },
        { text: '314协议发币教程', link: '/zh/createtoken/314' },
        { text: 'LP分红代币', link: '/zh/createtoken/lpreflection' },
        { text: 'LP分红+推荐奖励', link: '/zh/createtoken/lpwithinviter' },
        { text: '黑洞分红教程', link: '/zh/createtoken/blackhole' },
        { text: '持币复利+推荐奖励', link: '/zh/createtoken/holdwithinviter' },
        { text: 'Mint+底池燃烧', link: '/zh/createtoken/lpburn' },
        { text: 'Mint+持币暴力分红', link: '/zh/createtoken/holdothers' },
        { text: 'LP挖矿+推荐奖励', link: '/zh/createtoken/lpmine' },
        { text: '持币分红教程', link: '/zh/createtoken/token-reared' },
        { text: '创建流动性资金池教程', link: '/zh/createtoken/createliquidity' },
        { text: '创建稳定币流动池教程', link: '/zh/createtoken/createv3' },
        { text: '增加/移除流动性资金池教程', link: '/zh/createtoken/lpmanage' },
        { text: 'IDO预售公募创建教程', link: '/zh/createtoken/createido' },
        { text: '质押挖矿创建教程', link: '/zh/createtoken/createmine' },
        { text: '加池开盘并捆绑买入教程', link: '/zh/createtoken/createbuy' },
        { text: '创建锁池或锁仓教程', link: '/zh/createtoken/createlock' },
        { text: '解锁池子或代币教程', link: '/zh/createtoken/lockmanage' },
        { text: '手机TP钱包发币教程', link: '/zh/createtoken/tp' },
        { text: '代币批量交易/市值管理教程', link: '/zh/createtoken/swapbot' },
        { text: '合约开源教程', link: '/zh/createtoken/verify-and-publish' },
        { text: '代币合约定制', link: '/zh/createtoken/stakebuyback' },
      ],
    },
    // Hidden for now, may bring back later
    // {
    //   text: 'Solana链',
    //   collapsed: true,
    //   items: [
    //     { text: 'Solana一键发币教程', link: '/zh/sol/stardand' },
    //     { text: 'PUMP发币与捆绑买入教程', link: '/zh/sol/createpump' },
    //     { text: 'Solana市值管理机器人教程', link: '/zh/sol/swapbot' },
    //     { text: 'OpenBook市场ID创建教程', link: '/zh/sol/market' },
    //     { text: 'pump.fun市值管理机器人教程', link: '/zh/sol/swapbotpump' },
    //     { text: 'Solana权限管理', link: '/zh/sol/control' },
    //     { text: 'Solana更新代币资料', link: '/zh/sol/upload' },
    //     { text: 'Solana批量空投教程', link: '/zh/sol/batch-transfer' },
    //     { text: 'Solana批量归集教程', link: '/zh/sol/gather' },
    //     { text: 'SOL烧池子/锁池教程', link: '/zh/sol/burn' },
    //     { text: 'Solana批量生成钱包地址', link: '/zh/sol/createwallet' },
    //     { text: '幻影钱包Phantom安装教程', link: '/zh/sol/phantom' },
    //     {
    //       text: 'Raydium / DEX',
    //       collapsed: true,
    //       items: [
    //         { text: 'Raydium V3加池子教程', link: '/zh/sol/raydium/' },
    //         { text: 'Raydium V2加池子教程', link: '/zh/sol/raydium/raydium-v2' },
    //         { text: 'Orca加池子/撤池子教程', link: '/zh/sol/raydium/orca' },
    //         { text: 'Meteora加池子/撤池子教程', link: '/zh/sol/raydium/meteora' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   text: 'TON链',
    //   collapsed: true,
    //   items: [
    //     { text: 'TON一键发币教程', link: '/zh/ton/stardand' },
    //     { text: 'STON.fi加池子教程', link: '/zh/ton/ston' },
    //     { text: 'DeDust加池子教程', link: '/zh/ton/dedust' },
    //     { text: 'Tonkeeper钱包安装教程', link: '/zh/ton/tonkeeper' },
    //     { text: 'TON锁池平台TonRaffles教程', link: '/zh/ton/tonraffles' },
    //   ],
    // },
    // {
    //   text: 'Sui链',
    //   collapsed: true,
    //   items: [
    //     { text: 'Sui链一键发币教程', link: '/zh/sui/stardand' },
    //     { text: 'Sui代币增发与更新资料', link: '/zh/sui/control' },
    //     { text: 'Cetus创建流动性资金池', link: '/zh/sui/cetus' },
    //     { text: 'Turbos创建CLMM资金池', link: '/zh/sui/turbos' },
    //     { text: 'BlueMove创建AMM资金池', link: '/zh/sui/bluemove' },
    //     { text: 'Sui Wallet安装教程', link: '/zh/sui/suiwallet' },
    //     { text: 'Suiet钱包安装教程', link: '/zh/sui/suiet' },
    //   ],
    // },
    // {
    //   text: '波场链',
    //   collapsed: true,
    //   items: [
    //     { text: '波场Tron一键发币教程', link: '/zh/tron/stardand' },
    //     { text: '波场代币合约验证和开源教程', link: '/zh/tron/verify' },
    //     { text: '波场代币信息录入教程', link: '/zh/tron/record' },
    //     { text: '波场Tron市值管理机器人教程', link: '/zh/tron/trxbot' },
    //     { text: '波场Tron批量转账工具教程', link: '/zh/tron/multisend' },
    //     { text: '波宝钱包TronLink安装教程', link: '/zh/tron/tronlink' },
    //     { text: 'SunSwap流动性资金池教程', link: '/zh/tron/sunswap' },
    //   ],
    // },
    {
      text: '创建预售',
      collapsed: true,
      items: [
        { text: '创建代币预售教程', link: '/zh/presale/mintaddsale' },
      ],
    },
    {
      text: '跨链闪兑',
      collapsed: true,
      items: [
        { text: '跨链桥介绍', link: '/zh/bridge/information' },
        { text: '使用教程', link: '/zh/bridge/course' },
      ],
    },
    {
      text: '操作工具',
      collapsed: true,
      items: [
        { text: '批量转账教程', link: '/zh/tools/batch-transfer' },
        { text: 'LP流动性修复', link: '/zh/tools/lpfixtool' },
        { text: '批量生成钱包', link: '/zh/tools/create-wallets' },
        { text: '批量归集工具', link: '/zh/tools/gather' },
        { text: '市值管理机器人', link: '/zh/tools/operate' },
        { text: '合约安全检测', link: '/zh/tools/contract-check' },
        { text: '靓号地址生成器', link: '/zh/tools/vanity-address' },
      ],
    },
    {
      text: '实用信息',
      collapsed: true,
      items: [
        { text: '小狐狸插件安装教程', link: '/zh/practical-information/metamask' },
        { text: '主流币合约地址', link: '/zh/practical-information/smart-contract' },
        { text: '公链配置参数', link: '/zh/practical-information/parameter' },
        { text: '测试币水龙头', link: '/zh/practical-information/faucet' },
        { text: '交易所路由Router', link: '/zh/practical-information/jiao-yi-suo-lu-you-router' },
      ],
    },
    {
      text: '常见问题',
      collapsed: true,
      items: [
        { text: 'PancakeSwap薄饼加池/撤池教程', link: '/zh/question/addlp' },
        { text: 'Ave检测怎么才能全绿？', link: '/zh/question/ave' },
        { text: '代币怎么上头像logo？', link: '/zh/question/logo' },
        { text: '如何锁仓与锁池？', link: '/zh/question/lock' },
        { text: 'V2和V3的池子差异？', link: '/zh/question/swap' },
        { text: 'Uniswap V2创建流动性教程', link: '/zh/question/uniswapv2' },
        { text: 'Uniswap V3加池子教程', link: '/zh/question/uniswap' },
      ],
    },
    {
      text: '相关声明',
      collapsed: true,
      items: [
        { text: '服务条款', link: '/zh/declaration/terms-of-service' },
        { text: '免责声明', link: '/zh/declaration/disclaimer' },
      ],
    },
  ]
}
