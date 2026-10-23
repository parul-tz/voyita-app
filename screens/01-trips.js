(function () {
  var TM = window.TM;
  var F = TM.F, HF = TM.HF, TG = TM.TG, CK = TM.CK, RD = TM.RD, H = TM.H, M = TM.M, TX = TM.TX, LBL = TM.LBL, HD = TM.HD, MU = TM.MU, ST = TM.ST, BR = TM.BR, BT = TM.BT, LK = TM.LK, CH = TM.CH, NT = TM.NT, SG = TM.SG, SB = TM.SB, EM = TM.EM, KV = TM.KV, UP = TM.UP, C = TM.C, G = TM.G, B = TM.B, KVG = TM.KVG, ROW = TM.ROW, MROW = TM.MROW, SHEET = TM.SHEET, DLG = TM.DLG, P = TM.P, LIKE = TM.LIKE, COVER = TM.COVER, PDF = TM.PDF, TRIP = TM.TRIP, CODE = TM.CODE, DV = TM.DV, TRIPSUB = TM.TRIPSUB, S = TM.S, CANCEL = TM.CANCEL, NAV = TM.NAV, TABS = TM.TABS;
  // ---------- 1 · Trips
  var TSEG = function (a) { return SG([['Active (3)', 'Trips_Active'], ['In Draft (2)', 'Trips_Draft'], ['Ongoing (3)', 'Trips_Ongoing'], ['Completed (2)', 'Trips_Completed'], ['Canceled (1)', 'Trips_Canceled']], a); };
  function TC(title, chip, rows, to, foot) { return C([{ t: 'tripcard', title: title, chips: [chip, ['Adult & Student', 'grey']], rows: rows, foot: foot, more: to === 'Trip_Details_Draft' ? 'Trip_QuickMenu_Draft' : 'Trip_QuickMenu' }], { pad: 0, gap: 0, rad: 16, to: to || 'Trip_Details_Active' }); }
  var ACT = ['Active', 'blue'], DRF = ['In Draft', 'grey'], ONG = ['Ongoing', 'green'];
  var R_A = [['cal', '05/10/2024 – 05/15/2024 (6 days)'], ['bldg', 'Lincoln High School']];
  P('Trips_Active', Object.assign({ main: 'All Trips', blocks: [B([TSEG('Active (3)')]), TC(TRIP, ACT, R_A, null, ['85 Travellers', '$4,500.00']), TC('Mount Rainier Adventure', ACT, [['cal', '06/15/2024 – 06/20/2024 (6 days)'], ['bldg', 'Rainier Vista High School']], null, ['85 Travellers', '$4,500.00']), TC('Yellowstone Expedition', ACT, [['cal', '05/10/2024 – 05/15/2024 (6 days)'], ['bldg', 'Westwood High']], null, ['75 Travellers', '$3,000.00'])] }, NAV));
  P('Trips_Draft', Object.assign({ main: 'All Trips', blocks: [B([TSEG('In Draft (2)')]), TC(TRIP, DRF, [['pin', 'Seattle, Portland, Vancouver… +1'], ['bldg', 'Lincoln High School']], 'Trip_Details_Draft', ['0 Travellers', '$0.00']), TC('Mount Rainier Adventure', DRF, [['pin', 'Seattle, Tacoma, Olympia… +2'], ['bldg', 'Rainier Vista High School']], 'Trip_Details_Partial', ['0 Travellers', '$0.00'])] }, NAV));
  P('Trips_Ongoing', Object.assign({ main: 'All Trips', blocks: [B([TSEG('Ongoing (3)')]), TC('Washington D.C. Science Trip', ONG, [['cal', '10/14/2026 – 10/18/2026 (5 days)'], ['bldg', 'Lincoln High School']], null, ['42 Travellers', '$8,400.00']), TC('Grand Canyon Field Study', ONG, [['cal', '10/12/2026 – 10/17/2026 (6 days)'], ['bldg', 'Westwood High']], null, ['60 Travellers', '$12,000.00'])] }, NAV));
  P('Trips_Completed', Object.assign({ main: 'All Trips', blocks: [B([TSEG('Completed (2)')]), TC('Spring Science Camp', ['Completed', 'green'], [['cal', '04/08/2025 – 04/11/2025 (4 days)'], ['bldg', 'Lincoln High School']], 'Trip_Details_Active', ['48 Travellers', '$9,600.00']), TC('Olympic Peninsula Field Trip', ['Completed', 'green'], [['cal', '03/12/2025 – 03/14/2025 (3 days)'], ['bldg', 'Westwood High']], 'Trip_Details_Active', ['36 Travellers', '$5,400.00'])] }, NAV));
  P('Trips_Canceled', Object.assign({ main: 'All Trips', blocks: [B([TSEG('Canceled (1)')]), TC('Columbia River Gorge Trip', ['Canceled', 'red'], [['cal', '11/03/2025 – 11/05/2025 (3 days)'], ['bldg', 'Rainier Vista High School']], 'Trip_Details_Active', ['0 Travellers', '$0.00'])] }, NAV));
  P('Trips_Empty', Object.assign({ main: 'All Trips', blocks: [B([TSEG('Completed (2)'), EM('trips', 'No completed trips', 'Trips appear here after their end date.')])] }, NAV));
  var CT = [
    { n: TRIP, s: 10, e: 15, st: ['Active', 'blue'], c: '#4942E4', who: 'Lincoln High School · 85 Travellers', cut: 1 },
    { n: 'Mount Rainier Adventure', s: 12, e: 16, st: ['Active', 'blue'], c: '#4942E4', who: 'Rainier Vista High School · 85 Travellers', cut: 5 },
    { n: 'Yellowstone Expedition', s: 14, e: 19, st: ['Active', 'blue'], c: '#4942E4', who: 'Westwood High · 75 Travellers', cut: 6 },
    { n: 'Olympic Peninsula Field Trip', s: 15, e: 17, st: ['Active', 'blue'], c: '#4942E4', who: 'Westwood High · 36 Travellers', cut: 13 },
    { n: 'Columbia River Gorge Trip', s: 13, e: 15, st: ['In Draft', 'grey'], c: '#99A0AE', who: 'Rainier Vista High School · 0 Travellers', cut: 15 },
    { n: 'Mount Hood Ski Trip', s: 1, e: 3, st: ['In Draft', 'grey'], c: '#99A0AE', who: 'Lincoln High School · 0 Travellers' },
    { n: 'Grand Canyon Field Study', s: 1, e: 4, st: ['Ongoing', 'green'], c: '#288F5A', who: 'Westwood High · 60 Travellers' },
    { n: 'Pacific Coast Explorer', s: 28, e: 30, st: ['In Draft', 'grey'], c: '#99A0AE', who: 'Lincoln High School · 0 Travellers' }];
  var CAL_MEET = [{ d: 9, t: 'Pre trip meeting – ' + TRIP, w: 'Lincoln High School', time: '4:30 PM – 5:30 PM' }, { d: 20, t: 'Staff briefing – Yellowstone Expedition', w: 'Westwood High', time: '10:00 AM – 11:00 AM' }];
  function MD(x) { return '12/' + (x < 10 ? '0' : '') + x + '/2025'; }
  function tripsOn(day) { return CT.filter(function (t) { return day >= t.s && day <= t.e; }); }
  var CAL_TRIPS = { t: 'cal', month: 'December 2025', offset: 1, len: 31, sel: 15, today: 1, lNote: 'Each dot is a type of item. A day shows up to three dots; tap it to see every trip, meeting and cut-off in the Schedule.',
    legend: [['Active', '#4942E4'], ['Ongoing', '#288F5A'], ['In Draft', '#99A0AE'], ['Cut-off', '#CA054D']],
    dots: function (day) { var a = tripsOn(day).map(function (t) { return t.c; }); if (CT.some(function (t) { return t.cut === day; })) a.push('#CA054D'); if (CAL_MEET.some(function (m) { return m.d === day; })) a.unshift('#4942E4'); return a; },
    panel: function (day) {
      var TT = { '#4942E4': '#F8F9FF', '#288F5A': '#CDFFE3', '#99A0AE': '#F3F5F8' };
      var rows = CAL_MEET.filter(function (m) { return m.d === day; }).map(function (m) { return { bar: '#4942E4', tint: '#F8F9FF', title: m.t, sub: m.w, time: m.time, to: 'Cal_MeetingDetail' }; });
      rows = rows.concat(tripsOn(day).map(function (t) { return { bar: t.c, tint: TT[t.c], title: t.n, sub: t.who, time: 'Day ' + (day - t.s + 1) + ' of ' + (t.e - t.s + 1) + ' · ' + MD(t.s) + ' – ' + MD(t.e), chip: t.st, to: t.st[0] === 'In Draft' ? 'Trip_Details_Draft' : 'Trip_Details_Active' }; }));
      CT.forEach(function (t) { if (t.cut === day) rows.push({ bar: '#CA054D', tint: '#FFF2F7', title: 'Booking cut-off', sub: t.n, time: 'Registration closes today', to: 'Trip_Details_Active' }); });
      var cnt = {}; tripsOn(day).forEach(function (t) { cnt[t.st[0]] = (cnt[t.st[0]] || 0) + 1; });
      var summary = rows.length > 1 ? ['Ongoing', 'Active', 'In Draft'].filter(function (k) { return cnt[k]; }).map(function (k) { return [cnt[k] + ' ' + k, k === 'Active' ? 'blue' : k === 'Ongoing' ? 'green' : 'grey']; }) : null;
      return { title: 'Schedule', sub: rows.length ? MD(day) + ' · ' + rows.length + (rows.length === 1 ? ' item' : ' items') : MD(day), summary: summary, rows: rows, empty: 'Nothing for today' }; } };
  var CSEG = function (a) { return SG([['Trips', 'Trips_Calendar'], ['TM availability', 'Cal_Staff']], a); };
  P('Trips_Calendar', { main: 'Calendar', nav: 'TA', navActive: 'Calendar', blocks: [B([CSEG('Trips')]), B([CAL_TRIPS])] });
  // staff availability — set by GL / TM in their app
  var AVC = { A: '#288F5A', T: '#AE890B', U: '#CA054D', M: '#4942E4' };
  var AVL = { A: ['Available', 'active'], T: ['Tentative', 'draft'], U: ['Unavailable', 'red'], M: ['Meeting', 'blue'] };
  var STAFF = [
    { n: 'Guy, Hawkins', r: 'Tour Manager', p: function (d) { return d >= 10 && d <= 15 ? 'A' : d === 20 ? 'M' : d >= 24 && d <= 26 ? 'U' : 'A'; }, trip: [TRIP, 10, 15], note: { 24: 'Family event', 25: 'Family event', 26: 'Family event' }, upd: '11/20/2025' },
    { n: 'Nathan, Johnson', r: 'Tour Manager', p: function (d) { return d >= 12 && d <= 16 ? 'A' : d >= 17 && d <= 19 ? 'T' : d >= 2 && d <= 4 ? 'U' : 'A'; }, trip: ['Mount Rainier Adventure', 12, 16], note: { 2: 'Training', 3: 'Training', 4: 'Training' }, upd: '11/26/2025' },
    { n: 'Maria, Castellanos', r: 'Tour Manager', p: function (d) { return d >= 8 && d <= 16 ? 'U' : d >= 21 ? 'T' : 'A'; }, note: { 8: 'On leave', 9: 'On leave', 10: 'On leave', 11: 'On leave', 12: 'On leave', 13: 'On leave', 14: 'On leave', 15: 'On leave', 16: 'On leave' }, upd: '11/02/2025' },
    { n: 'Jessica, Moore', r: 'Tour Manager', p: function (d) { return d >= 13 && d <= 15 ? 'T' : d === 22 ? 'U' : 'A'; }, upd: '11/30/2025' },
    { n: 'Sam, Ortiz', r: 'Tour Manager', p: function (d) { return d >= 14 && d <= 19 ? 'A' : d === 9 ? 'M' : d >= 28 ? 'U' : 'A'; }, trip: ['Yellowstone Expedition', 14, 19], upd: '11/28/2025' }];
  function staffIn() { return STAFF; }
  function onTrip(x, d) { return x.trip && d >= x.trip[1] && d <= x.trip[2] ? x.trip[0] : null; }
  var CAL_STAFF = { t: 'cal', month: 'December 2025', offset: 1, len: 31, sel: 14, today: 1,
    legend: [['Available', '#288F5A'], ['Tentative', '#AE890B'], ['Unavailable', '#CA054D'], ['Meeting', '#4942E4']],
    dots: function (d, fi) { var seen = {}, a = []; staffIn(fi).forEach(function (x) { var c = x.p(d); if (!seen[c] && c !== 'A') { seen[c] = 1; a.push(AVC[c]); } }); return a; },
    panel: function (d, fi) {
      var list = staffIn(fi), rows = list.map(function (x) { var c = x.p(d), t = onTrip(x, d); return { av: x.n, title: x.n, sub: x.r + ' · ' + (t ? 'On trip: ' + t : (x.note && x.note[d]) ? x.note[d] : c === 'A' ? 'Free to assign' : 'Set in TM app'), chip: t ? ['Assigned', 'blue'] : AVL[c], to: tmTo(x) }; });
      var free = list.filter(function (x) { return x.p(d) === 'A' && !onTrip(x, d); }).length;
      return { title: MD(d), sub: free + ' of ' + list.length + ' free to assign', rows: rows, empty: 'No tour managers yet.' }; } };
  P('Cal_Staff', { main: 'Calendar', nav: 'TA', navActive: 'Calendar', blocks: [B([CSEG('TM availability'), NT('Tour Managers set their availability in the TM app. You can also set it for them from their calendar, and they’ll be notified.', 'info', 'info')]), C([H({ lead: { icon: 'search' }, title: 'Find a tour manager', sub: 'See one person’s calendar', tw: 500, chev: true, to: 'Cal_TMPick', rowH: 44 })], { pad: 12, to: 'Cal_TMPick' }), B([CAL_STAFF])] });
  var GUY = STAFF[0];
  P('Cal_TMPick', LIKE('Cal_Staff', { ov: SHEET('Find a tour manager', [SB('', 'Search by name')].concat(STAFF.map(function (x, i) { var c = x.p(14), t = onTrip(x, 14); return [i ? DV : null, H({ lead: { av: x.n, size: 36 }, title: x.n, sub: t ? 'On trip: ' + t : 'Updated ' + x.upd, chips: [t ? ['Assigned', 'blue'] : AVL[c]], tw: 500, chev: true, to: tmTo(x), rowH: 52 })]; }).reduce(function (a, b) { return a.concat(b); }, []).filter(Boolean))) }));
  P('Cal_TMPick_Empty', LIKE('Cal_Staff', { ov: SHEET('Find a tour manager', [SB('Zack', 'Search by name'), EM('search', 'No tour managers found', 'Check the spelling or search by last name.')]) }));
  function personCal(GUY) { return { t: 'cal', month: 'December 2025', offset: 1, len: 31, sel: 24,
    legend: [['Available', '#288F5A'], ['Tentative', '#AE890B'], ['Unavailable', '#CA054D'], ['Meeting', '#4942E4'], ['On trip', '#191B25']],
    dots: function (d) { return [onTrip(GUY, d) ? '#191B25' : AVC[GUY.p(d)]]; },
    panel: function (d) { var c = GUY.p(d), t = onTrip(GUY, d);
      var TN = { A: '#CDFFE3', T: '#FFF1B3', U: '#FFF2F7', M: '#F8F9FF' };
      if (c === 'A' && !t) return { title: 'Schedule', sub: MD(d), rows: [], empty: 'Nothing for today' };
      var rows = t ? [{ bar: '#4942E4', tint: '#F8F9FF', title: t, sub: 'Assigned as Tour Manager', time: MD(GUY.trip[1]) + ' – ' + MD(GUY.trip[2]), to: 'Trip_Details_Active' }] : [c === 'M' ? { bar: '#4942E4', tint: '#F8F9FF', title: 'Staff briefing – Yellowstone Expedition', sub: 'Westwood High', time: '10:00 AM – 11:00 AM', to: 'Cal_MeetingDetail' } : { bar: AVC[c], tint: TN[c], title: AVL[c][0], sub: (GUY.note && GUY.note[d]) || 'Set in TM app', time: 'Dec ' + d, to: 'Cal_EntryDetail' }];
      return { title: 'Schedule', sub: MD(d), rows: rows, empty: 'Nothing for today' }; } }; }
  function personScreen(x) { return { title: x.n, back: 'Cal_Staff', footer: [['Assign to trip', 'secondary', 'plus', 'Cal_AssignTrip'], ['Set unavailability', 'primary', 'check', 'Cal_SetUnavail']], blocks: [
    C([H({ lead: { av: x.n }, title: x.n, sub: 'Tour Manager · (207) 555-0119', tw: 600, icons: [{ icon: 'phone', toast: 'Calling (207) 555-0119' }, { icon: 'mail', toast: 'Opening mail' }] }), MU('Availability last updated ' + x.upd)], { gap: 8 }),
    B([personCal(x)])] }; }
  P('Cal_StaffPerson', personScreen(STAFF[0]));
  STAFF.forEach(function (x, i) { if (i) P('Cal_TM_' + i, personScreen(x)); });
  function tmTo(x) { var i = STAFF.indexOf(x); return i > 0 ? 'Cal_TM_' + i : 'Cal_StaffPerson'; }
  function UFORM(o) { o = o || {}; return [F('Start Date', o.s || '12/24/2025', { kind: 'date', req: true, help: 'First day Guy is away' }), F('End Date', o.e || '12/24/2025', { kind: 'date', req: true, help: 'Last day Guy is away' }), LBL('Status'), RD('Tentative', o.st === 'T'), RD('Unavailable', o.st === 'U'), F('Notes', o.n || '', { kind: 'textarea', req: true, ph: 'Start typing here', help: 'Guy is notified in the TM app' })]; }
  P('Cal_SetUnavail', LIKE('Cal_StaffPerson', { ov: SHEET('Set Unavailability', UFORM().map(function (x) { if (x.t === 'radio') x.to = 'Cal_SetUnavail_Filled'; return x; }), [CANCEL(), ['Save', 'primary', 'check', 'Cal_SetUnavail', 'Add a status and notes first']]) }));
  P('Cal_SetUnavail_Filled', LIKE('Cal_StaffPerson', { ov: SHEET('Set Unavailability', UFORM({ s: '12/27/2025', e: '12/28/2025', st: 'T', n: 'Might not be available during this time period because of personal commitments.' }), [CANCEL(), ['Save', 'primary', 'check', 'Cal_StaffPerson', 'Unavailability Added']]) }));
  P('Cal_EntryDetail', LIKE('Cal_StaffPerson', { ov: SHEET('Unavailable', [{ t: 'info', icon: 'note', label: 'Notes', value: 'Family event' }, { t: 'info', icon: 'clock', label: 'Applied On', value: '11/20/2025' }], [['Remove', 'secondary', null, 'Cal_RemoveConfirm'], ['Edit', 'primary', 'check', 'Cal_UpdateUnavail']]) }));
  P('Cal_UpdateUnavail', LIKE('Cal_StaffPerson', { ov: SHEET('Update Unavailability', UFORM({ s: '12/24/2025', e: '12/26/2025', st: 'U', n: 'Family event' }), [CANCEL(), ['Save', 'primary', 'check', 'Cal_StaffPerson', 'Unavailability updated']]) }));
  P('Cal_RemoveConfirm', LIKE('Cal_StaffPerson', { ov: DLG('Remove these dates?', 'Guy will show as available Dec 24 – 26.', [CANCEL(), ['Remove', 'danger', null, 'Cal_StaffPerson', 'Dates removed']], 'trash') }));
  P('Cal_MeetingDetail', LIKE('Trips_Calendar', { blocks: [S.Trips_Calendar.blocks[0], B([Object.assign({}, CAL_TRIPS, { sel: 9 })])], ov: SHEET('Pre trip meeting', [MU('Participants (4)'), { t: 'pills', pills: ['Kristin Watson', 'Guy Hawkins', 'Mark Loop', 'Amy Loop'] }, { t: 'info', icon: 'clock', label: 'Created by', value: 'Kristin Watson on 11/24/2025, 2:30 PM' }], [['View trip', 'secondary', null, 'Trip_Details_Active']]) }));
  S.Cal_SetUnavail.ov.band = [{ t: 'Set Unavailability' }]; S.Cal_SetUnavail_Filled.ov.band = [{ t: 'Set Unavailability' }]; S.Cal_UpdateUnavail.ov.band = [{ t: 'Update Unavailability' }];
  S.Cal_EntryDetail.ov.band = [{ sw: '#CA054D', t: 'Unavailable', sub: 'Dec 24 – Dec 26' }];
  S.Cal_MeetingDetail.ov.band = [{ icon: 'bldg', t: 'Lincoln High School' }, { sw: '#4942E4', t: 'Pre trip meeting – ' + TRIP, sub: 'Dec 9, 4:30 PM – 5:30 PM' }];
  Object.keys(S).forEach(function (k) { if (/^Itin_(Add|Edit)/.test(k) && k !== 'Itin_AddType' && S[k].footer) S[k].fnote = 'Draft saved automatically · 10:42 AM. You can close the app and pick up where you left off.'; });
  function TPICK(n, dates, ok) { return H({ title: n, sub: dates, tw: 500, chips: [ok ? ['Free', 'active'] : ['Clash', 'red']], to: ok ? null : 'Cal_AssignClash', toast: ok ? n + ' selected' : null, rowH: 52 }); }
  P('Cal_AssignTrip', LIKE('Cal_StaffPerson', { ov: SHEET('Assign Guy to a trip', [MU('Only trips without a tour manager are listed.'), TPICK('Yellowstone Expedition', '12/14/2025 – 12/19/2025', false), DV, TPICK('Pacific Coast Explorer', '12/28/2025 – 12/30/2025', true), F('Assignment Status', 'Confirmed', { kind: 'select' })], [CANCEL(), ['Assign', 'primary', null, '^', 'Guy assigned to Pacific Coast Explorer']]) }));
  P('Cal_AssignClash', LIKE('Cal_StaffPerson', { ov: DLG('Dates clash', 'Guy is on Class 5 Environmental Trip until 12/15/2025, which overlaps Yellowstone Expedition (12/14 – 12/19).', [['Pick another trip', 'secondary', null, 'Cal_AssignTrip'], ['Assign anyway', 'primary', null, 'Cal_StaffPerson', 'Guy assigned to Yellowstone Expedition']], 'warn') }));
  P('Trip_QuickMenu_Draft', LIKE('Trips_Draft', { ov: SHEET(TRIP, [MROW('eye', 'View trip details', 'Trip_Details_Draft'), DV, MROW('link', 'Email me the web link', null, 'Link sent to your email')]) }));
  P('Trip_QuickMenu', LIKE('Trips_Active', { ov: SHEET(TRIP, [MROW('eye', 'View trip details', 'Trip_Details_Active'), DV, MROW('edit', 'Edit basic details', 'Basic_Edit'), DV, MROW('note', 'Trip notes', 'Trip_Notes'), DV, MROW('x', 'Request cancellation', 'Trip_CancelDialog', null, true)]) }));
  var GPH = 'Search trips, travelers, account holders';
  var GSEG = function (a, q) { return SG([['All', q ? 'Search_All' : null], ['Trips', q ? 'Search_Results' : null], ['Travelers', q ? 'Search_Travelers' : null]], a); };
  function REC(t, to, icon) { return H({ lead: { icon: icon || 'clock', color: '#717784' }, title: t, tw: 400, rowH: 44, to: to || 'Search_All', icons: [{ icon: 'x', toast: 'Removed from recent searches' }] }); }
  var SNAV = { main: 'Search', nav: 'TA', navActive: 'Search' };
  P('Search_Recent', Object.assign({}, SNAV, { blocks: [B([SB('', GPH), GSEG('All'), LBL('Recent searches')]), C([REC('Seattle'), DV, REC('Johnson, Mia', 'Search_Travelers', 'user'), DV, REC('Class 4 Science trip', 'Search_Results')], { pad: 8, gap: 4 })] }));
  function SR(t, l, s) { return C([H({ lead: { img: COVER }, title: t, sub: l, body: s, align: 'flex-start' })], { pad: 12, to: 'Search_Preview' }); }
  function TR(n, e, trip, chips, to) { return [H({ lead: { av: n }, title: n, sub: e, body: trip, tw: 500, chev: true, to: to || 'Trav_Detail', align: 'flex-start' }), CH(chips, { indent: true })]; }
  P('Search_All', Object.assign({}, SNAV, { blocks: [B([SB('Mia', GPH), GSEG('All', true), MU('3 results for “Mia”')]),
    G('Travelers', [].concat(TR('Johnson, Mia', 'mia.johnson@gmail.com', TRIP, [['Student', 'grey'], ['Active', 'active']]), [DV], TR('Torres, Mia', 'mia.torres@gmail.com', 'Mount Rainier Adventure', [['Student', 'grey'], ['Waiting', 'draft']])), { link: 'See all', linkTo: 'Search_Travelers' }),
    G('Account Holders', [H({ lead: { av: 'Johnson, Mia' }, title: 'Johnson, Mia', sub: 'Account holder · 2 travelers', body: TRIP, tw: 500, chev: true, to: 'Trav_Detail', align: 'flex-start' })]),
    G('Trips', [MU('No trips match “Mia”')])] }));
  P('Search_Travelers', Object.assign({}, SNAV, { blocks: [B([SB('Mia', GPH), GSEG('Travelers', true), MU('2 travelers')]), C([].concat(TR('Johnson, Mia', 'mia.johnson@gmail.com', TRIP + ' · 12/10/2025', [['Student', 'grey'], ['Active', 'active'], ['Partial Paid', 'draft']]), [DV], TR('Torres, Mia', 'mia.torres@gmail.com', 'Mount Rainier Adventure · 06/15/2024', [['Student', 'grey'], ['Waiting', 'draft']])), { pad: 12, gap: 8 })] }));
  P('Search_Results', Object.assign({}, SNAV, { blocks: [B([SB('Seattle', GPH), GSEG('Trips', true), MU('Showing 4 trips')]), SR(TRIP, 'Seattle, Portland, Vancouver… +1', 'Lincoln High School'), SR('Mount Rainier Adventure', 'Seattle, Tacoma, Olympia… +2', 'Rainier Vista High School'), SR('Yellowstone Expedition', 'Seattle, Portland, Boise… +2', 'Westwood High'), SR('Pacific Coast Explorer', 'Seattle, Astoria… +1', 'Lincoln High School')] }));
  P('Search_Preview', LIKE('Search_Results', { ov: SHEET('Mount Rainier Adventure', [{ t: 'img', src: COVER, h: 140 }, H({ title: 'Exploring the world', sub: 'DNK8-0541', tw: 500, chips: [['Active', 'blue']] }), KV('Destination', 'Los Angeles, CA, USA'), KV('Trip schedule', '08/08/2024 – 12/08/2024'), KV('Booking cut off date', '08/08/2024')], [['View trip', 'primary', null, 'Trip_Details_Active']]) }));
  P('Search_Empty', Object.assign({}, SNAV, { blocks: [B([SB('Hawaii', GPH), GSEG('All', true), EM('search', 'No results found', 'Try a trip name or ID, a traveler’s name or email, or an account holder.')])] }));


  TM.TC = TC; TM.MD = MD; TM.tripsOn = tripsOn; TM.staffIn = staffIn; TM.onTrip = onTrip; TM.personCal = personCal; TM.personScreen = personScreen; TM.tmTo = tmTo; TM.UFORM = UFORM; TM.TPICK = TPICK; TM.REC = REC; TM.SR = SR; TM.TR = TR; TM.TSEG = TSEG; TM.ACT = ACT; TM.DRF = DRF; TM.ONG = ONG; TM.R_A = R_A; TM.CT = CT; TM.CAL_MEET = CAL_MEET; TM.CAL_TRIPS = CAL_TRIPS; TM.CSEG = CSEG; TM.AVC = AVC; TM.AVL = AVL; TM.STAFF = STAFF; TM.CAL_STAFF = CAL_STAFF; TM.GUY = GUY; TM.GPH = GPH; TM.GSEG = GSEG; TM.SNAV = SNAV;
})();
