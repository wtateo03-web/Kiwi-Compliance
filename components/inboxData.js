/* ==========================================================================
   The customer's mailbox
   The rule this section exists to demonstrate: Kiwi does not send updates.
   No digests, no notifications, no "FYI". If an email arrives it is because
   the answer is genuinely only in the customer's head, and one line settles
   it. Everything below is a message that needed a reply — because nothing
   else is ever sent.
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

export const EMAILS = [
  {
    id: 'e1',
    from: 'Kiwi Compliance',
    address: 'estate@kiwicompliance.com',
    to: 'sarah.whitfield@—',
    subject: 'Approval needed — GL-04 suspension repair, £1,840',
    snippet: 'The examination raised a defect with a 26 September deadline. Pennine quote £1,840 and are holding the 16th.',
    time: '08:14',
    day: 'Mon',
    date: '31 Aug',
    body:
      'Sarah,\n\n' +
      'GL-04 at Manchester DC was examined on Friday. The report raises a defect on the ' +
      'suspension gear with a remedy deadline of 26 September.\n\n' +
      'Pennine quote £1,840 + VAT, one day, parts in stock. They are holding 16 September for ' +
      'us provisionally.\n\n' +
      'Reply yes and we will confirm the slot, chase the parts and put the evidence back on ' +
      'file. Reply no and we will get you two comparison quotes by Thursday.\n\n' +
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
    snippet: 'Vale attend on the 19th and nobody on site could tell us who signs the key out.',
    time: '11:02',
    day: 'Tue',
    date: '1 Sep',
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
];
