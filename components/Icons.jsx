/* Simple rounded line icons. Friendly, not cartoonish. No shields, no badges. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const Spreadsheet = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M3.5 9h17M9 9v11.5M3.5 14.75h17" />
  </svg>
);

export const Certificate = (p) => (
  <svg {...base} {...p}>
    <path d="M5.5 3.5h9l5 5v8a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" />
    <path d="M14.5 3.5v5h5M8.5 12.5h7M8.5 15.5h4" />
  </svg>
);

export const Email = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
  </svg>
);

export const Calendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.75h17M8.5 3.5v3M15.5 3.5v3" />
  </svg>
);

export const Invoice = (p) => (
  <svg {...base} {...p}>
    <path d="M6 2.75h12v18.5l-3-1.6-3 1.6-3-1.6-3 1.6Z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);

export const Folder = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 6.5a2 2 0 0 1 2-2h3.2a2 2 0 0 1 1.5.7l1 1.2h7.3a2 2 0 0 1 2 2v9.1a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
  </svg>
);

export const Tick = (p) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const Warning = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.6 21.2 19.4a1.4 1.4 0 0 1-1.2 2.1H4a1.4 1.4 0 0 1-1.2-2.1Z" />
    <path d="M12 9.5v4.5M12 17.6h.01" />
  </svg>
);

export const Building = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 20.5h17M5.5 20.5V5.2a1.7 1.7 0 0 1 1.7-1.7h6.6a1.7 1.7 0 0 1 1.7 1.7v15.3" />
    <path d="M15.5 10h3a1.7 1.7 0 0 1 1.7 1.7v8.8M8.6 7.5h3.8M8.6 11.5h3.8M8.6 15.5h3.8" />
  </svg>
);

export const Lift = (p) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
    <path d="M12 3.5v17M8.2 9.6 9.9 7.6l1.7 2M8.2 14.4l1.7 2 1.7-2" />
  </svg>
);

export const Ventilation = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="7" rx="2" />
    <path d="M6.5 11.5v2.2a2 2 0 0 0 2 2h7a2 2 0 0 1 2 2v2.8M7.5 8h9" />
  </svg>
);

export const PressureVessel = (p) => (
  <svg {...base} {...p}>
    <rect x="6.5" y="6.5" width="11" height="14" rx="5.5" />
    <path d="M12 6.5V3.5M9.5 3.5h5M12 11v3.5" />
    <circle cx="12" cy="16.6" r="0.9" />
  </svg>
);

export const Electrical = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M12.8 7.5 9.8 12h4.4l-3 4.5" />
  </svg>
);

export const Flame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.2c3 3.4 5.6 5.6 5.6 9.4a5.6 5.6 0 1 1-11.2 0c0-1.7.7-3.1 1.8-4.4.4 1 1 1.7 1.8 2.1.6-2.6 1.3-4.6 2-7.1Z" />
  </svg>
);

export const Droplet = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.4c3.1 3.6 5.4 6.4 5.4 9.3a5.4 5.4 0 0 1-10.8 0c0-2.9 2.3-5.7 5.4-9.3Z" />
  </svg>
);

export const Engineer = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 20.5a7 7 0 0 1 14 0" />
    <path d="M8.4 5.6a3.9 3.9 0 0 1 7.2 0" />
  </svg>
);

export const Clock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.2 2" />
  </svg>
);

export const Layers = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3.5 8.5 4.4L12 12.3 3.5 7.9Z" />
    <path d="m3.5 12.4 8.5 4.4 8.5-4.4M3.5 16.6l8.5 4.4 8.5-4.4" />
  </svg>
);
