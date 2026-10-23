window.TM = window.TM || {};
(function () {
  var TM = window.TM;
  var COVER = 'assets/trip/7dc4af9d109027c5.jpg', PDF = 'assets/trip/28984ec142c8dba2.png';
  var TRIP = 'Class 5 Environmental Trip', CODE = 'MS654784790';
  function F(label, value, o) { return Object.assign({ t: 'field', label: label, value: value || '' }, o || {}); }
  function HF(label, value, o) { return F(label, value, Object.assign({ half: true }, o || {})); }
  function TG(label, sub, on) { return { t: 'toggle', label: label, sub: sub, on: !!on }; }
  function CK(label, on, sub) { return { t: 'check', label: label, on: !!on, sub: sub }; }
  function RD(label, on, sub) { return { t: 'radio', label: label, on: !!on, sub: sub }; }
  function H(o) { return Object.assign({ t: 'head' }, o); }
  function M(rows, lg) { return { t: 'meta', rows: rows, lg: lg }; }
  var DV = { t: 'div' };
  function TX(text, o) { return Object.assign({ t: 'text', text: text }, o || {}); }
  function LBL(text) { return { t: 'text', text: text, kind: 'label' }; }
  function HD(text) { return { t: 'text', text: text, kind: 'h' }; }
  function MU(text, o) { return Object.assign({ t: 'text', text: text, kind: 'muted' }, o || {}); }
  function ST(cells, cols) { return { t: 'stats', cells: cells, cols: cols || 2 }; }
  function BR(label, right, pct, rColor) { return { t: 'bar', label: label, right: right, pct: pct, rColor: rColor }; }
  function BT(btns, o) { return Object.assign({ t: 'btns', btns: btns }, o || {}); }
  function LK(label, icon, to, o) { return Object.assign({ t: 'link', label: label, icon: icon, to: to }, o || {}); }
  function CH(chips, o) { return Object.assign({ t: 'chips', chips: chips }, o || {}); }
  function NT(text, kind, icon) { return { t: 'note', text: text, kind: kind || 'info', icon: icon || 'info' }; }
  function SG(items, active) { return { t: 'seg', items: items.map(function (x) { return Array.isArray(x) ? { label: x[0], to: x[1] } : { label: x }; }), active: active }; }
  function SB(value, ph, filter) { return { t: 'search', value: value || '', ph: ph, filter: filter }; }
  function EM(icon, title, text, btn, to) { return { t: 'empty', icon: icon, title: title, text: text, btn: btn, to: to }; }
  function KV(label, value, chips) { return { t: 'kv', label: label, value: value, chips: chips }; }
  function UP(title, sub, icon, toast) { return { t: 'upload', title: title, sub: sub, icon: icon || 'upload', toast: toast }; }
  var TRIPSUB = { t: 'tripsub', text: TRIP + ' · ' + CODE };
  function C(items, o) { return Object.assign({ items: items }, o || {}); }
  function G(title, items, o) {
    o = o || {};
    var head = title ? [H({ section: true, title: title, chips: o.chip ? [o.chip] : null, rightLink: o.link, rightIcon: o.linkIcon, rightTo: o.linkTo, rightToast: o.linkToast, rightText: o.rtext, icons: o.icons })] : [];
    return Object.assign({ items: head.concat(items) }, o);
  }
  function B(items, o) { return Object.assign({ bare: true, items: items }, o || {}); }
  function KVG(title, rows, o) { return G(title, rows.map(function (r) { return KV(r[0], r[1], r[2]); }), o); }
  function ROW(icon, title, sub, to) { return C([H({ lead: { tile: icon }, title: title, sub: sub, chev: !!to, tw: 500, to: to })], { pad: 12 }); }
  function MROW(icon, title, to, toast, danger) { return H({ lead: { icon: icon, color: danger ? '#CA054D' : '#191B25' }, title: title, tw: 500, to: to, toast: toast, rowH: 48, chev: !!to && !danger }); }
  function SHEET(title, items, footer) { return { kind: 'sheet', title: title, items: items, footer: footer }; }
  function DLG(title, text, footer, icon, items) { return { kind: 'dialog', title: title, text: text, footer: footer, icon: icon, items: items || [] }; }
  var S = {};
  function P(key, o) { S[key] = o; }
  function LIKE(base, o) { var b = S[base]; return Object.assign({}, b, { ov: null, base: base }, o); }
  var CANCEL = function (to) { return ['Cancel', 'secondary', null, to || '^']; };
  var NAV = { nav: 'TA', navActive: 'All Trips' };
  var TABS = function (active) { return { tabs: [['Overview', 'list', 'Trip_Details_Active'], ['Travellers', 'TravelersStateLine', 'Trav_List'], ['Itinerary', 'pin', 'Itin_View'], ['Room and Coach List', 'bed', 'Rooms_Lists'], ['Manage Vendor', 'bldg', 'Vend_List'], ['Staff', 'staff', 'Staff_View'], ['Documents', 'folder', 'Docs_List'], ['Notifications', 'NotificationNotificationNo', 'Notif_Sent'], ['Packets', 'receipt', 'Packet_View']], tabsActive: active || 'Overview' }; };


  TM.F = F; TM.HF = HF; TM.TG = TG; TM.CK = CK; TM.RD = RD; TM.H = H; TM.M = M; TM.TX = TX; TM.LBL = LBL; TM.HD = HD; TM.MU = MU; TM.ST = ST; TM.BR = BR; TM.BT = BT; TM.LK = LK; TM.CH = CH; TM.NT = NT; TM.SG = SG; TM.SB = SB; TM.EM = EM; TM.KV = KV; TM.UP = UP; TM.C = C; TM.G = G; TM.B = B; TM.KVG = KVG; TM.ROW = ROW; TM.MROW = MROW; TM.SHEET = SHEET; TM.DLG = DLG; TM.P = P; TM.LIKE = LIKE; TM.COVER = COVER; TM.PDF = PDF; TM.TRIP = TRIP; TM.CODE = CODE; TM.DV = DV; TM.TRIPSUB = TRIPSUB; TM.S = S; TM.CANCEL = CANCEL; TM.NAV = NAV; TM.TABS = TABS;
})();
