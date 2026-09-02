/* ==========================================================================
   The customer's mailbox
   The argument of this section is a ratio: Kiwi ran 143 exchanges with
   providers this week and four of them reached the facilities manager. The
   emails below are the four. Two need a reply, two are there to be read and
   ignored — which is the point.
   ========================================================================== */

export const WEEK = {
  label: 'Week to 2 September',
  handled: 143,
  reached: 4,
  replied: 1,
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

export const EMAILS = [
  {
    id: 'e1',
    from: 'Kiwi Compliance',
    address: 'estate@kiwicompliance.com',
    to: 'sarah.whitfield@—',
    subject: 'Approval needed — GL-04 suspension repair, £1,840',
    snippet: 'One decision. The examination raised a defect with a 26 September deadline…',
    time: '08:14',
    day: 'Mon',
    needsReply: true,
    tone: 'action',
    flag: 'Reply needed',
    body:
      'Sarah,\n\n' +
      'GL-04 at Manchester DC was examined on Friday. The report raises a defect on the ' +
      'suspension gear with a remedy deadline of 26 September.\n\n' +
      'Pennine quote £1,840 + VAT, one day, parts in stock. They are holding 16 September for ' +
      'us provisionally.\n\n' +
      'This is the only thing on your estate this week that needs a decision from you. Reply ' +
      'yes and we will confirm the slot, chase the parts and put the evidence back on file. ' +
      'Reply no and we will get you two comparison quotes by Thursday.\n\n' +
      'Kiwi',
    reply: 'Approved — book the 16th. Thanks Sarah',
    replyTime: '08:31',
    close:
      'Booked. Pennine confirmed 16 September, 07:00. Rob has the visit on the gate log and ' +
      'GL-04 stays flagged on your record until the evidence is back. Nothing further needed.',
    closeTime: '08:44',
  },
  {
    id: 'e2',
    from: 'Kiwi Compliance',
    address: 'estate@kiwicompliance.com',
    to: 'sarah.whitfield@—',
    subject: 'Who holds the key to the compressor house at Chester?',
    snippet: 'Vale need access on the 19th and nobody on site could tell us who signs it out…',
    time: '11:02',
    day: 'Tue',
    needsReply: true,
    tone: 'due',
    flag: 'Reply needed',
    body:
      'Sarah,\n\n' +
      'Vale are attending Chester on 19 September for the receiver we added last month ' +
      '(PV-0119). The compressor house is locked and nobody on site could tell us who signs ' +
      'the key out.\n\n' +
      'Who should we be asking? Once we have a name we will arrange it with them directly and ' +
      'you will not hear about this again.\n\n' +
      'Kiwi',
    reply: "That'll be Dan Ackroyd, shift engineering. Copied him in.",
    replyTime: '11:20',
    close:
      'Thank you. Arranged with Dan for 19 September, 08:00. Added him as the Chester access ' +
      'contact so we go to him first next time.',
    closeTime: '11:26',
  },
  {
    id: 'e3',
    from: 'Kiwi Compliance',
    address: 'estate@kiwicompliance.com',
    to: 'sarah.whitfield@—',
    subject: 'This week on your estate',
    snippet: '143 messages sent on your behalf. 38 certificates chased. 11 objections resolved…',
    time: '07:00',
    day: 'Fri',
    needsReply: false,
    tone: 'current',
    flag: 'Read it or don’t',
    body:
      'Sarah,\n\n' +
      'The week, briefly.\n\n' +
      '143 messages sent to providers on your behalf. 38 certificates chased. 11 scheduling ' +
      'objections resolved without troubling you. 6 invoices queried, £1,240 recovered. 4 ' +
      'assets added to the register that were not on the list we were given.\n\n' +
      'Nothing is overdue. 119 items fall due in the next 90 days and all of them are booked ' +
      'or in hand.\n\n' +
      'The full record is in the platform if you want it. You do not need to look.\n\n' +
      'Kiwi',
  },
  {
    id: 'e4',
    from: 'Kiwi Compliance',
    address: 'estate@kiwicompliance.com',
    to: 'sarah.whitfield@—',
    subject: 'Certificate on file — LEV, Birmingham Unit 4',
    snippet: 'Examination complete, no defects, next due 06 September 2027. Filed against LEV-0148.',
    time: '16:40',
    day: 'Wed',
    needsReply: false,
    tone: 'current',
    flag: 'No action',
    body:
      'Sarah,\n\n' +
      'LEV-0148 at Birmingham Unit 4 was examined on Wednesday. No defects. Certificate is ' +
      'filed against the asset and the next examination is set for 6 September 2027.\n\n' +
      'Sending this one because it closes the job you asked about in July. We will not send ' +
      'you the routine ones.\n\n' +
      'Kiwi',
  },
];
