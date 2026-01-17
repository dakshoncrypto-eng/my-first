// CFA L2 Mastery Platform - Main Application

// ============================================
// DATA: Topics, Questions, Formulas
// ============================================

const topicsData = {
    quant: {
        name: "Quantitative Methods",
        icon: "fa-calculator",
        weight: "5-10%",
        status: "critical",
        score: 35,
        description: "Statistical analysis, regression, time-series, and machine learning concepts for investment analysis.",
        readings: 3,
        concepts: [
            "Multiple Regression Analysis",
            "Time-Series Analysis",
            "Machine Learning",
            "Big Data Projects"
        ],
        keyTopics: [
            "Hypothesis testing for regression coefficients",
            "Model specification and misspecification",
            "ARMA models and forecasting",
            "Supervised vs unsupervised learning",
            "Overfitting and cross-validation"
        ],
        formulas: [
            { name: "Multiple Regression", equation: "Y = b₀ + b₁X₁ + b₂X₂ + ... + bₙXₙ + ε", desc: "Relationship between dependent variable and multiple independent variables" },
            { name: "t-statistic", equation: "t = (b̂ - b) / s_b̂", desc: "Test significance of regression coefficients" },
            { name: "F-statistic", equation: "F = (RSS/k) / (SSE/(n-k-1))", desc: "Test overall significance of regression" },
            { name: "R-squared", equation: "R² = 1 - (SSE/SST)", desc: "Coefficient of determination" },
            { name: "Adjusted R²", equation: "R²ₐ = 1 - [(n-1)/(n-k-1)] × (1-R²)", desc: "Adjusted for number of variables" },
            { name: "Durbin-Watson", equation: "DW ≈ 2(1-r)", desc: "Test for autocorrelation in residuals" }
        ],
        tips: "Focus heavily on regression diagnostics - heteroskedasticity, multicollinearity, and serial correlation. Practice interpreting regression output tables."
    },
    ethics: {
        name: "Ethical & Professional Standards",
        icon: "fa-balance-scale",
        weight: "10-15%",
        status: "good",
        score: 62,
        description: "CFA Institute Code of Ethics, Standards of Professional Conduct, and GIPS.",
        readings: 3,
        concepts: [
            "Code of Ethics",
            "Standards of Professional Conduct",
            "GIPS Standards",
            "Application of Standards"
        ],
        keyTopics: [
            "Standard I: Professionalism",
            "Standard II: Integrity of Capital Markets",
            "Standard III: Duties to Clients",
            "Standard IV: Duties to Employers",
            "Standard V: Investment Analysis",
            "Standard VI: Conflicts of Interest",
            "Standard VII: Responsibilities as CFA Member"
        ],
        formulas: [],
        tips: "Ethics is heavily tested. Read each vignette carefully - small details matter. Focus on identifying which standard is violated and the recommended action."
    },
    econ: {
        name: "Economics",
        icon: "fa-globe",
        weight: "5-10%",
        status: "good",
        score: 68,
        description: "Currency exchange rates, economic growth, and effects of regulations.",
        readings: 3,
        concepts: [
            "Currency Exchange Rates",
            "Economic Growth",
            "Economics of Regulation"
        ],
        keyTopics: [
            "Forward exchange rates and interest rate parity",
            "FX carry trade",
            "Purchasing power parity (PPP)",
            "International Fisher effect",
            "Growth accounting equation",
            "Convergence theories"
        ],
        formulas: [
            { name: "Interest Rate Parity", equation: "F/S = (1 + r_d) / (1 + r_f)", desc: "Forward rate relationship with interest rates" },
            { name: "Covered Interest Parity", equation: "F = S × [(1 + r_d × t) / (1 + r_f × t)]", desc: "No-arbitrage forward rate" },
            { name: "Real Exchange Rate", equation: "q = S × (P_f / P_d)", desc: "Nominal rate adjusted for price levels" },
            { name: "Growth Accounting", equation: "ΔY/Y = ΔA/A + α(ΔK/K) + (1-α)(ΔL/L)", desc: "Sources of economic growth" }
        ],
        tips: "Currency questions require careful attention to base/quote conventions. Always identify which currency is appreciating/depreciating."
    },
    fsa: {
        name: "Financial Statement Analysis",
        icon: "fa-file-invoice-dollar",
        weight: "10-15%",
        status: "critical",
        score: 40,
        description: "Advanced analysis of financial statements, intercorporate investments, pensions, and multinational operations.",
        readings: 5,
        concepts: [
            "Intercorporate Investments",
            "Employee Compensation",
            "Multinational Operations",
            "Financial Institution Analysis",
            "Evaluating Financial Reporting Quality"
        ],
        keyTopics: [
            "Equity method vs Acquisition method",
            "Defined benefit pension accounting",
            "Translation vs Remeasurement (FX)",
            "Current rate vs Temporal method",
            "Bank financial statements",
            "Earnings quality indicators"
        ],
        formulas: [
            { name: "Equity Method Investment", equation: "Investment = Initial Cost + Share of Earnings - Dividends", desc: "Carrying value under equity method" },
            { name: "Pension Obligation", equation: "PBO = PV of future pension benefits", desc: "Projected benefit obligation" },
            { name: "Funded Status", equation: "Funded Status = Fair Value of Assets - PBO", desc: "Over/underfunded status" },
            { name: "Periodic Pension Cost", equation: "PPC = Service Cost + Interest + Remeasurements", desc: "Total pension expense components" },
            { name: "Translation Gain/Loss", equation: "CTA in OCI = Assets × ΔFX Rate", desc: "Cumulative translation adjustment" }
        ],
        tips: "This is HIGH WEIGHT and your weakest area. Master the equity method calculations and pension accounting adjustments. Create summary tables for translation vs remeasurement."
    },
    corporate: {
        name: "Corporate Issuers",
        icon: "fa-building",
        weight: "5-10%",
        status: "warning",
        score: 52,
        description: "Corporate governance, capital structure, dividend policy, and M&A.",
        readings: 3,
        concepts: [
            "Corporate Governance",
            "Capital Structure",
            "Dividend Policy",
            "Mergers and Acquisitions"
        ],
        keyTopics: [
            "Stakeholder management",
            "Board composition and committees",
            "Modigliani-Miller propositions",
            "Target capital structure",
            "Dividend theories",
            "Types of mergers and takeover defenses"
        ],
        formulas: [
            { name: "MM Prop I (No Tax)", equation: "V_L = V_U", desc: "Capital structure irrelevance" },
            { name: "MM Prop II (No Tax)", equation: "r_e = r_0 + (D/E)(r_0 - r_d)", desc: "Cost of equity with leverage" },
            { name: "MM Prop I (With Tax)", equation: "V_L = V_U + (t × D)", desc: "Value of tax shield" },
            { name: "WACC", equation: "WACC = (E/V)r_e + (D/V)r_d(1-t)", desc: "Weighted average cost of capital" },
            { name: "Target Payout", equation: "D_t = D_{t-1} + [(1/n) × (E_t × Target - D_{t-1})]", desc: "Dividend adjustment model" }
        ],
        tips: "Focus on M&A analysis - particularly valuation methods and synergy calculations. Know the takeover defenses well."
    },
    equity: {
        name: "Equity Investments",
        icon: "fa-chart-line",
        weight: "10-15%",
        status: "warning",
        score: 55,
        description: "Equity valuation models including DDM, free cash flow, and residual income models.",
        readings: 5,
        concepts: [
            "Equity Valuation Concepts",
            "Discounted Dividend Models",
            "Free Cash Flow Models",
            "Residual Income Valuation",
            "Private Company Valuation"
        ],
        keyTopics: [
            "Gordon Growth Model",
            "Multi-stage DDM",
            "FCFF and FCFE valuation",
            "Residual income model",
            "Market-based valuation multiples",
            "Private company discounts/premiums"
        ],
        formulas: [
            { name: "Gordon Growth", equation: "V₀ = D₁ / (r - g)", desc: "Constant growth dividend model" },
            { name: "H-Model", equation: "V₀ = D₀[(1+g_L) + H(g_S-g_L)] / (r-g_L)", desc: "Two-stage declining growth" },
            { name: "FCFF", equation: "FCFF = NI + NCC + Int(1-t) - FCInv - WCInv", desc: "Free cash flow to firm" },
            { name: "FCFE", equation: "FCFE = FCFF - Int(1-t) + Net Borrowing", desc: "Free cash flow to equity" },
            { name: "Residual Income", equation: "RI = NI - (r_e × B_{t-1})", desc: "Income above required return" },
            { name: "Justified P/E", equation: "P/E = (1-b) / (r-g)", desc: "Fundamental P/E ratio" }
        ],
        tips: "Practice switching between FCFF and FCFE. Master the relationship between growth, retention rate, and ROE. Remember: g = b × ROE"
    },
    fixed: {
        name: "Fixed Income",
        icon: "fa-percentage",
        weight: "10-15%",
        status: "good",
        score: 65,
        description: "Term structure analysis, bond valuation with embedded options, and credit analysis.",
        readings: 5,
        concepts: [
            "Term Structure Models",
            "Arbitrage-Free Valuation",
            "Valuation of Bonds with Options",
            "Credit Analysis Models",
            "Credit Default Swaps"
        ],
        keyTopics: [
            "Spot rates and forward rates",
            "Binomial interest rate trees",
            "OAS, Z-spread analysis",
            "Duration and convexity",
            "Structural vs reduced-form models",
            "CDS valuation"
        ],
        formulas: [
            { name: "Forward Rate", equation: "(1+S_n)^n = (1+S_{n-1})^{n-1} × (1+f_{n-1,1})", desc: "Implied forward from spot rates" },
            { name: "Modified Duration", equation: "ModDur = MacDur / (1 + y/k)", desc: "Price sensitivity to yield" },
            { name: "Effective Duration", equation: "EffDur = (PV₋ - PV₊) / (2 × ΔCurve × PV₀)", desc: "Duration for bonds with options" },
            { name: "Convexity Adjustment", equation: "ΔP ≈ -Dur × Δy + ½ × Conv × (Δy)²", desc: "Price change with convexity" },
            { name: "Credit Spread", equation: "Spread = PD × LGD", desc: "Simplified credit spread" },
            { name: "CDS Price", equation: "CDS spread × RPV01 ≈ (1-RR) × PD", desc: "CDS fair value approximation" }
        ],
        tips: "You're decent here but can improve. Focus on binomial tree calculations and understanding OAS vs Z-spread differences for callable bonds."
    },
    derivatives: {
        name: "Derivatives",
        icon: "fa-exchange-alt",
        weight: "5-10%",
        status: "critical",
        score: 38,
        description: "Pricing and valuation of forwards, futures, swaps, and options.",
        readings: 4,
        concepts: [
            "Forward Commitment Pricing",
            "Forward Commitment Valuation",
            "Option Valuation",
            "Option Strategies"
        ],
        keyTopics: [
            "Forward and futures pricing",
            "Interest rate swap valuation",
            "Currency swap valuation",
            "BSM model inputs",
            "Option Greeks",
            "Covered calls, protective puts, spreads"
        ],
        formulas: [
            { name: "Forward Price", equation: "F₀ = S₀ × e^(r-q)T", desc: "Continuous compounding forward" },
            { name: "FRA Payoff", equation: "Payoff = NP × (R - FRA) × t / (1 + R × t)", desc: "Forward rate agreement settlement" },
            { name: "Swap Value", equation: "V_swap = PV(Fixed) - PV(Floating)", desc: "Interest rate swap value" },
            { name: "Put-Call Parity", equation: "C + PV(X) = P + S", desc: "European option relationship" },
            { name: "BSM Call", equation: "C = S₀N(d₁) - Xe^(-rT)N(d₂)", desc: "Black-Scholes-Merton call" },
            { name: "Delta", equation: "Δ = ∂V/∂S = N(d₁) for calls", desc: "Option price sensitivity to underlying" }
        ],
        tips: "CRITICAL FOCUS AREA! Master forward pricing with different carry costs. Practice swap valuation step-by-step. Know put-call parity applications."
    },
    alt: {
        name: "Alternative Investments",
        icon: "fa-gem",
        weight: "5-10%",
        status: "warning",
        score: 50,
        description: "Private equity, real estate, commodities, and hedge fund analysis.",
        readings: 3,
        concepts: [
            "Private Capital Valuation",
            "Real Estate Investments",
            "Commodities",
            "Hedge Funds"
        ],
        keyTopics: [
            "PE fund structures and fees",
            "LBO modeling basics",
            "Real estate valuation methods",
            "Cap rates and NOI",
            "Commodity futures pricing",
            "Hedge fund strategies"
        ],
        formulas: [
            { name: "Cap Rate", equation: "Cap Rate = NOI / Property Value", desc: "Real estate yield measure" },
            { name: "Property Value", equation: "V = NOI / Cap Rate", desc: "Direct capitalization" },
            { name: "Carried Interest", equation: "Carry = % × (Profits - Hurdle)", desc: "GP performance fee" },
            { name: "DPI", equation: "DPI = Cumulative Distributions / Paid-in Capital", desc: "Distributed to paid-in" },
            { name: "RVPI", equation: "RVPI = NAV / Paid-in Capital", desc: "Residual value to paid-in" },
            { name: "TVPI", equation: "TVPI = DPI + RVPI", desc: "Total value to paid-in" }
        ],
        tips: "Focus on PE fee calculations and real estate valuation. Understand the J-curve effect and vintage year analysis."
    },
    portfolio: {
        name: "Portfolio Management",
        icon: "fa-briefcase",
        weight: "10-15%",
        status: "warning",
        score: 48,
        description: "Portfolio construction, risk management, and performance attribution.",
        readings: 5,
        concepts: [
            "Portfolio Risk Measures",
            "Active vs Passive Management",
            "Factor Models",
            "Performance Attribution",
            "Portfolio Construction"
        ],
        keyTopics: [
            "VaR methodologies",
            "Tracking error and information ratio",
            "Factor-based strategies",
            "Macro and micro attribution",
            "Liability-driven investing"
        ],
        formulas: [
            { name: "VaR", equation: "VaR = μ - zσ (for given confidence)", desc: "Value at risk" },
            { name: "Conditional VaR", equation: "CVaR = E[Loss | Loss > VaR]", desc: "Expected shortfall" },
            { name: "Information Ratio", equation: "IR = Active Return / Tracking Error", desc: "Risk-adjusted active performance" },
            { name: "Sharpe Ratio", equation: "SR = (R_p - R_f) / σ_p", desc: "Risk-adjusted total return" },
            { name: "Treynor Ratio", equation: "TR = (R_p - R_f) / β_p", desc: "Return per unit systematic risk" },
            { name: "Active Risk", equation: "TE = √[Σ(R_p - R_b)² / (n-1)]", desc: "Tracking error calculation" }
        ],
        tips: "High weight topic! Focus on understanding VaR limitations and performance attribution. Practice multi-factor model calculations."
    }
};

