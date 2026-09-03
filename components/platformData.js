/* Demo data for the platform showcase. UK conventions throughout.
   The figures reconcile: 2,291 current + 119 due + 28 action = 2,438 assets. */

export const ESTATE = {
  assets: 2438,
  sites: 14,
  due90: 119,
  actions: 28,
  current: 2291,
  /* Stock figures, not annual: every tracked asset carries at least its last
     certificate, plus the history behind it. Providers spans the six
     disciplines across all fourteen sites. */
  providers: 23,
  certificates: 6140,
};

export const STATUS_SPLIT = [
  { key: 'current', label: 'Current', value: 2291, tone: 'current' },
  { key: 'due', label: 'Due soon', value: 119, tone: 'due' },
  { key: 'action', label: 'Action required', value: 28, tone: 'action' },
];

export const SITES = [
  { id: 'bham-4', name: 'Birmingham — Unit 4', assets: 186, current: 156, due: 21, action: 9, tone: 'current' },
  { id: 'man-dc', name: 'Manchester Distribution Centre', assets: 412, current: 375, due: 33, action: 4, tone: 'due' },
  { id: 'che-mf', name: 'Chester Manufacturing Site', assets: 268, current: 240, due: 22, action: 6, tone: 'due' },
  { id: 'shr-dp', name: 'Shrewsbury Depot', assets: 147, current: 132, due: 9, action: 6, tone: 'action' },
  { id: 'bri-of', name: 'Bristol Office', assets: 94, current: 87, due: 7, action: 0, tone: 'current' },
  { id: 'bham-9', name: 'Birmingham — Unit 9', assets: 163, current: 151, due: 12, action: 0, tone: 'current' },
];

export const ASSETS = [
  { id: 'LEV-0148', type: 'Local exhaust ventilation', site: 'Birmingham — Unit 4', due: '06 Sep 2027', status: 'Current', tone: 'current' },
  { id: 'LIFT-008', type: 'Passenger lift', site: 'Manchester Distribution Centre', due: '14 Sep 2026', status: 'Due soon', tone: 'due' },
  { id: 'PV-0102', type: 'Pressure vessel', site: 'Chester Manufacturing Site', due: '02 Dec 2026', status: 'Current', tone: 'current' },
  { id: 'EICR-0130', type: 'Distribution board', site: 'Shrewsbury Depot', due: '24 Oct 2026', status: 'Action required', tone: 'action' },
  { id: 'FIRE-0021', type: 'Fire alarm system', site: 'Bristol Office', due: '12 Feb 2027', status: 'Current', tone: 'current' },
  { id: 'WH-0017', type: 'Water system', site: 'Bristol Office', due: '03 Oct 2026', status: 'Due soon', tone: 'due' },
];

export const UPCOMING = [
  { title: 'LEV Thorough Examination', site: 'Birmingham — Unit 4', due: 'Due 18 September', state: 'Inspector arranged', tone: 'current' },
  { title: 'LOLER Examination', site: 'Manchester Distribution Centre', due: 'Due 26 September', state: 'Awaiting confirmation', tone: 'due' },
  { title: 'Pressure System Examination', site: 'Chester Manufacturing Site', due: 'Due 4 October', state: 'Scheduled', tone: 'current' },
  { title: 'Periodic Electrical Inspection', site: 'Shrewsbury Depot', due: 'Due 24 October', state: 'Action required', tone: 'action' },
  { title: 'Water Risk Review', site: 'Bristol Office', due: 'Due 3 November', state: 'Scheduled', tone: 'current' },
];

/* The route every requirement travels. Kiwi moves each item along it; the
   customer only watches. This is the product, not the database. */
export const STAGES = ['Due', 'Provider contacted', 'Booked', 'Attended', 'Certificate received', 'Closed'];

export const JOBS = [
  { ref: 'J-2418', work: 'LEV Thorough Examination', site: 'Birmingham — Unit 4', provider: 'Northwest Extraction Testing', stage: 2, owned: true },
  { ref: 'J-2417', work: 'LOLER Examination', site: 'Manchester Distribution Centre', provider: 'Pennine Lift Services', stage: 1, owned: true },
  { ref: 'J-2415', work: 'Remedial — extraction ductwork', site: 'Shrewsbury Depot', provider: 'Northwest Extraction Testing', stage: 3, owned: true },
  { ref: 'J-2412', work: 'Fire alarm inspection', site: 'Bristol Office', provider: 'Severn Fire Systems', stage: 5, owned: false },
  { ref: 'J-2409', work: 'Water risk assessment', site: 'Shrewsbury Depot', provider: 'Marches Water Hygiene', stage: 4, owned: true },
];

export const DOCUMENTS = [
  { name: 'LOLER Examination Certificate', asset: 'LIFT-008', site: 'Manchester Distribution Centre', done: '14 Mar 2026', next: '14 Sep 2026' },
  { name: 'LEV Examination Report', asset: 'LEV-0148', site: 'Birmingham — Unit 4', done: '06 Jul 2026', next: '06 Sep 2027' },
  { name: 'Fire Alarm Inspection Certificate', asset: 'FIRE-0021', site: 'Bristol Office', done: '12 Aug 2026', next: '12 Feb 2027' },
  { name: 'Written Scheme of Examination', asset: 'PV-0102', site: 'Chester Manufacturing Site', done: '02 Dec 2025', next: '02 Dec 2026' },
  { name: 'Water Risk Assessment', asset: 'WH-0017', site: 'Bristol Office', done: '21 Feb 2026', next: '21 Feb 2028' },
];

