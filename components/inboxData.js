/* ==========================================================================
   The customer's mailbox
   The rule this section exists to demonstrate: Kiwi does not send updates.
   No digests, no notifications, no "FYI". If an email arrives it is because
   the answer is genuinely only in the customer's head, and one line settles
   it. The Kiwi threads below are therefore the only two Kiwi sent all week —
   and they sit in a real inbox, among the rest of a Head of Estates' post,
   so the scarcity is visible rather than asserted.
   ========================================================================== */

export const WEEK = {
  label: 'Week to 2 September',
  handled: 143,
  reached: 2,
  fyi: 0,
};

/* Six of the twenty-three providers on the estate, as the fan-in shows them. */
export const FAN = [
  { name: 'Pennine Lift Services', field: 'Lifting' },
  { name: 'Northwest Extraction', field: 'LEV' },
  { name: 'Vale Inspection', field: 'Pressure' },
  { name: 'Midlands Electrical', field: 'Fixed wire' },
  { name: 'Severn Fire Systems', field: 'Fire' },
  { name: 'Marches Water', field: 'Water' },
];

export const FOLDERS = [
  { name: 'Inbox', n: 34, on: true },
  { name: 'Starred' },
  { name: 'Snoozed', n: 3 },
  { name: 'Sent' },
  { name: 'Drafts', n: 2 },
  { name: 'Archive' },
];

export const LABELS = [
  { name: 'Kiwi Compliance', tone: 'kiwi' },
  { name: 'Capex', tone: 'grey' },
  { name: 'Suppliers', tone: 'grey' },
  { name: 'SHE Committee', tone: 'grey' },
];

/* The rest of the week's post. Present so the two Kiwi threads read as rare
   rather than as the only thing this person receives. */
export const NOISE = [
  { from: 'Priya Bhandari', subject: 'RE: Q3 capex — Manchester mezzanine racking', snippet: 'Finance need the revised figure before Thursday to get it into the…', date: '2 Sep', unread: true },
  { from: 'Sodexo Account Team', subject: 'Monthly service review — agenda and actions', snippet: 'Attaching the pack ahead of Tuesday. Two open items from last month…', date: '2 Sep' },
  { from: 'Rob Nayler', subject: 'Car park barrier fault — Manchester DC', snippet: 'Barrier is sticking on the exit side again. Third time this month, I…', date: '1 Sep', unread: true },
  { from: 'Helen Marsh · HR', subject: 'Fwd: Site induction pack — September update', snippet: 'Updated contractor induction slides, please circulate to site leads…', date: '1 Sep' },
  { from: 'Utilities Desk', subject: 'October meter reads due — all sites', snippet: 'Submission window opens 28 September. Last quarter three sites were…', date: '1 Sep' },
  { from: 'Gemma Fenwick', subject: 'Locker room refurbishment — revised quote', snippet: 'They have come back at £14,200 which is under the original estimate…', date: '31 Aug' },
  { from: 'SHE Committee', subject: 'Minutes — August meeting', snippet: 'Circulated for comment. Action 4 is with estates for the next cycle…', date: '29 Aug' },
  { from: 'Waste & Recycling', subject: 'Duty of care documentation renewal', snippet: 'Your carrier licence copies expire in November. Please confirm the…', date: '28 Aug' },
];

export const EMAILS = [
  {
    id: 'e1',
    subject: 'Approval needed — GL-04 suspension repair, £1,840',
    snippet: 'The examination raised a defect with a 26 September deadline. Pennine quote £1,840 and are holding the 16th.',
    date: '31 Aug',
    label: 'Kiwi Compliance',
    attach: 'LOLER_Report_GL-04.pdf',
    thread: [
      {
        who: 'Kiwi Compliance', addr: 'estate@kiwicompliance.com', to: 'me',
        init: 'K', kind: 'kiwi', time: 'Mon 31 Aug, 08:14',
        body:
          'Sarah,\n\n' +
          'GL-04 at Manchester DC was examined on Friday. The report raises a defect on the ' +
          'suspension gear with a remedy deadline of 26 September.\n\n' +
          'Pennine quote £1,840 + VAT, one day, parts in stock. They are holding 16 September ' +
          'for us provisionally.\n\n' +
          'Reply yes and we will confirm the slot, chase the parts and put the evidence back on ' +
          'file. Reply no and we will get you two comparison quotes by Thursday.\n\n' +
          'Kiwi',
        attach: 'LOLER_Report_GL-04.pdf',
      },
      {
        who: 'Sarah Whitfield', addr: 'sarah.whitfield@—', to: 'Kiwi Compliance',
        init: 'SW', kind: 'you', time: 'Mon 31 Aug, 08:31',
        body: 'Approved — book the 16th.\n\nThanks\nSarah',
      },
      {
        who: 'Kiwi Compliance', addr: 'estate@kiwicompliance.com', to: 'me',
        init: 'K', kind: 'kiwi', time: 'Mon 31 Aug, 08:44',
        body:
          'Booked. Pennine confirmed 16 September, 07:00. Rob has the visit on the gate log, and ' +
          'GL-04 stays flagged on your record until the re-examination evidence is back.\n\n' +
          'Nothing further needed from you.\n\n' +
          'Kiwi',
      },
    ],
  },
  {
    id: 'e2',
    subject: 'Who holds the key to the compressor house at Chester?',
    snippet: 'Vale attend on the 19th and nobody on site could tell us who signs the key out.',
    date: '1 Sep',
    label: 'Kiwi Compliance',
    thread: [
      {
        who: 'Kiwi Compliance', addr: 'estate@kiwicompliance.com', to: 'me',
        init: 'K', kind: 'kiwi', time: 'Tue 1 Sep, 11:02',
        body:
          'Sarah,\n\n' +
          'Vale are attending Chester on 19 September for the receiver we added last month ' +
          '(PV-0119). The compressor house is locked and nobody on site could tell us who signs ' +
          'the key out.\n\n' +
          'Who should we be asking? Once we have a name we will arrange it with them directly ' +
          'and you will not hear about this again.\n\n' +
          'Kiwi',
      },
      {
        who: 'Sarah Whitfield', addr: 'sarah.whitfield@—', to: 'Kiwi Compliance',
        init: 'SW', kind: 'you', time: 'Tue 1 Sep, 11:20',
        body: "That'll be Dan Ackroyd, shift engineering. Copied him in.",
      },
      {
        who: 'Kiwi Compliance', addr: 'estate@kiwicompliance.com', to: 'me',
        init: 'K', kind: 'kiwi', time: 'Tue 1 Sep, 11:26',
        body:
          'Thank you. Arranged with Dan for 19 September, 08:00.\n\n' +
          'Added him as the Chester access contact so we go to him first next time.\n\n' +
          'Kiwi',
      },
    ],
  },
];
