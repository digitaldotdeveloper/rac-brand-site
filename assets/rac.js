/* ============================================================
   RAC — brand site : artwork, range data, i18n, interactions
   Pure front-end. No network calls. Works from file://
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Line-art appliance drawings (inline SVG, currentColor)
     ---------------------------------------------------------- */
  var S = function (body, vb) {
    return '<svg viewBox="' + (vb || '0 0 100 100') + '" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  };
  /* the lit dot on each drawing. A CSS variable in a presentation attribute
     resolves like any other value, so the drawings follow the theme toggle
     instead of holding one fixed accent across both grounds. */
  var A = 'var(--accent,#1B7B7E)';

  var ART = {
    fridge: S('<rect x="27" y="8" width="46" height="84" rx="4"/><path d="M27 40h46"/>' +
      '<path d="M36 26v8M36 52v14"/><circle cx="64" cy="84" r="1.6" fill="' + A + '" stroke="none"/>'),

    washer: S('<rect x="20" y="12" width="60" height="76" rx="5"/><path d="M20 30h60"/>' +
      '<circle cx="50" cy="58" r="19"/><circle cx="50" cy="58" r="11"/>' +
      '<circle cx="30" cy="21" r="2.4" fill="' + A + '" stroke="none"/><path d="M40 21h28"/>'),

    cooker: S('<rect x="20" y="20" width="60" height="70" rx="4"/><path d="M20 38h60"/>' +
      '<rect x="30" y="50" width="40" height="30" rx="2"/>' +
      '<circle cx="32" cy="29" r="3"/><circle cx="45" cy="29" r="3"/>' +
      '<circle cx="58" cy="29" r="3" stroke="' + A + '"/><circle cx="70" cy="29" r="3"/><path d="M35 12h30"/>'),

    dishwasher: S('<rect x="22" y="10" width="56" height="80" rx="4"/><path d="M22 28h56"/>' +
      '<path d="M32 19h22"/><circle cx="66" cy="19" r="2.4" fill="' + A + '" stroke="none"/>' +
      '<path d="M34 44h32M34 58h32M34 72h20"/>'),

    freezer: S('<rect x="12" y="34" width="76" height="46" rx="4"/><path d="M12 46h76"/>' +
      '<path d="M40 40h20" stroke="' + A + '"/><path d="M24 80v6M76 80v6"/>'),

    hob: S('<rect x="14" y="26" width="72" height="34" rx="4"/><circle cx="36" cy="43" r="7"/>' +
      '<circle cx="64" cy="43" r="7" stroke="' + A + '"/><path d="M14 72h72M22 72l6-10M78 72l-6-10"/>'),

    ac: S('<rect x="12" y="26" width="76" height="26" rx="6"/><path d="M20 44h60"/>' +
      '<path d="M32 62c0 8 12 8 12 16M56 62c0 8 12 8 12 16" stroke="' + A + '"/>' +
      '<circle cx="76" cy="34" r="1.8" fill="' + A + '" stroke="none"/>'),

    heater: S('<rect x="32" y="14" width="36" height="72" rx="16"/><path d="M40 30h20"/>' +
      '<path d="M32 44H20v22M68 44h12v22" stroke="' + A + '"/><circle cx="50" cy="66" r="6"/>'),

    fan: S('<circle cx="50" cy="38" r="26"/><circle cx="50" cy="38" r="5" stroke="' + A + '"/>' +
      '<path d="M50 33c-6-14 12-18 10-4M55 41c14-5 10 13-2 7M45 42c-8 12-20-2-6-6"/>' +
      '<path d="M50 64v18M36 88h28"/>'),

    airfryer: S('<path d="M30 30h40l-4 56a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6z"/>' +
      '<rect x="26" y="14" width="48" height="16" rx="5"/>' +
      '<circle cx="62" cy="22" r="3" stroke="' + A + '"/><path d="M40 60h20" stroke="' + A + '"/>'),

    blender: S('<path d="M36 12h28l-4 44H40z"/><path d="M34 12h32"/>' +
      '<path d="M44 56v10h12V56"/><path d="M34 66h32l4 22H30z"/>' +
      '<circle cx="60" cy="78" r="3" stroke="' + A + '"/>'),

    kettle: S('<path d="M32 36h32l-4 46a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6z"/>' +
      '<path d="M32 44 20 32l8-8" stroke="' + A + '"/><path d="M64 46c12 4 12 24 0 28"/>' +
      '<path d="M38 36h22" /><path d="M44 28h8"/>'),

    microwave: S('<rect x="12" y="28" width="76" height="46" rx="4"/>' +
      '<rect x="20" y="36" width="42" height="30" rx="2"/>' +
      '<path d="M70 38v10" stroke="' + A + '"/><circle cx="70" cy="60" r="4"/>'),

    vacuum: S('<path d="M26 84h30a14 14 0 0 0 0-28H40a12 12 0 0 1 0-24"/>' +
      '<circle cx="30" cy="76" r="14"/><circle cx="30" cy="76" r="5" stroke="' + A + '"/>' +
      '<path d="M40 32h22M62 26v12" stroke="' + A + '"/>'),

    tv: S('<rect x="10" y="20" width="80" height="50" rx="3"/><path d="M42 80h16M50 70v10"/>' +
      '<path d="M34 88h32"/><circle cx="82" cy="63" r="1.8" fill="' + A + '" stroke="none"/>'),

    speaker: S('<rect x="10" y="38" width="80" height="24" rx="6"/>' +
      '<circle cx="26" cy="50" r="4"/><circle cx="42" cy="50" r="4"/>' +
      '<circle cx="58" cy="50" r="4"/><circle cx="74" cy="50" r="4" stroke="' + A + '"/>' +
      '<path d="M24 70h52"/>'),

    oven: S('<rect x="16" y="16" width="68" height="70" rx="4"/><path d="M16 34h68"/>' +
      '<circle cx="30" cy="25" r="3"/><circle cx="50" cy="25" r="3" stroke="' + A + '"/><circle cx="70" cy="25" r="3"/>' +
      '<rect x="26" y="46" width="48" height="30" rx="2"/><path d="M26 40h48"/>'),

    minioven: S('<rect x="12" y="30" width="76" height="46" rx="4"/><path d="M20 76v6M80 76v6"/>' +
      '<rect x="20" y="38" width="44" height="30" rx="2"/>' +
      '<circle cx="76" cy="46" r="4"/><circle cx="76" cy="60" r="4" stroke="' + A + '"/>'),

    treadmill: S('<path d="M14 80h58l10-10"/><path d="M14 80l6-8h52"/>' +
      '<path d="M72 70V26h14" stroke="' + A + '"/><path d="M78 26h12"/><circle cx="20" cy="86" r="4"/><circle cx="70" cy="86" r="4"/>'),

    bike: S('<circle cx="26" cy="72" r="14"/><path d="M26 72 44 34h20" stroke="' + A + '"/>' +
      '<path d="M44 34 34 20h16"/><path d="M64 34v20M56 86h26M64 54l14 6"/>'),

    dispenser: S('<rect x="30" y="10" width="40" height="80" rx="4"/><path d="M30 30h40"/>' +
      '<rect x="38" y="16" width="24" height="9" rx="2" stroke="' + A + '"/>' +
      '<path d="M40 38v6M50 38v6M60 38v6"/><path d="M36 52h28"/><path d="M30 62h40"/>'),

    /* icons for feature cells */
    shield: S('<path d="M50 8 16 22v26c0 22 15 35 34 44 19-9 34-22 34-44V22z"/><path d="M36 50l10 10 20-22" stroke="' + A + '"/>'),
    truck: S('<path d="M6 24h50v40H6zM56 38h20l12 12v14H56z"/><circle cx="26" cy="72" r="8"/><circle cx="70" cy="72" r="8" stroke="' + A + '"/>'),
    tools: S('<path d="M58 14a16 16 0 0 0 22 22L60 56 44 40z" stroke="' + A + '"/><path d="M44 40 14 70a8 8 0 0 0 11 11l30-30"/>'),
    chart: S('<path d="M14 84V16M14 84h72"/><path d="M28 68l16-20 14 12 22-30" stroke="' + A + '"/><circle cx="28" cy="68" r="3"/><circle cx="80" cy="30" r="3"/>'),
    badge: S('<circle cx="50" cy="38" r="26"/><path d="M50 26v14l9 6" stroke="' + A + '"/><path d="M34 62 26 92l24-10 24 10-8-30"/>'),
    box: S('<path d="M50 8 12 28v44l38 20 38-20V28z"/><path d="M12 28l38 20 38-20M50 48v44" stroke="' + A + '"/>'),
    globe: S('<circle cx="50" cy="50" r="38"/><path d="M12 50h76"/><path d="M50 12c14 16 14 60 0 76-14-16-14-60 0-76z" stroke="' + A + '"/>'),
    tag: S('<path d="M52 10H16v36l44 44 36-36z"/><circle cx="34" cy="30" r="6" stroke="' + A + '"/>'),
    layers: S('<path d="M50 12 14 32l36 20 36-20z"/><path d="M14 50l36 20 36-20" stroke="' + A + '"/><path d="M14 68l36 20 36-20"/>'),
    hand: S('<path d="M34 52V22a7 7 0 0 1 14 0v24"/><path d="M48 46V16a7 7 0 0 1 14 0v30"/><path d="M62 34a7 7 0 0 1 14 0v28c0 16-12 28-28 28S22 78 22 62V48a7 7 0 0 1 12-5" stroke="' + A + '"/>'),
    lab: S('<path d="M40 10v26L18 76a8 8 0 0 0 7 12h50a8 8 0 0 0 7-12L60 36V10z"/><path d="M34 10h32" /><path d="M29 60h42" stroke="' + A + '"/>'),
    doc: S('<path d="M24 8h34l20 20v64H24z"/><path d="M58 8v20h20" stroke="' + A + '"/><path d="M36 50h28M36 64h28M36 78h16"/>'),

    /* hero lineup */
    hero: S(
      /* baseline */
      '<path d="M6 176h288" stroke-opacity=".35"/>' +
      /* fridge */
      '<g><rect x="18" y="44" width="54" height="132" rx="6"/><path d="M18 92h54"/>' +
      '<path d="M30 66v12M30 106v20"/></g>' +
      /* washer */
      '<g><rect x="88" y="72" width="86" height="104" rx="7"/><path d="M88 96h86"/>' +
      '<circle cx="131" cy="138" r="27"/><circle cx="131" cy="138" r="15"/>' +
      '<circle cx="102" cy="84" r="3.4" fill="' + A + '" stroke="none"/><path d="M116 84h44"/></g>' +
      /* tv */
      '<g><rect x="188" y="60" width="104" height="66" rx="4"/><path d="M232 140h16M240 126v14M218 158h44"/>' +
      '<circle cx="284" cy="118" r="2.4" fill="' + A + '" stroke="none"/></g>' +
      /* kettle + airfryer on a shelf */
      '<g><path d="M190 176v-18h32l-3 18M196 158l2-10h20l2 10" stroke="' + A + '"/></g>',
      '0 0 300 190')
  };

  /* ----------------------------------------------------------
     2. Product range (categories, not SKUs — B2B showcase)
     ---------------------------------------------------------- */
  /* Ordered the way the line actually sells: gas first, then small
     appliances, then dispensers. */
  var CATS = [
    { id: 'all',     en: 'All categories',   ar: 'كل الفئات' },
    { id: 'cooking', en: 'Gas & cooking',    ar: 'الغاز والطهي' },
    { id: 'small',   en: 'Small appliances', ar: 'الأجهزة الصغيرة' },
    { id: 'water',   en: 'Water dispensers', ar: 'برادات مياه' },
    { id: 'av',      en: 'TV',               ar: 'التلفزيونات' },
    { id: 'cooling', en: 'Refrigeration',    ar: 'التبريد' },
    { id: 'fitness', en: 'Fitness',          ar: 'اللياقة' }
  ];

  /* Shown at category level, not SKU level. Mirrors the real RAC line-up. */
  var RANGE = [
    { c:'cooking', i:'cooker', en:'Free-standing gas cookers', ar:'طباخات غاز حرة',
      den:'50×90 and 90 cm, 5 and 6 burners, brass burner options, fan-assisted oven. Stainless steel, black, white and grey.',
      dar:'قياس 50×90 و90 سم، 5 و6 عيون، مع خيار رؤوس نحاس وفرن بمروحة. ستانلس ستيل، أسود، أبيض ورمادي.' },
    { c:'cooking', i:'oven', en:'Built-in ovens', ar:'أفران مدمجة',
      den:'60 and 90 cm, gas and electric, mechanical and digital, in black, grey or white glass.',
      dar:'قياس 60 و90 سم، غاز وكهرباء، ميكانيكي وديجيتال، بزجاج أسود أو رمادي أو أبيض.' },
    { c:'cooking', i:'hob', en:'Built-in hobs', ar:'مسطحات مدمجة',
      den:'60 and 90 cm, black tempered glass or stainless steel, 4 to 6 burners including brass.',
      dar:'قياس 60 و90 سم، زجاج أسود مقسّى أو ستانلس، من 4 حتى 6 عيون مع خيار النحاس.' },
    { c:'cooking', i:'minioven', en:'Electric mini ovens', ar:'أفران كهربائية صغيرة',
      den:'42 L countertop electric ovens with turbo fan.',
      dar:'أفران كهربائية 42 ليتر توضع على الطاولة، مع مروحة توربو.' },

    { c:'cooling', i:'fridge', en:'Refrigerators', ar:'ثلاجات',
      den:'Four-door refrigerators with a black glass front.',
      dar:'ثلاجات بأربعة أبواب وواجهة زجاج أسود.' },

    { c:'av', i:'tv', en:'Smart & QLED televisions', ar:'تلفزيونات ذكية و QLED',
      den:'50" 4K smart with WebOS hub, 55" and 65" QLED 4K.',
      dar:'50 إنش 4K ذكي بنظام WebOS، و55 و65 إنش QLED 4K.' },

    { c:'small', i:'vacuum', en:'Vacuum cleaners', ar:'مكانس كهربائية',
      den:'Canister vacuums at 1600 W and 2400 W turbo.',
      dar:'مكانس علبة بقوة 1600 واط و2400 واط توربو.' },
    { c:'small', i:'blender', en:'Hand blenders', ar:'خلاطات يدوية',
      den:'400 W stainless steel hand blenders.',
      dar:'خلاطات يدوية 400 واط ستانلس ستيل.' },

    { c:'water', i:'dispenser', en:'Water dispensers', ar:'برادات مياه',
      den:'Top-load and bottom-load, hot / cold / ambient, in silver, white and black.',
      dar:'تعبئة علوية وسفلية، ساخن وبارد وعادي، بالفضي والأبيض والأسود.' },
    { c:'water', i:'dispenser', en:'Tea-bar dispensers', ar:'برادات مع تي بار',
      den:'Dispenser with an integrated tea-bar machine on top.',
      dar:'براد مياه مع ماكينة تي بار مدمجة في الأعلى.' },

    { c:'fitness', i:'treadmill', en:'Motorised treadmills', ar:'أجهزة مشي كهربائية',
      den:'Motorised home treadmills, folding frame.',
      dar:'أجهزة مشي كهربائية منزلية بهيكل قابل للطي.' },
    { c:'fitness', i:'bike', en:'Spinning bikes', ar:'دراجات رياضية',
      den:'Belt-drive spinning bikes for home use.',
      dar:'دراجات سبينينغ بسير للاستخدام المنزلي.' }
  ];

  /* ----------------------------------------------------------
     2b. The editorial gallery (hero)
     ---------------------------------------------------------- */
  var SLICES = 6;

  /* Scattered starting positions for the thumbnails, in % of the stage, plus a
     depth factor: the further back a thumbnail reads, the less it drifts. */
  var FLOAT = [
    { fx: 52, fy: 12, d: 1.35, rot: -4 },
    { fx: 86, fy: 26, d: .75, rot: 3 },
    { fx: 44, fy: 70, d: 1.05, rot: 5 },
    { fx: 74, fy: 78, d: .55, rot: -3 },
    { fx: 92, fy: 56, d: 1.2, rot: 2 },
    { fx: 62, fy: 40, d: .9, rot: -2 }
  ];

  var SLIDES = [
    {
      img: 'assets/img/p-cooker-steel-cut.webp',
      ghost: { en: 'GAS', ar: 'الغاز' },
      tag: { en: 'Cooking', ar: 'الطهي' },
      name: { en: ['Ninety centimetres', 'of <em>kitchen</em>.'], ar: ['تسعون سنتيمتراً', 'من <em>المطبخ</em>.'] },
      desc: {
        en: 'The line that moves fastest. Five burners, a fan-assisted oven and a second cavity, in brushed steel, black, white or grey.',
        ar: 'الخط الأسرع دوراناً. خمس عيون وفرن بمروحة وحجرة ثانية، بستانلس مصقول أو أسود أو أبيض أو رمادي.'
      },
      specs: {
        en: [['Width', '50×90 & 90 cm'], ['Burners', 'Five or six · brass option'], ['Oven', 'Gas, fan-assisted']],
        ar: [['العرض', '50×90 و90 سم'], ['العيون', 'خمس أو ست · خيار نحاس'], ['الفرن', 'غاز مع مروحة']]
      }
    },
    {
      img: 'assets/img/p-dispenser-top-cut.webp',
      ghost: { en: 'WATER', ar: 'المياه' },
      tag: { en: 'Water dispensers', ar: 'برادات مياه' },
      name: { en: ['Top load.', 'Zero <em>callbacks</em>.'], ar: ['تعبئة علوية.', 'بلا <em>شكاوى</em>.'] },
      desc: {
        en: 'Hot, cold and ambient, top and bottom load, with a tea-bar version. One of the two lines that almost never come back for service.',
        ar: 'ساخن وبارد وعادي، تعبئة علوية وسفلية، مع نسخة تي بار. أحد الخطين اللذين لا يعودان للصيانة تقريباً.'
      },
      specs: {
        en: [['Load', 'Top &amp; bottom'], ['Taps', 'Hot · cold · ambient'], ['Finish', 'Silver, white, black']],
        ar: [['التعبئة', 'علوية وسفلية'], ['الصنابير', 'ساخن · بارد · عادي'], ['الألوان', 'فضي، أبيض، أسود']]
      }
    },
    {
      img: 'assets/img/p-tv-qled-cut.webp',
      ghost: { en: 'VISION', ar: 'الشاشة' },
      tag: { en: 'Television', ar: 'التلفزيونات' },
      name: { en: ['QLED, all the', 'way up to <em>65</em>.'], ar: ['QLED حتى', 'مقاس <em>65</em> إنش.'] },
      desc: {
        en: 'Fifty inches of smart 4K, or fifty-five and sixty-five inches of QLED. The lowest service rate in the whole catalogue.',
        ar: 'خمسون إنشاً 4K ذكية، أو 55 و65 إنشاً QLED. أدنى نسبة صيانة في الكتالوج كله.'
      },
      specs: {
        en: [['Sizes', '50" · 55" · 65"'], ['Panel', 'QLED 4K'], ['Smart', 'WebOS hub']],
        ar: [['المقاسات', '50 · 55 · 65 إنش'], ['الشاشة', 'QLED 4K'], ['النظام', 'WebOS']]
      }
    },
    {
      img: 'assets/img/p-oven-black-cut.webp',
      ghost: { en: 'BUILT-IN', ar: 'مدمج' },
      tag: { en: 'Built-in ovens', ar: 'أفران مدمجة' },
      name: { en: ['Black glass,', 'front and <em>centre</em>.'], ar: ['زجاج أسود', 'في <em>الواجهة</em>.'] },
      desc: {
        en: 'Sixty and ninety centimetre cavities, gas or electric, mechanical or digital — built to disappear into the cabinetry.',
        ar: 'حجرات 60 و90 سم، غاز أو كهرباء، ميكانيكي أو ديجيتال — مصمّمة لتندمج داخل الخزائن.'
      },
      specs: {
        en: [['Width', '60 &amp; 90 cm'], ['Type', 'Gas or electric'], ['Control', 'Dial or digital']],
        ar: [['العرض', '60 و90 سم'], ['النوع', 'غاز أو كهرباء'], ['التحكم', 'مفاتيح أو ديجيتال']]
      }
    },
    {
      img: 'assets/img/p-vacuum-cut.webp',
      ghost: { en: 'SMALL', ar: 'الصغيرة' },
      tag: { en: 'Small appliances', ar: 'أجهزة صغيرة' },
      name: { en: ['The second-', 'fastest <em>seller</em>.'], ar: ['ثاني أسرع', '<em>مبيعاً</em>.'] },
      desc: {
        en: 'Vacuum cleaners at 1600 and 2400 watts, hand blenders and countertop ovens — the impulse buy that keeps a customer coming back.',
        ar: 'مكانس 1600 و2400 واط، وخلاطات يدوية وأفران صغيرة — الشراء السريع الذي يعيد الزبون إليك.'
      },
      specs: {
        en: [['Vacuums', '1600 &amp; 2400 W'], ['Blenders', '400 W stainless'], ['Ovens', '42 L turbo fan']],
        ar: [['المكانس', '1600 و2400 واط'], ['الخلاطات', '400 واط ستانلس'], ['الأفران', '42 ليتر توربو']]
      }
    },
    {
      img: 'assets/img/p-fridge-4door-cut.webp',
      ghost: { en: 'COLD', ar: 'التبريد' },
      tag: { en: 'Refrigeration', ar: 'التبريد' },
      name: { en: ['Four doors.', 'One <em>statement</em>.'], ar: ['أربعة أبواب.', '<em>حضور</em> واحد.'] },
      desc: {
        en: 'A glass-fronted four-door refrigerator that anchors the kitchen it stands in — and the showroom it stands in.',
        ar: 'ثلاجة بأربعة أبواب وواجهة زجاجية تفرض حضورها في المطبخ — وفي صالة العرض.'
      },
      specs: {
        en: [['Doors', 'Four'], ['Front', 'Tempered glass'], ['Panel', 'Digital, in-door']],
        ar: [['الأبواب', 'أربعة'], ['الواجهة', 'زجاج مقسّى'], ['اللوحة', 'ديجيتال على الباب']]
      }
    }
  ];

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function slider(host) {
    var L = function (o) { return lang === 'ar' ? o.ar : o.en; };
    var DUR = 7500;
    var i = 0, timer = null, busy = false, els = [], thumbs = null;

    function slideHTML(s, n) {
      var cols = '';
      for (var c = 0; c < SLICES; c++) {
        cols += '<div class="col" style="--i:' + c + '">' +
          '<div class="col__in" style="--i:' + c + '">' +
          '<img src="' + s.img + '" alt="" draggable="false">' +
          '</div></div>';
      }
      var name = L(s.name).map(function (line) {
        return '<span class="ln"><span>' + line + '</span></span>';
      }).join('');
      var specs = L(s.specs).map(function (row, k) {
        return '<li style="--n:' + k + '"><b>' + row[0] + '</b><span>' + row[1] + '</span></li>';
      }).join('');

      return '<article class="slide" data-n="' + n + '">' +
        '<div class="cols">' + cols + '</div>' +
        '<div class="hero__scrim"></div>' +
        '<div class="hero__ghost" aria-hidden="true">' + L(s.ghost) + '</div>' +
        '<div class="ed"><div class="shell"><div class="ed__in">' +
        '<p class="ed__tag">' + L(s.tag) + '</p>' +
        '<h1 class="ed__name">' + name + '</h1>' +
        '<p class="ed__desc">' + L(s.desc) + '</p>' +
        '<ul class="ed__specs">' + specs + '</ul>' +
        '<div class="ed__foot">' +
        '<a class="btn" href="partners.html#form"><span>' +
        (lang === 'ar' ? 'اطلب الأسعار' : 'Request pricing') + '</span></a>' +
        '</div>' +
        '</div></div></div>' +
        '</article>';
    }

    function build() {
      host.innerHTML =
        '<div class="slides">' + SLIDES.map(slideHTML).join('') + '</div>' +
        '<div class="thumbs">' + SLIDES.map(function (s, n) {
          var f = FLOAT[n % FLOAT.length];
          return '<button class="thumb" data-go="' + n + '" aria-label="' + L(s.tag) + '" ' +
            /* --d already says how hard this chip chases the cursor; it names
               its place in the stack too, so a chip that leads the set is also
               the one in front of it. Fixed per chip, so an overlapping cluster
               never reshuffles under the cursor and flickers. */
            'style="--fx:' + f.fx + ';--fy:' + f.fy + ';--d:' + f.d +
            ';--z:' + Math.round(f.d * 100) + ';--rot:' + f.rot +
            ';--dx:' + (40 + n * 9.2) + ';--dy:76">' +
            '<img src="' + s.img + '" alt="" draggable="false">' +
            '<span class="thumb__n">' + ('0' + (n + 1)).slice(-2) + '</span>' +
            '</button>';
        }).join('') + '</div>' +
        '<div class="hero__nav"><div class="shell">' +
        '<button class="arw" data-step="-1" aria-label="Previous" style="transform:scaleX(-1)">' + ARROW + '</button>' +
        '<button class="arw" data-step="1" aria-label="Next">' + ARROW + '</button>' +
        '<p class="count"><b class="js-cur">01</b><i style="--dur:' + DUR + 'ms"></i>' +
        ('0' + SLIDES.length).slice(-2) + '</p>' +
        '</div></div>';
      els = host.querySelectorAll('.slide');
      thumbs = host.querySelector('.thumbs');
      els[0].classList.add('is-on');
      paint();
    }

    function paint() {
      var t = host.querySelectorAll('.thumb');
      for (var n = 0; n < t.length; n++) t[n].classList.toggle('on', n === i);
      var cur = host.querySelector('.js-cur');
      if (cur) cur.textContent = ('0' + (i + 1)).slice(-2);
      // Re-adding the element restarts the CSS progress animation from zero.
      var bar = host.querySelector('.count i');
      if (bar) { var c = bar.cloneNode(true); bar.parentNode.replaceChild(c, bar); }
    }

    function go(n) {
      n = (n + SLIDES.length) % SLIDES.length;
      if (n === i || busy) return;
      busy = true;
      var prev = els[i], next = els[n];
      prev.classList.remove('is-on');
      prev.classList.add('is-out');
      next.classList.add('is-on');
      i = n;
      paint();
      setTimeout(function () { prev.classList.remove('is-out'); busy = false; }, 1300);
      arm();
    }

    function arm() { clearTimeout(timer); timer = setTimeout(function () { go(i + 1); }, DUR); }

    build();
    arm();

    host.addEventListener('click', function (e) {
      var g = e.target.closest('[data-go]'), s = e.target.closest('[data-step]');
      if (g) { dock(true); go(parseInt(g.dataset.go, 10)); }
      if (s) go(i + parseInt(s.dataset.step, 10) * (lang === 'ar' ? -1 : 1));
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') go(i + (lang === 'ar' ? -1 : 1));
      if (e.key === 'ArrowLeft') go(i + (lang === 'ar' ? 1 : -1));
    });

    /* -- docking --------------------------------------------------------
       The thumbnails drift while the visitor is looking at the picture and
       line up as a control strip once they are done with it: on any scroll,
       or as soon as the pointer drops into the lower band where the dock
       itself lives. That band is the bottom ~38% of the hero (ny > .12): the
       dock is a target you reach for, so it has to meet the cursor early
       rather than make you hunt for the last strip of the stage. */
    var docked = false;
    function dock(on) {
      if (on === docked || !thumbs) return;
      docked = on;
      thumbs.classList.toggle('docked', on);
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) dock(true);
    }, { passive: true });

    /* -- pointer: parallax on the picture, a trail on the thumbnails -------
       The thumbnails ride a short history of the pointer: thumbnail n reads
       the position n*STRIDE frames ago, so they string out behind the cursor
       rather than all landing on it. Each keeps its scattered spot as the rest
       position it returns to. Docked, the trail is off — a dock you are meant
       to pick from has to hold still. */
    var raf = null, tracking = false, hasPointer = false;
    var STRIDE = 7, HIST = 64, MARGIN = 10, LEAD = .1;
    /* The set holds this shape around the cursor, in chip widths and heights.
       Keeping a share of each chip's scattered rest position instead — which is
       what SPREAD used to do — collapses the moment the scatter is tight or the
       cursor slows, and six chips heap into one pile. Columns sit .74w apart and
       rows .7h, so each chip covers about a quarter of its neighbours: a stack
       of prints pushed across a table, which is the editorial read, rather than
       six separate tiles. Overlapping only works because the order is fixed —
       see --z below; the stagger and each chip's own --rot do the rest. */
    var FORM = [
      [-.74, -.38], [-.02, -.58], [.74, -.34],
      [-.78, .34], [-.03, .56], [.76, .3]
    ];
    var hx = new Float32Array(HIST), hy = new Float32Array(HIST), head = 0, filled = false;
    var ptx = 0, pty = 0, tpx = 0, tpy = 0;
    /* where each chip actually is, in hero pixels — the sampled point is only
       the target it eases toward, at a rate set by its own depth */
    var curX = [], curY = [], seeded = false;
    var fine = window.matchMedia('(hover:hover) and (pointer:fine)');

    function rtlX() { return document.documentElement.dir === 'rtl' ? -1 : 1; }

    /* The trail lives over the picture, not over the whole hero: the copy side
       and the cream gutter between the two are reading space, and chips loitering
       there have nothing to sit on. The zone is `.cols` with a tenth of its width
       handed back to the copy — that gutter is part of the picture box but reads
       as empty page, so the trail should not start until the product does. It is
       measured off the layout, so it mirrors in Arabic for free; offsetLeft, not
       a client rect, because `.cols` carries the parallax transform and reading
       that back would let the boundary chase the cursor. */
    function stageBox() {
      var hr = host.getBoundingClientRect();
      var c = els[i] && els[i].querySelector('.cols');
      if (!c) return { x: MARGIN, y: MARGIN, w: hr.width - MARGIN * 2, h: hr.height - MARGIN * 2 };
      var x = c.offsetLeft, w = c.offsetWidth, cut = w * LEAD;
      /* the strip comes off whichever side faces the copy */
      if (rtlX() > 0) x += cut;
      return { x: x, y: MARGIN, w: w - cut, h: hr.height - MARGIN * 2 };
    }
    function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

    /* rest position of a chip in hero pixels, read straight off its CSS vars,
       mirrored in Arabic, where the chips are placed with a logical inset */
    function restOf(el, W, H, w) {
      var cs = getComputedStyle(el);
      var fx = parseFloat(cs.getPropertyValue('--fx')) || 0;
      var fy = parseFloat(cs.getPropertyValue('--fy')) || 0;
      var x = W * fx / 100;
      return { x: rtlX() < 0 ? W - x - w : x, y: H * fy / 100 };
    }

    function loop() {
      raf = null;
      if (!tracking || !thumbs) return;
      ptx += (tpx - ptx) * .3;
      pty += (tpy - pty) * .3;
      hx[head] = ptx; hy[head] = pty;
      head = (head + 1) % HIST;
      if (head === 0) filled = true;

      var r = host.getBoundingClientRect();
      var box = stageBox();
      var chips = thumbs.querySelectorAll('.thumb');

      /* Every chip samples a different point of the same path, so a moving
         cursor strings them out and a still one settles them into FORM. */
      var rests = [], k;
      for (k = 0; k < chips.length; k++) {
        rests[k] = restOf(chips[k], r.width, r.height, chips[k].offsetWidth);
      }

      for (var n = 0; n < chips.length; n++) {
        var el = chips[n];
        var back = n * STRIDE;
        var s = (head - 1 - back + HIST * 2) % HIST;
        if (!filled && back >= head) s = 0;
        var w = el.offsetWidth, h = el.offsetHeight;
        var rest = rests[n];
        var f = FORM[n % FORM.length];
        var tx = clamp(hx[s] + f[0] * w * rtlX(), box.x + w / 2, box.x + box.w - w / 2);
        var ty = clamp(hy[s] + f[1] * h, box.y + h / 2, box.y + box.h - h / 2);

        /* --d is the chip's depth: a near chip (d > 1) chases the sampled point
           hard, a far one drags behind it. The stride strings the set out along
           the path; this is what gives the string its front-to-back weight. */
        var d = parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 1;
        if (!seeded) { curX[n] = rest.x + w / 2; curY[n] = rest.y + h / 2; }
        var ease = clamp(.06 + d * .09, .05, .3);
        curX[n] += (tx - curX[n]) * ease;
        curY[n] += (ty - curY[n]) * ease;

        el.style.setProperty('--tx', (curX[n] - w / 2 - rest.x).toFixed(1) + 'px');
        el.style.setProperty('--ty', (curY[n] - h / 2 - rest.y).toFixed(1) + 'px');
      }
      seeded = true;
      raf = requestAnimationFrame(loop);
    }

    function track(on) {
      if (on === tracking || !thumbs) return;
      tracking = on;
      thumbs.classList.toggle('is-tracking', on);
      if (on) { seeded = false; if (!raf) raf = requestAnimationFrame(loop); return; }
      /* let the CSS transition carry them home rather than snapping */
      var chips = thumbs.querySelectorAll('.thumb');
      for (var n = 0; n < chips.length; n++) {
        chips[n].style.setProperty('--tx', '0px');
        chips[n].style.setProperty('--ty', '0px');
      }
    }

    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width - .5;
      var ny = (e.clientY - r.top) / r.height - .5;

      var cols = els[i] && els[i].querySelector('.cols');
      if (cols) {
        /* whole pixels only: each column is clipped, so it rasterises on its
           own, and a fractional offset resamples them independently — which
           shows up as pale hairlines along every slice boundary */
        cols.style.setProperty('--px', Math.round(nx * -20) + 'px');
        cols.style.setProperty('--py', Math.round(ny * -12) + 'px');
      }

      /* Off the picture — over the copy, or in the gutter between the two — the
         set docks rather than drifting back to its scatter: the same answer the
         lower band gives, so the two halves of "not trailing" look like one
         behaviour instead of two. */
      var lx = e.clientX - r.left, ly = e.clientY - r.top;
      var zone = stageBox();
      var inZone = lx >= zone.x && lx <= zone.x + zone.w;
      if (window.scrollY <= 60) dock(ny > .12 || !inZone);

      if (e.pointerType === 'touch' || docked || !fine.matches) {
        hasPointer = false; track(false); return;
      }
      if (!hasPointer) { hasPointer = true; tpx = ptx = lx; tpy = pty = ly; }
      else { tpx = lx; tpy = ly; }
      track(true);
    });

    host.addEventListener('pointerleave', function () {
      hasPointer = false;
      track(false);
      if (window.scrollY <= 60) dock(false);
      x0 = null; host.classList.remove('is-dragging');
    });

    /* -- drag / swipe -- */
    var x0 = null;
    host.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button,a')) return;
      x0 = e.clientX; host.classList.add('is-dragging');
    });
    host.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var d = e.clientX - x0;
      host.classList.remove('is-dragging');
      x0 = null;
      if (Math.abs(d) > 60) go(i + (d < 0 ? 1 : -1) * (lang === 'ar' ? -1 : 1));
    });

    document.addEventListener('visibilitychange', function () {
      document.body.classList.toggle('is-paused', document.hidden);
      if (document.hidden) clearTimeout(timer); else arm();
    });

    document.addEventListener('rac:lang', function () {
      clearTimeout(timer);
      var keep = i;
      i = 0;
      build();
      if (keep) { els[0].classList.remove('is-on'); els[keep].classList.add('is-on'); i = keep; paint(); }
      docked = false;
      arm();
    });
  }

  /* ----------------------------------------------------------
     2c. Theme (light default, dark optional)
     ---------------------------------------------------------- */
  /* the key is versioned: the site used to be dark-first, so anyone who opened
     an earlier build has 'dark' saved and would never see the new default */
  var THEME_KEY = 'rac-theme-v2';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  }
  (function bootTheme() {
    var t = 'light';
    try {
      t = localStorage.getItem(THEME_KEY) || 'light';
      localStorage.removeItem('rac-theme');
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', t);
  })();

  /* ----------------------------------------------------------
     3. Language (EN / AR + RTL)
     ---------------------------------------------------------- */
  var lang = 'en';
  try { lang = localStorage.getItem('rac-lang') || 'en'; } catch (e) {}

  function applyLang(next) {
    lang = next;
    var html = document.documentElement;
    html.setAttribute('lang', next === 'ar' ? 'ar' : 'en');
    html.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');

    var nodes = document.querySelectorAll('[data-ar]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!n.dataset.en) n.dataset.en = n.innerHTML;
      n.innerHTML = next === 'ar' ? n.dataset.ar : n.dataset.en;
    }
    var ph = document.querySelectorAll('[data-ar-ph]');
    for (var j = 0; j < ph.length; j++) {
      var p = ph[j];
      if (!p.dataset.enPh) p.dataset.enPh = p.getAttribute('placeholder') || '';
      p.setAttribute('placeholder', next === 'ar' ? p.dataset.arPh : p.dataset.enPh);
    }
    var btns = document.querySelectorAll('.lang b');
    for (var k = 0; k < btns.length; k++) btns[k].classList.toggle('on', btns[k].dataset.lang === next);

    try { localStorage.setItem('rac-lang', next); } catch (e) {}
    document.dispatchEvent(new CustomEvent('rac:lang', { detail: next }));
  }

  /* ----------------------------------------------------------
     4. Rendering
     ---------------------------------------------------------- */
  function t(o, key) { return lang === 'ar' ? o[key + 'ar'] !== undefined ? o[key + 'ar'] : o.ar : (o[key + 'en'] !== undefined ? o[key + 'en'] : o.en); }

  function renderRange(host, opts) {
    opts = opts || {};
    var list = RANGE.filter(function (r) { return !opts.cat || opts.cat === 'all' || r.c === opts.cat; });
    if (opts.limit) list = list.slice(0, opts.limit);
    var cats = {};
    CATS.forEach(function (c) { cats[c.id] = c; });

    host.innerHTML = list.map(function (r) {
      var cat = cats[r.c];
      return '<article class="item rv">' +
        '<div class="item__fig">' + ART[r.i] + '</div>' +
        '<span class="item__cat">' + (lang === 'ar' ? cat.ar : cat.en) + '</span>' +
        '<h3>' + (lang === 'ar' ? r.ar : r.en) + '</h3>' +
        '<p>' + (lang === 'ar' ? r.dar : r.den) + '</p>' +
        '</article>';
    }).join('');
    reveal();
  }

  function buildFilters(host, grid) {
    host.innerHTML = CATS.map(function (c, i) {
      return '<button data-cat="' + c.id + '" class="' + (i === 0 ? 'on' : '') + '">' +
        (lang === 'ar' ? c.ar : c.en) + '</button>';
    }).join('');
    if (host.dataset.bound) return;
    host.dataset.bound = '1';
    host.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-cat]');
      if (!b) return;
      host.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      renderRange(grid, { cat: b.dataset.cat });
    });
  }

  function paintArt() {
    document.querySelectorAll('[data-art]').forEach(function (el) {
      var k = el.dataset.art;
      if (ART[k]) el.innerHTML = ART[k];
    });
  }

  /* ----------------------------------------------------------
     5. Interactions
     ---------------------------------------------------------- */
  function reveal() {
    var els = document.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, idx) {
        if (en.isIntersecting) {
          var d = (parseInt(en.target.dataset.d || idx, 10) % 6) * 70;
          setTimeout(function () { en.target.classList.add('in'); }, d);
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(function (e) { io.observe(e); });
  }

  function init() {
    paintArt();

    /* sticky header state */
    var hdr = document.querySelector('.hdr');
    if (hdr) {
      var onScroll = function () { hdr.classList.toggle('is-stuck', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* mobile menu */
    var burger = document.querySelector('.burger');
    if (burger) {
      burger.addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
      document.querySelectorAll('.nav a').forEach(function (a) {
        a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
      });
    }

    /* language switch */
    document.querySelectorAll('.lang b').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang); });
    });

    /* theme switch */
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
      });
    });

    if (document.querySelector('[data-slider]')) document.body.classList.add('has-hero');

    /* range catalogue */
    var grid = document.querySelector('[data-range]');
    if (grid) {
      var limit = parseInt(grid.dataset.range, 10) || 0;
      var draw = function () { renderRange(grid, { limit: limit, cat: 'all' }); };
      draw();
      var filters = document.querySelector('[data-filters]');
      if (filters) buildFilters(filters, grid);
      document.addEventListener('rac:lang', function () {
        var active = filters ? (filters.querySelector('button.on') || {}).dataset : null;
        renderRange(grid, { limit: limit, cat: active ? active.cat : 'all' });
        if (filters) {
          var cur = active ? active.cat : 'all';
          buildFilters(filters, grid);
          filters.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x.dataset.cat === cur); });
        }
      });
    }

    /* dealer form — offline demo, no network */
    var form = document.querySelector('form[data-demo]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = form.querySelector('.form-ok');
        if (!ok) {
          ok = document.createElement('div');
          ok.className = 'form-ok';
          form.appendChild(ok);
        }
        ok.innerHTML = lang === 'ar'
          ? 'تم استلام طلبك. سيتواصل معك فريق التوزيع خلال يومي عمل.'
          : 'Request received. Our distribution team will be in touch within two working days.';
        ok.setAttribute('data-ar', 'تم استلام طلبك. سيتواصل معك فريق التوزيع خلال يومي عمل.');
        ok.dataset.en = 'Request received. Our distribution team will be in touch within two working days.';
        form.reset();
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

    /* year */
    document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

    applyLang(lang);

    // After applyLang, so the slider builds once in the right language rather
    // than building in English and immediately rebuilding on the lang event.
    var hero = document.querySelector('[data-slider]');
    if (hero) slider(hero);

    reveal();
  }

  window.RAC = { ART: ART, RANGE: RANGE, CATS: CATS };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