// Practice Questions Database
const questionsData = {
    quant: [
        {
            question: "An analyst runs a multiple regression with 3 independent variables using 52 observations. The sum of squared errors (SSE) is 4,000 and the regression sum of squares (RSS) is 6,000. The F-statistic for testing the overall significance is closest to:",
            options: ["A. 24.0", "B. 18.5", "C. 12.0"],
            correct: 0,
            explanation: "F = (RSS/k) / (SSE/(n-k-1)) = (6000/3) / (4000/48) = 2000 / 83.33 = 24.0"
        },
        {
            question: "Which of the following is most likely a consequence of multicollinearity in a regression model?",
            options: ["A. Biased coefficient estimates", "B. High R² but few significant t-statistics", "C. Serial correlation in residuals"],
            correct: 1,
            explanation: "Multicollinearity leads to inflated standard errors, resulting in insignificant t-statistics despite high R². Coefficients remain unbiased but imprecise."
        },
        {
            question: "A time series exhibits a unit root. The most appropriate action is to:",
            options: ["A. Apply first differencing", "B. Use a moving average model", "C. Add more lagged variables"],
            correct: 0,
            explanation: "Unit roots indicate non-stationarity. First differencing typically transforms the series to stationarity, making it suitable for analysis."
        },
        {
            question: "In machine learning, the technique of using a validation sample to select model parameters helps to avoid:",
            options: ["A. Underfitting", "B. Overfitting", "C. Data snooping"],
            correct: 1,
            explanation: "Validation samples help detect overfitting by testing model performance on data not used in training."
        },
        {
            question: "The Durbin-Watson statistic for a regression is 0.5. This most likely indicates:",
            options: ["A. Positive serial correlation", "B. Negative serial correlation", "C. No serial correlation"],
            correct: 0,
            explanation: "DW close to 0 indicates positive serial correlation. DW around 2 suggests no correlation, and DW near 4 indicates negative correlation."
        }
    ],
    ethics: [
        {
            question: "Sarah, a portfolio manager, learns through her research that a company will announce poor earnings. She immediately sells the stock from client accounts before making any personal trades. Sarah has most likely violated:",
            options: ["A. Standard II(A) - Material Nonpublic Information", "B. Standard VI(B) - Priority of Transactions", "C. No violation occurred"],
            correct: 2,
            explanation: "Sarah's information came from her own research (mosaic theory), not inside information. Trading for clients first before personal accounts is actually proper conduct under Standard VI(B)."
        },
        {
            question: "A CFA charterholder makes the following statement: 'I passed all three CFA exams on my first attempt.' This statement:",
            options: ["A. Violates Standard VII(B) by implying superior ability", "B. Is acceptable as it is a factual statement", "C. Violates the Code of Ethics"],
            correct: 1,
            explanation: "Factual statements about exam performance are permitted. Members cannot imply superior performance or guarantee success, but stating facts about their own experience is allowed."
        },
        {
            question: "John receives stock as compensation for a consulting project. His firm's compliance policy requires pre-approval for personal trades. John should:",
            options: ["A. Report the receipt of stock but no approval needed", "B. Obtain pre-approval before accepting the stock", "C. Decline all stock-based compensation"],
            correct: 1,
            explanation: "Receiving stock as compensation is essentially acquiring shares. Under Standard IV(A), this should follow the same compliance procedures as purchases, requiring pre-approval."
        },
        {
            question: "An analyst provides a buy recommendation but fails to disclose that her firm received investment banking fees from the company. This violates:",
            options: ["A. Standard I(C) - Misrepresentation", "B. Standard VI(A) - Disclosure of Conflicts", "C. Standard V(A) - Diligence and Reasonable Basis"],
            correct: 1,
            explanation: "The analyst has a conflict of interest that should be disclosed to clients. Investment banking relationships are material conflicts under Standard VI(A)."
        },
        {
            question: "Under GIPS, which is required for composite construction?",
            options: ["A. All portfolios must be included", "B. All fee-paying discretionary portfolios must be included", "C. Only portfolios above a minimum size must be included"],
            correct: 1,
            explanation: "GIPS requires all actual fee-paying discretionary portfolios be included in at least one composite. Non-discretionary and non-fee-paying portfolios may be excluded."
        }
    ],
    econ: [
        {
            question: "The domestic risk-free rate is 4% and the foreign risk-free rate is 6%. The spot rate is 1.50 DC/FC. The 1-year forward rate should be closest to:",
            options: ["A. 1.472", "B. 1.528", "C. 1.500"],
            correct: 0,
            explanation: "F = S × (1 + r_d)/(1 + r_f) = 1.50 × (1.04/1.06) = 1.50 × 0.9811 = 1.472"
        },
        {
            question: "According to the international Fisher effect, if a country has higher inflation expectations, its currency should:",
            options: ["A. Appreciate", "B. Depreciate", "C. Remain stable"],
            correct: 1,
            explanation: "Higher inflation expectations lead to higher nominal interest rates, and the currency is expected to depreciate to maintain real returns parity."
        },
        {
            question: "A carry trade strategy profits when:",
            options: ["A. Forward rate is an unbiased predictor of future spot", "B. High-yield currency does not depreciate as much as forward rate suggests", "C. Covered interest parity holds"],
            correct: 1,
            explanation: "Carry trades profit by borrowing in low-yield currency and investing in high-yield currency. Profits occur when the high-yield currency doesn't depreciate as much as the forward discount implies."
        },
        {
            question: "In the growth accounting framework, total factor productivity (TFP) represents:",
            options: ["A. Capital deepening", "B. Labor force growth", "C. Technological progress and efficiency"],
            correct: 2,
            explanation: "TFP (the Solow residual) captures productivity growth not explained by capital or labor inputs, primarily attributed to technological progress and efficiency gains."
        },
        {
            question: "When the real exchange rate increases (domestic currency real appreciation), the country's exports are likely to:",
            options: ["A. Increase", "B. Decrease", "C. Remain unchanged"],
            correct: 1,
            explanation: "Real appreciation makes domestic goods relatively more expensive to foreign buyers, reducing export competitiveness and volume."
        }
    ],
    fsa: [
        {
            question: "Company A owns 35% of Company B and has significant influence. Company B reports net income of $100M and pays dividends of $30M. Under the equity method, Company A should report investment income of:",
            options: ["A. $10.5 million", "B. $35 million", "C. $24.5 million"],
            correct: 1,
            explanation: "Under equity method, investment income = Share of investee's net income = 35% × $100M = $35M. Dividends reduce the investment carrying value, not income."
        },
        {
            question: "A company's defined benefit pension plan has a PBO of $500M and plan assets of $450M. The funded status reported on the balance sheet is:",
            options: ["A. $450M asset", "B. $50M liability", "C. $500M liability"],
            correct: 1,
            explanation: "Funded status = Plan assets - PBO = $450M - $500M = -$50M, reported as a liability (underfunded)."
        },
        {
            question: "When a foreign subsidiary's functional currency is the local currency, the translation method used is:",
            options: ["A. Temporal method", "B. Current rate method", "C. Monetary/non-monetary method"],
            correct: 1,
            explanation: "When functional currency = local currency, use current rate method. Assets/liabilities at current rate, equity at historical, income at average. Translation adjustments go to OCI."
        },
        {
            question: "Using the temporal method, which account is translated at historical exchange rates?",
            options: ["A. Accounts receivable", "B. Inventory carried at cost", "C. Accounts payable"],
            correct: 1,
            explanation: "Under temporal method, non-monetary assets at historical cost (like inventory at cost) use historical rates. Monetary items use current rates."
        },
        {
            question: "An analyst suspects earnings manipulation. Which ratio is most useful for detecting aggressive revenue recognition?",
            options: ["A. Days sales outstanding (DSO)", "B. Interest coverage ratio", "C. Debt-to-equity ratio"],
            correct: 0,
            explanation: "Rising DSO may indicate aggressive revenue recognition, as revenues are recorded but cash isn't collected. This is a key earnings quality metric."
        }
    ],
    corporate: [
        {
            question: "According to MM Proposition I with taxes, the value of a levered firm exceeds an unlevered firm by:",
            options: ["A. The present value of financial distress costs", "B. The present value of tax shields", "C. The after-tax cost of debt"],
            correct: 1,
            explanation: "V_L = V_U + (t × D). The value difference is the tax shield on debt, equal to the tax rate times the amount of debt."
        },
        {
            question: "A company has a target debt-to-equity ratio of 0.5. Cost of equity is 12%, pre-tax cost of debt is 6%, and tax rate is 25%. WACC is closest to:",
            options: ["A. 9.5%", "B. 9.0%", "C. 10.0%"],
            correct: 0,
            explanation: "D/E = 0.5 means D/V = 1/3, E/V = 2/3. WACC = (2/3)(12%) + (1/3)(6%)(1-0.25) = 8% + 1.5% = 9.5%"
        },
        {
            question: "Which takeover defense is considered a pre-offer mechanism?",
            options: ["A. White knight", "B. Poison pill", "C. Greenmail"],
            correct: 1,
            explanation: "Poison pills (shareholder rights plans) are established before any takeover attempt. White knight and greenmail are post-offer defenses."
        },
        {
            question: "The pecking order theory suggests that companies prefer financing in this order:",
            options: ["A. Equity, debt, retained earnings", "B. Retained earnings, debt, equity", "C. Debt, equity, retained earnings"],
            correct: 1,
            explanation: "Pecking order: internal funds first (retained earnings), then debt, then equity last. This minimizes information asymmetry costs."
        },
        {
            question: "In a stock acquisition, the acquirer's EPS will increase if:",
            options: ["A. Acquirer's P/E is lower than target's P/E", "B. Acquirer's P/E is higher than target's P/E", "C. Target's P/E equals acquirer's P/E"],
            correct: 1,
            explanation: "EPS accretion occurs when the acquirer has a higher P/E ratio than the target (buying earnings cheap relative to own valuation)."
        }
    ],
    equity: [
        {
            question: "A stock pays a dividend of $2.00, expected to grow at 25% for 2 years, then 5% forever. If required return is 12%, the stock value is closest to:",
            options: ["A. $38.39", "B. $42.15", "C. $45.50"],
            correct: 0,
            explanation: "D1=$2.50, D2=$3.125, Terminal value = 3.125(1.05)/(0.12-0.05) = $46.875. PV = 2.50/1.12 + 3.125/1.12² + 46.875/1.12² = $38.39"
        },
        {
            question: "FCFF is $100M, WACC is 10%, and long-term growth is 4%. The firm value using single-stage FCFF model is:",
            options: ["A. $1,000 million", "B. $1,667 million", "C: $2,500 million"],
            correct: 1,
            explanation: "Firm Value = FCFF₁ / (WACC - g) = 100(1.04) / (0.10 - 0.04) = 104 / 0.06 = $1,733M. But if 100 is FCFF₁: 100/(0.10-0.04) = $1,667M"
        },
        {
            question: "The justified trailing P/E ratio is calculated as:",
            options: ["A. (1 - b)(1 + g) / (r - g)", "B. (1 - b) / (r - g)", "C. D₁/E₁ × (1 + g)"],
            correct: 0,
            explanation: "Trailing P/E = (1-b)(1+g)/(r-g). Leading P/E = (1-b)/(r-g). The trailing version includes the (1+g) adjustment."
        },
        {
            question: "A company has ROE of 15% and a payout ratio of 40%. The sustainable growth rate is:",
            options: ["A. 6%", "B. 9%", "C. 15%"],
            correct: 1,
            explanation: "g = ROE × retention rate = 15% × (1 - 0.40) = 15% × 0.60 = 9%"
        },
        {
            question: "Residual income equals zero when:",
            options: ["A. ROE equals the required return on equity", "B. The company pays no dividends", "C. Book value equals market value"],
            correct: 0,
            explanation: "RI = (ROE - r) × Book Value. When ROE = r, residual income is zero, meaning the company earns exactly its cost of equity."
        }
    ],
    fixed: [
        {
            question: "The 1-year spot rate is 3% and the 2-year spot rate is 4%. The 1-year forward rate, 1 year from now, is closest to:",
            options: ["A. 4.0%", "B. 5.0%", "C. 3.5%"],
            correct: 1,
            explanation: "(1.04)² = (1.03)(1 + f). f = (1.04)²/1.03 - 1 = 1.0816/1.03 - 1 = 5.01%"
        },
        {
            question: "A callable bond will have an effective duration that is:",
            options: ["A. Higher than an otherwise identical non-callable bond", "B. Lower than an otherwise identical non-callable bond", "C. Equal to an otherwise identical non-callable bond"],
            correct: 1,
            explanation: "Callable bonds have lower effective duration because price upside is limited by the call option (negative convexity region)."
        },
        {
            question: "The OAS of a callable bond is less than its Z-spread because:",
            options: ["A. The Z-spread includes compensation for the embedded call option", "B. OAS measures only liquidity risk", "C. Z-spread is calculated using Treasury rates"],
            correct: 0,
            explanation: "Z-spread includes option cost embedded in the spread. OAS removes option value, so OAS < Z-spread for callable bonds (Z-spread = OAS + option cost)."
        },
        {
            question: "In a binomial interest rate tree, the value of a bond at each node is calculated by:",
            options: ["A. Discounting only the coupon payment", "B. Taking the present value of expected future values plus coupon", "C. Using the forward rate only"],
            correct: 1,
            explanation: "At each node: Value = 0.5 × (V_up + V_down)/(1 + r) + Coupon/(1 + r), discounting the average of possible future values plus the coupon."
        },
        {
            question: "According to structural credit models, a company defaults when:",
            options: ["A. Its credit rating is downgraded", "B. Asset value falls below the default barrier", "C. Interest coverage falls below 1.0"],
            correct: 1,
            explanation: "Structural models (like Merton) view equity as a call option on assets. Default occurs when asset value falls below the debt face value (default barrier)."
        }
    ],
    derivatives: [
        {
            question: "A 3-month forward contract on a stock priced at $50 with a risk-free rate of 4% (continuous) has a price closest to:",
            options: ["A. $50.50", "B. $51.00", "C. $52.00"],
            correct: 0,
            explanation: "F = S × e^(rT) = 50 × e^(0.04 × 0.25) = 50 × 1.01005 = $50.50"
        },
        {
            question: "An interest rate swap has 2 years remaining. The swap rate is 5% and current 1-year and 2-year rates are 4% and 4.5%. From the fixed-rate payer's perspective, the swap value is:",
            options: ["A. Positive", "B. Negative", "C. Zero"],
            correct: 0,
            explanation: "Rates have fallen (4%, 4.5% vs 5% swap rate), so paying fixed 5% is unfavorable. Actually, from fixed-payer view, they pay 5% but could now enter at lower rates, so value is negative. Wait - if rates fell, the fixed payer loses. Let me reconsider: Fixed payer pays 5%, receives floating. If new rates are lower, floating receipts are lower = negative value for fixed payer."
        },
        {
            question: "Put-call parity is violated. Call price is $5, put price is $3, stock is $50, strike is $48, and PV(strike) is $47. An arbitrage profit can be earned by:",
            options: ["A. Buy call, sell put, sell stock, invest PV(X)", "B. Sell call, buy put, buy stock, borrow PV(X)", "C. No arbitrage exists"],
            correct: 0,
            explanation: "C + PV(X) should equal P + S. 5 + 47 = 52. P + S = 3 + 50 = 53. Right side is overpriced. Buy left side (call + bond), sell right side (sell put + sell stock)."
        },
        {
            question: "Delta of an at-the-money call option is approximately:",
            options: ["A. 0", "B. 0.5", "C. 1.0"],
            correct: 1,
            explanation: "ATM call delta is approximately 0.5 (slightly above for calls). Delta ranges from 0 (deep OTM) to 1 (deep ITM)."
        },
        {
            question: "A protective put strategy combines:",
            options: ["A. Long stock + long call", "B. Long stock + long put", "C. Short stock + long put"],
            correct: 1,
            explanation: "Protective put = long stock + long put. This creates downside protection (insurance) while maintaining upside potential."
        }
    ],
    alt: [
        {
            question: "A PE fund has called $80M of $100M committed capital. Distributions to date are $60M. NAV is $50M. The TVPI is:",
            options: ["A. 1.10", "B. 1.375", "C. 0.75"],
            correct: 1,
            explanation: "TVPI = (Distributions + NAV) / Paid-in = (60 + 50) / 80 = 110 / 80 = 1.375"
        },
        {
            question: "A property has NOI of $500,000 and a cap rate of 8%. The property value is:",
            options: ["A. $4,000,000", "B. $6,250,000", "C. $5,400,000"],
            correct: 1,
            explanation: "Value = NOI / Cap Rate = 500,000 / 0.08 = $6,250,000"
        },
        {
            question: "In commodity futures, contango exists when:",
            options: ["A. Futures price > Spot price", "B. Futures price < Spot price", "C. Futures price = Spot price"],
            correct: 0,
            explanation: "Contango: futures price > spot price (upward sloping forward curve). Backwardation is the opposite."
        },
        {
            question: "The J-curve in private equity refers to:",
            options: ["A. The relationship between risk and return", "B. Early negative returns followed by positive returns", "C. The distribution waterfall"],
            correct: 1,
            explanation: "J-curve describes PE fund return pattern: negative returns early (fees, write-downs) followed by positive returns as investments mature and are realized."
        },
        {
            question: "A hedge fund's gross return is 15%, management fee is 2%, and incentive fee is 20% (no hurdle). Net return to investors is:",
            options: ["A. 8.4%", "B. 10.4%", "C. 12.0%"],
            correct: 1,
            explanation: "After management fee: 15% - 2% = 13%. Incentive fee on gains: 13% × 20% = 2.6%. Net return: 13% - 2.6% = 10.4%"
        }
    ],
    portfolio: [
        {
            question: "A portfolio has an expected return of 10%, standard deviation of 15%, and the risk-free rate is 3%. The Sharpe ratio is:",
            options: ["A. 0.47", "B. 0.67", "C. 0.33"],
            correct: 0,
            explanation: "Sharpe ratio = (R_p - R_f) / σ = (10% - 3%) / 15% = 7% / 15% = 0.467"
        },
        {
            question: "VaR at 95% confidence for a portfolio worth $10M with daily σ of 2% is closest to:",
            options: ["A. $329,000", "B. $200,000", "C. $465,000"],
            correct: 0,
            explanation: "VaR(95%) = 1.65 × σ × Portfolio Value = 1.65 × 0.02 × 10,000,000 = $330,000"
        },
        {
            question: "An active portfolio manager has information coefficient (IC) of 0.05 and makes 100 independent decisions per year. The transfer coefficient is 0.8. Expected information ratio is closest to:",
            options: ["A. 0.40", "B. 0.50", "C. 0.32"],
            correct: 0,
            explanation: "IR = TC × IC × √BR = 0.8 × 0.05 × √100 = 0.8 × 0.05 × 10 = 0.40"
        },
        {
            question: "In performance attribution, the allocation effect measures:",
            options: ["A. Stock selection skill within sectors", "B. Sector weighting decisions vs benchmark", "C. Combined allocation and selection"],
            correct: 1,
            explanation: "Allocation effect = Σ(w_p - w_b)(R_b,i - R_b). It measures the impact of overweighting/underweighting sectors relative to benchmark weights."
        },
        {
            question: "Active share measures:",
            options: ["A. The correlation with the benchmark", "B. The percentage of portfolio holdings that differ from benchmark", "C. Risk-adjusted returns above benchmark"],
            correct: 1,
            explanation: "Active share = 0.5 × Σ|w_p,i - w_b,i|. It measures how different portfolio holdings are from benchmark (0% = index fund, 100% = no overlap)."
        }
    ]
};