export const PROVIDERS = [
  { name: 'Northwest Extraction Testing', field: 'Local exhaust ventilation', sites: 3, open: 2 },
  { name: 'Pennine Lift Services', field: 'Lifting equipment', sites: 5, open: 1 },
  { name: 'Severn Fire Systems', field: 'Fire & life safety', sites: 4, open: 0 },
  { name: 'Marches Water Hygiene', field: 'Water hygiene', sites: 6, open: 1 },
  { name: 'Midlands Electrical Testing', field: 'Electrical', sites: 7, open: 3 },
];

export const CATEGORIES = [
  { label: 'Electrical', total: 54, current: 48, due: 4, action: 2 },
  { label: 'LEV', total: 31, current: 26, due: 4, action: 1 },
  { label: 'Lifting', total: 22, current: 18, due: 3, action: 1 },
  { label: 'Fire', total: 41, current: 36, due: 4, action: 1 },
  { label: 'Pressure', total: 19, current: 16, due: 2, action: 1 },
  { label: 'Water', total: 19, current: 12, due: 4, action: 3 },
];

export const ASSET_DETAIL = {
  id: 'LEV-0148',
  type: 'Local Exhaust Ventilation System',
  site: 'Birmingham — Workshop 2',
  status: 'Current',
  last: '06 July 2026',
  next: '06 September 2027',
  provider: 'Northwest Extraction Testing',
  documents: ['Examination report', 'Test certificate', 'Remedial record'],
  timeline: [
    { year: '2024', note: 'Examination complete', done: true },
    { year: '2025', note: 'Examination complete', done: true },
    { year: '2026', note: 'Examination complete', done: true, fresh: true },
    { year: '2027', note: 'Next scheduled', done: false },
  ],
};

/* ==========================================================================
   The operating record
   Everything below exists to make one point: Kiwi runs the process and the
   customer watches it. Threads are written from Kiwi's side of the mailbox,
   invoices are matched before anyone is asked to approve them, and the
   register reconciles arithmetically so the numbers survive being checked.
   ========================================================================== */

/* Provider records. Contacts, accreditation and the two figures that decide
   whether a provider is actually any good: how fast they answer, and how long
   the evidence takes to arrive after the visit. */
export const PROVIDER_DETAIL = [
  {
    id: 'PRV-014',
    name: 'Northwest Extraction Testing Ltd',
    field: 'Local exhaust ventilation',
    contact: 'Dave Hollins',
    role: 'Operations Manager',
    email: 'd.hollins@nwextraction.co.uk',
    phone: '0161 486 2210',
    accred: 'BOHS P601 · ISO 9001',
    sourced: 'yours',
    since: 'Mar 2021',
    sites: 3,
    open: 2,
    completed: 148,
    respondHrs: 4,
    evidenceDays: 6,
    evidenceTone: 'current',
    note: 'Consistently good on attendance. Certificates need chasing about a third of the time, so we chase automatically at day three.',
  },
  {
    id: 'PRV-002',
    name: 'Pennine Lift Services',
    field: 'Lifting equipment',
    contact: 'Marie Okonjo',
    role: 'Scheduling Lead',
    email: 'm.okonjo@penninelifts.co.uk',
    phone: '0113 244 8090',
    accred: 'LEEA member',
    sourced: 'yours',
    since: 'Jan 2019',
    sites: 5,
    open: 1,
    completed: 302,
    respondHrs: 9,
    evidenceDays: 3,
    evidenceTone: 'current',
    note: 'Fast on paperwork. Books up four weeks ahead in autumn, so we place lifting requests early.',
  },
  {
    id: 'PRV-021',
    name: 'Vale Inspection Services',
    field: 'Lifting & pressure — insurer appointed',
    contact: 'Helen Dacre',
    role: 'Client Coordinator',
    email: 'helen.dacre@valeinspection.co.uk',
    phone: '0121 355 7742',
    accred: 'UKAS-accredited inspection body',
    sourced: 'insurer',
    since: 'Appointed via your engineering policy',
    sites: 6,
    open: 3,
    completed: 96,
    respondHrs: 26,
    evidenceDays: 11,
    evidenceTone: 'due',
    note: 'Appointed under your engineering insurance, so the relationship is not ours to change. We coordinate around their schedule and chase the reports.',
  },
  {
    id: 'PRV-008',
    name: 'Severn Fire Systems',
    field: 'Fire & life safety',
    contact: 'Ian Pritchard',
    role: 'Contracts Manager',
    email: 'ian.p@severnfire.co.uk',
    phone: '0117 902 4415',
    accred: 'BAFE SP203-1',
    sourced: 'kiwi',
    since: 'Jul 2026',
    sites: 4,
    open: 0,
    completed: 34,
    respondHrs: 2,
    evidenceDays: 2,
    evidenceTone: 'current',
    note: 'Sourced by Kiwi to close a gap at Bristol and Shrewsbury. Certificates arrive same week, every time.',
  },
  {
    id: 'PRV-011',
    name: 'Marches Water Hygiene',
    field: 'Water hygiene',
    contact: 'Kath Reilly',
    role: 'Account Manager',
    email: 'k.reilly@marcheswater.co.uk',
    phone: '01743 660 118',
    accred: 'LCA registered · ACoP L8',
    sourced: 'yours',
    since: 'Sep 2022',
    sites: 6,
    open: 1,
    completed: 211,
    respondHrs: 7,
    evidenceDays: 5,
    evidenceTone: 'current',
    note: 'Monthly monitoring returns come in on time. Risk assessment reviews have slipped twice; now tracked separately.',
  },
  {
    id: 'PRV-005',
    name: 'Midlands Electrical Testing',
    field: 'Electrical · fixed wire',
    contact: 'Sanjay Bhatt',
    role: 'Technical Director',
    email: 's.bhatt@midlandselectrical.com',
    phone: '0121 771 3388',
    accred: 'NICEIC approved contractor',
    sourced: 'yours',
    since: 'Nov 2020',
    sites: 7,
    open: 3,
    completed: 189,
    respondHrs: 14,
    evidenceDays: 16,
    evidenceTone: 'action',
    note: 'Evidence return has drifted to sixteen days against a five-day expectation. Raised with Sanjay on 21 Aug; under review.',
  },
];

