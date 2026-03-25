---
description: Token lock and liquidity pool lock tutorial
---

# Create Token Lock or Liquidity Lock Tutorial

## 1. Concept Overview

**Token Lock:** Locking tokens in a smart contract so they cannot be transferred, thereby reducing the circulating supply.

**Liquidity Lock (Pool Lock):** The project team locks LP token certificates, preventing liquidity removal and eliminating Rug Pull risk.

**LP Token Explained:** When you provide two tokens as liquidity, you receive LP tokens as proof of your contribution. Without LP tokens, you cannot remove liquidity from the pool.

**Pool Permissions:** Pools have no permission system — all liquidity providers share proportional ownership of the pool.

## 2. Token Lock Process

### 1. Connect Wallet

Open the lock page and connect your wallet in the upper right corner.

::: warning Important Notes
- Make sure only one wallet plugin is active
- Confirm that the wallet address and network selection are correct
:::

<!-- TODO: Replace with CCBus screenshot -->
![Lock Page](/images/placeholder.png)

### 2. Fill in Lock Information

| Parameter | Description |
|-----------|-------------|
| **Token Address** | Enter the token contract address |
| **Lock Amount** | Enter the amount to lock |
| **Unlock Date** | Select the unlock date |
| **Lock Title** | Create a descriptive name |

::: tip Important
Entering a pool address (LP token address) locks the liquidity pool; entering a token address locks the token.
:::

### 3. Approve Token

After confirming the information is correct, click Approve and confirm in your wallet.

### 4. Execute Lock

Carefully verify the date and amount, then click the Lock button and confirm in the wallet popup. Processing takes a few seconds.

<!-- TODO: Replace with CCBus screenshot -->
![Lock Successful](/images/placeholder.png)

### 5. View Lock Information

Go to the lock dashboard to view all lock records. After expiration, you can manage unlocking here. Users can also click "Renounce" to convert the lock to a permanent state.

## 3. Lock Liquidity Pool

### Method 1: Via the Lock Page

Enter the pool address (LP address) in the token address field — the remaining steps are exactly the same as token locking.

::: tip How to Get the Pool Address
You can view your pool address in the Liquidity Dashboard.
:::

### Method 2: Lock Directly from the Liquidity Dashboard

Open the Liquidity Dashboard, find your pool, and click the Lock button directly.

<!-- TODO: Replace with CCBus screenshot -->
![Liquidity Dashboard Lock](/images/placeholder.png)

**Lock Parameter Details:**

| Parameter | Description |
|-----------|-------------|
| **Lock Ratio** | Your share percentage in the pool |
| **Lock Amount** | Automatically calculated LP amount |
| **Unlock Date** | Based on local timezone; LP cannot be withdrawn before expiration |
| **Lock Title** | Optional name |
| **LP Approval** | Approval is required before locking |

::: warning Note
If you are the only liquidity provider in the pool, the ratio equals the pool ratio. If there are multiple providers, the calculation differs.
:::

After LP approval, confirm the lock and wait for completion.

## 4. FAQ

**Why did the lock fail?**

Confirm the token has no holding restrictions. Ensure there is at least 0.01 BNB in the wallet.

**Is there a fee for locking?**

Yes, each token lock or pool lock operation on BSC requires 0.01 BNB.

**Can I unlock early?**

No. The smart contract cannot be unlocked before the specified time.

**What timezone is used for the unlock time?**

It defaults to your local timezone — no manual adjustment is needed.

If you have any questions or need clarification, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
