import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'CCBus Documentation',
  description: 'CCBus - Blockchain Toolkit Help Documentation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Quick Start', link: '/en/guide/getting-started' },
      { text: 'Contact', link: '/en/contact' },
      { text: 'Pricing', link: '/en/price' },
    ],

    sidebar: sidebarEn(),

    editLink: {
      pattern: 'https://github.com/ccbus-lab/ccbus-lab.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'CCBus - Blockchain Toolkit',
      copyright: `Copyright © ${new Date().getFullYear()} CCBus`,
    },
  },
}

function sidebarEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'About CCBus', link: '/en/' },
        { text: 'Quick Start', link: '/en/guide/getting-started' },
        { text: 'Tool Navigation', link: '/en/navigation' },
        { text: 'Contact Us', link: '/en/contact' },
        { text: 'Pricing', link: '/en/price' },
      ],
    },
    {
      text: 'Token Creation',
      collapsed: false,
      items: [
        { text: 'Standard Token', link: '/en/createtoken/stardand' },
        { text: 'Hold Reflection Token', link: '/en/createtoken/holdreflection' },
        { text: 'Multi-Function Token', link: '/en/createtoken/simplecontrol' },
        { text: '314 Protocol Token', link: '/en/createtoken/314' },
        { text: 'LP Reflection Token', link: '/en/createtoken/lpreflection' },
        { text: 'LP Reflection + Referral', link: '/en/createtoken/lpwithinviter' },
        { text: 'Black Hole Reflection', link: '/en/createtoken/blackhole' },
        { text: 'Hold Compound + Referral', link: '/en/createtoken/holdwithinviter' },
        { text: 'Mint + LP Burn', link: '/en/createtoken/lpburn' },
        { text: 'Mint + Hold Reflection', link: '/en/createtoken/holdothers' },
        { text: 'LP Mining + Referral', link: '/en/createtoken/lpmine' },
        { text: 'Hold Dividend Tutorial', link: '/en/createtoken/token-reared' },
        { text: 'Create Liquidity Pool', link: '/en/createtoken/createliquidity' },
        { text: 'Create Stablecoin Pool', link: '/en/createtoken/createv3' },
        { text: 'Add/Remove Liquidity', link: '/en/createtoken/lpmanage' },
        { text: 'IDO Presale Creation', link: '/en/createtoken/createido' },
        { text: 'Staking Mining Creation', link: '/en/createtoken/createmine' },
        { text: 'Bundled Buy + Add Pool', link: '/en/createtoken/createbuy' },
        { text: 'Create Token/Pool Lock', link: '/en/createtoken/createlock' },
        { text: 'Unlock Pool or Token', link: '/en/createtoken/lockmanage' },
        { text: 'TP Wallet Token Creation', link: '/en/createtoken/tp' },
        { text: 'Batch Trading / Market Cap', link: '/en/createtoken/swapbot' },
        { text: 'Contract Verification', link: '/en/createtoken/verify-and-publish' },
        { text: 'Custom Token Contract', link: '/en/createtoken/stakebuyback' },
      ],
    },
    // Hidden for now, may bring back later
    // {
    //   text: 'Solana',
    //   collapsed: true,
    //   items: [
    //     { text: 'Solana Token Creation', link: '/en/sol/stardand' },
    //     { text: 'PUMP Launch & Bundle Buy', link: '/en/sol/createpump' },
    //     { text: 'Market Cap Bot', link: '/en/sol/swapbot' },
    //     { text: 'OpenBook Market ID', link: '/en/sol/market' },
    //     { text: 'pump.fun Market Cap Bot', link: '/en/sol/swapbotpump' },
    //     { text: 'Permission Management', link: '/en/sol/control' },
    //     { text: 'Update Token Info', link: '/en/sol/upload' },
    //     { text: 'Batch Airdrop', link: '/en/sol/batch-transfer' },
    //     { text: 'Batch Collection', link: '/en/sol/gather' },
    //     { text: 'Burn/Lock Pool', link: '/en/sol/burn' },
    //     { text: 'Batch Generate Wallets', link: '/en/sol/createwallet' },
    //     { text: 'Phantom Wallet Setup', link: '/en/sol/phantom' },
    //     {
    //       text: 'Raydium / DEX',
    //       collapsed: true,
    //       items: [
    //         { text: 'Raydium V3 Liquidity', link: '/en/sol/raydium/' },
    //         { text: 'Raydium V2 Liquidity', link: '/en/sol/raydium/raydium-v2' },
    //         { text: 'Orca Liquidity', link: '/en/sol/raydium/orca' },
    //         { text: 'Meteora Liquidity', link: '/en/sol/raydium/meteora' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   text: 'TON',
    //   collapsed: true,
    //   items: [
    //     { text: 'TON Token Creation', link: '/en/ton/stardand' },
    //     { text: 'STON.fi Liquidity', link: '/en/ton/ston' },
    //     { text: 'DeDust Liquidity', link: '/en/ton/dedust' },
    //     { text: 'Tonkeeper Wallet Setup', link: '/en/ton/tonkeeper' },
    //     { text: 'TonRaffles Lock Pool', link: '/en/ton/tonraffles' },
    //   ],
    // },
    // {
    //   text: 'Sui',
    //   collapsed: true,
    //   items: [
    //     { text: 'Sui Token Creation', link: '/en/sui/stardand' },
    //     { text: 'Sui Token Management', link: '/en/sui/control' },
    //     { text: 'Cetus Liquidity Pool', link: '/en/sui/cetus' },
    //     { text: 'Turbos CLMM Pool', link: '/en/sui/turbos' },
    //     { text: 'BlueMove AMM Pool', link: '/en/sui/bluemove' },
    //     { text: 'Sui Wallet Setup', link: '/en/sui/suiwallet' },
    //     { text: 'Suiet Wallet Setup', link: '/en/sui/suiet' },
    //   ],
    // },
    // {
    //   text: 'Tron',
    //   collapsed: true,
    //   items: [
    //     { text: 'Tron Token Creation', link: '/en/tron/stardand' },
    //     { text: 'Contract Verification', link: '/en/tron/verify' },
    //     { text: 'Token Info Registration', link: '/en/tron/record' },
    //     { text: 'Market Cap Bot', link: '/en/tron/trxbot' },
    //     { text: 'Batch Transfer', link: '/en/tron/multisend' },
    //     { text: 'TronLink Wallet Setup', link: '/en/tron/tronlink' },
    //     { text: 'SunSwap Liquidity', link: '/en/tron/sunswap' },
    //   ],
    // },
    {
      text: 'Presale',
      collapsed: true,
      items: [
        { text: 'Create Token Presale', link: '/en/presale/mintaddsale' },
      ],
    },
    {
      text: 'Cross-Chain Bridge',
      collapsed: true,
      items: [
        { text: 'Bridge Introduction', link: '/en/bridge/information' },
        { text: 'Usage Guide', link: '/en/bridge/course' },
      ],
    },
    {
      text: 'Tools',
      collapsed: true,
      items: [
        { text: 'Batch Transfer', link: '/en/tools/batch-transfer' },
        { text: 'LP Liquidity Fix', link: '/en/tools/lpfixtool' },
        { text: 'Batch Generate Wallets', link: '/en/tools/create-wallets' },
        { text: 'Batch Collection', link: '/en/tools/gather' },
        { text: 'Market Cap Bot', link: '/en/tools/operate' },
        { text: 'Contract Security Check', link: '/en/tools/contract-check' },
      ],
    },
    {
      text: 'Reference',
      collapsed: true,
      items: [
        { text: 'MetaMask Setup', link: '/en/practical-information/metamask' },
        { text: 'Contract Addresses', link: '/en/practical-information/smart-contract' },
        { text: 'Chain Parameters', link: '/en/practical-information/parameter' },
        { text: 'Testnet Faucets', link: '/en/practical-information/faucet' },
        { text: 'DEX Router Addresses', link: '/en/practical-information/jiao-yi-suo-lu-you-router' },
      ],
    },
    {
      text: 'FAQ',
      collapsed: true,
      items: [
        { text: 'PancakeSwap Liquidity', link: '/en/question/addlp' },
        { text: 'Ave Detection Green', link: '/en/question/ave' },
        { text: 'Token Logo Upload', link: '/en/question/logo' },
        { text: 'Lock Tokens & Pool', link: '/en/question/lock' },
        { text: 'V2 vs V3 Pools', link: '/en/question/swap' },
        { text: 'Uniswap V2 Liquidity', link: '/en/question/uniswapv2' },
        { text: 'Uniswap V3 Liquidity', link: '/en/question/uniswap' },
      ],
    },
    {
      text: 'Legal',
      collapsed: true,
      items: [
        { text: 'Terms of Service', link: '/en/declaration/terms-of-service' },
        { text: 'Disclaimer', link: '/en/declaration/disclaimer' },
      ],
    },
  ]
}
