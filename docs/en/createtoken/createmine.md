---
description: Staking mining creation tutorial — reduce circulating supply, lower sell pressure, and boost token price
---

# Staking Mining Creation Tutorial

## 1. Staking Mining Concepts

### What Is Staking Mining?

Staking mining is a mechanism where users stake a token or LP into a smart contract via the official website, temporarily locking it so it cannot be withdrawn, in exchange for rewards in another token.

- **Staking**: Depositing tokens into a mining contract; they cannot be withdrawn until the lock period ends
- **Mining**: Earning rewards by participating through staking

### Why Create Staking Mining?

After a token is created, users can freely buy, sell, and add or remove liquidity. However, selling and removing liquidity can harm project stability. Staking mining mitigates the risk of a token collapse by temporarily locking user positions and LP.

- **Token Mining**: Reduces circulating supply, preventing users from dumping immediately after purchase
- **LP Mining**: Lowers the risk of liquidity removal, preventing investors from exiting the pool

## 2. How to Create Staking Mining

::: warning Prerequisites
Before creating, make sure you have already created a token and have the contract address; otherwise, mining cannot be created.
:::

### 1. Enter the Creation Page

Visit: [https://www.ccbus.cc/#/mine/createMine](https://www.ccbus.cc/#/mine/createMine) and connect your wallet in the upper right corner.

<!-- TODO: Replace with CCBus screenshot -->
![Staking Mining Creation Page](/images/placeholder.png)

### 2. Configure Mining Parameters

| Parameter | Description |
|-----------|-------------|
| **Mining Name** | Any name; supports Chinese, English, or mixed text |
| **Staking Token** | Enter the token contract address; users will deposit this token into the pool. For LP mining, enter the LP contract address |
| **Reward Token** | Enter the reward token contract address (typically USDT/USDC, but can be any token) |
| **Query Token** | After entering the address, click the query button to verify the token is valid |
| **Start Time** | Specify the exact time mining begins (timezone is based on your device's current timezone) |
| **Mining Duration** | Set the staking period (customizable number of days) |
| **Daily Reward Amount** | Daily output amount (can be modified later; note that rewards are generated **per second**) |
| **Lock Time** | Whether staking requires a lock period; enter 0 for no lock, or enter the number of lock days (24 hours = 1 day) |
| **Staking Limit** | Set minimum and maximum staking amounts (can be modified later) |
| **Referral Rewards** | Up to three referral tiers; set the reward percentage for each tier |
| **Language Setting** | Choose Chinese or English (single language only) |

::: warning Referral Reward Note
You must participate in mining first to be eligible to refer others; otherwise, the referral link will not work.
:::

### 3. Create Mining

After confirming all information, click the Create button. A wallet confirmation window will appear — confirm and pay the fee to proceed.

Wait a few seconds for confirmation, then click to enter the dashboard.

### 4. Deposit Reward Tokens

The mining contract has been created but has no reward tokens yet, so rewards cannot be distributed. Go to "Global Control" on the right side of the dashboard and click the Deposit Tokens button.

Enter the reward token amount and confirm in your wallet to complete the deposit. If rewards run low later, you can deposit more. After mining ends, you can also withdraw remaining tokens using the withdrawal function.

<!-- TODO: Replace with CCBus screenshot -->
![Dashboard Deposit](/images/placeholder.png)

Once the deposit is complete, mining conditions are satisfied. The dashboard provides an entry to the staking mining page where users can connect their wallet, enter the staking amount, and participate.

After successful staking, rewards accumulate every second. Click the Claim button to withdraw rewards. Note: Users cannot withdraw staked tokens before the lock period ends.

### 5. Modify Mining Parameters

The mining parameter control area in the dashboard supports the following modifications:

| Action | Description |
|--------|-------------|
| **Modify Duration** | Adjust the mining period (30 days, 100 days, 300 days, etc.) |
| **Modify Staking Limit** | Change the minimum/maximum staking amounts |
| **Modify Referral Rewards** | Adjust reward percentages for each referral tier |
| **Modify Daily Rewards** | Change the daily reward token output |
| **Modify Lock Time** | Adjust the lock duration after users stake |

### 6. Modify Website Information

The "Page Info Control" section at the bottom right of the dashboard allows you to modify website content and images:

- **Modify Logo**: Upload an image or enter an image URL
- **Modify Background Image**: Dark backgrounds are recommended
- **Modify Global Info**: Homepage introduction, whitepaper link, footer content, website language
- **Modify Introduction**: Project introduction title and detailed description
- **Modify Features**: Four main features, each with a title and description
- **Modify Roadmap**: Four development phases
- **Modify Social Links**: X (Twitter), Telegram, Discord, Github

## 3. FAQ

**Why isn't the referral reward working?**

Only addresses that have participated in staking are eligible to refer others; addresses that haven't participated cannot use the referral link.

**How is the unlock time calculated for multiple stakes?**

It is based on the most recent staking time; unlock time = last staking time + lock period.

**How are staking rewards distributed? Are they automatic?**

Rewards accumulate in the account every second. Staking users must manually click Claim to transfer rewards to their wallet. There is no limit on the number of claims — you can claim at any time. However, each claim withdraws the full amount; partial withdrawals are not supported.

**Can users unstake early?**

There is no early exit mechanism for users, unless the project owner sets the lock time to zero.

**Can LP be staked for mining?**

Yes. When creating the mining pool, enter the LP contract address in the staking token field.

**Can the mining website domain be changed?**

Yes, but you need to contact customer support for a paid modification.

If you have any questions or need clarification, please join the official Telegram group: [@CCBus](https://t.me/CCBus)