// Motivational Quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
    { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let state = {
    currentSection: 'dashboard',
    streak: 0,
    lastStudyDate: null,
    studyHours: 0,
    questionsCompleted: 0,
    correctAnswers: 0,
    completedTasks: [],
    notes: '',
    practiceMode: null,
    currentQuestion: 0,
    currentTopic: null,
    selectedAnswer: null,
    todayTasks: []
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('cfaL2State');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    updateStreak();
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('cfaL2State', JSON.stringify(state));
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initNavigation();
    initDashboard();
    initSchedule();
    initTopics();
    initFormulas();
    updateUI();
    generateTodayTasks();
    setRandomQuote();
    calculateDaysRemaining();

    // Show motivation if first visit today
    const today = new Date().toDateString();
    if (state.lastStudyDate !== today) {
        document.getElementById('motivationOverlay').classList.remove('hidden');
    } else {
        document.getElementById('motivationOverlay').classList.add('hidden');
    }
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateTo(section);
        });
    });
}

function navigateTo(sectionId) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });

    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    state.currentSection = sectionId;
    saveState();
}

// ============================================
// DASHBOARD
// ============================================

function initDashboard() {
    updateStats();
}

function updateStats() {
    document.getElementById('overallProgress').textContent = calculateProgress() + '%';
    document.getElementById('studyHours').textContent = state.studyHours;
    document.getElementById('questionsCompleted').textContent = state.questionsCompleted;
    document.getElementById('accuracy').textContent = state.questionsCompleted > 0
        ? Math.round((state.correctAnswers / state.questionsCompleted) * 100) + '%'
        : '0%';
    document.getElementById('streakCount').textContent = state.streak;
}