/* Correspondence. Every thread is Kiwi writing on the customer's behalf —
   to the provider, and separately back to the customer. The point of showing
   it is that the objections, chases and escalations happen here, not in the
   facilities manager's inbox. */
export const THREADS = [
  {
    id: 'TH-2417',
    subject: 'LOLER examination — Manchester DC — 26 September',
    job: 'J-2417',
    provider: 'Pennine Lift Services',
    site: 'Manchester Distribution Centre',
    state: 'Resolved by Kiwi',
    tone: 'current',
    summary: 'Provider could not hold the booked date. Rebooked inside the compliance window without the date moving past due.',
    clientAction: false,
    messages: [
      {
        dir: 'out', from: 'Kiwi', to: 'Marie Okonjo · Pennine Lift Services',
        time: '02 Sep, 08:12', tag: 'Automated · personalised',
        body: 'Hi Marie,\n\nLOLER thorough examination falls due on 26 September for six units at Manchester Distribution Centre (goods lifts GL-02 to GL-05, plus the two dock levellers). Same scope as March.\n\nCan you confirm a date on or before the 26th? Site contact is Rob Nayler on the gatehouse number, and the yard needs a 24-hour notice for a scissor lift.\n\nThanks,\nKiwi Compliance — coordinating on behalf of the estates team',
      },
      {
        dir: 'in', from: 'Marie Okonjo · Pennine Lift Services', to: 'Kiwi',
        time: '02 Sep, 16:40', tag: 'Objection',
        body: 'Hi — we are short an engineer that week, earliest I can do is 2 October. Sorry.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Marie Okonjo · Pennine Lift Services',
        time: '02 Sep, 16:58', tag: 'Objection handled',
        body: 'Hi Marie,\n\n2 October puts the examination past the statutory due date, so we can\'t run with it.\n\nTwo options: 23 or 24 September if you can move an engineer, or we split it — GL-02 and GL-03 on the 24th, the rest on the 25th. Half days both, and we\'ll have the yard cleared either way.\n\nIf neither works, tell me now and we will place the overflow with a second provider for this cycle only, keeping the units on your account for the next one.\n\nKiwi Compliance',
      },
      {
        dir: 'in', from: 'Marie Okonjo · Pennine Lift Services', to: 'Kiwi',
        time: '03 Sep, 09:05', tag: 'Resolved',
        body: 'We can do the 24th, all six, if we start at 07:00. Booking it in now.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Marie Okonjo · Pennine Lift Services',
        time: '03 Sep, 09:11', tag: 'Confirmation',
        body: 'Booked, thank you. 07:00 on the 24th, six units, Rob knows to expect you at the gatehouse. I\'ll send the asset list and last cycle\'s report references this afternoon.',
      },
      {
        dir: 'note', from: 'Kiwi', to: 'Estates team — Manchester DC',
        time: '03 Sep, 09:20', tag: 'Notified — no action needed',
        body: 'LOLER at Manchester DC is booked for 24 September, two days inside the due date. The provider had a resourcing problem on the original date; it is resolved and nothing is needed from you.',
      },
    ],
  },
  {
    id: 'TH-2415',
    subject: 'Certificate outstanding — extraction remedial — Shrewsbury',
    job: 'J-2415',
    provider: 'Northwest Extraction Testing',
    site: 'Shrewsbury Depot',
    state: 'Chasing — day 9',
    tone: 'due',
    summary: 'Work attended 25 August. Report not yet returned. Two automated chases, one call logged, now escalated.',
    clientAction: false,
    messages: [
      {
        dir: 'out', from: 'Kiwi', to: 'Dave Hollins · Northwest Extraction Testing',
        time: '28 Aug, 07:30', tag: 'Automated chase — day 3',
        body: 'Hi Dave,\n\nYour engineer attended Shrewsbury on 25 August for the ductwork remedial (J-2415). We don\'t have the report yet — could you send it across when you get a moment?\n\nKiwi Compliance',
      },
      {
        dir: 'in', from: 'Dave Hollins · Northwest Extraction Testing', to: 'Kiwi',
        time: '28 Aug, 11:02', tag: 'Reply',
        body: 'With the engineer, he\'s been off since Tuesday. Will chase Monday.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Dave Hollins · Northwest Extraction Testing',
        time: '01 Sep, 07:30', tag: 'Automated chase — day 7',
        body: 'Hi Dave,\n\nFollowing up on the Shrewsbury ductwork report (J-2415, attended 25 August). The asset is showing as action-required on the estate record until the evidence is back, so we\'d like to close it this week.\n\nKiwi Compliance',
      },
      {
        dir: 'call', from: 'Kiwi', to: 'Northwest Extraction Testing',
        time: '02 Sep, 14:15', tag: 'Call logged',
        body: 'Spoke to Dave. Engineer back Thursday, report to be issued the same day. Agreed that if it has not arrived by Friday 5 September it goes to their Technical Director.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Dave Hollins · Northwest Extraction Testing',
        time: '02 Sep, 14:22', tag: 'Confirming the call',
        body: 'Thanks Dave — confirming what we agreed: report issued Thursday 4 September. If it slips past Friday I\'ll pick it up with Rachel.\n\nFor the next cycle, worth noting we chase automatically at day three, so the quickest way to stop hearing from us is to have the engineer upload from site.\n\nKiwi Compliance',
      },
      {
        dir: 'note', from: 'Kiwi', to: 'Estates team — Shrewsbury',
        time: '02 Sep, 14:30', tag: 'Visible on your record — no action needed',
        body: 'The Shrewsbury ductwork remedial was done on 25 August but the report has not been issued. We are nine days into chasing and it is escalated. The asset stays flagged until we hold the evidence.',
      },
    ],
  },
  {
    id: 'TH-2431',
    subject: 'Defect raised — GL-04 — approval needed',
    job: 'J-2431',
    provider: 'Pennine Lift Services',
    site: 'Manchester Distribution Centre',
    state: 'Awaiting your approval',
    tone: 'action',
    summary: 'Examination raised a defect with a 28-day clock. Kiwi has the quote and the slot held; the spend decision is yours.',
    clientAction: true,
    messages: [
      {
        dir: 'in', from: 'Pennine Lift Services', to: 'Kiwi',
        time: '29 Aug, 16:44', tag: 'Report received',
        body: 'Report attached for GL-04. Note the defect on the suspension gear — needs attention within 28 days per the examiner.',
        attach: 'LOLER_Report_GL-04_29Aug2026.pdf',
      },
      {
        dir: 'sys', from: 'Kiwi', to: '',
        time: '29 Aug, 16:51', tag: 'Extracted automatically',
        body: 'Defect read from report and raised as action ACT-0361 against GL-04. Clock set: remedy required by 26 September. Asset status changed to Action required.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Marie Okonjo · Pennine Lift Services',
        time: '29 Aug, 17:02', tag: 'Quote requested',
        body: 'Hi Marie,\n\nThe GL-04 report raises a defect on the suspension gear with a 28-day remedy. Can you quote for the repair and hold a slot in the week of 15 September? We\'d rather book it now and cancel than find nothing free at day 25.\n\nKiwi Compliance',
      },
      {
        dir: 'in', from: 'Marie Okonjo · Pennine Lift Services', to: 'Kiwi',
        time: '30 Aug, 10:20', tag: 'Quote received',
        body: 'Quote attached — £1,840 + VAT, one day, parts in stock. Holding 16 September provisionally.',
        attach: 'Quote_Q-88213_GL-04_suspension.pdf',
      },
      {
        dir: 'note', from: 'Kiwi', to: 'Estates team — Manchester DC',
        time: '30 Aug, 10:34', tag: 'Your decision',
        body: 'GL-04 has a defect with a remedy deadline of 26 September. Pennine quote £1,840 + VAT and are holding 16 September. This is the only thing on your estate this week that needs a decision from you — everything else is in hand.\n\nApprove and we\'ll confirm the slot, chase the parts and return the evidence. Decline and we\'ll get you two comparison quotes by Thursday.',
      },
    ],
  },
  {
    id: 'TH-2402',
    subject: 'Asset found on site and not on the register — Chester',
    job: 'J-2402',
    provider: 'Vale Inspection Services',
    site: 'Chester Manufacturing Site',
    state: 'Added to register',
    tone: 'current',
    summary: 'An air receiver in the compressor house was never declared. Added, examined, and the gap reported.',
    clientAction: false,
    messages: [
      {
        dir: 'in', from: 'Helen Dacre · Vale Inspection Services', to: 'Kiwi',
        time: '18 Aug, 15:12', tag: 'Raised by engineer',
        body: 'Our engineer was at Chester today for the boiler house schedule. There is a horizontal air receiver in the compressor house that is not on the list you sent — plate says 2011, no examination record we can see. He has not examined it as it was not on the instruction.',
      },
      {
        dir: 'sys', from: 'Kiwi', to: '',
        time: '18 Aug, 15:18', tag: 'Register exception',
        body: 'Exception REG-0114 opened: asset present on site, absent from register. Class: pressure. Flagged as an unexamined asset in service — treated as a compliance failure, not a data error.',
      },
      {
        dir: 'out', from: 'Kiwi', to: 'Helen Dacre · Vale Inspection Services',
        time: '18 Aug, 15:31', tag: 'Same day',
        body: 'Thanks Helen — that\'s exactly the sort of thing we want flagged.\n\nCan your engineer photograph the nameplate and the safety valve while he\'s there? We\'ll get it onto the written scheme and instruct the examination. Assume it needs a first thorough examination rather than a routine one.\n\nKiwi Compliance',
      },
      {
        dir: 'note', from: 'Kiwi', to: 'Estates team — Chester',
        time: '18 Aug, 16:05', tag: 'Reported to you',
        body: 'An air receiver in the Chester compressor house is in service and was not on the register we were given. It has no examination history we can find, which means it has been operating outside a written scheme.\n\nWe have added it (PV-0119), instructed a first thorough examination and asked for the scheme to be extended to cover it. Nothing is needed from you, but you should know it was there — this is the seventy-eighth asset we have found on your estate that was not on the list.',
      },
      {
        dir: 'sys', from: 'Kiwi', to: '',
        time: '27 Aug, 09:40', tag: 'Closed',
        body: 'PV-0119 examined 26 August, no defects. Written scheme of examination updated to include the receiver. Next due 26 August 2027.',
      },
    ],
  },
];

