/* Demo data for the platform showcase. UK conventions throughout.
   The figures reconcile: 2,291 current + 119 due + 28 action = 2,438 assets. */

export const ESTATE = {
  assets: 2438,
  sites: 14,
  due90: 119,
  actions: 28,
  current: 2291,
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

export const JOBS = [
  { ref: 'J-2418', work: 'LEV Thorough Examination', site: 'Birmingham — Unit 4', provider: 'Northwest Extraction Testing', state: 'Inspector arranged', tone: 'current' },
  { ref: 'J-2417', work: 'LOLER Examination', site: 'Manchester Distribution Centre', provider: 'Pennine Lift Services', state: 'Awaiting confirmation', tone: 'due' },
  { ref: 'J-2415', work: 'Remedial — extraction ductwork', site: 'Shrewsbury Depot', provider: 'Northwest Extraction Testing', state: 'Action required', tone: 'action' },
  { ref: 'J-2412', work: 'Fire alarm inspection', site: 'Bristol Office', provider: 'Severn Fire Systems', state: 'Completed', tone: 'current' },
  { ref: 'J-2409', work: 'Water risk assessment', site: 'Shrewsbury Depot', provider: 'Marches Water Hygiene', state: 'Certificate received', tone: 'current' },
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
