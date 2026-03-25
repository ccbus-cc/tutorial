---
description: Multi-function token with minting, trade pause, blacklist, and holding limits
---

# Multi-Function Token Creation Tutorial

## 1. Feature Overview

A multi-function token is a collection of smart contracts with multiple capabilities, including token minting, trade pausing, blacklist functionality, and maximum holding limits. After deployment, users gain access to a rich set of operational options.

::: warning Security Audit Notice
After creation, some security audit platforms may flag the token as "risky." Standard tokens can eliminate these issues. By creating this type of token, you accept the audit risks. After creation, some audit platforms allow re-auditing after ownership is renounced to clear the flagged risks.
:::

## 2. Connect Wallet (Skip If Experienced)

First, select the chain on which you want to issue the token in MetaMask and switch to that chain. For example, if you want to issue a token on BSC, switch to the Binance Smart Chain.

If you want to issue on Base, switch to the Base chain. For Ethereum, switch to the ETH chain — we won't demonstrate each one here.

After switching chains, open the token creation page: [https://www.ccbus.cc/#/coinrelease/simpleControl](https://www.ccbus.cc/#/coinrelease/simpleControl), and click "Connect Wallet" in the top-right corner.

MetaMask will pop up asking you to confirm the wallet address to connect. Click "Next" and confirm, and the connection will be successful. You will see your `chain name` and `wallet address` in the top-right corner of the page — that means you're all set.

## 3. Parameter Description

After successfully connecting your wallet, fill in the parameters on the token creation page: [https://www.ccbus.cc/#/coinrelease/simpleControl](https://www.ccbus.cc/#/coinrelease/simpleControl)

<!-- TODO: Replace with CCBus screenshot -->
![Multi-function token creation form](/images/placeholder.png)

| Parameter | Description |
|-----------|-------------|
| **Token Name** | The full name of the token; supports Chinese, English, and mixed text |
| **Token Symbol** | The abbreviation of the token, e.g., ETH |
| **Total Supply** | The total supply of tokens issued; if minting is not enabled, the supply is fixed |
| **Decimals** | The number of decimal places for the token; e.g., 0.000001 represents 6 decimals; the default is usually 18 |
| **Receiving Address** | The wallet address that receives the tokens after creation. Defaults to the currently connected wallet, but you can enter a different address |

## 4. Feature Toggles

| Feature | Description |
|---------|-------------|
| **Mint Tokens** | When enabled, tokens can be minted from the console; once disabled, it cannot be re-enabled |
| **Pause Trading** | When enabled, all token transfers and trades can be paused; can be toggled on/off manually |
| **Blacklist** | Addresses can be added/removed; blacklisted wallets cannot sell or transfer tokens |
| **Max Holding Limit** | Sets the maximum token holding limit per wallet; if not enabled at launch, it cannot be enabled later |

## 5. Console Guide

After successfully issuing the token, you can access the console at: [https://www.ccbus.cc/#/coinrelease/console](https://www.ccbus.cc/#/coinrelease/console) to manage various token features:

<!-- TODO: Replace with CCBus screenshot -->
![Multi-function token console](/images/placeholder.png)

### Ownership Control

| Action | Description |
|--------|-------------|
| **Transfer Ownership** | Transfer the contract ownership to another address (remember to copy the `console link` before transferring) |
| **Renounce Ownership** | Send contract ownership to a black hole permanently (irreversible — all features will be disabled) |

### Trade Control

| Action | Description |
|--------|-------------|
| **Pause/Resume Trading** | Pause all transfer transactions for non-whitelisted addresses |
| **Modify Holding Limit** | Increase or decrease the holding limit per address |
| **Disable Holding Limit** | Once disabled, there is no longer any restriction on the number of tokens per address |
| **Manage Blacklist** | Add/remove blacklisted addresses |
| **Set Whitelist** | Whitelisted addresses are exempt from all restrictions |

### Token Management

| Action | Description |
|--------|-------------|
| **Mint Tokens** | Manually mint additional tokens |
| **Withdraw Contract Tokens** | Withdraw BNB and tokens from the contract address |

## 6. FAQ

**Why does adding liquidity fail?**

If the wallet holding limit is 100 tokens, but adding liquidity requires 101, it will fail. You can first add a pool with 99 tokens, then add the pool address to the holding whitelist.

**Why can't whitelisted users buy during a pause?**

Because the pool address is also unable to transfer during a pause. Add the pool address to the whitelist to restore trading.

**Why does selling fail during normal trading?**

The pool's token holding has reached the limit. You need to increase the holding limit or add the pool address to the holding whitelist.

If you have any questions, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