/* Invoicing. Nothing reaches the customer for approval until the job, the
   evidence and the invoice agree. The last row of the summary is the one
   that matters commercially: Kiwi bills the provider, never the client. */
export const INVOICE_SUMMARY = {
  quarter: 'Quarter to 31 August 2026',
  received: 214,
  matched: 196,
  queried: 18,
  recovered: '£7,410',
  kiwiCharged: '£0.00',
};

export const INVOICE_CHECKS = [
  { label: 'Job exists and was instructed by Kiwi', note: 'No invoice for work nobody asked for.' },
  { label: 'Evidence is on file', note: 'The certificate or report has arrived and been read.' },
  { label: 'Amount matches the quote', note: 'Anything above the agreed figure is queried before you see it.' },
  { label: 'Asset is on the register', note: 'An invoice for an asset we cannot place is held, not paid.' },
  { label: 'Not already invoiced', note: 'Duplicates and re-issues are caught on reference and amount.' },
];

export const INVOICES = [
  {
    ref: 'INV-40218', provider: 'Pennine Lift Services', job: 'J-2388',
    site: 'Manchester Distribution Centre', quoted: '£2,240.00', amount: '£2,240.00',
    state: 'Approved for payment', tone: 'current',
    flag: 'Job, evidence and amount all agree. Released without anyone reading it.',
  },
  {
    ref: 'INV-40231', provider: 'Midlands Electrical Testing', job: 'J-2394',
    site: 'Shrewsbury Depot', quoted: '£3,150.00', amount: '£3,330.00',
    state: 'Queried by Kiwi', tone: 'due',
    flag: '£180 above quote, described as "additional board". Quote covered eleven boards; the engineer tested eleven. Query raised 28 Aug.',
  },
  {
    ref: 'INV-40233', provider: 'Midlands Electrical Testing', job: 'J-2394',
    site: 'Shrewsbury Depot', quoted: '£3,150.00', amount: '£3,330.00',
    state: 'Rejected — duplicate', tone: 'action',
    flag: 'Same job, same amount, re-issued under a new reference four days later. Rejected automatically and confirmed with their accounts team.',
  },
  {
    ref: 'INV-40240', provider: 'Northwest Extraction Testing', job: 'J-2415',
    site: 'Shrewsbury Depot', quoted: '£980.00', amount: '£980.00',
    state: 'Held — no evidence', tone: 'due',
    flag: 'Work was attended but the report has not been issued. Held until the evidence is on file. See thread TH-2415.',
  },
  {
    ref: 'INV-40244', provider: 'Vale Inspection Services', job: 'J-2402',
    site: 'Chester Manufacturing Site', quoted: '£410.00', amount: '£410.00',
    state: 'Approved for payment', tone: 'current',
    flag: 'First examination of PV-0119 — the receiver found in the compressor house. Asset added to the register before the invoice was matched.',
  },
  {
    ref: 'INV-40251', provider: 'Severn Fire Systems', job: 'J-2412',
    site: 'Bristol Office', quoted: '£1,275.00', amount: '£1,275.00',
    state: 'Paid', tone: 'current',
    flag: 'Matched, approved and settled on your normal terms. Kiwi does not sit in the payment path.',
  },
];

