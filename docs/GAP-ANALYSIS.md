# CCBus vs PandaTool Tutorial Gap Analysis

Generated: 2026-03-23

This report compares CCBus tutorials against PandaTool's latest tutorials to identify missing content, field gaps, and outdated information.

---

## Table of Contents

1. [Common Gaps Across All Tutorials](#common-gaps)
2. [Token Creation Tutorials](#token-creation)
3. [Presale Tutorials](#presale-tutorials)
4. [Summary of Priority Actions](#priority-actions)

---

<a id="common-gaps"></a>
## 1. Common Gaps Across All Tutorials

### 1.1 Missing Field: 收币地址 (Receiving Address) -- HIGH

PandaTool includes a "收币地址" field in ALL token creation tutorials. This field specifies the address that receives the created tokens after deployment. It is described as defaulting to a whitelist address.

CCBus tutorials do NOT mention this field in ANY of the following:
- holdreflection, lpreflection, lpwithinviter, blackhole, holdwithinviter, lpburn, holdothers, lpmine

**Action:** Add 收币地址 field documentation to all token creation tutorials.

### 1.2 Missing Warning: TP闪兑/OKX Web3/EIP-7702 Warnings -- MEDIUM

PandaTool tutorials for types with 推荐奖励 (lpwithinviter, holdwithinviter, lpmine) include explicit warnings:
- Avoid using TP闪兑 (TokenPocket flash swap)
- Avoid using OKX Web3 trading (router recognition issues)
- Avoid using EIP-7702 smart wallet addresses (cannot bind 上下级关系)

CCBus tutorials do NOT include any of these warnings.

### 1.3 Missing Warning: 安全检测风险提示 -- MEDIUM

PandaTool includes a standardized risk warning on ALL non-standard token types:
> "该类型的代币创建后安全检测可能存在风险"

CCBus tutorials mention套利风险 on some pages but do NOT include the security detection/audit risk warning.

### 1.4 Missing Video Tutorial Links -- LOW

CCBus tutorials with `<!-- TODO -->` placeholders: lpreflection, lpwithinviter, lpmine, 314.
CCBus tutorials with no video at all: blackhole, lpburn.

### 1.5 撤池税率 Description Inconsistency -- LOW

PandaTool consistently states "撤池税率直接销毁". CCBus tutorials mention the withdrawal tax rate but do not clarify the tax portion is burned.

---

<a id="token-creation"></a>
## 2. Token Creation Tutorials

### 2.1 holdreflection (分红本币)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Missing security detection risk warning | MEDIUM |

### 2.2 lpreflection (LP分红代币)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Video tutorial placeholder | LOW |

### 2.3 lpwithinviter (LP分红+推荐奖励)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Missing TP闪兑/OKX Web3/EIP-7702 warnings | MEDIUM |
| Video tutorial placeholder | LOW |

### 2.4 blackhole (黑洞分红)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Truncated blackhole address (line 97) - `0x...dE` missing `aD` | **HIGH - BUG** |
| http:// URLs should be https:// (line 23, 27) | MEDIUM |
| Missing video tutorial | LOW |
| 底池代币 description may be outdated (BNB only vs multi) | LOW - verify |

### 2.5 holdwithinviter (持币复利+推荐奖励)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Missing 设置终止供应量 console feature (防代币膨胀) | HIGH |
| Missing TP闪兑/OKX Web3/EIP-7702 warnings | MEDIUM |
| Missing 复利数据激活 explanation (需转账或交易后激活) | MEDIUM |
| Missing 收币地址 in excluded addresses list | LOW |

### 2.6 lpburn (Mint+底池燃烧)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Missing "允许用户添加流动性" console feature | MEDIUM |
| Missing "提取合约分红代币" console feature | MEDIUM |
| Missing video tutorial | LOW |

Note: CCBus has Mint设置 that PandaTool does not -- this is a feature difference, not a gap.

### 2.7 holdothers (Mint+持币暴力分红)

| Gap | Priority |
|-----|----------|
| Missing 分红代币 form field documentation | **HIGH** |
| Missing 收币地址 field | HIGH |
| Missing 设置分红黑名单 console feature | MEDIUM |
| Missing 提取合约分红代币 console feature | MEDIUM |
| Missing 修改税率 console feature (PandaTool has individual tax modification) | MEDIUM |
| Missing "设置后不可修改" note for 分红最小持币量 | LOW |

### 2.8 lpmine (LP挖矿+推荐奖励)

| Gap | Priority |
|-----|----------|
| Missing 收币地址 field | HIGH |
| Missing TP闪兑/OKX Web3/EIP-7702 warnings | MEDIUM |
| Missing "推荐选择USDT池子" recommendation | MEDIUM |
| Missing 权限管理 complexity warning (LP挖矿涉及多个权限) | MEDIUM |
| Duplicate section number "3" (参数说明 and 开关说明) | LOW - formatting |
| Video tutorial placeholder | LOW |

### 2.9 314 (314协议)

| Gap | Priority |
|-----|----------|
| **Wrong URL in wallet connection step** - points to `/coinrelease/LPReflection` instead of `/coinrelease/314` (line 36) | **CRITICAL - BUG** |
| Video tutorial placeholder | LOW |

---

<a id="presale-tutorials"></a>
## 3. Presale Tutorials

### 3.1 simplemint (标准Mint预售) -- ENTIRE TUTORIAL MISSING

**Status: CRITICAL**

No dedicated CCBus tutorial file exists for standard Mint presale. CCBus combines simplemint into mintaddsale.md as a "不开启加池模式" option, but PandaTool has a separate dedicated page.

**PandaTool Form Fields:**
- 预售名称 (English only)
- 预售代币地址 (must have token first)
- 每份价格 (min 0.001 BNB/ETH)
- 每份数量
- 总份数 (<= total supply / per portion)
- 单次Mint最大份数
- 单钱包最大份数 (must < single max)

**PandaTool Console:** Transfer ownership, start presale (2-step), extract tokens, modify all parameters including single-max and wallet-max.

**Key Notes:** Presale may be front-run; do not add presale to blacklist; only supports native tokens.

### 3.2 mintaddsale (Mint加池预售)

| Gap | Priority |
|-----|----------|
| Missing 单次预售最大份数 field | HIGH |
| Missing 单钱包预售最大份数 field | HIGH |
| Missing 交易所选择 field | HIGH |
| Missing 修改加池比例 console feature | MEDIUM |
| Missing 修改单次/单钱包最大份数 console features | MEDIUM |
| 每份价格 minimum discrepancy (PandaTool: 0.001, CCBus: 0.01) | LOW - verify |

### 3.3 donatemint (Mint捐赠预售) -- ENTIRE TUTORIAL MISSING

**Status: CRITICAL**

No CCBus tutorial file exists for donation presale.

**PandaTool Form Fields:**
- All standard presale fields (预售名称, 代币地址, 价格, 数量, 份数, 单次最大, 单钱包最大)
- 捐赠BNB/ETH比例 (0-100%)
- 接收BNB/ETH的地址 (usually celebrity wallet)
- 捐赠代币比例 (0-100%)
- 接收代币的地址

**PandaTool Console:** All standard controls plus donation-specific: modify BNB/token wallet addresses and percentages.

**Key Notes:** V神砸盘风险; donation BNB reduces project revenue; donation tokens reduce user amount.

---

<a id="priority-actions"></a>
## 4. Summary of Priority Actions

### CRITICAL (Must Fix)

| # | Issue | Affected |
|---|-------|----------|
| 1 | **Create simplemint tutorial** - entire page missing | simplemint |
| 2 | **Create donatemint tutorial** - entire page missing | donatemint |
| 3 | **Fix wrong URL in 314 tutorial** line 36 - points to LPReflection | 314 |
| 4 | **Fix truncated blackhole address** line 97 | blackhole |

### HIGH Priority

| # | Issue | Affected |
|---|-------|----------|
| 5 | **Add 收币地址 field** to all token creation tutorials | ALL 8 token tutorials |
| 6 | **Add 分红代币 field** to holdothers tutorial | holdothers |
| 7 | **Add 单次/单钱包最大份数 fields** to mintaddsale | mintaddsale |
| 8 | **Add 交易所选择 field** to mintaddsale | mintaddsale |
| 9 | **Add 设置终止供应量 console feature** | holdwithinviter |

### MEDIUM Priority

| # | Issue | Affected |
|---|-------|----------|
| 10 | **Add TP闪兑/OKX Web3/EIP-7702 warnings** | lpwithinviter, holdwithinviter, lpmine |
| 11 | **Add 安全检测风险提示 warning** | ALL non-standard token tutorials |
| 12 | **Add missing console features** (允许加池, 提取分红代币) | lpburn |
| 13 | **Add missing console features** (修改税率, 分红黑名单, 提取分红) | holdothers |
| 14 | **Add 修改加池比例 console feature** | mintaddsale |
| 15 | **Add "推荐选择USDT池子" recommendation** | lpmine |
| 16 | **Add 权限管理 complexity warning** | lpmine |
| 17 | **Fix http:// to https:// URLs** | blackhole |
| 18 | **Add 复利数据激活 explanation** | holdwithinviter |
| 19 | **Add "撤池税率直接销毁" clarification** | ALL with 撤池税率 |

### LOW Priority

| # | Issue | Affected |
|---|-------|----------|
| 20 | Replace video `<!-- TODO -->` placeholders | lpreflection, lpwithinviter, lpmine, 314 |
| 21 | Fix duplicate section number "3" | lpmine |
| 22 | Verify 每份价格 minimum (0.001 vs 0.01) | mintaddsale |
| 23 | Add missing video tutorial link | blackhole, lpburn |
| 24 | Add "设置后不可修改" note for 分红最小持币量 | holdothers |
| 25 | Verify 底池代币 support (BNB only vs multi) | blackhole |

---

## Field Coverage Matrix

| Field | holdref | lpref | lpinv | black | holdinv | lpburn | holdoth | lpmine | 314 |
|-------|---------|-------|-------|-------|---------|--------|---------|--------|-----|
| 代币全称 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 代币符号 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 发行量 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 精度 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| **收币地址** | **GAP** | **GAP** | **GAP** | **GAP** | **GAP** | **GAP** | **GAP** | **GAP** | N/A |
| 分红代币 | N/A | OK | OK | OK | N/A | N/A | **GAP** | N/A | N/A |
| 买入税率 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 卖出税率 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 营销钱包 | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| 交易所选择 | OK | OK | OK | OK | OK | OK | OK | OK | N/A |
| 底池代币 | OK | OK | OK | OK | OK | OK | OK | OK | N/A |
| 推荐税率 | N/A | N/A | OK | N/A | OK | N/A | N/A | N/A | N/A |
| 分红代数 | N/A | N/A | OK | N/A | OK | N/A | N/A | OK | N/A |
| 复利设置 | N/A | N/A | N/A | N/A | OK | N/A | N/A | N/A | N/A |
| 燃烧设置 | N/A | N/A | N/A | N/A | N/A | OK | N/A | N/A | N/A |
| Mint设置 | N/A | N/A | N/A | N/A | N/A | OK* | OK | N/A | N/A |
| 黑洞分红阈值 | N/A | N/A | N/A | OK | N/A | N/A | N/A | N/A | N/A |
| 分红最小持币量 | N/A | N/A | N/A | N/A | N/A | N/A | OK | N/A | N/A |
| 挖矿设置 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | OK | N/A |
| 314设置 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | OK |
| 最大持币量 | N/A | OK | N/A | OK | N/A | N/A | N/A | N/A | OK |

Legend: OK = present and aligned, **GAP** = missing from CCBus, N/A = not applicable