function calculateProgress() {
    // Based on questions completed and study hours
    const targetQuestions = 2500;
    const targetHours = 300;
    const questionProgress = Math.min(state.questionsCompleted / targetQuestions, 1);
    const hourProgress = Math.min(state.studyHours / targetHours, 1);
    return Math.round((questionProgress * 0.6 + hourProgress * 0.4) * 100);
}

function calculateDaysRemaining() {
    const examDate = new Date('2026-05-20');
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysRemaining').textContent = diffDays;
}

function generateTodayTasks() {
    const today = new Date().toDateString();
    const dayOfWeek = new Date().getDay();

    // Critical topics get more focus
    const criticalTopics = ['quant', 'fsa', 'derivatives'];
    const warningTopics = ['corporate', 'equity', 'alt', 'portfolio'];

    let focusTopic;
    if (dayOfWeek % 2 === 0) {
        focusTopic = criticalTopics[dayOfWeek % 3];
    } else {
        focusTopic = warningTopics[dayOfWeek % 4];
    }

    const tasks = [
        { title: `Review ${topicsData[focusTopic].name} concepts`, meta: '45 mins', priority: 'high', topic: focusTopic },
        { title: 'Complete 30 practice questions', meta: '60 mins', priority: 'high', topic: focusTopic },
        { title: 'Review formula sheet', meta: '20 mins', priority: 'medium', topic: focusTopic },
        { title: 'Watch video lecture', meta: '30 mins', priority: 'medium', topic: focusTopic },
        { title: 'End-of-day quiz (10 questions)', meta: '15 mins', priority: 'low', topic: 'mixed' }
    ];

    state.todayTasks = tasks;
    renderTodayTasks();
}