/* Intake. The promise is deliberately unglamorous: send it in any state and
   it is structured and filed within two working days. */
export const INTAKE_SLA = {
  promise: '48 hours',
  median: '31 hours',
  processed: 1284,
  breached: 0,
};

export const INTAKE = [
  {
    file: 'Compliance Master TRACKER v7 FINAL (2).xlsx', kind: 'Spreadsheet', size: '4.2 MB',
    from: 'r.nayler@ — Manchester', received: '28 Aug, 16:22', state: 'Filed', tone: 'current', elapsed: '19h',
    outcome: '1,204 rows read · 47 duplicates merged · 31 assets not previously declared · 12 rows could not be located on site and were raised as queries',
  },
  {
    file: 'Zurich_Engineering_Reports_Q2.zip', kind: 'Archive · 84 PDFs', size: '61 MB',
    from: 'Insurer portal export', received: '25 Aug, 09:04', state: 'Filed', tone: 'current', elapsed: '27h',
    outcome: '84 reports read and attached to assets · 6 defects extracted and raised as actions · 2 reports referenced assets not on the register',
  },
  {
    file: 'FW_ RE_ RE_ LOLER certs Burton.msg', kind: 'Forwarded email · 3 attachments', size: '2.8 MB',
    from: 'j.lovesey@ — forwarded', received: '27 Aug, 11:47', state: 'Filed', tone: 'current', elapsed: '6h',
    outcome: '3 certificates filed against LIFT-004, LIFT-006 and GL-02 · next due dates set · thread archived against the job',
  },
  {
    file: 'IMG_4471.HEIC', kind: 'Photograph', size: '3.1 MB',
    from: 'Site walk — Chester', received: '29 Aug, 14:31', state: 'Filed', tone: 'current', elapsed: '4h',
    outcome: 'Nameplate read from photograph · matched to PV-0119 · serial and manufacture date added to the asset record',
  },
  {
    file: 'Boiler house WSE 2019.pdf', kind: 'Scanned document', size: '8.9 MB',
    from: 'Chester — paper file', received: '01 Sep, 10:15', state: 'Reconciling', tone: 'due', elapsed: '14h',
    outcome: 'Written scheme read · covers 9 of the 11 pressure assets now on site · query raised on the two not covered',
  },
  {
    file: 'Site walk notes 14-08.docx', kind: 'Document', size: '340 KB',
    from: 'g.fenwick@ — Birmingham', received: '02 Sep, 08:50', state: 'Extracting', tone: 'due', elapsed: '2h',
    outcome: 'In progress',
  },
];

