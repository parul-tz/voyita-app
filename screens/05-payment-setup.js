(function () {
  var TM = window.TM;
  var F = TM.F, HF = TM.HF, TG = TM.TG, CK = TM.CK, RD = TM.RD, H = TM.H, M = TM.M, TX = TM.TX, LBL = TM.LBL, HD = TM.HD, MU = TM.MU, ST = TM.ST, BR = TM.BR, BT = TM.BT, LK = TM.LK, CH = TM.CH, NT = TM.NT, SG = TM.SG, SB = TM.SB, EM = TM.EM, KV = TM.KV, UP = TM.UP, C = TM.C, G = TM.G, B = TM.B, KVG = TM.KVG, ROW = TM.ROW, MROW = TM.MROW, SHEET = TM.SHEET, DLG = TM.DLG, P = TM.P, LIKE = TM.LIKE, COVER = TM.COVER, PDF = TM.PDF, TRIP = TM.TRIP, CODE = TM.CODE, DV = TM.DV, TRIPSUB = TM.TRIPSUB, S = TM.S, CANCEL = TM.CANCEL, NAV = TM.NAV, TABS = TM.TABS, TC = TM.TC, MD = TM.MD, tripsOn = TM.tripsOn, staffIn = TM.staffIn, onTrip = TM.onTrip, personCal = TM.personCal, personScreen = TM.personScreen, tmTo = TM.tmTo, UFORM = TM.UFORM, TPICK = TM.TPICK, REC = TM.REC, SR = TM.SR, TR = TM.TR, TSEG = TM.TSEG, ACT = TM.ACT, DRF = TM.DRF, ONG = TM.ONG, R_A = TM.R_A, CT = TM.CT, CAL_MEET = TM.CAL_MEET, CAL_TRIPS = TM.CAL_TRIPS, CSEG = TM.CSEG, AVC = TM.AVC, AVL = TM.AVL, STAFF = TM.STAFF, CAL_STAFF = TM.CAL_STAFF, GUY = TM.GUY, GPH = TM.GPH, GSEG = TM.GSEG, SNAV = TM.SNAV, WROW = TM.WROW, NOTE = TM.NOTE, HERO_D = TM.HERO_D, HERO_A = TM.HERO_A, SEATS = TM.SEATS, WIDGETS = TM.WIDGETS, READY = TM.READY, HDR_D = TM.HDR_D, MEET = TM.MEET, WELCOME = TM.WELCOME, CAP = TM.CAP, CPICK = TM.CPICK, CONTACT = TM.CONTACT, BASIC_FORM = TM.BASIC_FORM, PL = TM.PL, DESC = TM.DESC, EV = TM.EV, DAY = TM.DAY, PLACES = TM.PLACES, MEDIA = TM.MEDIA, BASEF = TM.BASEF, ATT = TM.ATT, GEN = TM.GEN, ADDGEN = TM.ADDGEN, LODGE = TM.LODGE, CARS = TM.CARS, LEG = TM.LEG, TRANSIT = TM.TRANSIT, ADDT = TM.ADDT, EDT = TM.EDT, FAIR = TM.FAIR, FDEP = TM.FDEP, FARR = TM.FARR, FTAIL = TM.FTAIL, TRAINF = TM.TRAINF, BUSF = TM.BUSF, CRUISEF = TM.CRUISEF, VER = TM.VER, LONG = TM.LONG, BF = TM.BF, ADDR = TM.ADDR, EVFOOT = TM.EVFOOT, AUTOSAVE = TM.AUTOSAVE, ES = TM.ES, OPC = TM.OPC, TNUM = TM.TNUM, FSUB = TM.FSUB, FBASE = TM.FBASE, FMODE = TM.FMODE, LIVE_OFF = TM.LIVE_OFF, LIVE_ON = TM.LIVE_ON, FFOOT = TM.FFOOT, TOURF = TM.TOURF, ROEV = TM.ROEV;
  // ---------- 5 · Payment setup (view only — follows the web Payment Setup flow)
  var VO = B([NT('Payment setup is view only on mobile. Make changes in the web app.', 'info', 'info'), LK('Email me the web link', 'link', null, { toast: 'Link sent to your email' })]);
  var COLLV = G('Collection Type', [KV('Collection Type', 'Company Collect')]);
  function TYPEV(t, m) { return G('Payment Type', [KV('Payment Type', t), KV('Pricing Mode', m)]); }
  var PLANROWS = [['Deposit', 'At the time of booking'], ['1st Instalment', '08/26/2026'], ['2nd Instalment', '09/26/2026'], ['Final Payment', '10/26/2026']];
  function PLANV() { return G('Payment Plan', [KV('Add Payment Plan', 'Yes · payments in instalments')].concat(PLANROWS.map(function (r, i) { return H({ title: r[0], sub: 'Due ' + r[1], tw: 500, rowH: 44 }); }).reduce(function (acc, x, i) { return i ? acc.concat([DV, x]) : [x]; }, []))); }
  var FLAGS = G('Price updates', [KV('Update trip price for the registered traveler(s)', 'Yes · registered travelers affected by a pricing change are updated'), KV('Update price on Cost Sheet', 'No')]);
  var TIERNOTE = NT('Tier pricing updates automatically when the number of Active Travelers crosses a tier threshold.', 'info', 'info');
  function TIER(n, range, cells, cur, to) { return C([H({ title: 'Tier ' + n, sub: range, tw: 600, chips: cur ? [['Current tier', 'green']] : null, chev: true, to: to }), ST(cells, cells.length)], { gap: 10, pad: 12, to: to }); }
  // Fixed pricing · tiered
  P('Pay_View', { title: 'Payment Setup', back: 'Trip_ViewDetails', blocks: [VO, COLLV, TYPEV('Fixed Pricing', 'Tiered Pricing'), PLANV(),
    G('Pricing Tiers', [MU('Ranges come from where each tier starts and the trip capacity.'), TIERNOTE], { rtext: '35 Active Travelers' }),
    TIER(1, '1–19 Travellers', [['Student', '$1,250.00'], ['Adult', '$1,400.00']], false, 'Pay_Tier'),
    TIER(2, '20–29 Travellers', [['Student', '$1,150.00'], ['Adult', '$1,300.00']], false, 'Pay_Tier'),
    TIER(3, '30–39 Travellers', [['Student', '$1,050.00'], ['Adult', '$1,200.00']], true, 'Pay_Tier'),
    FLAGS] });
  P('Pay_Tier', LIKE('Pay_View', { ov: SHEET('Tier 3 · 30–39 Travellers', [CH([['Current tier', 'green']]), MU('Instalment prices for this tier.'),
    H({ title: 'Deposit', sub: 'At the time of booking', tw: 600 }), ST([['Student', '$200.00'], ['Adult', '$200.00']], 2), DV,
    H({ title: '1st Instalment', sub: 'Due 08/26/2026', tw: 600 }), ST([['Student', '$300.00'], ['Adult', '$350.00']], 2), DV,
    H({ title: '2nd Instalment', sub: 'Due 09/26/2026', tw: 600 }), ST([['Student', '$300.00'], ['Adult', '$350.00']], 2), DV,
    H({ title: 'Final Payment', sub: 'Due 10/26/2026', tw: 600 }), ST([['Student', '$250.00'], ['Adult', '$300.00']], 2)], [['Close', 'secondary', null, '^']]) }));
  // Fixed pricing · standard
  P('Pay_View_Standard', { title: 'Payment Setup', back: 'Trip_ViewDetails', blocks: [VO, COLLV, TYPEV('Fixed Pricing', 'Standard Pricing'),
    G('Fixed Pricing', [MU('Traveler pricing for this trip.'), ST([['Student Price', '$1,250.00'], ['Adult Price', '$1,400.00']], 2)]),
    PLANV(), FLAGS] });
  // Variable pricing · tiered
  function ACCV(t, occ, who) { return H({ title: t, sub: 'Occupancy per room: ' + occ + ' · ' + who, tw: 600, chips: [['Visible', 'active']] }); }
  P('Pay_View_Variable', { title: 'Payment Setup', back: 'Trip_ViewDetails', blocks: [VO, COLLV, TYPEV('Variable Pricing', 'Tiered Pricing'),
    G('Variable Pricing', [MU('Price depends on the traveler’s accommodation.'), ACCV('Single', '1', 'Student'), DV, ACCV('Double', '2', 'Student'), DV, ACCV('Triple', '3', 'Student & Adult')]),
    PLANV(),
    G('Pricing Tiers', [TIERNOTE], { rtext: '35 Active Travelers' }),
    TIER(1, '1–19 Travellers', [['Single', '$1,500'], ['Double', '$1,300'], ['Triple', '$1,150']], false, 'Pay_Tier_Variable'),
    TIER(2, '20–29 Travellers', [['Single', '$1,400'], ['Double', '$1,200'], ['Triple', '$1,050']], false, 'Pay_Tier_Variable'),
    TIER(3, '30–39 Travellers', [['Single', '$1,300'], ['Double', '$1,100'], ['Triple', '$950']], true, 'Pay_Tier_Variable'),
    FLAGS] });
  P('Pay_Tier_Variable', LIKE('Pay_View_Variable', { ov: SHEET('Tier 3 · 30–39 Travellers', [CH([['Current tier', 'green']]), MU('Instalment prices for this tier.'),
    H({ title: 'Deposit', sub: 'At the time of booking', tw: 600 }), ST([['Single', '$200'], ['Double', '$200'], ['Triple', '$200']], 3), DV,
    H({ title: '1st Instalment', sub: 'Due 08/26/2026', tw: 600 }), ST([['Single', '$400'], ['Double', '$330'], ['Triple', '$280']], 3), DV,
    H({ title: 'Final Payment', sub: 'Due 10/26/2026', tw: 600 }), ST([['Single', '$700'], ['Double', '$570'], ['Triple', '$470']], 3)], [['Close', 'secondary', null, '^']]) }));
  P('Pay_Tier_Missing', LIKE('Pay_View_Variable', { ov: SHEET('Tier 1 · 1–19 Travellers', [NT('Single, Double and Triple prices are not set for this tier yet. Set them in the web app.', 'err', 'warn')], [['Close', 'secondary', null, '^']]) }));
  // Lump sum
  P('Pay_View_Lump', { title: 'Payment Setup', back: 'Trip_ViewDetails', blocks: [VO, COLLV, G('Payment Type', [KV('Payment Type', 'Lump Sum')]), G('Lump Sum', [ST([['Total Amount', '$25,000.00']], 1)]), PLANV(), FLAGS] });
  P('Pay_Empty', { title: 'Payment Setup', back: 'Trip_ViewDetails', blocks: [B([TRIPSUB, EM('dollar', 'No payment setup yet', 'Payment setup is created in the web app. It shows here once saved.')])] });


  TM.TYPEV = TYPEV; TM.PLANV = PLANV; TM.TIER = TIER; TM.ACCV = ACCV; TM.VO = VO; TM.COLLV = COLLV; TM.PLANROWS = PLANROWS; TM.FLAGS = FLAGS; TM.TIERNOTE = TIERNOTE;
})();
