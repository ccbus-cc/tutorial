---
description: V2 liquidity pool creation tutorial, supporting BSC, ETH, Base, and more
---

# Create Liquidity Pool Tutorial

## 1. What Is a Liquidity Pool?

A liquidity pool (LP, also called a "pool") is "a blockchain-based token reserve that enables exchanges to perform token swaps, typically composed of two tokens in a specific ratio."

**Purpose:** Without a pool, trading is impossible; the pool enables real-time token swaps.

## 2. Important Notes Before Adding a Pool

### 1. Add the Router Contract to the Whitelist

If your token has special features (e.g., manual launch, holding limits, etc.), you need to add the CCBus router contract to the whitelist first:

::: tip Router Contract Address
**CCBus Router:** `0x60c8E6DAAfD4D24fEa43E01CE1EC1ecDa3eE1143`
:::

### 2. Ensure Sufficient Wallet Balance

Your wallet must have enough gas fees. Adding a pool on BSC requires at least 0.032 BNB.

### 3. Difference Between V2 and V3

| Version | Description |
|---------|-------------|
| **V2** | Supports all token types (standard tokens, reflection/burn tokens, complex feature tokens) |
| **V3** | Only supports standard tokens; CCBus supports creating stable pools via V3 |

::: warning Note
Tokens with special features/mechanisms can only use V2. Currently, V3 pools only support standard tokens (mainly for stable pools) — please do not add the wrong type.
:::

## 3. Pool Creation Process

### 1. Connect Wallet

Open the pool creation page: [https://www.ccbus.cc/#/createliquidity](https://www.ccbus.cc/#/createliquidity), and click "Connect Wallet" in the top-right corner.

After connecting, your wallet address will be displayed in the top-right corner. Switch the blockchain network as needed (BSC for Binance Smart Chain, ETH for Ethereum).

<!-- TODO: Replace with CCBus screenshot -->
![Connect wallet](/images/placeholder.png)

### 2. Select Token

After connecting your wallet, choose the pool type and token:

| Parameter | Description |
|-----------|-------------|
| **Pool Type** | Default is V2; select V3 for stable pools |
| **Base Token** | The value token for the trading pair (e.g., USDT, BNB, etc.) |
| **Token Address** | The contract address of the token you created |

Click "Query Token" — if successful, it will prompt "Token is valid, please enter pool amounts."

<!-- TODO: Replace with CCBus screenshot -->
![Select token](/images/placeholder.png)

### 3. Enter Pool Amounts

Enter the amount of each token to add to the pool (cannot exceed your wallet balance).

::: tip Price Calculation
The ratio of the two token amounts determines the initial listing price of the token. For example, if you add 10,000 USDT and 10,000 tokens, the initial price is 10,000 / 10,000 = 1 USDT. Adjust the token ratio according to your needs to set the desired listing price.
:::

<!-- TODO: Replace with CCBus screenshot -->
![Enter amounts](/images/placeholder.png)

### 4. Approve Tokens

Both tokens need to be approved for the router contract (BNB/ETH does not require approval). Your wallet will pop up confirmation windows — each token needs to be approved separately. A success message will appear after approval.

<!-- TODO: Replace with CCBus screenshot -->
![Approve tokens](/images/placeholder.png)

### 5. Create Pool

Click "Add Pool Now," confirm in the wallet pop-up, and wait a few seconds for the pool to be created.

<!-- TODO: Replace with CCBus screenshot -->
![Creation successful](/images/placeholder.png)

## 4. FAQ

**Why does adding the pool fail?**

First, check whether you have enough BNB/ETH in your wallet — adding a pool on BSC requires at least 0.03 BNB. If your balance is sufficient, check whether the router address has been added to the whitelist.

**If the base token is BNB, can users buy with USDT?**

Yes. Trading pairs are interoperable — users can purchase with any paired token.

**Are there requirements for pool amounts?**

No specific requirements. You can add tokens in appropriate ratios based on your tokenomics and pricing needs. Generally, we recommend the pool be at least 300 USDT or 1 BNB.

**Will the estimated price change?**

The estimated price is only the initial listing price of your token. As trading continues, the price will fluctuate.

**What is the difference between V2 and V3?**

Tokens with special features/mechanisms can only use V2. Currently, V3 pools only support standard tokens (mainly for stable pools) — please do not add the wrong type.

If you have any questions, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