export const INTAKE_STATES = ['Received', 'Read', 'Extracted', 'Reconciled', 'Filed'];

/* Register integrity. An asset that is missing from the register has never
   been examined, which makes it a compliance failure rather than a data
   quality problem. The arithmetic is shown because it can be checked. */
export const REGISTER_RECON = {
  rows: [
    { label: 'Declared by you at handover', value: 2419, sign: '', tone: null },
    { label: 'Duplicate records merged', value: 47, sign: '−', tone: 'current', note: 'Same asset listed twice across two spreadsheets.' },
    { label: 'Declared but not located on site', value: 12, sign: '−', tone: 'due', note: 'Open queries. Held off the register until found or written off in writing.' },
    { label: 'Found on site, never declared', value: 78, sign: '+', tone: 'action', note: 'In service with no examination history. Each one treated as a compliance failure and examined.' },
  ],
  total: 2438,
};

export const REGISTER_EXCEPTIONS = [
  { ref: 'REG-0114', asset: 'PV-0119', site: 'Chester Manufacturing Site', kind: 'Found on site, never declared', found: 'Vale engineer, 18 Aug', state: 'Examined and added', tone: 'current' },
  { ref: 'REG-0121', asset: 'LEV-0203', site: 'Birmingham — Unit 9', kind: 'Found on site, never declared', found: 'Site walk, 22 Aug', state: 'Examination instructed', tone: 'due' },
  { ref: 'REG-0108', asset: 'LIFT-011', site: 'Manchester Distribution Centre', kind: 'Declared, not located', found: 'Intake reconciliation', state: 'Query with site — 11 days', tone: 'due' },
  { ref: 'REG-0119', asset: 'WH-0031', site: 'Shrewsbury Depot', kind: 'No examination history', found: 'Intake reconciliation', state: 'First assessment booked 19 Sep', tone: 'due' },
  { ref: 'REG-0096', asset: 'EICR-0130', site: 'Shrewsbury Depot', kind: 'Duplicate merged', found: 'Intake reconciliation', state: 'Closed', tone: 'current' },
];

/* What Kiwi did, so the overview reads as an account of our work rather than
   a list of the customer's outstanding tasks. */
export const KIWI_WEEK = {
  label: 'Week to 2 September',
  stats: [
    { n: 143, l: 'Messages sent on your behalf' },
    { n: 38, l: 'Certificates chased' },
    { n: 11, l: 'Objections resolved' },
    { n: 6, l: 'Invoices queried' },
    { n: 4, l: 'Assets added to the register' },
  ],
  needsYou: 1,
};

/* ==========================================================================
   Dense views
   The platform is a data manager, so the record is shown the way an estates
   team already reads records: a grid with row numbers and column letters, and
   a case file with the severity, the clock and the owners on one screen.
   ========================================================================== */

/* --- the register, as a sheet ------------------------------------------- */
export const SHEET_COLS = ['Asset', 'Type', 'Site', 'Regime', 'Last', 'Next due', 'Status'];
export const SHEET_ROWS = [
  ['LEV-0148', 'Local exhaust ventilation', 'Birmingham — Unit 4', 'COSHH r.9', '06 Jul 2026', '06 Sep 2027', 'Current'],
  ['LIFT-008', 'Passenger lift', 'Manchester DC', 'LOLER', '14 Mar 2026', '14 Sep 2026', 'Due soon'],
  ['GL-04', 'Goods lift', 'Manchester DC', 'LOLER', '29 Aug 2026', '29 Feb 2027', 'Action required'],
  ['PV-0102', 'Pressure vessel', 'Chester Manufacturing', 'PSSR', '02 Dec 2025', '02 Dec 2026', 'Current'],
  ['PV-0119', 'Air receiver', 'Chester Manufacturing', 'PSSR', '26 Aug 2026', '26 Aug 2027', 'Current'],
  ['EICR-0130', 'Distribution board', 'Shrewsbury Depot', 'EAWR', '24 Oct 2023', '24 Oct 2026', 'Action required'],
  ['FIRE-0021', 'Fire alarm system', 'Bristol Office', 'RRO 2005', '12 Aug 2026', '12 Feb 2027', 'Current'],
  ['WH-0017', 'Water system', 'Bristol Office', 'ACoP L8', '03 Oct 2024', '03 Oct 2026', 'Due soon'],
  ['LEV-0203', 'Dust extraction', 'Birmingham — Unit 9', 'COSHH r.9', '—', '19 Sep 2026', 'Due soon'],
  ['LIFT-011', 'Goods lift', 'Manchester DC', 'LOLER', '—', 'Query open', 'Action required'],
  ['PV-0088', 'Steam boiler', 'Chester Manufacturing', 'PSSR', '11 Jan 2026', '11 Jan 2027', 'Current'],
  ['FIRE-0044', 'Sprinkler system', 'Manchester DC', 'RRO 2005', '02 Jun 2026', '02 Jun 2027', 'Current'],
];
export const SHEET_NOTE =
  'Full register reconciled against certificates and provider records. 2,438 assets, 0 unmatched.';

