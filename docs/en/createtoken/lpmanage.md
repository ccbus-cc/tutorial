---
description: Tutorial for adding, removing, and locking liquidity pools
---

# Add/Remove Liquidity Pool Tutorial

Users who have already created a liquidity pool on PancakeSwap or Uniswap can view and manage their pools through the CCBus "Liquidity Console."

Two main operations are supported:
- **Add Liquidity**: Inject more tokens into the pool to expand its size
- **Remove Liquidity**: Withdraw funds from the pool to stop trading

## 1. Connect Wallet

Open the Liquidity Console: [https://www.ccbus.cc/#/LPmanage](https://www.ccbus.cc/#/LPmanage), connect your wallet in the top-right corner, and select the corresponding blockchain. After connecting, refresh the page to automatically view your liquidity positions.

<!-- TODO: Replace with CCBus screenshot -->
![Liquidity console](/images/placeholder.png)

## 2. Add Liquidity

After clicking the "Add Liquidity" button:

| Step | Description |
|------|-------------|
| **Enter Amount** | Enter the amounts of both tokens (base token and your token) to add to the pool |
| **Approve Tokens** | Approve both tokens separately via wallet confirmation |
| **Confirm Addition** | After verifying the amounts and approvals, click to execute |

<!-- TODO: Replace with CCBus screenshot -->
![Add liquidity](/images/placeholder.png)

A success message will appear after the liquidity is added.

## 3. Remove Liquidity

Removing liquidity means withdrawing tokens from the pool. You can withdraw proportionally or withdraw everything.

| Parameter | Description |
|-----------|-------------|
| **Removal Percentage** | Select a withdrawal percentage from 0-100% |
| **LP Amount** | Automatically calculated; these LP tokens will be burned |
| **Estimated Return** | The estimated amounts of the two tokens to be returned |
| **Receiving Wallet** | Defaults to the operating wallet; you can also enter a different address |
| **LP Approval** | LP must be approved via the router contract before removal |

<!-- TODO: Replace with CCBus screenshot -->
![Remove liquidity](/images/placeholder.png)

Click "Confirm Withdrawal," then wait for wallet confirmation and the success message.

## 4. Lock Liquidity (Lock Pool)

Locking liquidity prevents pool withdrawal, protecting investor interests.

| Parameter | Description |
|-----------|-------------|
| **Lock Percentage** | The percentage of your pool share (note: this is not the percentage of total liquidity) |
| **Lock Amount** | Automatically calculated LP amount |
| **Unlock Date** | Set according to your time zone; withdrawal is not possible before expiry (irreversible) |
| **Lock Title** | Optional naming field |
| **LP Approval** | Approval is required before locking |

<!-- TODO: Replace with CCBus screenshot -->
![Lock liquidity](/images/placeholder.png)

After successfully locking, you can view the lock information in the lock console.

## 5. FAQ

**Why does adding/removing liquidity fail?**

Insufficient native tokens (BSC chain requires at least 0.011 BNB), or the router address has not been added to the whitelist.

::: tip Router Contract Address
**CCBus Router:** `0x60c8E6DAAfD4D24fEa43E01CE1EC1ecDa3eE1143`
:::

**Can tokens still be traded after locking the pool?**

Yes. Locking only locks the LP tokens to prevent pool withdrawal — it does not affect normal trading.

**Can locked LP be unlocked early?**

No. The lock period must be strictly observed.

**Will Ave display lock information?**

Yes, the Pinksale lock indicator will be displayed.

**Are there fees for these operations?**

Yes, each operation (add, remove, or lock) costs 0.01 BNB.

If you have any questions, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