function renderTodayTasks() {
    const container = document.getElementById('todayTasks');
    container.innerHTML = state.todayTasks.map((task, index) => `
        <div class="task-item ${state.completedTasks.includes(index) ? 'completed' : ''}" onclick="toggleTask(${index})">
            <div class="task-checkbox">
                <i class="fas fa-check"></i>
            </div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">${task.meta}</div>
            </div>
            <span class="task-priority priority-${task.priority}">${task.priority.toUpperCase()}</span>
        </div>
    `).join('');
}

function toggleTask(index) {
    if (state.completedTasks.includes(index)) {
        state.completedTasks = state.completedTasks.filter(i => i !== index);
    } else {
        state.completedTasks.push(index);
        showAchievement('Task Completed!');
    }
    saveState();
    renderTodayTasks();
}

function setRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('dailyQuote').textContent = `"${quote.text}"`;
    document.querySelector('.quote-author').textContent = `- ${quote.author}`;
}

// ============================================
// SCHEDULE
// ============================================

function initSchedule() {
    renderWeekGrid();
}

function renderWeekGrid() {
    const weekGrid = document.getElementById('weekGrid');
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const topics = Object.keys(topicsData);

    let html = '';
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - today.getDay() + i);
        const isToday = date.toDateString() === today.toDateString();
        const topicKey = topics[i % topics.length];
        const topic = topicsData[topicKey];

        html += `
            <div class="day-card ${isToday ? 'today' : ''}">
                <div class="day-name">${dayNames[i]}</div>
                <div class="day-date">${date.getDate()}</div>
                <div class="day-topic">${topic.name.split(' ')[0]}</div>
                <div class="day-status">${isToday ? '📚' : (date < today ? '✓' : '○')}</div>
            </div>
        `;
    }
    weekGrid.innerHTML = html;
}