/* --- a case file, in the shape a defect actually arrives ---------------- */
export const CASE = {
  title: 'Suspension gear defect — GL-04',
  ref: 'ACT-0361',
  kind: 'Remedial',
  severity: 'High severity',
  asset: 'GL-04 · Goods lift · Manchester Distribution Centre',
  stages: ['Raised', 'Verified', 'Quoted', 'Approved', 'Scheduled', 'Closed'],
  stage: 3,
  owner: 'Marie Okonjo · Pennine Lift Services',
  ownerRole: 'Repair booked for 16 September',
  status: 'In remediation',
  details: [
    ['Failed attribute', 'Suspension ropes examined for wear, corrosion and broken wires under LOLER Sch. 1.'],
    ['Finding', 'Broken wires exceeding the discard criteria on two ropes. Examiner has not condemned the unit; repair required within 28 days of examination.'],
    ['Root cause', 'Rope set beyond recommended service life. Last replacement not recorded on the inherited register.'],
    ['Raised by', 'Competent person, Pennine Lift Services, 29 Aug 2026'],
  ],
  dates: [['Identified', '29 Aug 2026'], ['Remedy deadline', '26 Sep 2026'], ['Booked', '16 Sep 2026']],
  people: [
    ['Competent person', 'Pennine Lift Services', 'Examined and certified'],
    ['Asset owner', 'Rob Nayler · Site Engineering', 'Manchester DC'],
    ['Repair provider', 'Pennine Lift Services', 'Quoted £1,840 + VAT'],
    ['Kiwi', 'Estate desk', 'Driving to closure'],
  ],
  plan: [
    { t: 'Quote obtained and slot held', done: true },
    { t: 'Client approval received', done: true },
    { t: 'Repair attended and re-examined', done: false },
  ],
};

/* --- providers, as a sheet rather than cards ---------------------------- */
export const PROVIDER_COLS =
  ['Provider', 'Discipline', 'Contact', 'Accreditation', 'Sites', 'Open', 'Reply', 'Evidence', 'Source'];
export const PROVIDER_ROWS = [
  ['Northwest Extraction Testing', 'LEV', 'Dave Hollins', 'BOHS P601', '3', '2', '4h', '6d', 'Yours'],
  ['Pennine Lift Services', 'Lifting', 'Marie Okonjo', 'LEEA', '5', '1', '9h', '3d', 'Yours'],
  ['Vale Inspection Services', 'Lifting · Pressure', 'Helen Dacre', 'UKAS body', '6', '3', '26h', '11d', 'Insurer'],
  ['Severn Fire Systems', 'Fire', 'Ian Pritchard', 'BAFE SP203-1', '4', '0', '2h', '2d', 'Kiwi'],
  ['Marches Water Hygiene', 'Water', 'Kath Reilly', 'LCA registered', '6', '1', '7h', '5d', 'Yours'],
  ['Midlands Electrical Testing', 'Electrical', 'Sanjay Bhatt', 'NICEIC', '7', '3', '14h', '16d', 'Yours'],
  ['Trent Valley Lifting', 'Lifting', 'Erin Moss', 'LEEA', '2', '0', '5h', '4d', 'Kiwi'],
  ['Peak Pressure Services', 'Pressure', 'Gareth Ellis', 'UKAS body', '3', '1', '11h', '7d', 'Kiwi'],
  ['Wrekin Fire & Security', 'Fire', 'Nadia Rahman', 'BAFE SP203-1', '5', '2', '6h', '3d', 'Yours'],
  ['Clwyd Extraction Ltd', 'LEV', 'Owen Pritchard', 'BOHS P601', '2', '0', '8h', '5d', 'Yours'],
  ['Anglian Water Compliance', 'Water', 'Priya Shah', 'LCA registered', '4', '1', '13h', '6d', 'Kiwi'],
  ['Border Electrical Services', 'Electrical', 'Tom Wardle', 'NICEIC', '3', '0', '4h', '4d', 'Kiwi'],
  ['Cheshire Thermographic', 'Electrical · survey', 'Lucy Fenn', 'BINDT Level 2', '4', '1', '9h', '8d', 'Yours'],
  ['Mersey Dampers & Ductwork', 'Fire · dampers', 'Alan Duff', 'BESA member', '3', '2', '18h', '9d', 'Yours'],
  ['Shropshire Legionella', 'Water', 'Beth Cotterill', 'LCA registered', '2', '0', '3h', '2d', 'Kiwi'],
  ['National Lifting Inspection', 'Lifting', 'Craig Sutherland', 'UKAS body', '8', '4', '31h', '14d', 'Insurer'],
];

