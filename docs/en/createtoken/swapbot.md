---
description: Token batch trading and market cap management bot tutorial
---

# Token Batch Trading / Market Cap Management Tutorial

## 1. Market Cap Management Tool Overview

CCBus has developed an upgraded market cap management tool for EVM-compatible chains, supporting more blockchain networks, faster speeds, and diverse liquidity pool compatibility.

### Core Features

Users can import multiple wallet addresses and perform batch trades on a specific token, automating large-scale trading operations by configuring trade frequency and price parameters.

### Supported Networks and Pool Types

| Blockchain | Supported Exchanges |
|------------|-------------------|
| **BNB Chain** | PancakeSwap V2, V3 |
| **Ethereum** | Uniswap V2, V3 |
| **Avalanche** | Uniswap V2, V3 |
| **Polygon** | Uniswap V2, V3 |
| **Arbitrum** | Uniswap V2, V3 |
| **Optimism** | Uniswap V2, V3 |
| **Base** | Uniswap V2, V3 |

## 2. Instructions

### 1. Query Liquidity Pool

Configure basic parameters:

| Parameter | Description |
|-----------|-------------|
| **Select Chain** | Choose the blockchain where the target token resides |
| **Exchange Type** | Select V2 or V3 pool |
| **Quote Token** | Confirm the base token of your pool (BNB, ETH, USDT) |
| **Token Address** | Enter the target token's contract address |

After a successful query, the interface displays the token price and pool confirmation information.

<!-- TODO: Replace with CCBus screenshot -->
![Query Liquidity Pool](/images/placeholder.png)

### 2. Import Wallets

Click the Import button and enter wallet private keys (one per line). Typically, importing several dozen wallets is needed for effective operation.

After importing, refresh balances to confirm the token holdings of all imported addresses.

<!-- TODO: Replace with CCBus screenshot -->
![Import Wallets](/images/placeholder.png)

### 3. Buy/Sell Trade Settings

**Amount Configuration Methods:**
- **By Amount**: Fixed trade amount
- **By Percentage**: Percentage of wallet balance. For example, setting 1% with 1000 USDT in the wallet means the first trade executes 10 USDT

**Stop Conditions:**

| Parameter | Description |
|-----------|-------------|
| **Price Stop** | Stop after reaching the specified price |
| **Trade Count** | Stop after reaching the specified number of trades |
| **Interval** | Time between each trade (seconds) |
| **Threads** | Maximum simultaneous trades per second (max 6) |

### 4. Buy & Sell Trading (Auto Mode)

Unlike one-directional trading, buy & sell trading automatically executes both buy and sell operations.

| Parameter | Description |
|-----------|-------------|
| **Buy/Sell Amount Range** | Set the trade amount range |
| **Buy/Sell Probability Ratio** | Probability ratio of buys to sells (total equals 100%) |
| **Trade Count** | Stop condition |
| **Interval and Threads** | Same as above |

<!-- TODO: Replace with CCBus screenshot -->
![Buy & Sell Trade Settings](/images/placeholder.png)

## 3. FAQ

**Token address is correct but getting an error?**

Confirm that the blockchain and exchange pool type selections are correct.

**Trade failed?**

This is usually caused by insufficient gas or insufficient token balance.

**Are private keys secure?**

Private keys are stored only on your local computer's page and are not uploaded to any server.

**Is there a wallet limit?**

There is no theoretical limit, but several dozen wallets is generally the optimal balance between user experience and CPU performance.

**What are the fees?**

Please check the current fee schedule in the upper right corner of the tool page.

If you have any questions or need clarification, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
