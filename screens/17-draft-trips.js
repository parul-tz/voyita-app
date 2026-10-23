(function () {
  var TM = window.TM;
  var F = TM.F, HF = TM.HF, TG = TM.TG, CK = TM.CK, RD = TM.RD, H = TM.H, M = TM.M, TX = TM.TX, LBL = TM.LBL, HD = TM.HD, MU = TM.MU, ST = TM.ST, BR = TM.BR, BT = TM.BT, LK = TM.LK, CH = TM.CH, NT = TM.NT, SG = TM.SG, SB = TM.SB, EM = TM.EM, KV = TM.KV, UP = TM.UP, C = TM.C, G = TM.G, B = TM.B, KVG = TM.KVG, ROW = TM.ROW, MROW = TM.MROW, SHEET = TM.SHEET, DLG = TM.DLG, P = TM.P, LIKE = TM.LIKE, COVER = TM.COVER, PDF = TM.PDF, TRIP = TM.TRIP, CODE = TM.CODE, DV = TM.DV, TRIPSUB = TM.TRIPSUB, S = TM.S, CANCEL = TM.CANCEL, NAV = TM.NAV, TABS = TM.TABS, TC = TM.TC, MD = TM.MD, tripsOn = TM.tripsOn, staffIn = TM.staffIn, onTrip = TM.onTrip, personCal = TM.personCal, personScreen = TM.personScreen, tmTo = TM.tmTo, UFORM = TM.UFORM, TPICK = TM.TPICK, REC = TM.REC, SR = TM.SR, TR = TM.TR, TSEG = TM.TSEG, ACT = TM.ACT, DRF = TM.DRF, ONG = TM.ONG, R_A = TM.R_A, CT = TM.CT, CAL_MEET = TM.CAL_MEET, CAL_TRIPS = TM.CAL_TRIPS, CSEG = TM.CSEG, AVC = TM.AVC, AVL = TM.AVL, STAFF = TM.STAFF, CAL_STAFF = TM.CAL_STAFF, GUY = TM.GUY, GPH = TM.GPH, GSEG = TM.GSEG, SNAV = TM.SNAV, WROW = TM.WROW, NOTE = TM.NOTE, HERO_D = TM.HERO_D, HERO_A = TM.HERO_A, SEATS = TM.SEATS, WIDGETS = TM.WIDGETS, READY = TM.READY, HDR_D = TM.HDR_D, MEET = TM.MEET, WELCOME = TM.WELCOME, CAP = TM.CAP, CPICK = TM.CPICK, CONTACT = TM.CONTACT, BASIC_FORM = TM.BASIC_FORM, PL = TM.PL, DESC = TM.DESC, EV = TM.EV, DAY = TM.DAY, PLACES = TM.PLACES, MEDIA = TM.MEDIA, BASEF = TM.BASEF, ATT = TM.ATT, GEN = TM.GEN, ADDGEN = TM.ADDGEN, LODGE = TM.LODGE, CARS = TM.CARS, LEG = TM.LEG, TRANSIT = TM.TRANSIT, ADDT = TM.ADDT, EDT = TM.EDT, FAIR = TM.FAIR, FDEP = TM.FDEP, FARR = TM.FARR, FTAIL = TM.FTAIL, TRAINF = TM.TRAINF, BUSF = TM.BUSF, CRUISEF = TM.CRUISEF, VER = TM.VER, LONG = TM.LONG, BF = TM.BF, ADDR = TM.ADDR, EVFOOT = TM.EVFOOT, AUTOSAVE = TM.AUTOSAVE, ES = TM.ES, OPC = TM.OPC, TNUM = TM.TNUM, FSUB = TM.FSUB, FBASE = TM.FBASE, FMODE = TM.FMODE, LIVE_OFF = TM.LIVE_OFF, LIVE_ON = TM.LIVE_ON, FFOOT = TM.FFOOT, TOURF = TM.TOURF, ROEV = TM.ROEV, TYPEV = TM.TYPEV, PLANV = TM.PLANV, TIER = TM.TIER, ACCV = TM.ACCV, VO = TM.VO, COLLV = TM.COLLV, PLANROWS = TM.PLANROWS, FLAGS = TM.FLAGS, TIERNOTE = TM.TIERNOTE, ADDON = TM.ADDON, VARC = TM.VARC, AFORM = TM.AFORM, V2 = TM.V2, PERSON = TM.PERSON, TMROW = TM.TMROW, OSFORM = TM.OSFORM, SPK = TM.SPK, PICK = TM.PICK, TMFORM = TM.TMFORM, STOPTS = TM.STOPTS, TMS = TM.TMS, TMROWS = TM.TMROWS, BUL = TM.BUL, LIST = TM.LIST, DOC = TM.DOC, DOCS = TM.DOCS, TRAV = TM.TRAV, FL = TM.FL, PAYC = TM.PAYC, FSEC = TM.FSEC, TASK = TM.TASK, INSTR = TM.INSTR, BROW = TM.BROW, TFORM = TM.TFORM, MSEL = TM.MSEL, RFORM = TM.RFORM, PSROW = TM.PSROW, PAYROW = TM.PAYROW, TXN = TM.TXN, TNOTE = TM.TNOTE, TT = TM.TT, TSUM = TM.TSUM, TVSEG = TM.TVSEG, TSB = TM.TSB, ROWS_A = TM.ROWS_A, TDHEAD = TM.TDHEAD, RHEAD = TM.RHEAD, LROW = TM.LROW, LISTCARD = TM.LISTCARD, LISTROW = TM.LISTROW, OCC = TM.OCC, ROOM = TM.ROOM, CLIST = TM.CLIST, COACH = TM.COACH, RT = TM.RT, RCSEG = TM.RCSEG, RONLY = TM.RONLY, RSTATS = TM.RSTATS, RDL = TM.RDL, VROW = TM.VROW, STAT = TM.STAT, RESV = TM.RESV, VD = TM.VD, OD = TM.OD, VT = TM.VT, VONLY = TM.VONLY, VSEG = TM.VSEG, VHEAD = TM.VHEAD, NROW = TM.NROW, TOROW = TM.TOROW, NTT = TM.NTT, NSEG = TM.NSEG, NFAB = TM.NFAB, PK = TM.PK, PKV = TM.PKV, PKSEG = TM.PKSEG, PKT = TM.PKT, PKNOTE = TM.PKNOTE, H1 = TM.H1, AUTH = TM.AUTH, PFORM = TM.PFORM, PWF = TM.PWF, BRAND = TM.BRAND, LOGIN_LINKS = TM.LOGIN_LINKS, OTPSUB = TM.OTPSUB, RESEND = TM.RESEND, PNAV = TM.PNAV, PUPD = TM.PUPD, OTPOLD = TM.OTPOLD, OTPNEW = TM.OTPNEW, RESEND2 = TM.RESEND2;
  // ---------- draft trips: read-only copies of every screen reachable from a draft
  (function () {
    var EDITY = /(Edit|Add|Delete|Remove|Assign|Sheet|Confirm|Cancel|Upload|Compose|Discard|Request|Deactivate|NoteAdd|Recipients|DonationOff|Unsaved|Clash|Tier|Filter|Fundraising|_To$)/;
    var SRC = ['Trip_ViewDetails', 'Basic_View', 'Pay_View', 'Pay_View_Standard', 'Pay_View_Variable', 'Pay_View_Lump', 'Addon_List', 'Staff_View', 'Cost_View', 'Docs_List', 'Settings_View', 'Itin_View', 'Trav_List', 'Trav_Waiting', 'Trav_Request', 'Trav_Canceled', 'Trav_Deactivated', 'Trav_Detail', 'Trav_Payments', 'Trav_Notes', 'Trav_PaySchedule', 'Notif_Sent', 'Notif_Scheduled', 'Notif_Drafts', 'Notif_Detail', 'Rooms_Lists', 'Rooms_Detail', 'Rooms_Detail_Partial', 'Coach_Lists', 'Coach_Detail', 'Vend_List', 'Vend_Detail', 'Vend_Contacts', 'Vend_Docs', 'Vend_Payments', 'Vend_Other', 'Packet_View', 'Packet_Other'];
    SRC = SRC.filter(function (k) { return S[k]; });
    var MAP = {}; SRC.forEach(function (k) { MAP[k] = k + '_D'; });
    MAP.Trip_Details_Active = 'Trip_Details_Draft';
    function retarget(t) { if (!t || t === '^') return t; if (MAP[t]) return MAP[t]; if (/^(Trip_Details_Active|Trips_Active)$/.test(t)) return 'Trip_Details_Draft'; if (/^(Trip_Details_Draft|Trip_Details_Ready|Trips_Draft)$/.test(t)) return t; return null; }
    function clean(v) {
      if (Array.isArray(v)) return v.map(clean).filter(function (x) { return x !== undefined; });
      if (!v || typeof v !== 'object' || typeof v === 'function') return v;
      if (v.t === 'link' && (v.icon === 'plus' || (v.to && EDITY.test(v.to)))) return undefined;
      if (v.t === 'btns') return undefined;
      if (v.t === 'lrow' || v.t === 'cpick') return v;
      var o = {}; for (var k in v) o[k] = v[k];
      delete o.icons; delete o.rightLink; delete o.rightIcon; delete o.rightTo; delete o.rightToast; delete o.link; delete o.linkTo; delete o.linkIcon; delete o.linkToast;
      if (o.more) delete o.more;
      if (o.t === 'event') { o.more = null; }
      if (typeof o.to === 'string') { var r = retarget(o.to); if (r) o.to = r; else delete o.to; }
      for (var k2 in o) if (k2 !== 'to' && o[k2] && typeof o[k2] === 'object') o[k2] = clean(o[k2]);
      return o;
    }
    var NOTE = B([NT('Draft trip · view only. Make changes in the web app.', 'info', 'info')]);
    SRC.forEach(function (k) {
      var s = S[k], n = {}; for (var x in s) n[x] = s[x];
      delete n.fab; delete n.footer; delete n.fnote; delete n.ov; delete n.base;
      if (n.right && n.right.t !== 'chip' && n.right.t !== 'btn') delete n.right;
      n.blocks = [NOTE].concat(clean(s.blocks || []).filter(Boolean));
      if (n.tabs) n.tabs = n.tabs.map(function (t) { return [t[0], t[1], MAP[t[2]] || (t[2] === 'Trip_Details_Active' ? 'Trip_Details_Draft' : t[2]), t[3]]; });
      n.back = k === 'Trip_ViewDetails' ? 'Trip_Details_Draft' : n.tabs ? 'Trips_Draft' : (MAP[s.back] || 'Trip_Details_Draft');
      n.draftOf = k;
      P(MAP[k], n);
    });
    ['Trip_Details_Draft', 'Trip_Details_Ready'].forEach(function (k) {
      var s = S[k];
      if (s.tabs) s.tabs = s.tabs.map(function (t) { return [t[0], t[1], MAP[t[2]] || (t[2] === 'Trip_Details_Active' ? k : t[2]), t[3]]; });
      if (s.right && s.right.to === 'Trip_ViewDetails') s.right = Object.assign({}, s.right, { to: 'Trip_ViewDetails_D' });
      s.blocks = clean(s.blocks).filter(Boolean);
      s.blocks.forEach(function (b) { (b.items || []).forEach(function (it) { if (it.t === 'steps') it.items = it.items.map(function (x) { return [x[0], x[1], x[2] ? (MAP[x[2]] || null) : null]; }); }); });
    });
    var EMPTY = {
      Itin_View: ['route', 'Itinerary not set up yet', 'No events added yet. Build the itinerary in the web app.'],
      Pay_View: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Standard: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Variable: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Lump: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Vend_List: ['bldg', 'No vendors yet', 'Vendors and reservations are added in the web app.'],
      Addon_List: ['tag', 'No add-ons yet', 'Add-ons are created in the web app.'],
      Staff_View: ['staff', 'No staff assigned yet', 'Tour managers and other staff are assigned in the web app.'],
      Cost_View: ['receipt', 'Cost sheet not set up yet', 'The cost sheet is filled in the web app.'],
      Docs_List: ['folder', 'No documents yet', 'Documents uploaded in the web app show here.'],
      Trav_List: ['users', 'No travelers yet', 'Registration opens once the trip is confirmed.'],
      Trav_Waiting: ['users', 'No travelers yet', 'Registration opens once the trip is confirmed.'],
      Trav_Request: ['users', 'No requests yet', 'Cancellation requests appear after travelers register.'],
      Trav_Canceled: ['users', 'No canceled travelers', 'Registration opens once the trip is confirmed.'],
      Trav_Deactivated: ['users', 'No deactivated travelers', 'Registration opens once the trip is confirmed.'],
      Rooms_Lists: ['bed', 'No room lists yet', 'Room lists are created in the web app after travelers register.'],
      Coach_Lists: ['bus', 'No coach lists yet', 'Coach lists are created in the web app after travelers register.'],
      Notif_Sent: ['NotificationNotificationNo', 'No notifications yet', 'Notifications can be sent once the trip is confirmed.'],
      Notif_Scheduled: ['NotificationNotificationNo', 'Nothing scheduled', 'Notifications can be sent once the trip is confirmed.'],
      Notif_Drafts: ['NotificationNotificationNo', 'No drafts', 'Notifications can be sent once the trip is confirmed.'],
      Packet_View: ['receipt', 'No packets yet', 'Trip agreement and other packets are generated in the web app.'],
      Packet_Other: ['receipt', 'No packets yet', 'Trip agreement and other packets are generated in the web app.']
    };
    Object.keys(EMPTY).forEach(function (k) { var n = S[MAP[k]]; if (!n) return; var e = EMPTY[k];
      var seg = []; (n.blocks || []).forEach(function (b) { (b.items || []).forEach(function (it) { if (it.t === 'seg') seg.push(Object.assign({}, it, { active: it.active ? it.active.replace(/ \(\d+\)$/, '') : it.active, items: it.items.map(function (x) { return Object.assign({}, x, { label: x.label.replace(/ \(\d+\)$/, '') }); }) })); }); });
      n.blocks = [B([NT('Draft trip · view only. Make changes in the web app.', 'info', 'info')].concat(seg, [EM(e[0], e[1], e[2])]))]; });
    var DROP = ['Trav_Detail', 'Trav_Payments', 'Trav_Notes', 'Trav_PaySchedule', 'Notif_Detail', 'Rooms_Detail', 'Rooms_Detail_Partial', 'Coach_Detail', 'Vend_Detail', 'Vend_Contacts', 'Vend_Docs', 'Vend_Payments', 'Vend_Other'];
    DROP.forEach(function (k) { delete S[MAP[k]]; });
    SRC = SRC.filter(function (k) { return DROP.indexOf(k) < 0; });
    // de-duplicate identical empty states: one screen per module
    var SAME = { Pay_View_Standard: 'Pay_View', Pay_View_Variable: 'Pay_View', Pay_View_Lump: 'Pay_View', Trav_Waiting: 'Trav_List', Trav_Request: 'Trav_List', Trav_Canceled: 'Trav_List', Trav_Deactivated: 'Trav_List', Notif_Scheduled: 'Notif_Sent', Notif_Drafts: 'Notif_Sent', Packet_Other: 'Packet_View' };
    Object.keys(SAME).forEach(function (k) { delete S[MAP[k]]; MAP[k] = MAP[SAME[k]]; });
    SRC = SRC.filter(function (k) { return !SAME[k]; });
    ['Trav_List', 'Notif_Sent', 'Packet_View'].forEach(function (k) { var n = S[MAP[k]]; n.blocks = [B(n.blocks[0].items.filter(function (it) { return it.t !== 'seg'; }))]; });
    // partially set up: itinerary started, payment collection chosen but no pricing
    var NOTE_D = NT('Draft trip · view only. Make changes in the web app.', 'info', 'info');
    function NOTSET(label) { return H({ title: label, sub: 'Not set yet', tw: 500, chips: [['Not set', 'grey']], rowH: 44 }); }
    P('Itin_View_DP', { title: 'Itinerary', back: 'Trip_Details_Partial', right: { t: 'chip', label: 'Draft', tone: 'grey' }, blocks: [B([NOTE_D, TRIPSUB, MU('1 of 5 days planned · 2 events')]),
      clean(DAY(1, '12/10/2025', [EV('06:00 AM', 'School Trip Departure', LONG, true), EV('09:00 AM', 'Breakfast time', BF)], true)),
      C([MU('No events added yet')], { acc: { chip: 'DAY 2', title: '12/11/2025', open: true }, pad: 14, gap: 14, accBg: '#F3F5F8' }),
      C([MU('No events added yet')], { acc: { chip: 'DAY 3', title: '12/12/2025', open: false }, pad: 14, gap: 14, accBg: '#F3F5F8' })] });
    P('Pay_View_DP', { title: 'Payment Setup', back: 'Trip_Details_Partial', blocks: [B([NOTE_D]),
      G('Collection Type', [KV('Collection Type', 'Company Collect')]),
      G('Payment Type', [KV('Payment Type', 'Fixed Pricing'), NOTSET('Pricing Mode')]),
      G('Fixed Pricing', [NOTSET('Student Price'), DV, NOTSET('Adult Price')]),
      G('Payment Plan', [MU('No deposit or installments added yet.')]),
      G('Price updates', [NOTSET('Update trip price for the registered traveler(s)')])] });
    var base = S.Trip_Details_Draft, pd = {}; for (var x in base) pd[x] = base[x];
    pd.blocks = base.blocks.map(function (b) {
      var isReady = (b.items || []).some(function (it) { return it.t === 'steps'; });
      var isPay = (b.items || []).some(function (it) { return it.t === 'head' && it.title === 'Payment'; });
      if (isReady) return G('Trip Readiness', [MU('Trip Setup: 50% Complete, 2 out of 4 steps done.'), LK('Next: Payments (finish on web)', 'chev', 'Pay_View_DP', { trail: true }), { t: 'steps', items: [['Basic Details', true, 'Basic_View_D'], ['Itinerary', true, 'Itin_View_DP'], ['Payments', false, 'Pay_View_DP'], ['Vendor', false, 'Vend_List_D']] }]);
      if (isPay) return G('Payment', [KV('Collection Type', 'Company Collect'), KV('Payment Type', 'Fixed Pricing'), KV('Pricing', 'Not set yet'), LK('View payment setup', 'chev', 'Pay_View_DP', { trail: true })]);
      return b; });
    if (pd.tabs) pd.tabs = pd.tabs.map(function (t) { return t[2] === 'Itin_View_D' ? [t[0], t[1], 'Itin_View_DP', t[3]] : t[2] === 'Trip_Details_Draft' ? [t[0], t[1], 'Trip_Details_Partial', t[3]] : t; });
    var vd = S.Trip_ViewDetails_D, vp = {}; for (var y in vd) vp[y] = vd[y];
    vp.back = 'Trip_Details_Partial';
    vp.blocks = JSON.parse(JSON.stringify(vd.blocks).replace(/"Itin_View_D"/g, '"Itin_View_DP"').replace(/"Pay_View_D"/g, '"Pay_View_DP"'));
    P('Trip_ViewDetails_DP', vp);
    if (pd.right && pd.right.to) pd.right = Object.assign({}, pd.right, { to: 'Trip_ViewDetails_DP' });
    P('Trip_Details_Partial', pd);
    S.Itin_View_DP.back = 'Trip_ViewDetails_DP'; S.Pay_View_DP.back = 'Trip_ViewDetails_DP';
    window.__DRAFT_KEYS = [['Trip_Details_Partial', 'Trip Details · partly set up'], ['Trip_ViewDetails_DP', 'View Details · partly set up'], ['Itin_View_DP', 'Itinerary · partly set up'], ['Pay_View_DP', 'Payment Setup · partly set up']].concat(SRC.map(function (k) { return [MAP[k], ({ Rooms_Lists: 'Room List', Coach_Lists: 'Coach List' }[k] || (S[k].tabs ? S[k].tabsActive : S[k].title)) + (S[MAP[k]].blocks.some(function (b) { return (b.items || []).some(function (it) { return it.t === 'empty'; }); }) ? ' · not set up' : ' · draft')]; }));
  })();
  var groups = [
    ['Trips', 'All Trips list, tabs, search, calendar', [['Trips_Active', 'All Trips · Active'], ['Trips_Draft', 'All Trips · In Draft'], ['Trips_Ongoing', 'All Trips · Ongoing'], ['Trips_Completed', 'All Trips · Completed'], ['Trips_Canceled', 'All Trips · Canceled'], ['Trips_Empty', 'Tab · empty state'], ['Trips_Calendar', 'Calendar · trips'], ['Cal_MeetingDetail', 'Meeting details'], ['Cal_Staff', 'Calendar · staff availability'], ['Cal_TMPick', 'Find a tour manager'], ['Cal_TMPick_Empty', 'Find TM · no results'], ['Cal_StaffPerson', 'Staff calendar'], ['Cal_TM_1', 'TM calendar · Nathan'], ['Cal_TM_2', 'TM calendar · Maria'], ['Cal_EntryDetail', 'Unavailability details'], ['Cal_SetUnavail', 'Set unavailability'], ['Cal_SetUnavail_Filled', 'Set unavailability · filled'], ['Cal_UpdateUnavail', 'Update unavailability'], ['Cal_RemoveConfirm', 'Remove unavailability'], ['Cal_AssignTrip', 'Assign to trip'], ['Cal_AssignClash', 'Dates clash'], ['Trip_QuickMenu', 'Trip card actions'], ['Trip_QuickMenu_Draft', 'Draft trip card actions'], ['Search_Recent', 'Search · recent'], ['Search_All', 'Search · all results'], ['Search_Travelers', 'Search · travelers'], ['Search_Results', 'Search · trips'], ['Search_Preview', 'Search · trip preview'], ['Search_Empty', 'Search · no results']]],
    ['Trip details', 'Overview, draft trips view only, notes, cancellation', [['Trip_Details_Draft', 'Trip Details · In Draft'], ['Trip_Details_Ready', 'Trip Details · ready'], ['Trip_Details_Active', 'Trip Details · Active'], ['Meet_Send', 'Send meeting invite'], ['Welcome_Send', 'Send welcome email'], ['Welcome_Sheet', 'Welcome email · resend'], ['Trip_Actions', 'Trip actions'], ['Trip_CancelDialog', 'Request cancellation'], ['Trip_Notes', 'Trip notes'], ['Trip_NoteAdd', 'Add note'], ['Trip_NoteDelete', 'Delete note']]],
    ['Draft trip · view only', 'Read-only copies reachable from a draft trip', window.__DRAFT_KEYS],
    ['View details and basic details', 'Section menu, view and edit', [['Trip_ViewDetails', 'View Details'], ['Basic_View', 'Basic Details'], ['Basic_Edit', 'Edit Basic Details'], ['Basic_AddDestination', 'Add destination'], ['Basic_AddTravelerType', 'Add traveler type'], ['Basic_Error', 'Edit · validation error'], ['Basic_Unsaved', 'Unsaved changes']]],
    ['Itinerary', 'Event types, add, edit, versions', [['Itin_View', 'Itinerary'], ['Itin_EventSheet', 'Event actions'], ['Itin_AddType', 'Add event type'], ['Itin_AddEvent', 'Add Activity'], ['Itin_AddFood', 'Add Food & Drink'], ['Itin_AddLodging', 'Add Lodging'], ['Itin_AddFlight', 'Add Flight · enter manually'], ['Itin_AddFlight_Live', 'Add Flight · live updates on'], ['Itin_AddFlight_Search', 'Add Flight · search for flight'], ['Itin_AddFlight_Legs', 'Add Flight · pick a leg'], ['Itin_AddTrain', 'Add Train'], ['Itin_AddCar', 'Add Car'], ['Itin_AddBus', 'Add Bus'], ['Itin_AddCruise', 'Add Cruise'], ['Itin_AddTour', 'Add Tour'], ['Itin_AddInfo', 'Add Information'], ['Itin_TimeDisplay', 'Time display'], ['Itin_Places', 'Search a place'], ['Itin_Leave', 'Leave with incomplete details'], ['Itin_EditEvent', 'Edit Event'], ['Itin_TypePick', 'Event type'], ['Itin_EditFlight', 'Edit Flight'], ['Itin_EditLodging', 'Edit Lodging'], ['Itin_EditCar', 'Edit Car'], ['Itin_EditTrain', 'Edit Train'], ['Itin_EditBus', 'Edit Bus'], ['Itin_EditCruise', 'Edit Cruise'], ['Itin_Unsaved', 'Unsaved changes'], ['Itin_Delete', 'Delete event'], ['Itin_Versions', 'Version History'], ['Itin_VersionView', 'Old version · read only'], ['Itin_RestoreConfirm', 'Restore version'], ['Itin_ReadOnly', 'Itinerary · read only'], ['Itin_Empty', 'Itinerary · empty']]],
    ['Payment setup', 'View only · follows the web flow', [['Pay_View', 'Fixed · Tiered Pricing'], ['Pay_Tier', 'Tier instalment prices'], ['Pay_View_Standard', 'Fixed · Standard Pricing'], ['Pay_View_Variable', 'Variable · Tiered Pricing'], ['Pay_Tier_Variable', 'Tier prices · accommodation'], ['Pay_Tier_Missing', 'Tier prices not set'], ['Pay_View_Lump', 'Lump Sum'], ['Pay_Empty', 'No payment setup']]],
    ['Add-ons', 'Variants, add, edit, delete', [['Addon_List', 'Add Ons'], ['Addon_Sheet', 'Add-on actions'], ['Addon_Edit', 'Edit add-on'], ['Addon_Add', 'Create New Add-On'], ['Addon_Add_Variants', 'Create · with variants'], ['Addon_Delete', 'Delete add-on'], ['Addon_Empty', 'Add Ons · empty']]],
    ['Staff', 'Assign, change status, remove', [['Staff_View', 'Staff'], ['Staff_Sheet', 'Staff actions'], ['Staff_TMAdd', 'Add tour manager'], ['Staff_Assign', 'Select tour manager'], ['Staff_TMAdd_Filled', 'Add tour manager · filled'], ['Staff_TMAddCoach', 'Select coach #'], ['Staff_TMAddStatus', 'Select status'], ['Staff_View_TMAdded', 'Tour manager added'], ['Staff_TMStatus', 'Change status'], ['Staff_View_Tentative', 'Status · Tentative'], ['Staff_TMCancel', 'Cancel assignment'], ['Staff_Coach', 'Change coach #'], ['Staff_AddOther', 'Add other staff'], ['Staff_RolePick', 'Select role'], ['Staff_NamePick', 'Select staff'], ['Staff_AddOther_Filled', 'Add other staff · filled'], ['Staff_View_Added', 'Other staff added'], ['Staff_Unavailable', 'Unavailable warning'], ['Staff_Remove', 'Remove staff']]],
    ['Travellers', 'Roster, search, details, tasks, notes, requests', [['Trav_List', 'Travellers · Active'], ['Trav_Waiting', 'Waiting'], ['Trav_Canceled', 'Canceled'], ['Trav_Request', 'Cancellation requests'], ['Trav_Search', 'Search · result'], ['Trav_SearchEmpty', 'Search · no results'], ['Trav_Empty', 'No travelers yet'], ['Trav_Filter', 'Filter'], ['Trav_FilterRestrictions', 'Filter · restrictions'], ['Trav_Sheet', 'Traveler actions'], ['Trav_Deactivate', 'Deactivate'], ['Trav_Detail', 'Traveler Details'], ['Trav_PaySchedule', 'Payment schedule'], ['Trav_EditTraveler', 'Edit Traveler'], ['Trav_Dietary', 'Dietary restriction'], ['Trav_Mobility', 'Mobility restriction'], ['Trav_Recipients', 'Additional Recipients'], ['Trav_Recipients_Empty', 'Recipients · empty + errors'], ['Trav_DonationOff', 'Turn off donation'], ['Trav_CancelTraveler', 'Cancel traveler'], ['Trav_DetailSheet', 'Details actions'], ['Trav_EditEmergency', 'Edit emergency info'], ['Trav_DeactivateDetail', 'Deactivate from details'], ['Trav_Detail_Deactivated', 'Deactivated traveler'], ['Trav_Detail_Canceled', 'Canceled traveler'], ['Trav_Payments', 'Payment schedule · view only'], ['Trav_Notes', 'Notes'], ['Trav_NotesEmpty', 'Notes · empty'], ['Trav_NoteAdd', 'Add note'], ['Trav_NoteDelete', 'Delete note'], ['Trav_RequestSheet', 'Review request'], ['Trav_Approve', 'Approve cancellation'], ['Trav_Decline', 'Decline request']]],
    ['Room and Coach List', 'View and download only', [['Rooms_Lists', 'Room lists'], ['Rooms_Detail', 'Room list · finalized'], ['Rooms_Detail_Partial', 'Room list · in progress'], ['Rooms_Download', 'Download room list'], ['Rooms_Empty', 'No room list'], ['Coach_Lists', 'Coach lists'], ['Coach_Detail', 'Coach list'], ['Coach_Download', 'Download coach list'], ['Coach_Empty', 'No coach list']]],
    ['Manage Vendor', 'View only · reservations, payments, details', [['Vend_List', 'Vendor overview'], ['Vend_Detail', 'Vendor · Reservations'], ['Vend_Contacts', 'Reservation contacts'], ['Vend_Docs', 'Vendor documents'], ['Vend_Payments', 'Payment details'], ['Vend_Other', 'Other details'], ['Vend_Empty', 'No vendors']]],
    ['Notifications', 'View, send a short update', [['Notif_Sent', 'Sent'], ['Notif_Scheduled', 'Scheduled'], ['Notif_Drafts', 'Drafts'], ['Notif_Empty', 'No notifications'], ['Notif_Detail', 'Sent notification'], ['Notif_SchedDetail', 'Scheduled notification'], ['Notif_CancelSched', 'Cancel schedule'], ['Notif_Compose', 'Send notification'], ['Notif_Compose_Filled', 'Send · filled in'], ['Notif_To', 'Select recipients'], ['Notif_ConfirmSend', 'Confirm send'], ['Notif_Error', 'Send failed'], ['Notif_Discard', 'Save as draft']]],
    ['Account', 'Log in, OTP, password, profile', [['A_Login', 'Sign in'], ['A_Login_Invalid', 'Sign in · invalid'], ['A_OTP', 'Enter code'], ['A_OTP_Invalid', 'Enter code · invalid'], ['A_Forgot', 'Forgot password'], ['A_Forgot_Sent', 'Email sent'], ['A_Forgot_Expired', 'Expired link'], ['A_Forgot_NewPassword', 'Set new password'], ['A_Forgot_Success', 'Password reset'], ['Profile_View', 'Profile'], ['Profile_Edit', 'Edit profile'], ['Profile_ImageSheet', 'Change image'], ['Profile_Crop', 'Move and scale'], ['Profile_Edit_NoImage', 'Image removed'], ['Profile_VerifyOld', 'Verify existing account'], ['Profile_VerifyOld_Invalid', 'Verify · invalid code'], ['Profile_NewEmail', 'Add new email'], ['Profile_NewEmail_Invalid', 'New email · invalid'], ['Profile_VerifyNew', 'Verify new account'], ['Profile_VerifyNew_Invalid', 'Verify new · invalid'], ['Profile_EmailUpdated', 'Email updated'], ['Profile_Password', 'Change password'], ['Profile_Password_Wrong', 'Wrong current password'], ['Profile_Password_Mismatch', 'Passwords don’t match'], ['Profile_Logout', 'Log out']]],
    ['Packets', 'View only · Trip Agreement versions, other packets', [['Packet_View', 'Trip Agreement Packet'], ['Packet_Other', 'Other Packets']]],
    ['Cost sheet, documents, settings', 'View and edit', [['Cost_View', 'Cost Sheet'], ['Cost_Edit', 'Edit cost sheet'], ['Cost_Edit_Empty', 'Edit cost sheet · empty lists'], ['Docs_List', 'Documents'], ['Docs_Sheet', 'Document actions'], ['Docs_Empty', 'Documents · empty'], ['Settings_View', 'Settings'], ['Settings_Edit', 'Edit settings'], ['Settings_Fundraising', 'Mark fundraising completed'], ['Settings_Preview', 'T&C preview']]]];

  var scope = {
    head: ['Trip module', 'View on mobile', 'Edit on mobile'],
    title: 'Trip module: view and manage a trip on the go',
    rows: [['All Trips list & tabs', 'Active, In Draft, Ongoing, Completed, Canceled', 1, 0], ['Calendar', 'Trips by date; GL and TM availability; assign to trip', 1, 1], ['Global search', 'Trips, travelers, account holders across all trips', 1, 0], ['Trip Details overview', 'Payment, seats, widgets, readiness', 1, 1], ['Confirm trip', 'Blocked until setup is done', 1, 1], ['Trip notes & cancellation request', 'Add, edit, delete · request', 1, 1], ['Basic Details', 'Name, schedule, capacity, client', 1, 1], ['Itinerary', 'Add, edit, duplicate, delete events', 1, 1], ['Payment Setup', 'Collection, payment type, pricing mode, tiers, plan', 1, 0], ['Add-Ons', 'Price, quantity, variants', 1, 1], ['Staff', 'Assign, status, remove', 1, 1], ['Cost Sheet', 'Edit summary and inclusions', 1, 1], ['Documents', 'Upload, rename, delete', 1, 1], ['Settings', 'T&C, donations, fees, insurance', 1, 1], ['Travellers roster & search', 'Active, Waiting, Canceled, Request', 1, 0], ['Traveler details & tasks', 'Edit task info, notes, deactivate', 1, 1], ['Cancellation requests', 'Approve or decline', 1, 1], ['Traveler payments', 'Schedule and history', 1, 0], ['Room and Coach List', 'Rooms, occupants, coaches · download', 1, 0], ['Manage Vendor', 'Operations, contacts, reservations, documents', 1, 0], ['Notifications', 'Sent, scheduled, drafts · send now', 1, 1], ['Trip Packet', 'Preview and download', 1, 0], ['Account & profile', 'Log in, OTP, password, profile', 1, 1]],
    desk: ['Trip creation (new trip wizard)', 'Payment setup changes (pricing, deposit, installments)', 'Traveler refunds, adjustments and chargebacks', 'Adding travelers and bulk import', 'Adding vendors, bookings and vendor payments', 'Scheduling notifications and SMS setup', 'Creating room and coach lists, assigning travelers (drag and drop), finalizing, version history', 'Itinerary import, library and version history', 'Creating T&C or donation versions', 'Cost sheet export', 'Travellers and Manage Vendors tabs — next modules'],
    rules: ['Screens follow the Tenant Admin Mobile App layouts: 100px header, Tab Type 1 tabs, 16px-radius trip cards', 'Edit icon in the header opens the edit form; Save Changes sits in a fixed footer', 'Row and card actions open a bottom sheet; deletes and status changes confirm in a dialog', 'Leaving an edit form with changes warns first'],
    confirm: ['Confirm Trip is blocked until readiness is 100% — the source shows the button at 20%; please confirm the rule.', 'Duplicate event is an addition not in the source files.', 'Deactivate / reactivate traveler and approve or decline a cancellation request on mobile — confirm the permission and that approval does not require the refund step first.', 'Notifications on mobile: send now to existing recipient groups only — confirm this is allowed.', 'Vendor details and trip packet are view only; sample vendor data is made up.', 'Editing a traveler’s task info (Emergency Information) on behalf of the account holder — confirm admins may do this.', 'Itinerary event photos use the trip cover image until real assets are supplied.']
  };

  var flows = {
    'Trips': [
      ['Browse by status', ['Trips_Active', 'Trips_Draft|Tap tab', 'Trip_QuickMenu|Card menu', 'Trip_Details_Active|View trip details']],
      ['Global search', ['Search_Recent', 'Search_All|Type “Mia”', 'Search_Travelers|Travelers filter', 'Trav_Detail|Tap traveler']],
      ['Search a trip', ['Search_Results', 'Search_Preview|Tap result', 'Trip_Details_Active|View trip'], 'Search_Empty'],
      ['Trips calendar', ['Trips_Calendar', 'Cal_MeetingDetail|Tap meeting', 'Trip_Details_Active|Tap trip card']],
      ['TM availability', ['Cal_Staff|TM availability', 'Cal_TMPick|Find a tour manager', 'Cal_StaffPerson|Tap name', 'Cal_AssignTrip|Assign to trip', 'Cal_AssignClash|Clash', '=Assigned']],
      ['Manage unavailability', ['Cal_StaffPerson', 'Cal_SetUnavail|Mark day off', 'Cal_SetUnavail_Filled|Pick dates', '=Saved'], 'Cal_EntryDetail|Tap entry › Cal_UpdateUnavail|Edit › Cal_RemoveConfirm|Remove']],
    'Trip details': [
      ['View a draft trip (view only)', ['Trips_Draft', 'Trip_Details_Draft|Tap trip', 'Trip_Details_Ready|Setup finished on web', '=Confirm on web']],
      ['Meeting and welcome email', ['Trip_Details_Active', 'Meet_Send|Send invite', 'Welcome_Sheet|Welcome email', 'Welcome_Send|Send', '=Sent']],
      ['Notes and cancellation', ['Trip_Details_Active', 'Trip_Actions|More', 'Trip_Notes|Trip notes', 'Trip_NoteAdd|Add Note', '=Note added'], 'Trip_Actions › Trip_CancelDialog|Request cancellation']],
    'View details and basic details': [
      ['Edit basic details', ['Trip_ViewDetails', 'Basic_View|Basic Info', 'Basic_Edit|Edit icon', 'Basic_AddDestination|Add destination', '=Basic details updated']],
      ['Validation and exit', ['Basic_Edit', 'Basic_Error|Invalid date'], 'Basic_Edit › Basic_Unsaved|Back with changes']],
    'Itinerary': [
      ['Add an event', ['Itin_View', 'Itin_AddType|Add Event', 'Itin_AddEvent|Pick type', 'Itin_TimeDisplay|Time display', 'Itin_Places|Search place', '=Event added'], 'Itin_AddEvent › Itin_Leave|Back with missing details · Itin_Empty|No events › Itin_AddType'],
      ['Edit by event type', ['Itin_View', 'Itin_EditFlight|Tap flight', '=Flight updated'], 'Itin_EditEvent|Any other event type uses the same form'],
      ['Delete an event', ['Itin_EventSheet', 'Itin_Delete|Delete event', '=Event deleted']],
      ['Version history', ['Itin_View', 'Itin_Versions|History icon', 'Itin_VersionView|Tap version', 'Itin_RestoreConfirm|Restore this version', '=Version restored'], 'Itin_ReadOnly|Completed trip']],
    'Payment setup': [
      ['View pricing (view only)', ['Pay_View', 'Pay_Tier|Tap tier', '=Reviewed']],
      ['Other pricing modes', ['Pay_View_Standard', 'Pay_View_Variable', 'Pay_Tier_Variable|Tap tier', 'Pay_Tier_Missing|Prices not set'], 'Pay_View_Lump · Pay_Empty']],
    'Add-ons': [
      ['Edit or delete', ['Addon_List', 'Addon_Sheet|More', 'Addon_Edit|Edit add-on', '=Add-on updated'], 'Addon_Sheet › Addon_Delete|Delete'],
      ['Add an add-on', ['Addon_List', 'Addon_Add|Add Add-On', '=Add-on added'], 'Addon_Empty › Addon_Add']],
    'Staff': [
      ['Add a tour manager', ['Staff_View', 'Staff_TMAdd|Add Tour Manager', 'Staff_Assign|Select name', 'Staff_TMAdd_Filled|Pick available TM', 'Staff_TMAddCoach|Coach #', 'Staff_TMAddStatus|Status', 'Staff_View_TMAdded|Add Tour Manager'], 'Staff_Assign › Staff_Unavailable|Unavailable TM'],
      ['Change a tour manager', ['Staff_View', 'Staff_Sheet|Kebab menu', 'Staff_TMStatus|Change status', 'Staff_View_Tentative|Tentative'], 'Staff_TMStatus › Staff_TMCancel|Cancel · Staff_Sheet › Staff_Coach|Change coach # · Staff_Sheet › Staff_Remove|Remove'],
      ['Add other staff', ['Staff_View', 'Staff_AddOther|Add Staff', 'Staff_RolePick|Role', 'Staff_NamePick|Staff name', 'Staff_AddOther_Filled|Contact fills in', 'Staff_View_Added|Add Staff']]],
    'Travellers': [
      ['Find a traveler', ['Trav_List', 'Trav_Search|Search', 'Trav_Detail|Tap traveler', 'Trav_EditEmergency|Edit task', '=Saved'], 'Trav_SearchEmpty · Trav_Filter|Filter'],
      ['Payments and notes', ['Trav_Detail', 'Trav_Payments|Payment schedule'], 'Trav_Detail › Trav_Notes|Notes › Trav_NoteAdd|Add note'],
      ['Status', ['Trav_Detail', 'Trav_DetailSheet|More', 'Trav_DeactivateDetail|Deactivate', 'Trav_Detail_Deactivated|Deactivate']],
      ['Cancellation request', ['Trav_Request', 'Trav_RequestSheet|Review', 'Trav_Approve|Approve', '=Moved to Canceled'], 'Trav_RequestSheet › Trav_Decline|Decline']],
    'Room and Coach List': [
      ['Rooms (view only)', ['Rooms_Lists', 'Rooms_Detail|Open list', 'Rooms_Download|Download', '=PDF or Excel'], 'Rooms_Detail_Partial · Rooms_Empty'],
      ['Coaches (view only)', ['Coach_Lists', 'Coach_Detail|Open list', 'Coach_Download|Download', '=PDF or Excel'], 'Coach_Empty']],
    'Manage Vendor': [
      ['Vendors (view only)', ['Vend_List', 'Vend_Detail|Tap reservation', 'Vend_Payments|Payment details', '=Reviewed'], 'Vend_Empty']],
    'Notifications': [
      ['Send now', ['Notif_Sent', 'Notif_Compose|Send', 'Notif_ConfirmSend|Send now', '=Sent'], 'Notif_ConfirmSend › Notif_Error|Failed · Notif_Compose › Notif_Discard|Back'],
      ['Review', ['Notif_Sent', 'Notif_Detail|Tap notification'], 'Notif_Scheduled › Notif_SchedDetail › Notif_CancelSched|Cancel schedule']],
    'Account': [
      ['Sign in', ['A_Login', 'A_OTP|Sign in with OTP', 'Trips_Active|Verify'], 'A_Login_Invalid · A_OTP_Invalid'],
      ['Forgot password', ['A_Forgot', 'A_Forgot_Sent|Send link', 'A_Forgot_NewPassword|Open link', 'A_Forgot_Success|Save'], 'A_Forgot_Expired'],
      ['Edit profile', ['Profile_View', 'Profile_Edit|Edit Profile', 'Profile_ImageSheet|Change Image', 'Profile_Crop|Choose photo', '=Profile updated']],
      ['Change email', ['Profile_Edit', 'Profile_VerifyOld|Change email', 'Profile_NewEmail|Confirm', 'Profile_VerifyNew|Send OTP', 'Profile_EmailUpdated|Confirm'], 'Profile_VerifyOld_Invalid · Profile_NewEmail_Invalid · Profile_VerifyNew_Invalid'],
      ['Password and log out', ['Profile_View', 'Profile_Password|Change Password', '=Password updated'], 'Profile_Password_Wrong · Profile_Password_Mismatch · Profile_Logout|Logout']],
    'Packets': [
      ['View packets (view only)', ['Trip_Details_Active', 'Packet_View|Packets tab', 'Packet_Other|Other Packets', '=Download']]],
    'Cost sheet, documents, settings': [
      ['Cost sheet', ['Cost_View', 'Cost_Edit|Edit icon', '=Cost sheet updated']],
      ['Documents (view only)', ['Docs_List', 'Docs_Sheet|More', '=Preview or download'], 'Docs_Empty'],
      ['Settings', ['Settings_View', 'Settings_Edit|Edit icon', '=Settings updated'], 'Settings_View › Settings_Fundraising · Settings_Preview']]
  };
  window.VM = { screens: S, groups: groups, scope: scope, flows: flows };

  TM.groups = groups; TM.scope = scope; TM.flows = flows;
})();