/* --- the evidence library ----------------------------------------------- */
export const DOC_COLS = ['Document', 'Type', 'Asset', 'Site', 'Issued', 'Valid to', 'File'];
export const DOC_ROWS = [
  ['LOLER Thorough Examination', 'Certificate', 'LIFT-008', 'Manchester DC', '14 Mar 2026', '14 Sep 2026', '1.2 MB'],
  ['LOLER Thorough Examination', 'Report', 'GL-04', 'Manchester DC', '29 Aug 2026', '29 Feb 2027', '2.4 MB'],
  ['LEV Examination Report', 'Report', 'LEV-0148', 'Birmingham — Unit 4', '06 Jul 2026', '06 Sep 2027', '3.1 MB'],
  ['Written Scheme of Examination', 'Scheme', 'PV-0102', 'Chester Manufacturing', '02 Dec 2025', '02 Dec 2028', '860 KB'],
  ['PSSR Thorough Examination', 'Certificate', 'PV-0119', 'Chester Manufacturing', '26 Aug 2026', '26 Aug 2027', '1.1 MB'],
  ['Fire Alarm Inspection', 'Certificate', 'FIRE-0021', 'Bristol Office', '12 Aug 2026', '12 Feb 2027', '740 KB'],
  ['Water Risk Assessment', 'Assessment', 'WH-0017', 'Bristol Office', '21 Feb 2026', '21 Feb 2028', '4.6 MB'],
  ['EICR — Fixed Wire', 'Certificate', 'EICR-0130', 'Shrewsbury Depot', '24 Oct 2023', '24 Oct 2026', '2.9 MB'],
  ['Remedial Completion Record', 'Evidence', 'LEV-0091', 'Shrewsbury Depot', '05 Sep 2026', '—', '520 KB'],
  ['Sprinkler Service Record', 'Certificate', 'FIRE-0044', 'Manchester DC', '02 Jun 2026', '02 Jun 2027', '1.4 MB'],
  ['Thermographic Survey', 'Report', 'DB-0212', 'Chester Manufacturing', '18 Apr 2026', '18 Apr 2027', '6.2 MB'],
  ['Fire Damper Test Record', 'Report', 'FD-0077', 'Manchester DC', '11 May 2026', '11 May 2027', '2.2 MB'],
];

/* --- report packs, and what is inside one ------------------------------- */
export const REPORTS_LIST = [
  { id: 'RPT-2026-Q3', name: 'Estate compliance pack', period: 'Q3 2026', built: '01 Sep 2026', items: 2438, size: '18.4 MB', tone: 'current' },
  { id: 'RPT-BRC-MAN', name: 'BRCGS audit evidence — Manchester DC', period: 'Aug 2026', built: '22 Aug 2026', items: 412, size: '31.0 MB', tone: 'current' },
  { id: 'RPT-INS-2026', name: 'Engineering insurer return', period: 'H1 2026', built: '14 Jul 2026', items: 268, size: '9.8 MB', tone: 'current' },
  { id: 'RPT-LOLER-09', name: 'LOLER register and certificates', period: 'Rolling', built: '02 Sep 2026', items: 187, size: '12.1 MB', tone: 'current' },
  { id: 'RPT-ACT-OPEN', name: 'Open remedial actions', period: 'Live', built: '02 Sep 2026', items: 28, size: '1.9 MB', tone: 'due' },
  { id: 'RPT-EXC-REG', name: 'Register exceptions', period: 'Live', built: '02 Sep 2026', items: 5, size: '340 KB', tone: 'action' },
];

export const REPORT_OPEN = {
  id: 'RPT-BRC-MAN',
  name: 'BRCGS audit evidence — Manchester DC',
  built: '22 August 2026, 09:14',
  by: 'Built by Kiwi · requested by Sarah Whitfield',
  cols: ['Ref', 'Requirement', 'Asset', 'Evidence', 'Date', 'Status'],
  rows: [
    ['4.11.1', 'Lifting equipment thorough examination', 'LIFT-008', 'LOLER cert', '14 Mar 2026', 'Current'],
    ['4.11.1', 'Lifting equipment thorough examination', 'GL-04', 'LOLER report', '29 Aug 2026', 'Action open'],
    ['4.7.4', 'Fire detection and suppression', 'FIRE-0044', 'Service record', '02 Jun 2026', 'Current'],
    ['4.7.4', 'Fire damper integrity', 'FD-0077', 'Test record', '11 May 2026', 'Current'],
    ['4.9.3', 'Water system risk control', 'WH-0031', 'Risk assessment', '19 Sep 2026', 'Booked'],
    ['4.11.6', 'Extraction and dust control', 'LEV-0148', 'Exam report', '06 Jul 2026', 'Current'],
    ['4.6.1', 'Fixed electrical installation', 'EICR-0130', 'EICR', '24 Oct 2023', 'Action open'],
  ],
};

/* --- what actually happened, for the overview --------------------------- */
export const ACTIVITY_COLS = ['Time', 'Event', 'Asset', 'Party', 'Outcome'];
export const ACTIVITY_ROWS = [
  ['02 Sep 09:11', 'Booking confirmed', 'GL-02 … GL-05', 'Pennine Lift Services', 'Booked 24 Sep'],
  ['02 Sep 08:44', 'Repair approved', 'GL-04', 'Pennine Lift Services', 'Scheduled 16 Sep'],
  ['02 Sep 07:30', 'Chase sent — day 7', 'LEV-0091', 'Northwest Extraction', 'Awaiting report'],
  ['01 Sep 16:20', 'Certificate filed', 'FIRE-0044', 'Severn Fire Systems', 'Next due 02 Jun 2027'],
  ['01 Sep 11:05', 'Invoice queried', 'EICR-0130', 'Midlands Electrical', '£180 over quote'],
  ['29 Aug 16:51', 'Defect extracted', 'GL-04', 'Kiwi', 'ACT-0361 raised'],
  ['27 Aug 09:40', 'Asset added', 'PV-0119', 'Vale Inspection', 'Examined, no defects'],
  ['26 Aug 14:02', 'Access arranged', 'PV-0119', 'Dan Ackroyd · Chester', 'Confirmed 19 Sep'],
];
