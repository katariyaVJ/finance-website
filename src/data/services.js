export const serviceCategories = {
  "registration": {
    id: "registration",
    title: "Company & Entity Registration",
    icon: "Building"
  },
  "gst-taxation": {
    id: "gst-taxation",
    title: "GST & Indirect Taxation",
    icon: "FileSpreadsheet"
  },
  "income-tax": {
    id: "income-tax",
    title: "Income Tax & Direct Tax",
    icon: "Receipt"
  },
  "accounting": {
    id: "accounting",
    title: "Accounting & Auditing",
    icon: "Calculator"
  },
  "business-certifications": {
    id: "business-certifications",
    title: "Business Certifications",
    icon: "Award"
  },
  "government-licenses": {
    id: "government-licenses",
    title: "Government Licenses",
    icon: "FileCheck"
  },
  "property-rights": {
    id: "property-rights",
    title: "Intellectual Property Rights",
    icon: "ShieldAlert"
  },
  "revenue-services": {
    id: "revenue-services",
    title: "Legal & Revenue Services",
    icon: "Scale"
  }
};

export const servicesData = [
  // 1. REGISTRATION SERVICES
  {
    slug: "pvt-ltd-registration",
    name: "Private Limited Company Registration",
    category: "registration",
    description: "Incorporate a Private Limited company to secure limited liability and gain high credibility.",
    fullDescription: "A Private Limited Company is the most popular corporate legal entity in India. It offers limited liability protection, high investor credibility, and separate legal entity status. It is ideal for startups and businesses aiming to raise capital.",
    whoNeedsIt: ["Startups seeking venture capital", "Growing businesses", "Companies seeking high credibility"],
    documentsRequired: ["PAN Card of all Directors", "Aadhaar Card / Voter ID of all Directors", "Passport-size photograph of Directors", "Electricity Bill / Rent Agreement of Office Address", "NOC from property owner"],
    processSteps: ["Apply for Digital Signature Certificate (DSC)", "Apply for Director Identification Number (DIN)", "Name Approval Application", "Drafting of MoA and AoA", "Filing of SPICe+ Incorporation Form", "Issuance of COI, PAN & TAN"]
  },
  {
    slug: "llp-registration",
    name: "LLP Registration",
    category: "registration",
    description: "Form an LLP for professional services or family businesses with lower compliance costs.",
    fullDescription: "An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership. It is suitable for small and medium enterprises and professional services firms.",
    whoNeedsIt: ["Professional service providers (CA, CS, Engineers, Consultants)", "Partnership businesses looking for limited liability"],
    documentsRequired: ["PAN Card of all Partners", "Aadhaar Card / Voter ID of all Partners", "Electricity Bill of registered office address", "Rent Agreement and NOC from owner", "Partnership agreement draft"],
    processSteps: ["Apply for Digital Signature (DSC)", "Obtain Name Approval", "File Incorporation Form (FiLLiP)", "Draft and File LLP Agreement (Form 3)"]
  },
  {
    slug: "public-ltd-registration",
    name: "Public Limited Company Registration",
    category: "registration",
    description: "Register a Public Limited Company to raise capital from the public and operate on a large scale.",
    fullDescription: "A Public Limited Company is a corporate entity registered under the Companies Act, 2013, which offers shares to the public and has unlimited shareholders. It requires a minimum of 3 directors and 7 shareholders.",
    whoNeedsIt: ["Large-scale businesses looking to list on stock exchanges", "Companies wishing to raise equity from public", "Conglomerates and joint ventures"]
  },
  {
    slug: "partnership-registration",
    name: "Partnership Firm Registration",
    category: "registration",
    description: "Establish a partnership firm quickly with minimal regulatory compliances.",
    fullDescription: "A Partnership Firm is a business structure where two or more people carry out business together under a Partnership Deed. Registering a partnership firm under the Indian Partnership Act, 1932 provides legal proof of the firm's existence.",
    whoNeedsIt: ["Small businesses with two or more owners", "Co-founded ventures with short term goals"],
    documentsRequired: ["Partnership Deed signed by all partners", "PAN Card & Aadhaar of all partners", "Rent Agreement of business location", "Electricity Bill & NOC"],
    processSteps: ["Draft Partnership Deed", "Purchase Stamp Paper", "Execute deed and register with Registrar of Firms (ROF) in respective state"]
  },
  {
    slug: "ngo-registration",
    name: "NGO Registration",
    category: "registration",
    description: "Incorporate a Section 8 non-profit company for charitable purposes.",
    fullDescription: "Section 8 Company is established for promoting art, science, commerce, education, charity, environmental protection, or religion. It is a highly respected legal structure for non-profit organizations.",
    whoNeedsIt: ["Charities", "Educational groups", "Social welfare organizations", "Scientific groups"],
    documentsRequired: ["PAN & Aadhaar of Directors", "Director Details & Profile", "Electricity Bill of Registered Office", "NOC & Rent Deed"],
    processSteps: ["Apply for DSC & DIN", "Apply for Name Approval via SPICe+ Run", "Draft MoA & AoA specifying non-profit objectives", "Apply for License under Section 8", "File SPICe+ for Incorporation"]
  },
  {
    slug: "trust-registration",
    name: "Trust Registration",
    category: "registration",
    description: "Create a public or private trust to manage and allocate assets or perform charity.",
    fullDescription: "A Trust is created to manage assets for the benefit of a third party (private trust) or for public charitable purposes (public trust). It is registered at the local sub-registrar office.",
    whoNeedsIt: ["Individuals wanting to manage estate", "Philanthropists", "Educational institutions"],
    documentsRequired: ["Trust Deed on Stamp Paper", "PAN & Aadhaar of Trustees & Settlor", "Two witnesses with identity proofs", "NOC & Electricity Bill of Trust Office"],
    processSteps: ["Draft Trust Deed with objectives and trustees", "Buy Stamp Paper of requisite value", "Book appointment with Sub-Registrar", "Register the deed in front of Sub-Registrar"]
  },
  {
    slug: "opc-registration",
    name: "OPC Registration",
    category: "registration",
    description: "Start a company with a single director and enjoy limited liability.",
    fullDescription: "One Person Company is a corporate structure that allows a single entrepreneur to operate a corporate entity with limited liability. It requires a nominee director to maintain perpetuity.",
    whoNeedsIt: ["Solo founders", "Proprietors looking to scale and get corporate benefits"],
    documentsRequired: ["PAN Card & Aadhaar of Director & Nominee", "Passport-size photograph", "Office Utility Bill (electricity bill)", "NOC & Rent Agreement"],
    processSteps: ["Apply for DSC & DIN", "File Name Approval", "File SPICe+ form with Nominee consent (INC-3)", "Issuance of Certificate of Incorporation"]
  },
  {
    slug: "society-registration",
    name: "Society Registration",
    category: "registration",
    description: "Establish a society for cultural, educational, or sporting activities.",
    fullDescription: "Society registration is done for promoting scientific, literary, or charitable purposes, or for public welfare. Under the Societies Registration Act, 1860, a minimum of 7 members are required to form a society.",
    whoNeedsIt: ["Resident welfare associations", "Clubs & sports associations", "Literary and art societies"],
    documentsRequired: ["List of Governing Body Members", "Aadhaar & PAN of all members", "Memorandum of Association & Rules", "Electricity Bill & NOC of office"],
    processSteps: ["Draft MoA & Rules of the Society", "Collect signatures from all founding members", "Submit application to State Registrar of Societies", "Get Certificate of Registration"]
  },
  {
    slug: "startup-india",
    name: "Startup India Registration",
    category: "registration",
    description: "Get DPIIT recognition to claim tax holidays, patent rebates, and government support.",
    fullDescription: "Startup India is a flagship initiative of the Government of India, intended to build a strong ecosystem for nurturing innovation. Registered startups can get tax exemptions, intellectual property rebates, and self-compliance benefits.",
    whoNeedsIt: ["Innovative companies with unique products/services", "Entities registered within the last 10 years"],
    documentsRequired: ["Certificate of Incorporation / Registration", "Write-up on innovation/scalability", "Pitch Deck / Product screenshots", "Patent/Trademark details (if any)"],
    processSteps: ["Register on Startup India Portal", "Apply for DPIIT Recognition", "Provide product details, problem statement, and solution", "Evaluation and approval by DPIIT panel"]
  },
  {
    slug: "nidhi-company",
    name: "Nidhi Company Registration",
    category: "registration",
    description: "Incorporate a Nidhi company to cultivate saving habits and lend among members.",
    fullDescription: "A Nidhi Company is a type of company in the Indian non-banking financial sector, recognized under Section 406 of the Companies Act, 2013. Their core business is borrowing and lending money between their members.",
    whoNeedsIt: ["Mutual benefit financial entities", "Microfinance organizers", "Savings groups"],
    documentsRequired: ["PAN & Aadhaar of minimum 3 Directors and 7 Shareholders", "Office address proof (Electricity bill)", "NOC from owner"],
    processSteps: ["Register as a Public Limited Company first", "Ensure minimum 200 members within a year", "File NDH-1 and NDH-3 compliance forms", "Ensure minimum net owned fund standards"]
  },
  {
    slug: "msme-registration",
    name: "MSME Registration",
    category: "registration",
    description: "Register for Udyam to get interest rate benefits, collateral-free loans, and government tenders.",
    fullDescription: "Udyam Registration is a paperless, self-declaration process to register MSMEs in India. It provides access to numerous subsidies, credit guarantees, and protection against delayed payments.",
    whoNeedsIt: ["All micro, small, and medium businesses in manufacturing or service sectors"],
    documentsRequired: ["Aadhaar Card of the proprietor / partner / director", "PAN Card of the organization", "GSTIN (if applicable)", "Bank Account Details"],
    processSteps: ["Visit Udyam Registration Portal", "Enter Aadhaar & PAN details", "Provide investment and turnover details", "Generate instant Udyam Certificate"]
  },
  {
    slug: "epf-esic",
    name: "EPF Registration",
    category: "registration",
    description: "Secure EPF & ESIC registration to offer social security benefits to employees.",
    fullDescription: "Employee Provident Fund (EPF) and Employee State Insurance (ESIC) are mandatory registrations for employers with employee strength above 20 and 10 respectively, providing retirement and medical benefits.",
    whoNeedsIt: ["Factories or establishments with 10+ or 20+ employees"],
    documentsRequired: ["PAN & Certificate of Incorporation of business", "List of employees with salary details", "Bank account details of the firm", "Aadhaar & PAN of Directors/Partners"],
    processSteps: ["Create employer account on Shram Suvidha Portal", "Submit registration form with business information", "Verify employee details", "Generate EPFO and ESIC codes"]
  },
  {
    slug: "gumasta-license",
    name: "Shop & Establishment Registration",
    category: "registration",
    description: "Obtain Gumasta/Shop & Establishment license to legalise operations of physical shops and commercial premises.",
    fullDescription: "The Shop and Establishment Act (also known as Gumasta in Gujarat/Maharashtra) regulates conditions of work, payment of wages, and business hours. It is mandatory for opening a business bank account.",
    whoNeedsIt: ["Retail shops", "Offices", "Warehouses", "Restaurants", "Commercial establishments"],
    documentsRequired: ["PAN & Aadhaar of Owner", "Photo of Shop Front with Name Board (in Gujarati/local language)", "Electricity Bill & Rent Agreement of premises", "Partnership deed / COI (if applicable)"],
    processSteps: ["Create login on State Municipal Portal", "Fill application form with employee count and business nature", "Upload documents and pay fee", "Download Gumasta License"]
  },
  {
    slug: "ngo-darpan",
    name: "Darpan Registration",
    category: "registration",
    description: "Get NGO Darpan ID to become eligible for government grants and projects.",
    fullDescription: "NGO Darpan is a portal initiated by NITI Aayog that establishes a platform between NGOs and government ministries. It is mandatory for getting government funding and grants.",
    whoNeedsIt: ["Registered Trusts, Societies, and Section 8 companies seeking government projects"],
    documentsRequired: ["Registration Certificate (Trust Deed / COI / Society Certificate)", "PAN Card of the NGO", "PAN & Aadhaar details of Executive Committee members", "Active email & mobile number"],
    processSteps: ["Create account on NITI Aayog NGO Darpan website", "Fill in details of members and past achievements", "Link PAN of the NGO", "Submit and obtain unique Darpan ID"]
  },
  {
    slug: "iec-registration",
    name: "IEC Registration (Import Export Code)",
    category: "registration",
    description: "Get IEC from DGFT to engage in import and export activities from India.",
    fullDescription: "Import Export Code (IEC) is a 10-digit code issued by the DGFT (Director General of Foreign Trade). It is mandatory for any business importing or exporting goods and services from India.",
    whoNeedsIt: ["Exporters", "Importers", "Service providers targeting global clients"],
    documentsRequired: ["PAN of Entity / Individual", "Aadhaar of applicant", "Cancelled Cheque / Bank Certificate", "Address proof of business"],
    processSteps: ["Access DGFT Portal", "Apply for IEC online using DSC/Aadhaar OTP", "Pay the government processing fee", "Instant allocation of IEC number"]
  },
  {
    slug: "psara-license",
    name: "PSARA License",
    category: "registration",
    description: "Obtain PSARA License to legally run a private security agency in India.",
    fullDescription: "The Private Security Agencies Regulation Act (PSARA) requires private security agencies to obtain a state-specific license before starting operations. It involves strict background verification of promoters.",
    whoNeedsIt: ["Private security guard providers", "Facility management companies offering security"],
    documentsRequired: ["PAN, Aadhaar & ITR of Directors", "Character verification certificate of directors", "MOU with a training institute", "Logos and uniform designs", "Office address proof"],
    processSteps: ["Gather documents and sign MOU with a security training center", "Apply for character verification of promoters", "File license application on PSARA portal", "Police inspection at office", "Issuance of license by Controlling Authority"]
  },
  {
    slug: "tax-exemption-12a-80g",
    name: "12A & 80G Registration",
    category: "registration",
    description: "Register NGOs under 12A & 80G to secure tax exemptions and donor benefits.",
    fullDescription: "Under Section 12A, an NGO can seek exemption from paying income tax on receipts. Under Section 80G, donors can claim tax deductions for donations made to the NGO. These are critical registrations for raising funds.",
    whoNeedsIt: ["NGOs, Trusts, Societies aiming to raise tax-free donations"],
    documentsRequired: ["Trust Deed / Registration Certificate", "NGO Darpan ID", "Activity Report of past 3 years (if applicable)", "PAN of the NGO", "Details of Trustees"],
    processSteps: ["Apply online in Form 10A (provisional registration)", "Verification by Income Tax Department", "Grant of provisional approval for 3 years", "Apply for permanent registration in Form 10AB"]
  },
  {
    slug: "wordmark-registration",
    name: "Wordmark Registration",
    category: "registration",
    description: "Protect your brand name (wordmark) and secure the TM symbol immediately.",
    fullDescription: "Wordmark registration protects the text / name of your brand, irrespective of how it is designed or styled. It grants exclusive rights to use the name for specified goods and services.",
    whoNeedsIt: ["Businesses looking to secure their brand name from competitors"],
    documentsRequired: ["Brand name details", "Power of Attorney (signed by applicant)", "User Affidavit (if trademark is already in use)", "Proof of business (MSME / COI)"],
    processSteps: ["Conduct a Trademark Search to verify availability", "Select the correct class of goods/services", "File TM-A application on IP India portal", "Use 'TM' symbol immediately; wait for examination"]
  },

  // 2. GST & TAXATION SERVICES
  {
    slug: "gst-return-filing",
    name: "GST Return Filing",
    category: "gst-taxation",
    description: "Ensure error-free GSTR-1, GSTR-3B, and annual GSTR-9 returns on time.",
    fullDescription: "GST Return Filing is mandatory for all businesses holding a GST registration. We handle regular, composition, and annual filings. Our team ensures proper invoice matching and prevents penalties.",
    whoNeedsIt: ["All GST registered business owners (regular and composite schemes)"],
    documentsRequired: ["Sales Invoice details", "Purchase Invoice details", "Bank Statements", "GST Portal Logins"],
    processSteps: ["Data collection of sales and purchases", "Reconciliation of Input Tax Credit (ITC)", "Preparation of GSTR-1 & GSTR-3B draft", "Filing and sharing of ARN receipt"]
  },
  {
    slug: "virtual-gst-address",
    name: "Virtual GST Registration (All India Locations)",
    category: "gst-taxation",
    description: "Get a professional business address to register for GST in any Indian state (all India location).",
    fullDescription: "A Virtual GST Address allows e-commerce sellers and remote businesses to register for GST in states where they do not have physical offices. We provide a legal address with complete documentation.",
    whoNeedsIt: ["Amazon / Flipkart sellers", "E-commerce startups", "Remote IT service companies"],
    documentsRequired: ["PAN & Aadhaar of business promoters", "Business registration proof", "State preference for virtual office"],
    processSteps: ["Selection of virtual office address in chosen state", "Execution of Rent Agreement and NOC", "Provision of Electricity Bill", "Filing for GST registration using provided address"]
  },
  {
    slug: "input-tax-credit-reconciliation",
    name: "Input Tax Credit",
    category: "gst-taxation",
    description: "Maximize your ITC claims through periodic GSTR-2B matching and vendor follow-up.",
    fullDescription: "Input Tax Credit reconciliation is critical to avoid losses. We compare your purchase books with GSTR-2B and 2A to ensure you only pay the net GST liability and flag non-compliant vendors.",
    whoNeedsIt: ["Manufacturing companies", "Wholesalers", "Service businesses with high expenses"],
    documentsRequired: ["Purchase Book (ERP/Excel)", "GST Portal Credentials", "Vendor details for follow-ups"],
    processSteps: ["Download GSTR-2B details from portal", "Map purchase register with portal ITC", "Identify mismatching or missing vendor invoices", "Draft notice or follow up with suppliers"]
  },
  {
    slug: "e-invoice-setup",
    name: "GST E-Invoice & E-Way Bill",
    category: "gst-taxation",
    description: "Implement mandated E-invoicing with IRN generation directly from your ERP and fast E-Way Bill filings.",
    fullDescription: "E-invoicing is mandatory for businesses crossing specific turnover thresholds. We help set up E-invoice APIs and direct IRN/QR code generation on your billing system to ensure smooth transit of goods.",
    whoNeedsIt: ["B2B businesses crossing turnover thresholds"],
    documentsRequired: ["GST credentials", "Details of accounting ERP software in use", "Sample invoice templates"],
    processSteps: ["Register on E-invoice Sandbox portal", "Perform integration testing with ERP API", "Go live on production portal", "Train team on generating IRN and QR codes"]
  },
  {
    slug: "gst-notice-solving",
    name: "GST Notice Resolution",
    category: "gst-taxation",
    description: "Resolve GST notices, demand mismatches, and scrutiny assessments professionally.",
    fullDescription: "Receiving a GST notice (ASMT-10, DRC-01, etc.) requires prompt legal reply. Our expert consultants analyze the demand, match it with records, and draft legal submissions to resolve the discrepancy.",
    whoNeedsIt: ["Businesses receiving demand notices from GST department"],
    documentsRequired: ["Copy of the GST Notice received", "Year-wise sales/purchase books", "GST return filings and matching sheets"],
    processSteps: ["Examine the notice and grounds of demand", "Formulate a reconciliation sheet", "Draft formal legal reply with supporting proofs", "File reply online and represent in front of GST officer if needed"]
  },

  // 3. INCOME TAX SERVICES
  {
    slug: "income-tax-services",
    name: "Income Tax Services",
    category: "income-tax",
    description: "Complete income tax planning, advance tax calculation, and tax saving consultation.",
    fullDescription: "Get expert tax planning, computation, and advisory services from our experienced Chartered Accountants. We help individuals and businesses optimize their tax liability and ensure full compliance under direct tax regulations."
  },
  {
    slug: "itr-filing",
    name: "Income Tax Return Filing",
    category: "income-tax",
    description: "File ITR-1 to ITR-7 accurately to maximize refunds and avoid tax notices.",
    fullDescription: "Income Tax Return filing is an annual task for individuals, HUFs, firms, and companies. We structure your salary, business, and capital gain incomes to compute tax liability correctly and file the return.",
    whoNeedsIt: ["Salaried Individuals", "Business Owners & Proprietors", "Partnership Firms & LLPs", "Private Limited Companies"],
    documentsRequired: ["Form 16 (for salaried)", "Form 26AS & AIS (Annual Information Statement)", "Bank account statement for the financial year", "Capital gain statements from brokers", "Investment proofs (80C, 80D, etc.)"],
    processSteps: ["Retrieve income data and AIS/26AS", "Calculate taxable income under old/new tax regime", "Draft tax computation sheet for review", "Submit ITR on e-filing portal", "Verify ITR via Aadhaar OTP"]
  },
  {
    slug: "tds-tcs-return",
    name: "TDS Return Filing",
    category: "income-tax",
    description: "File quarterly TDS/TCS returns to avoid late fee penalties and enable tax credit.",
    fullDescription: "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) quarterly returns (Form 24Q, 26Q, 27Q, 27EQ) must be filed by deductors to report tax deductions. We ensure prompt filing.",
    whoNeedsIt: ["Corporate employers", "Proprietors/firms paying rent/contract fee above threshold"],
    documentsRequired: ["Challan details of TDS payment", "Deductee details (PAN, name, transaction amount)", "TDS portal credentials"],
    processSteps: ["Verify TDS payments made during the quarter", "Validate PAN details of deductees", "Generate FVU file using NSDL utility", "Upload return and generate Form 16/16A certificates"]
  },
  {
    slug: "pf-return-filing",
    name: "PF Return Filing",
    category: "income-tax",
    description: "Complete monthly PF contribution calculations and return filings online.",
    fullDescription: "Establishments registered under EPFO must make monthly contributions and file returns by the 15th of every month. We prepare the ECR files and ensure seamless compliance.",
    whoNeedsIt: ["All business establishments registered under EPF & ESIC"],
    documentsRequired: ["Monthly payroll sheets", "UAN list of employees", "Employer login credentials"],
    processSteps: ["Prepare employee contribution sheet", "Generate ECR text file", "Upload ECR on EPFO employer portal", "Generate payment challan (TRRN)"]
  },
  {
    slug: "itr-forms-scrutiny",
    name: "ITR Scrutiny Support",
    category: "income-tax",
    description: "Draft representation for Section 143(1), 143(2) and faceless assessment notices.",
    fullDescription: "Income tax notices can be issued for mismatched assets, high-value transactions, or scrutiny. We handle the reply process through the online faceless assessment portal, protecting you from heavy penalties.",
    whoNeedsIt: ["Taxpayers receiving notices under section 143(1), 143(2), 148, or 131"],
    documentsRequired: ["Income tax notice copy", "ITR and Computation sheet of relevant assessment year", "Bank statements, ledger books, and source of funds proofs"],
    processSteps: ["Analyze the reasons for notice / query", "Perform financial reconciliation", "Draft and upload point-by-point response on e-Filing portal", "Attend virtual hearings if summoned"]
  },
  {
    slug: "itr-form-filling",
    name: "All ITR Form Filing",
    category: "income-tax",
    description: "Expert assistance in preparing and filing all forms of Income Tax Returns (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6, ITR-7).",
    fullDescription: "Filing the correct ITR form is essential. From salaried individuals (ITR-1) to capital gains (ITR-2), proprietary businesses (ITR-3/4), firms (ITR-5), companies (ITR-6), and trusts (ITR-7), we file them all accurately."
  },
  {
    slug: "income-tax-audit",
    name: "Income Tax Audit & Assessment",
    category: "income-tax",
    description: "Tax audit reporting under Section 44AB and full representation for assessments.",
    fullDescription: "Businesses and professionals crossing specified turnover thresholds must get their accounts audited by a Chartered Accountant under Section 44AB. We conduct thorough audits and file Form 3CD."
  },

  // 4. ACCOUNTING & AUDITING SERVICES
  {
    slug: "bookkeeping-services",
    name: "Bookkeeping",
    category: "accounting",
    description: "Maintain daily sales, purchases, and bank entries in Tally or QuickBooks.",
    fullDescription: "Accurate bookkeeping forms the basis of all financial decisions. We record day-to-day transactions including sales, receipts, purchases, payments, and journal entries, keeping your financial statements accurate.",
    whoNeedsIt: ["Small businesses", "Startups", "SMEs lacking full-time in-house accountant"],
    documentsRequired: ["Bank Statements", "Purchase and Sales bills", "Expense receipts", "Cash registers"],
    processSteps: ["Configure ledger structure in Tally/QuickBooks", "Enter monthly transactions regularly", "Perform monthly bookkeeping audits", "Generate trial balance and ledgers"]
  },
  {
    slug: "monthly-accounting",
    name: "Monthly Accounting",
    category: "accounting",
    description: "Get monthly P&L, balance sheets, and reconciliation statements for your firm.",
    fullDescription: "Our monthly accounting package offers complete outsourcing. We manage invoices, payments, tax calculations, and provide periodic reports to help monitor profitability.",
    whoNeedsIt: ["Medium scale businesses looking for outsourced financial control"],
    documentsRequired: ["Daily invoice data", "Expense vouchers", "Bank transactions"],
    processSteps: ["Process financial transactions daily/weekly", "Perform monthly GST/TDS tax deductions", "Prepare Balance Sheet and profit/loss statements", "Conduct monthly management review meeting"]
  },
  {
    slug: "gst-reconciliation-accounting",
    name: "GST Accounting & Reconciliation",
    category: "accounting",
    description: "Reconcile sales/purchase books with GSTR-1 & GSTR-3B filings to clear audits.",
    fullDescription: "We perform matching between your internal ledger sales/purchases and filed GST returns to ensure no mismatch is flagged during department audits.",
    whoNeedsIt: ["Registered GST taxpayers during financial year-end auditing"],
    documentsRequired: ["Books of accounts (Sales & Purchase registers)", "GST filings summary"],
    processSteps: ["Import books and portal data", "Align tax values and invoice numbers", "Detect mismatching tax values", "Suggest adjustment journal entries"]
  },
  {
    slug: "bank-reconciliation-statement",
    name: "Bank Reconciliation (BRS)",
    category: "accounting",
    description: "Align your bank passbooks with cash books to identify unpaid cheques or errors.",
    fullDescription: "We compare your cash book bank column with the bank statement to verify that all transactions are recorded, checking for outstanding cheques, charges, or direct credits.",
    whoNeedsIt: ["Any company with high volume of daily transactions"],
    documentsRequired: ["Cash book ledger", "Bank statement/passbook"],
    processSteps: ["Examine debit and credit columns of bank statement", "Match with ledger items", "Identify unrepresented/undeposited cheques", "Prepare reconciliation report"]
  },
  {
    slug: "debtor-creditor-management",
    name: "Debtor & Creditor Management",
    category: "accounting",
    description: "Track receivables and payables with aging analysis to improve cash flow.",
    fullDescription: "Maintain a healthy cash flow by managing aging receivables and payables. We draft aging reports, flag delayed payments, and reconcile accounts with vendors.",
    whoNeedsIt: ["B2B traders", "Manufacturers", "Service organizations dealing in credit sales"],
    documentsRequired: ["Party ledgers", "Credit period terms", "Payment receipt details"],
    processSteps: ["Review outstanding balances", "Categorize by aging bracket (0-30 days, 30-60 days, etc.)", "Generate payment reminders", "Resolve disputes through statement matching"]
  },
  {
    slug: "expense-management",
    name: "Expense Management",
    category: "accounting",
    description: "Design corporate policies, optimize business expenditures, and verify vouchers.",
    fullDescription: "Audit, analyze, and optimize your business expenditure. We help businesses categorize overheads, set expense limits, and implement automated tracking systems."
  },
  {
    slug: "stock-inventory-management",
    name: "Stock Inventory Management",
    category: "accounting",
    description: "Physical verification, valuation of inventory, and reconciliation of stocks.",
    fullDescription: "Accurate inventory tracking is crucial for retail and manufacturing. We set up inventory ledgers, calculate cost of goods sold (COGS), and execute periodic physical stock takes."
  },
  {
    slug: "auditing-support",
    name: "Auditing & Assurance",
    category: "accounting",
    description: "Prepare books, ledger accounts, and reports for Tax Audit and Statutory Audit.",
    fullDescription: "Preparing for audit can be challenging. We prepare and organize your books, depreciation charts, tax calculations, and support your Statutory/Tax Auditor to ensure smooth completion.",
    whoNeedsIt: ["Companies needing statutory audits or businesses crossing tax audit thresholds"],
    documentsRequired: ["Entire year's ledgers and bank statements", "Fixed Asset register", "Inventory sheets"],
    processSteps: ["Verify all entries and tax compliance beforehand", "Prepare final financial statement drafts", "Address auditor queries and provide supporting vouchers"]
  },
  {
    slug: "outsource-bookkeeping",
    name: "Outsourced Bookkeeping Services",
    category: "accounting",
    description: "Complete outsourced back-office accounting, payroll, and compliance.",
    fullDescription: "Delegate your finance back-office to us. We handle invoicing, vendor payments, salary disbursements, and compliance reporting entirely online."
  },

  // 5. BUSINESS CERTIFICATIONS
  {
    slug: "rera-registration",
    name: "RERA Registration",
    category: "business-certifications",
    description: "Register real estate projects and agents under RERA to avoid heavy penalties.",
    fullDescription: "Under the Real Estate Regulation and Development Act (RERA), developers and agents must register before advertising or selling plots/apartments. We handle the process from project filing to agent codes.",
    whoNeedsIt: ["Builders & Developers", "Real Estate Agents"],
    documentsRequired: ["Project land title details", "Sanctioned plans and approvals", "PAN & Aadhaar of promoters", "Audited balance sheet of developers"],
    processSteps: ["Prepare project checklist and promoter documents", "File application online on state RERA portal", "Obtain unique RERA Project/Agent Registration ID"]
  },
  {
    slug: "iso-certification",
    name: "ISO Registration Services",
    category: "business-certifications",
    description: "Get ISO 9001 (Quality), 14001 (Environment) & 27001 (Security) certification.",
    fullDescription: "ISO certification demonstrates that your management, manufacturing, or service processes meet international quality standards. It is crucial for getting corporate client projects and government tenders.",
    whoNeedsIt: ["Manufacturing units", "IT providers", "Corporate service firms"],
    documentsRequired: ["Business registration proof", "Nature of business and organizational structure", "Process flowchart"],
    processSteps: ["Select relevant ISO standard", "Draft quality manuals and policies", "System inspection and internal audit", "Final audit by ISO certification body and issuance"]
  },
  {
    slug: "bis-certification",
    name: "BIS Registration",
    category: "business-certifications",
    description: "Obtain ISI mark / BIS certification for mandated consumer products.",
    fullDescription: "BIS (Bureau of Indian Standards) certification allows manufacturers to use the ISI mark on their products. It is mandatory for steel products, electronics, toys, and electrical items.",
    whoNeedsIt: ["Product manufacturers targeting the Indian market"],
    documentsRequired: ["Factory registration proof", "Raw material testing certificates", "In-house lab testing equipment details", "Product layout/drawings"],
    processSteps: ["Apply online on BIS portal", "Factory audit by BIS officer", "Sample collection and lab testing", "Grant of BIS license upon matching test results"]
  },
  {
    slug: "nsic-registration",
    name: "NSIC Registration",
    category: "business-certifications",
    description: "Register with National Small Industries Corporation to avail tender benefits and subsidies.",
    fullDescription: "NSIC registration is tailored for MSMEs to participate in government tenders for free, receive concession on security deposits, and access technology support."
  },
  {
    slug: "peso-certificate",
    name: "PESO Certificate",
    category: "business-certifications",
    description: "Acquire Petroleum and Explosives Safety Organisation approvals for hazardous goods storage and manufacturing.",
    fullDescription: "PESO certification is mandatory for entities importing, manufacturing, or storing explosives, petroleum, compressed gases, and flame-proof equipment in India."
  },
  {
    slug: "hallmark-registration",
    name: "Hallmark Registration",
    category: "business-certifications",
    description: "Get BIS Hallmark License for gold and silver jewelry showrooms and refinery setups.",
    fullDescription: "It is legally mandatory for jewelers selling gold and silver ornaments to get Hallmark registration under BIS guidelines to prove purity."
  },
  {
    slug: "rubber-board-registration",
    name: "Rubber Board Registration",
    category: "business-certifications",
    description: "Apply for license to trade, manufacture, or export natural rubber products in India.",
    fullDescription: "Under the Rubber Act, 1947, any dealer, processor, or manufacturer using natural rubber must obtain a registration certificate from the Rubber Board of India."
  },
  {
    slug: "ijcepa-certificate",
    name: "IJCEPA Certificate",
    category: "business-certifications",
    description: "Obtain India-Japan Comprehensive Economic Partnership Agreement preferential certificate of origin.",
    fullDescription: "Exporters sending goods to Japan can utilize the IJCEPA preferential certificate to avail lower import duty structures in Japan."
  },
  {
    slug: "fpo-mark-certification",
    name: "FPO Mark Certification",
    category: "business-certifications",
    description: "Acquire FPO Mark for processed fruit and vegetable products in India.",
    fullDescription: "The FPO Mark is a certification mark mandatory on all processed fruit products sold in India, ensuring that they are prepared in a hygienic environment."
  },
  {
    slug: "spice-board-registration",
    name: "Spice Board Registration",
    category: "business-certifications",
    description: "Get Certificate of Registration as an Exporter of Spices (CRES) from the Spice Board of India.",
    fullDescription: "Any individual or business exporter wishing to export spices from India must hold a CRES issued by the Spice Board of India."
  },
  {
    slug: "bee-registration",
    name: "BEE Registration",
    category: "business-certifications",
    description: "Obtain Bureau of Energy Efficiency star ratings for household electrical appliances.",
    fullDescription: "BEE registration is required for manufacturers to display energy consumption ratings on appliances like ACs, refrigerators, and water heaters."
  },
  {
    slug: "make-in-india-certificate",
    name: "Make In India Certificate",
    category: "business-certifications",
    description: "Get certified under the Make in India initiative for tender preferences.",
    fullDescription: "A self-declaration or CA-verified certificate showing local content percentages to secure bidding preferences in public procurement tenders."
  },
  {
    slug: "zed-certification",
    name: "ZED Certification",
    category: "business-certifications",
    description: "Acquire Zero Defect Zero Effect rating for manufacturing MSMEs.",
    fullDescription: "The ZED scheme rates businesses based on their quality standards and eco-friendly practices, unlocking subsidies and credit facilities."
  },
  {
    slug: "nsdc-registration",
    name: "NSDC Registration",
    category: "business-certifications",
    description: "Register training centers and organizations under National Skill Development Corporation.",
    fullDescription: "Connect with the government's vocational and skill training initiatives by registering your organization as an approved NSDC training partner."
  },
  {
    slug: "ngo-project-report",
    name: "NGO Project Report Drafting",
    category: "business-certifications",
    description: "Get professional funding proposals and detailed project reports (DPR) written for your NGO.",
    fullDescription: "A detailed document explaining the social impact, implementation pipeline, and financial budgeting of an NGO program to attract corporate CSR grants."
  },
  {
    slug: "cmmi-certification",
    name: "CMMI Certification",
    category: "business-certifications",
    description: "Capability Maturity Model Integration rating (Levels 1 to 5) for software processes.",
    fullDescription: "Improve software engineering workflows and secure global IT development contracts by achieving verified CMMI compliance."
  },
  {
    slug: "apeda-registration",
    name: "APEDA Registration",
    category: "business-certifications",
    description: "Register with Agricultural and Processed Food Products Export Development Authority.",
    fullDescription: "Mandatory registration for exporters dealing in fruits, vegetables, dairy, poultry, and meat products from India."
  },
  {
    slug: "texprocil-registration",
    name: "TEXPROCIL Registration",
    category: "business-certifications",
    description: "Register with the Cotton Textiles Export Promotion Council for export benefits.",
    fullDescription: "Get membership with TEXPROCIL to secure duty drawback benefits, market access initiatives, and trade fair participations."
  },
  {
    slug: "certificate-of-good-standing",
    name: "Certificate of Good Standing",
    category: "business-certifications",
    description: "Acquire official certificates for corporate entities, medical, and legal professionals.",
    fullDescription: "A certificate proving that a business is legally compliant, active, and has filed all annual returns with the Registrar of Companies (ROC)."
  },
  {
    slug: "ce-certification",
    name: "CE Certification",
    category: "business-certifications",
    description: "Get CE marking for products manufactured or exported to the European Economic Area.",
    fullDescription: "The CE Mark represents that a product meets European health, safety, and environmental protection standards."
  },

  // 6. GOVERNMENT LICENSES & OTHERS
  {
    slug: "fssai-license",
    name: "FSSAI Food License Registration",
    category: "government-licenses",
    description: "Get Basic, State, or Central FSSAI license for food manufacture, trading, or restaurant business.",
    fullDescription: "FSSAI registration/license is mandatory for any food business operator (FBO) in India. This includes manufacturing, processing, packaging, distribution, transportation, and selling of food products.",
    whoNeedsIt: ["Restaurants & Cafes", "Food manufacturers", "Grocery stores", "Cloud kitchens", "Food importers"],
    documentsRequired: ["Passport photo of applicant", "Aadhaar / PAN Card", "Electricity Bill & Rent agreement of food unit", "Layout plan of manufacturing unit (for state/central)"],
    processSteps: ["Determine eligibility based on production capacity/turnover", "Submit application in FoSCoS portal", "Upload documents and pay fee", "Inspection by food safety officer (if required)", "Issuance of FSSAI Certificate"]
  },
  {
    slug: "drug-license",
    name: "Drug License (Retail / Wholesale)",
    category: "government-licenses",
    description: "Secure retail or wholesale drug license to open pharmacy shops or medicine distribution.",
    fullDescription: "Under the Drugs and Cosmetics Act, 1940, any business dealing in pharmacy, drug retail, wholesale, or import must obtain a drug license. It requires a qualified pharmacist on staff.",
    whoNeedsIt: ["Pharmacy shops", "Pharmaceutical distributors"],
    documentsRequired: ["Registered Pharmacist degree & registration certificate", "Rent agreement & blue-print layout of shop (min 15 sq mtrs for wholesale)", "Refrigerator purchase bill", "PAN & Aadhaar of owner"],
    processSteps: ["Prepare shop layout and infrastructure", "File application on state drug control portal", "Inspection by Drug Inspector (DI)", "Grant of Retail/Wholesale Drug License"]
  },
  {
    slug: "trade-license",
    name: "Trade License",
    category: "government-licenses",
    description: "Obtain Municipal Trade License to start business operations in local municipal limits.",
    fullDescription: "A Trade License is permission granted by local municipal corporations (like SMC in Surat) to carry out specific trades or businesses in a commercial location.",
    whoNeedsIt: ["All retail, service, and manufacturing units operating within city corporation limits"],
    documentsRequired: ["Gumasta License", "Electricity Bill & Rent Agreement", "Property tax paid receipt", "NOC from neighbors (in case of factories)"],
    processSteps: ["Apply online or offline at local ward office", "Upload documents & physical site details", "Pay license fee calculated by size/nature of trade", "Get municipal approval and certificate"]
  },
  {
    slug: "liquor-license",
    name: "Liquor License",
    category: "government-licenses",
    description: "Acquire permissions for selling, serving, or storing alcoholic beverages in commercial venues.",
    fullDescription: "We provide consultation and help prepare documentation to apply for state excise licenses for bars, hotels, restaurants, and clubs."
  },
  {
    slug: "ayush-license",
    name: "Ayush License",
    category: "government-licenses",
    description: "Get approval for manufacturing Ayurvedic, Unani, Siddha, or Homeopathic medicines.",
    fullDescription: "Mandatory manufacturing license issued by the Ministry of AYUSH to verify formulation safety and quality standards."
  },
  {
    slug: "fieo-registration",
    name: "FIEO Registration",
    category: "government-licenses",
    description: "Obtain RCMC from Federation of Indian Export Organisations.",
    fullDescription: "Essential registration for Indian exporters to access double weightage, export promotion benefits, and international buyers directory."
  },
  {
    slug: "medical-device-registration",
    name: "Medical Device Registration",
    category: "government-licenses",
    description: "Register medical devices and diagnostics kits with CDSCO.",
    fullDescription: "Mandatory compliance for manufacturers and importers of medical devices in India under Medical Devices Rules, 2017."
  },
  {
    slug: "isi-mark-certification",
    name: "ISI Mark Certification",
    category: "government-licenses",
    description: "Obtain ISI safety tag for mandatory industrial and electronic products.",
    fullDescription: "A safety certification mark for industrial items, certifying that a product conforms to Indian Standard (IS) specifications."
  },
  {
    slug: "professional-tax-registration",
    name: "Professional Tax Registration",
    category: "government-licenses",
    description: "Register for state professional tax as an employer or self-employed individual.",
    fullDescription: "PTEC is for the company/individual itself, and PTRC is for the employer to deduct professional tax from employee salaries and deposit it with the state government."
  },
  {
    slug: "ptec-registration",
    name: "PTEC Registration",
    category: "government-licenses",
    description: "Get Professional Tax Enrollment Certificate for directors, partners, and businesses.",
    fullDescription: "PTEC is a mandatory tax registration required for paying the entity-level professional tax to state authorities."
  },
  {
    slug: "rcmc-registration",
    name: "RCMC Registration",
    category: "government-licenses",
    description: "Get Registration Cum Membership Certificate from various Export Promotion Councils.",
    fullDescription: "Required by exporters to avail benefits under the Foreign Trade Policy (FTP) like duty exemptions, subsidies, and export credits."
  },
  {
    slug: "factory-license",
    name: "Factory License",
    category: "government-licenses",
    description: "Acquire permissions under the Factories Act, 1948 for industrial manufacturing plants.",
    fullDescription: "Includes factory layout approval, machinery stability certificates, safety plans, and environmental pollution clearances."
  },
  {
    slug: "icegate-registration",
    name: "ICEGATE Registration",
    category: "government-licenses",
    description: "Register on Indian Customs Electronic Gateway for customs filings and cargo tracking.",
    fullDescription: "Enables exporters and importers to file bills of entry, shipping bills, and perform electronic payments to customs."
  },
  {
    slug: "petrol-pump-license",
    name: "Petrol Pump License",
    category: "government-licenses",
    description: "Acquire PESO and retail dealership licenses for petroleum outlet setups.",
    fullDescription: "Consultation and document planning for obtaining dealership codes, land usage NOCs, and petroleum safety clearances."
  },
  {
    slug: "network-license",
    name: "Network License",
    category: "government-licenses",
    description: "DOT registrations and IP-1 licenses for telecom, ISP, and network providers.",
    fullDescription: "Compliance and filing for organizations running VoIP, leased lines, call centers (OSPs), and internet service centers."
  },
  {
    slug: "tec-certification",
    name: "TEC Certification",
    category: "government-licenses",
    description: "Telecommunication Engineering Centre product approvals.",
    fullDescription: "Mandatory testing and certification for telecom equipment connected directly or indirectly to the Indian telecom network."
  },
  {
    slug: "spice-plus-form",
    name: "SPICe+ Form",
    category: "government-licenses",
    description: "Comprehensive single window corporate registration form under MCA.",
    fullDescription: "Filing the SPICe+ form to simultaneously secure name reservation, incorporation, DIN, PAN, TAN, EPFO, ESIC, and corporate bank accounts."
  },
  {
    slug: "issn-number",
    name: "ISSN Number",
    category: "government-licenses",
    description: "Acquire International Standard Serial Number for journals, magazines, and periodicals.",
    fullDescription: "Provides an 8-digit unique code to identify serial publications and print/digital journals."
  },
  {
    slug: "duns-number",
    name: "DUNS Number",
    category: "government-licenses",
    description: "Secure Data Universal Numbering System 9-digit business identifier code.",
    fullDescription: "Highly recommended for companies trading globally or working with multinational corporations to establish credit registry."
  },
  {
    slug: "geographical-indication",
    name: "Geographical Indication Registration",
    category: "government-licenses",
    description: "Register unique regional products under GI Registry of India.",
    fullDescription: "Protects agricultural, natural, or manufactured goods originating from a specific geographical territory, preventing unauthorized usage."
  },
  {
    slug: "gmp-certification",
    name: "GMP Certification",
    category: "government-licenses",
    description: "Good Manufacturing Practices certification for pharmaceuticals and food.",
    fullDescription: "Ensures products are consistently produced and controlled according to quality standards, complying with international sanitary rules."
  },
  {
    slug: "isbn-number",
    name: "ISBN Number Registration",
    category: "government-licenses",
    description: "Get International Standard Book Number for publications and books.",
    fullDescription: "Mandatory 13-digit code issued by Raja Rammohun Roy National Agency for Book Registration to commercialize publications."
  },
  {
    slug: "tobacco-license",
    name: "Tobacco License Registration",
    category: "government-licenses",
    description: "Get retail and wholesale licenses from Tobacco Board of India.",
    fullDescription: "Compliance and filing for growing, trading, manufacturing, or exporting tobacco and related tobacco products."
  },
  {
    slug: "sepc-license",
    name: "SEPC License",
    category: "government-licenses",
    description: "Register with Services Export Promotion Council.",
    fullDescription: "Unlock government market development assistance (MDA) and export schemes for service-sector exporters."
  },
  {
    slug: "gjepc-registration",
    name: "GJEPC Registration",
    category: "government-licenses",
    description: "Get membership with Gem & Jewellery Export Promotion Council.",
    fullDescription: "Mandatory for importing/exporting precious diamonds, jewelry, and raw gemstones under duty-free schemes."
  },
  {
    slug: "rni-registration",
    name: "RNI Registration",
    category: "government-licenses",
    description: "Register print newspapers, weeklies, and publications with Registrar of Newspapers for India.",
    fullDescription: "Filing applications for title verification, security clearance, and final print registration under the Press and Registration of Books Act."
  },
  {
    slug: "cdsco-registration",
    name: "CDSCO Registration",
    category: "government-licenses",
    description: "Get drug, cosmetic, and medical device manufacturing or import clearance from CDSCO.",
    fullDescription: "The Central Drugs Standard Control Organization regulates clinical trials, drug standards, and licenses for pharmaceutical products."
  },
  {
    slug: "ad-code-registration",
    name: "AD Code Registration",
    category: "government-licenses",
    description: "Register Authorized Dealer Bank Code with customs port ICEGATE.",
    fullDescription: "Mandatory bank registration at customs ports to clear export shipments and receive government foreign exchange drawbacks directly."
  },
  {
    slug: "gsp-registration",
    name: "GSP Registration",
    category: "government-licenses",
    description: "Generalized System of Preferences preferential tariff certificates.",
    fullDescription: "Enables Indian exporters to secure reduced customs duty benefits when sending goods to GSP donor countries (EU, USA, etc.)."
  },
  {
    slug: "safta-license",
    name: "SAFTA License",
    category: "government-licenses",
    description: "South Asian Free Trade Area tariff preferential certificate.",
    fullDescription: "Allows duty benefits when exporting goods to SAARC member countries (Nepal, Bangladesh, Sri Lanka, etc.)."
  },
  {
    slug: "wpc-certificate",
    name: "WPC Certificate",
    category: "government-licenses",
    description: "Wireless Planning & Coordination Equipment Type Approval.",
    fullDescription: "Mandatory for importing or selling wireless products (Bluetooth, Wi-Fi, RFID) operating in de-licensed frequency bands in India."
  },
  {
    slug: "mstc-license",
    name: "MSTC License Registration",
    category: "government-licenses",
    description: "E-auction registration with MSTC to trade scrap metal and coal.",
    fullDescription: "Allows industrial traders to bid on central and state government scrap materials, minerals, and redundant assets."
  },
  {
    slug: "agmark-license",
    name: "AGMARK License",
    category: "government-licenses",
    description: "Obtain AGMARK certification for agricultural commodities.",
    fullDescription: "A quality certification mark confirming that agricultural products conform to standards approved by the Government of India."
  },

  // 7. PROPERTY RIGHTS
  {
    slug: "trademark-registration",
    name: "Trademark Services",
    category: "property-rights",
    description: "Register trademarks, search availability, file replies to objections, and renew trademarks.",
    fullDescription: "Trademark registration provides legal protection for your brand name, logo, or slogan. It grants exclusive rights to use the mark and prevents others from using confusingly similar marks. Our services include brand name search, TM filing, objection replies, hearing representations, and renewals.",
    whoNeedsIt: ["Startups and companies launching new brands", "Business owners protecting logos, slogans, and names", "Businesses wishing to secure brand equity and prevent infringement"],
    documentsRequired: ["Brand logo / Name details", "Signed Power of Attorney (Form TM-48)", "User Affidavit (if TM is already in use)", "MSME or COI certificate for fee discount"],
    processSteps: ["Trademark Search: Verify brand name availability against existing registrations.", "Application Filing: File Form TM-A on the IP India portal to get the TM symbol instantly.", "Government Examination: The registrar reviews the application for any conflicting marks or objections.", "Advertisement & Registration: The TM is published in the Trademark Journal and registered if no oppositions arise."]
  },
  {
    slug: "copyright-registration",
    name: "Copyright Registration",
    category: "property-rights",
    description: "Protect your software code, literary works, music, video, or books from piracy.",
    fullDescription: "Copyright registration protects original works of authorship, including software, books, music, artistic creations, and movies. It gives the owner exclusive exploitation rights.",
    whoNeedsIt: ["Software developers", "Authors & Writers", "Artists & Musicians", "Production houses"],
    documentsRequired: ["Three copies of the work", "PAN/Aadhaar of applicant", "No Objection Certificate (NOC) from publisher/designer", "Description of work"],
    processSteps: ["File application online on Copyright portal", "Wait for mandatory 30-day objection period", "Evaluation of work by examiner", "Registration certificate issued if no objections exist"]
  },
  {
    slug: "patent-registration",
    name: "Patent Registration",
    category: "property-rights",
    description: "File provisional and complete patent specifications to protect inventions.",
    fullDescription: "Patent registration grants an inventor exclusive rights over a unique device, process, or system for 20 years, preventing competitors from duplicating the technology."
  },
  {
    slug: "design-registration",
    name: "Design Registration",
    category: "property-rights",
    description: "Protect the visual and aesthetic design of products (shape, configuration, ornament).",
    fullDescription: "Under the Designs Act, 2000, registering a design grants 10 years of copyright protection over the unique visual shape or style of a manufactured object."
  },

  // 8. REVENUE SERVICES
  {
    slug: "affidavit-drafting",
    name: "Affidavit Drafting",
    category: "revenue-services",
    description: "Get legal affidavits drafted for name change, address proof, or declarations.",
    fullDescription: "We draft professional, legally binding affidavits for various personal and business declarations, complete with notary stamps.",
    whoNeedsIt: ["Individuals needing name correction, declarations, or legal statements"],
    documentsRequired: ["Identity proof", "Purpose details of the declaration", "Supporting documents"],
    processSteps: ["Consultation on affidavit requirements", "Drafting text content", "Execution on non-judicial stamp paper", "Notarization by certified notary officer"]
  },
  {
    slug: "agreement-drafting",
    name: "Agreement Drafting",
    category: "revenue-services",
    description: "Draft airtight legal agreements to secure transactions, rentals, and partnerships.",
    fullDescription: "A custom drafted agreement protects you from disputes. We draft rent agreements, partnership deeds, employee contracts, and non-disclosure agreements.",
    whoNeedsIt: ["Landlords", "Business partners", "Employers", "Traders"],
    documentsRequired: ["Names and IDs of all parties", "Terms of transaction / agreement", "Property details (for rent agreement)"],
    processSteps: ["Discuss core clauses and expectations", "Draft initial agreement copy for review", "Incorporate suggestions", "Print on stamp paper and notary/registration"]
  },
  {
    slug: "gift-deed",
    name: "Gift Deed",
    category: "revenue-services",
    description: "Transfer properties or cash to relatives legally without consideration.",
    fullDescription: "Drafting and executing a registered Gift Deed under the Transfer of Property Act, ensuring zero future legal disputes among heirs."
  },
  {
    slug: "sale-deed",
    name: "Sale Deed",
    category: "revenue-services",
    description: "Legal drafting and registration of property sales.",
    fullDescription: "Preparation of stamp paper sale deeds for residential, commercial, or agricultural plots, followed by registration at the Sub-Registrar's office."
  },
  {
    slug: "marriage-certificate",
    name: "Marriage Certificate",
    category: "revenue-services",
    description: "Register marriages under the Hindu Marriage Act or Special Marriage Act.",
    fullDescription: "Procure legally valid marriage certificates from municipal corporations or registrar departments for visa and passport declarations."
  },
  {
    slug: "consent-letter",
    name: "Consent Letter",
    category: "revenue-services",
    description: "NOC consent letters from property owners for GST and business registration.",
    fullDescription: "Drafting of legal letters showing that a property owner consents to the business utilizing their address for corporate incorporations."
  },
  {
    slug: "power-of-attorney",
    name: "Power of Attorney",
    category: "revenue-services",
    description: "Draft General and Special Power of Attorney for property and financial administration.",
    fullDescription: "Empower trust representatives, relatives, or managers to act on your behalf in legal and tax matters through registered POAs."
  },
  {
    slug: "legal-notice-drafting",
    name: "Legal Notice Drafting",
    category: "revenue-services",
    description: "Draft and send formal legal notices for recovery of dues, breach of contracts, or consumer complaints.",
    fullDescription: "Drafted by professional corporate advocates to issue warnings, specify terms, and seek amicable out-of-court resolutions."
  },
  {
    slug: "pan-services",
    name: "PAN Correction / Closure",
    category: "revenue-services",
    description: "Correction of name/DOB in PAN database or application for new/duplicate cards.",
    fullDescription: "Correct discrepancies, resolve duplicate PAN allocation penalties, or close extra PAN accounts to stay tax-compliant."
  },
  {
    slug: "passport-services",
    name: "Passport Services",
    category: "revenue-services",
    description: "Fresh and renewal passport applications, documentation support, and appointment scheduling.",
    fullDescription: "Avoid application rejections. We verify your birth proofs, current addresses, and school leaving certificates before booking PSK slots."
  },

  // Extra entries to align with government licenses categories
  {
    slug: "gumasta-license-support",
    name: "Gumasta License",
    category: "government-licenses",
    description: "Obtain Gumasta license for commercial establishments and shops in Gujarat.",
    fullDescription: "A Gumasta License (Shop & Establishment License) is a mandatory registration for physical commercial premises, offices, and shops operating within Gujarat, required to legalize operations and open bank accounts."
  },
  {
    slug: "iso-registration",
    name: "ISO Registration",
    category: "government-licenses",
    description: "Get ISO 9001 (Quality) and other international standards registrations.",
    fullDescription: "ISO registration demonstrates that your management, manufacturing, or service processes meet international quality standards. It is crucial for getting corporate client projects and government tenders."
  }
];

// Helper to search and filter services
export const getServicesByCategory = (categoryKey) => {
  if (categoryKey === "all") return servicesData;
  return servicesData.filter(service => service.category === categoryKey);
};

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};
