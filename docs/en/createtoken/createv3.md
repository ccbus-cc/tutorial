---
description: Stablecoin liquidity pool creation tutorial with fixed token price
---

# Create Stablecoin Liquidity Pool Tutorial

## 1. What Is a Stablecoin Pool?

A stablecoin pool is a special type of liquidity pool used when creating stablecoins on chains such as BSC, Ethereum, and others.

**What is a stablecoin?** A token whose trading price remains relatively stable. Native stablecoins like USDT and USDC are pegged to the US dollar, while the stablecoins discussed in this tutorial are pegged to USDT/USDC.

**How is the price kept stable?** By creating a liquidity pool that fixes the exchange ratio between the token and USDT (e.g., "1 token = 1 USDT"), the ratio remains constant regardless of trading volume.

## 2. How to Create a Stablecoin Pool

### Step 1: Issue a Standard Token

Before creating a stable pool, you need to issue a token. Requirements: no transaction tax, no holding limits.

Recommended types:
- [Standard Token Creation](/en/createtoken/stardand)
- [Multi-Function Token Creation](/en/createtoken/simplecontrol)

### Step 2: Go to the Stable Pool Creation Page

Visit: [https://www.ccbus.cc/#/createV3](https://www.ccbus.cc/#/createV3)

<!-- TODO: Replace with CCBus screenshot -->
![Stable pool creation page](/images/placeholder.png)

Steps:
- Connect wallet in the top-right corner
- Select the corresponding blockchain

### Step 3: Enter Token Information and Query

| Parameter | Description |
|-----------|-------------|
| **Select Exchange** | BSC chain defaults to Pancake V3 |
| **Select Base Token** | Usually USDT |
| **Token Address** | Enter the contract address of your issued token |

Click "Query Token" — a success message will appear if the query is successful.

<!-- TODO: Replace with CCBus screenshot -->
![Query token](/images/placeholder.png)

### Step 4: Confirm Trading Price and Pool Amount

| Parameter | Description |
|-----------|-------------|
| **Trading Price** | The price at which the token will be stabilized. Once set, all buys and sells execute at this price |
| **Pool Amount** | The number of tokens to deposit into the pool |

::: tip Single-Token Pool
Stablecoin liquidity pools use a "single-token pool mode." You only need to deposit the issued token — USDT/USDC does not need to be added to the pool.
:::

### Step 5: Approve and Create

1. Click "Approve Token" — wallet pop-up will appear for confirmation
2. After approval, click the "Add Pool Now" button
3. Perform the secondary confirmation
4. Wallet will display a final confirmation — confirm to proceed

<!-- TODO: Replace with CCBus screenshot -->
![Creation successful](/images/placeholder.png)

Trading can begin once the pool is successfully created.

## 3. FAQ

**Why can't the token be found?**

Make sure the token contract address and selected chain are correct. If everything is correct, try switching networks and refreshing the page.

**Is the token price guaranteed to be stable?**

Yes. Once created, the buy and sell price remains fixed.

**The pool has no USDT — how can I sell?**

Single-token pools only contain the issued token. Without USDT, selling is not possible. Someone needs to buy first to deposit USDT into the pool, after which selling becomes available.

**Can I add other pools after creating a stable pool?**

No. The purpose of a stable pool is to maintain a fixed price — other pools would change the price.

**Can the price be modified later?**

No. Once created, the price is fixed and cannot be adjusted.

**Will wallets display the token price after trading?**

Not necessarily. Each wallet has different logic for displaying token prices — consult the wallet provider.

If you have any questions, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