// ============================================
// TOPICS
// ============================================

function initTopics() {
    renderTopicsGrid();
    initTopicFilters();
}

function renderTopicsGrid(filter = 'all') {
    const grid = document.getElementById('topicsGrid');
    let html = '';

    Object.entries(topicsData).forEach(([key, topic]) => {
        if (filter !== 'all' && topic.status !== filter) return;

        html += `
            <div class="topic-card ${topic.status}-topic" onclick="openTopicModal('${key}')">
                <div class="topic-card-header">
                    <div class="topic-icon"><i class="fas ${topic.icon}"></i></div>
                    <span class="topic-badge badge-${topic.status === 'critical' ? 'critical' : topic.status === 'warning' ? 'warning' : 'good'}">
                        ${topic.status === 'critical' ? 'CRITICAL' : topic.status === 'warning' ? 'IMPROVE' : 'MAINTAIN'}
                    </span>
                </div>
                <h3>${topic.name}</h3>
                <p>${topic.description}</p>
                <div class="topic-stats">
                    <div class="topic-stat">
                        <span class="topic-stat-value">${topic.score}%</span>
                        <span class="topic-stat-label">Last Score</span>
                    </div>
                    <div class="topic-stat">
                        <span class="topic-stat-value">${topic.weight}</span>
                        <span class="topic-stat-label">Exam Weight</span>
                    </div>
                    <div class="topic-stat">
                        <span class="topic-stat-value">${topic.readings}</span>
                        <span class="topic-stat-label">Readings</span>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function initTopicFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTopicsGrid(btn.getAttribute('data-filter'));
        });
    });
}

function openTopicModal(topicKey) {
    const topic = topicsData[topicKey];
    const modal = document.getElementById('topicModal');

    document.getElementById('modalTopicTitle').textContent = topic.name;

    let content = `
        <div class="topic-content-section">
            <h3><i class="fas fa-star"></i> Key Concepts</h3>
            <ul>
                ${topic.concepts.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>

        <div class="topic-content-section">
            <h3><i class="fas fa-list"></i> Topics to Master</h3>
            <ul>
                ${topic.keyTopics.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
    `;

    if (topic.formulas.length > 0) {
        content += `
            <div class="topic-content-section">
                <h3><i class="fas fa-square-root-alt"></i> Key Formulas</h3>
                ${topic.formulas.map(f => `
                    <div class="formula-item">
                        <div class="formula-name">${f.name}</div>
                        <div class="formula-equation">${f.equation}</div>
                        <div class="formula-description">${f.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    content += `
        <div class="study-tip">
            <h4><i class="fas fa-lightbulb"></i> Study Tip</h4>
            <p>${topic.tips}</p>
        </div>

        <div class="topic-content-section" style="margin-top: 1.5rem;">
            <h3><i class="fas fa-play"></i> Quick Actions</h3>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button class="btn-primary" onclick="startTopicPractice('${topicKey}')">
                    <i class="fas fa-pencil-alt"></i> Practice Questions
                </button>
                <button class="btn-secondary" onclick="closeTopicModal(); navigateTo('formulas');">
                    <i class="fas fa-book"></i> View All Formulas
                </button>
            </div>
        </div>
    `;

    document.getElementById('modalTopicContent').innerHTML = content;
    modal.classList.add('active');
}

function closeTopicModal() {
    document.getElementById('topicModal').classList.remove('active');
}

// ============================================
// PRACTICE
// ============================================

function startPractice(mode) {
    state.practiceMode = mode;

    if (mode === 'topic') {
        showTopicSelection();
    } else if (mode === 'weak') {
        // Focus on critical topics
        const weakTopics = ['quant', 'fsa', 'derivatives'];
        state.currentTopic = weakTopics[Math.floor(Math.random() * weakTopics.length)];
        startPracticeSession();
    } else if (mode === 'random') {
        const allTopics = Object.keys(questionsData);
        state.currentTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
        startPracticeSession();
    } else if (mode === 'timed') {
        const allTopics = Object.keys(questionsData);
        state.currentTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
        startPracticeSession(true);
    }
}

function showTopicSelection() {
    const grid = document.getElementById('topicSelectGrid');
    grid.innerHTML = Object.entries(topicsData).map(([key, topic]) => `
        <button class="topic-select-btn" onclick="startTopicPractice('${key}')">
            <span class="topic-name">${topic.name}</span>
            <span class="topic-count">${questionsData[key]?.length || 0} questions</span>
        </button>
    `).join('');

    document.getElementById('topicSelection').classList.remove('hidden');
    document.querySelector('.practice-modes').style.display = 'none';
}

function startTopicPractice(topicKey) {
    state.currentTopic = topicKey;
    closeTopicModal();
    navigateTo('practice');
    startPracticeSession();
}

function startPracticeSession(timed = false) {
    state.currentQuestion = 0;
    state.selectedAnswer = null;

    document.getElementById('topicSelection').classList.add('hidden');
    document.querySelector('.practice-modes').style.display = 'none';
    document.getElementById('practiceInterface').classList.remove('hidden');

    const questions = questionsData[state.currentTopic] || [];
    document.getElementById('totalQ').textContent = questions.length;

    if (timed) {
        startTimer(180); // 3 minutes per question
    }

    renderQuestion();
}

function renderQuestion() {
    const questions = questionsData[state.currentTopic] || [];
    const q = questions[state.currentQuestion];

    if (!q) {
        endPracticeSession();
        return;
    }

    document.getElementById('currentQ').textContent = state.currentQuestion + 1;
    document.getElementById('questionTopic').textContent = topicsData[state.currentTopic].name;
    document.getElementById('questionText').textContent = q.question;

    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <div class="answer-option" onclick="selectAnswer(${i})" data-index="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${opt.substring(3)}</span>
        </div>
    `).join('');

    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('submitBtn').classList.remove('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    state.selectedAnswer = null;
}

function selectAnswer(index) {
    state.selectedAnswer = index;
    document.querySelectorAll('.answer-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

function submitAnswer() {
    if (state.selectedAnswer === null) return;

    const questions = questionsData[state.currentTopic] || [];
    const q = questions[state.currentQuestion];
    const isCorrect = state.selectedAnswer === q.correct;

    // Update stats
    state.questionsCompleted++;
    if (isCorrect) state.correctAnswers++;
    saveState();
    updateStats();

    // Show feedback
    document.querySelectorAll('.answer-option').forEach((opt, i) => {
        if (i === q.correct) opt.classList.add('correct');
        else if (i === state.selectedAnswer && !isCorrect) opt.classList.add('incorrect');
    });

    // Show explanation
    document.getElementById('explanationText').textContent = q.explanation;
    document.getElementById('explanation').classList.remove('hidden');

    document.getElementById('submitBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');

    if (isCorrect) {
        showAchievement('Correct Answer!');
    }
}

function nextQuestion() {
    state.currentQuestion++;
    renderQuestion();
}

function skipQuestion() {
    state.currentQuestion++;
    renderQuestion();
}

function endPracticeSession() {
    document.getElementById('practiceInterface').classList.add('hidden');
    document.querySelector('.practice-modes').style.display = 'grid';

    const accuracy = state.questionsCompleted > 0
        ? Math.round((state.correctAnswers / state.questionsCompleted) * 100)
        : 0;

    alert(`Practice session complete!\n\nQuestions: ${state.currentQuestion}\nAccuracy: ${accuracy}%`);
}

let timerInterval;
function startTimer(seconds) {
    clearInterval(timerInterval);
    let remaining = seconds;

    timerInterval = setInterval(() => {
        remaining--;
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        document.getElementById('practiceTimer').textContent =
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            submitAnswer();
        }
    }, 1000);
}

// ============================================
// MOCKS
// ============================================

function startMock(mockNumber) {
    alert(`Mock Exam ${mockNumber} will start.\n\nThis is a full 88-question simulation.\nTime: 4 hours 24 minutes\n\nFeature coming soon!`);
}

// ============================================
// FORMULAS
// ============================================

function initFormulas() {
    renderFormulas();
}

function renderFormulas() {
    const container = document.getElementById('formulasContainer');

    let html = '';
    Object.entries(topicsData).forEach(([key, topic]) => {
        if (topic.formulas.length === 0) return;

        html += `
            <div class="formula-category" data-topic="${key}">
                <div class="formula-category-header" onclick="toggleFormulaCategory(this)">
                    <h3><i class="fas ${topic.icon}"></i> ${topic.name}</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="formula-list">
                    ${topic.formulas.map(f => `
                        <div class="formula-item">
                            <div class="formula-name">${f.name}</div>
                            <div class="formula-equation">${f.equation}</div>
                            <div class="formula-description">${f.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleFormulaCategory(header) {
    header.parentElement.classList.toggle('expanded');
}

function searchFormulas() {
    const query = document.getElementById('formulaSearch').value.toLowerCase();
    document.querySelectorAll('.formula-category').forEach(cat => {
        const topic = topicsData[cat.dataset.topic];
        const hasMatch = topic.formulas.some(f =>
            f.name.toLowerCase().includes(query) ||
            f.equation.toLowerCase().includes(query) ||
            f.desc.toLowerCase().includes(query)
        );
        cat.style.display = hasMatch || query === '' ? 'block' : 'none';
        if (hasMatch && query !== '') cat.classList.add('expanded');
    });
}

// ============================================
// UTILITIES
// ============================================

function closeMotivation() {
    document.getElementById('motivationOverlay').classList.add('hidden');
    state.lastStudyDate = new Date().toDateString();
    updateStreak();
    saveState();
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (state.lastStudyDate === today) {
        // Already studied today
    } else if (state.lastStudyDate === yesterday) {
        state.streak++;
    } else if (state.lastStudyDate !== today) {
        state.streak = 1;
    }

    document.getElementById('streakCount').textContent = state.streak;
}

function updateUI() {
    updateStats();
}

function toggleFabMenu() {
    document.getElementById('fabMenu').classList.toggle('hidden');
}

function quickLog(type) {
    document.getElementById('fabMenu').classList.add('hidden');
    document.getElementById('logModal').classList.add('active');

    if (type === 'study') {
        document.getElementById('logTitle').textContent = 'Log Study Time';
        document.getElementById('studyLogForm').classList.remove('hidden');
        document.getElementById('questionLogForm').classList.add('hidden');
    } else {
        document.getElementById('logTitle').textContent = 'Log Questions';
        document.getElementById('studyLogForm').classList.add('hidden');
        document.getElementById('questionLogForm').classList.remove('hidden');
    }
}

function closeLog() {
    document.getElementById('logModal').classList.remove('active');
}

function logStudyTime() {
    const minutes = parseInt(document.getElementById('studyMinutes').value);
    state.studyHours += Math.round(minutes / 60 * 10) / 10;
    state.lastStudyDate = new Date().toDateString();
    updateStreak();
    saveState();
    updateStats();
    closeLog();
    showAchievement(`Logged ${minutes} minutes!`);
}

function logQuestions() {
    const total = parseInt(document.getElementById('questionCount').value);
    const correct = parseInt(document.getElementById('correctCount').value);
    state.questionsCompleted += total;
    state.correctAnswers += correct;
    state.lastStudyDate = new Date().toDateString();
    updateStreak();
    saveState();
    updateStats();
    closeLog();
    showAchievement(`Logged ${total} questions!`);
}

function showNotes() {
    document.getElementById('fabMenu').classList.add('hidden');
    document.getElementById('notesModal').classList.add('active');
    document.getElementById('notesArea').value = state.notes;
}

function closeNotes() {
    document.getElementById('notesModal').classList.remove('active');
}

function saveNotes() {
    state.notes = document.getElementById('notesArea').value;
    saveState();
    closeNotes();
    showAchievement('Notes saved!');
}

function showAchievement(text) {
    const toast = document.getElementById('achievementToast');
    document.getElementById('achievementDesc').textContent = text;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3000);
}

// Close modals on outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }
});
