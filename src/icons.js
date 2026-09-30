// Icon paths on a 24x24 grid. Pure data: used by the validator (to list valid names) and by the
// browser runtime (which draws them hand-drawn with RoughJS).
// Each icon is a list of SVG path strings. `filled` icons can be solid when the `filled` attribute is set.

const dot = (x, y, r = 1) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

export const ICONS = {
  home: ["M3 11.5L12 3l9 8.5", "M5.5 10v10.5h13V10", "M10 20.5v-6h4v6"],
  search: ["M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z", "M16 16l5 5"],
  heart: ["M12 20.5C5 15 3 11.5 3 8.6A4.6 4.6 0 0 1 12 7A4.6 4.6 0 0 1 21 8.6c0 2.9-2 6.4-9 11.9z"],
  comment: ["M4 5h16v11H10l-4 4v-4H4z"],
  share: ["M21 3L3 10.5l7 2.5 2.5 7z", "M10 13L21 3"],
  bookmark: ["M6 3h12v18l-6-4.5L6 21z"],
  plus: ["M12 4v16M4 12h16"],
  bell: ["M6 16.5V11a6 6 0 0 1 12 0v5.5l2 2H4z", "M10 21h4"],
  user: ["M12 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M4 21c0-4.5 3.6-7 8-7s8 2.5 8 7"],
  users: ["M9 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M2 20c0-4 3-6 7-6s7 2 7 6", "M16 4.5a3.3 3.3 0 0 1 0 6.3", "M18 14.5c2.5.6 4 2.4 4 5.5"],
  mail: ["M3 5.5h18v13H3z", "M3 6l9 7 9-7"],
  settings: ["M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3", "M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"],
  camera: ["M3 8h4l2-3h6l2 3h4v12H3z", "M12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"],
  image: ["M3 5h18v14H3z", "M3 17l6-6 5 5 3-3 4 4", dot(8.5, 9.5, 1.5)],
  video: ["M3 6h13v12H3z", "M16 10l5-3v10l-5-3"],
  star: ["M12 3l2.7 5.9 6.3.7-4.7 4.3 1.3 6.3L12 17l-5.6 3.2 1.3-6.3L3 9.6l6.3-.7z"],
  menu: ["M4 6h16M4 12h16M4 18h16"],
  more: [dot(5, 12), dot(12, 12), dot(19, 12)],
  close: ["M5 5l14 14M19 5L5 19"],
  check: ["M4 12.5l5 5L20 6.5"],
  "arrow-right": ["M4 12h16M14 6l6 6-6 6"],
  "arrow-left": ["M20 12H4M10 6l-6 6 6 6"],
  "chevron-down": ["M6 9l6 6 6-6"],
  "chevron-right": ["M9 6l6 6-6 6"],
  play: ["M7 4l13 8-13 8z"],
  pin: ["M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  trash: ["M4 7h16M9 7V4h6v3", "M6 7l1 14h10l1-14"],
  edit: ["M4 20l1-5L16 4l4 4L9 19z", "M14 6l4 4"],
  upload: ["M12 16V4M6 10l6-6 6 6", "M4 20h16"],
  download: ["M12 4v12M6 10l6 6 6-6", "M4 20h16"],
  lock: ["M6 11h12v10H6z", "M8.5 11V8a3.5 3.5 0 0 1 7 0v3"],
  cart: ["M3 4h3l2.5 11h10L21 7H7", dot(10, 20), dot(18, 20)],
  chart: ["M4 4v16h16", "M8 15v-4M12 15V8M16 15v-6"],
  calendar: ["M4 6h16v14H4z", "M4 10h16M8 3v4M16 3v4"],
  filter: ["M3 5h18l-7 8v6l-4-2v-4z"],
  info: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 11v6", dot(12, 7.5, 0.6)],
  send: ["M3 11l18-8-8 18-2-8z"],
};

export const ICON_NAMES = Object.keys(ICONS);
