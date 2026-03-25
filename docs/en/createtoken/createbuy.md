---
description: Add liquidity and bundled buy tutorial — multiple addresses buy simultaneously at the lowest price
---

# Add Liquidity and Bundled Buy Tutorial

## 1. What Is a Bundled Buy?

When a token goes live and the first liquidity pool is created, multiple addresses can simultaneously purchase the token at the lowest price. This synchronized operation combines adding liquidity with an immediate token purchase.

### Why Use Bundled Buy?

- **Lowest Price Acquisition**: The project team acquires tokens faster and with a higher success rate than manual buying
- **Fair Distribution**: Builds user trust by purchasing rather than pre-allocating tokens
- **Anti-Bot**: Buys at the exact moment of liquidity addition — faster and at a better price than automated bots

## 2. Important Notes

### 1. Add the Router Contract to the Whitelist

If your token has special features (such as manual launch, holding limits, etc.), you need to add the CCBus router contract to the whitelist first:

::: tip Router Contract Address
**CCBus Router:** `0x60c8E6DAAfD4D24fEa43E01CE1EC1ecDa3eE1143`
:::

### 2. Add Bundled Addresses to the Whitelist

If your token has trading restrictions or anti-bot measures, you need to add all bundled buy addresses to the whitelist in advance.

### 3. Ensure Sufficient BNB Balance

The liquidity-adding address must hold enough BNB to cover both the liquidity addition fee and the gas fee for the bundled buy.

### 4. Private Key Security Reminder

::: warning Security Warning
Bundled buy requires importing private keys. Although CCBus does not store private keys, please ensure your computer is secure and guard against malware and clipboard leaks.
:::

## 3. Step-by-Step Process

### 1. Connect Wallet

Visit: [https://www.ccbus.cc/#/createliquiditybuy](https://www.ccbus.cc/#/createliquiditybuy) and connect your wallet in the upper right corner.

<!-- TODO: Replace with CCBus screenshot -->
![Connect Wallet](/images/placeholder.png)

### 2. Select Token

| Parameter | Description |
|-----------|-------------|
| **Pool Type** | Default is V2; select V3 for stablecoins |
| **Base Token** | Value token such as USDT or BNB |
| **Token Address** | Your token contract address |
| **Private Key** | Private key of the liquidity-adding wallet |

Click "Query Token" — on success, you will see the prompt "Token is valid, please enter the liquidity amount."

<!-- TODO: Replace with CCBus screenshot -->
![Select Token](/images/placeholder.png)

### 3. Enter Liquidity Amount

The amount cannot exceed the wallet balance. The ratio between the two token amounts determines the initial price.

### 4. Import Bundled Address Private Keys

Supports manual or batch import (minimum 25 addresses). Each bundled wallet needs at least 0.01 BNB (including 0.005 BNB for gas plus the minimum buy amount).

<!-- TODO: Replace with CCBus screenshot -->
![Import Private Keys](/images/placeholder.png)

### 5. Create Pool

Click "Add Liquidity Now" and wait for the completion confirmation.

<!-- TODO: Replace with CCBus screenshot -->
![Creation Successful](/images/placeholder.png)

## 4. FAQ

**Why does a standard token fail?**

Make sure wallet balances are sufficient: bundled wallets need at least 0.01 BNB; the liquidity-adding wallet needs 0.02 BNB per address.

**Why does a feature token fail?**

Check whether the router address and bundled addresses have been added to the whitelist, confirm that trading is not manually locked, and verify that holding limits are not in effect.

**Will bundled addresses get flagged by anti-bot measures?**

If the token has anti-bot features, yes. Please add bundled addresses to the whitelist in advance.

**The base token is BNB — can I buy with USDT?**

Yes, paired assets can be exchanged.

**Are there requirements for the liquidity amount?**

There are no strict requirements — set it according to your tokenomics. Generally, a pool larger than 300 USDT or 1 BNB is recommended.

**What is the difference between V2 and V3?**

Feature tokens can only use V2; V3 currently only supports standard tokens and is mainly used for stable pools.

If you have any questions or need clarification, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
