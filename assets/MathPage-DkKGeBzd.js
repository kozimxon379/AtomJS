import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,g as n,n as r,p as i,t as a}from"./vendor-8iLmkU58.js";import{a as o}from"./auth-CAP04bbz.js";import{t as s}from"./createLucideIcon-Cv8YJ-pK.js";import{t as c}from"./circle-check-BBQqWJsj.js";import{t as l}from"./circle-x-FxzpM0et.js";import{t as u}from"./lightbulb-DF00EVex.js";import{Xt as d,en as f,h as p,m,pn as h,pt as g,tn as _}from"./index-DXWK4CxW.js";import{t as v}from"./Code-i1YjHcNx.js";import{t as y}from"./ProblemCheck-CZl4zN7m.js";var b=s(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),x=e(n(),1),S=(...e)=>({args:e.slice(0,-1),expect:e[e.length-1]}),C=[{id:`daraja`,title:`Darajalar va ildiz`,short:`**, Math.pow, kvadrat, kub, Math.sqrt va Math.cbrt`,why:`Maydon, masofa, o'sish, o'yindagi tezlanish — formulalarning yarmida kvadrat yoki ildiz bor. Ularni JS'da qanday yozishni bilmasangiz, oddiy masofa ham hisoblanmaydi.`,idea:[`Daraja — bir sonni o'ziga bir necha marta ko'paytirish. 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. JS'da buni 2 ** 5 yoki Math.pow(2, 5) deb yozamiz.`,`Kvadrat — 2-daraja (kvadratning maydoni), kub — 3-daraja (kubning hajmi). Har qanday sonning 0-darajasi 1 ga teng.`,`Ildiz — darajaning teskarisi. √49 = 7, chunki 7² = 49. Kvadrat ildiz Math.sqrt, kub ildiz Math.cbrt. Ildiz — bu 0.5-daraja ham: x ** 0.5 = √x.`],rule:`aⁿ = a · a · … · a (n marta). a⁰ = 1, a⁻¹ = 1 / a. √a = b, agar b² = a bo'lsa. Manfiy sondan kvadrat ildiz olinmaydi.`,calcs:[`2⁵ = 2 · 2 · 2 · 2 · 2 = 32`,`3³ = 3 · 3 · 3 = 27`,`√49 = 7, chunki 7 · 7 = 49`,`∛27 = 3, chunki 3 · 3 · 3 = 27`,`10⁰ = 1, 2⁻¹ = 1 / 2 = 0.5`],examples:[{title:`Daraja: ** va Math.pow`,code:`console.log(2 ** 5);
console.log(Math.pow(3, 3));
console.log(10 ** 0);`,out:`32
27
1`},{title:`Kvadrat va kub ildiz`,code:`console.log(Math.sqrt(49));
console.log(Math.cbrt(27));
console.log(Math.sqrt(2));`,out:`7
3
1.4142135623730951`},{title:`Kasr va manfiy daraja`,code:`console.log(16 ** 0.5);
console.log(2 ** -1);
console.log(10 ** -2);`,out:`4
0.5
0.01`}],life:{title:`Kvadrat xonaga plintus`,text:`Xona kvadrat shaklida, maydoni 36 m². Devor bo'ylab plintus qoqish uchun perimetr kerak. Avval tomonni topamiz — maydondan kvadrat ildiz — keyin 4 ga ko'paytiramiz.`,code:`const maydon = 36;
const tomon = Math.sqrt(maydon);
console.log(tomon);
console.log(tomon * 4);`,out:`6
24`},ref:[[`a ** b`,`a ning b-darajasi`],[`Math.pow(a, b)`,`xuddi shu — eski yozuv`],[`Math.sqrt(x)`,`kvadrat ildiz`],[`Math.cbrt(x)`,`kub ildiz`],[`x ** 0.5`,`kvadrat ildizning boshqa yozuvi`],[`Math.sqrt(-1)`,`NaN — manfiydan ildiz yo'q`]],pitfalls:[{text:`Manfiy sonni darajaga ko'tarishda qavs majburiy: -2 ** 2 sintaksis xatosi beradi, chunki JS «(-2)² mi yoki -(2²) mi?» deb adashmaslik uchun taqiqlaydi.`,code:`try {
  eval("-2 ** 2");
} catch (e) {
  console.log(e.name);
}
console.log((-2) ** 2);`,out:`SyntaxError
4`},{text:`^ belgisi JS'da daraja EMAS (u bitlar bilan ishlaydigan boshqa amal). Daraja uchun faqat ** yoki Math.pow.`,code:`console.log(2 ^ 3);`,out:`1`},{text:`Manfiy sondan kvadrat ildiz olib bo'lmaydi — natija NaN («son emas»).`,code:`console.log(Math.sqrt(-9));`,out:`NaN`}],quiz:[{q:`Natija nima?`,code:`console.log(3 ** 2);`,options:[`6`,`9`,`5`,`32`],answer:1,why:`3 ** 2 = 3 · 3 = 9. Bu 3 · 2 emas.`},{q:`Natija nima?`,code:`console.log(Math.sqrt(81));`,options:[`40.5`,`3`,`9`,`81`],answer:2,why:`9 · 9 = 81, demak √81 = 9. Ildiz — yarmi emas.`},{q:`Natija nima?`,code:`console.log(2 ** 10);`,options:[`20`,`1024`,`100`,`512`],answer:1,why:`2 ni 10 marta ko'paytirsak 1024 bo'ladi — kompyuterdagi «kilo» shundan.`},{q:`Natija nima?`,code:`console.log(5 ** 0);`,options:[`0`,`5`,`1`,`50`],answer:2,why:`Har qanday sonning 0-darajasi 1 ga teng.`}],tasks:[{level:1,text:`Sonning kvadratini qaytaring.`,fn:`kvadrat`,contract:`kvadrat(x) — x son; x ning kvadratini qaytaradi.`,cases:[S(3,9),S(-4,16),S(0,0),S(1.5,2.25)],hint:`x ** 2 yoki x * x.`,solution:`function kvadrat(x) {
  return x ** 2;
}`},{level:1,text:`Sonning kvadrat ildizini qaytaring.`,fn:`ildiz`,contract:`ildiz(x) — x musbat son yoki 0; √x ni qaytaradi.`,cases:[S(49,7),S(0,0),S(2.25,1.5),S(1,1)],hint:`Math.sqrt(x)`,solution:`function ildiz(x) {
  return Math.sqrt(x);
}`},{level:2,text:`Son biror butun sonning kvadratimi (to'liq kvadrat)? 16 = 4² — ha, 15 — yo'q.`,fn:`toliqKvadrat`,contract:`toliqKvadrat(n) — n butun son (≥ 0); true yoki false qaytaradi.`,cases:[S(16,!0),S(15,!1),S(0,!0),S(1,!0),S(50,!1)],hint:`Ildizini oling va u butun sonmi — Number.isInteger bilan tekshiring.`,solution:`function toliqKvadrat(n) {
  return Number.isInteger(Math.sqrt(n));
}`},{level:2,text:`1² + 2² + … + n² yig'indisini toping.`,fn:`kvadratlarYigindisi`,contract:`kvadratlarYigindisi(n) — n butun son (≥ 0); kvadratlar yig'indisini qaytaradi.`,cases:[S(3,14),S(1,1),S(0,0),S(10,385)],hint:`for sikli bilan 1 dan n gacha yurib, har i ** 2 ni yig'indiga qo'shing.`,solution:`function kvadratlarYigindisi(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) s += i ** 2;
  return s;
}`},{level:3,text:`a ning n-darajasini ** va Math.pow ISHLATMASDAN hisoblang.`,fn:`daraja`,contract:`daraja(a, n) — a son, n butun son (≥ 0); a ning n-darajasini qaytaradi.`,cases:[S(2,10,1024),S(5,0,1),S(3,4,81),S(-2,3,-8)],hint:`natija = 1 dan boshlang va sikl ichida n marta a ga ko'paytiring.`,solution:`function daraja(a, n) {
  let natija = 1;
  for (let i = 0; i < n; i++) natija *= a;
  return natija;
}`}]},{id:`manfiy`,title:`Manfiy sonlar va modul`,short:`Manfiy sonlar, Math.abs, ikki son orasidagi masofa, Math.sign`,why:`Harorat, balans, o'yindagi chapga harakat — manfiy son kodda har qadamda uchraydi. «Qancha farq qiladi?» degan savolga esa doim modul (Math.abs) javob beradi.`,idea:[`Manfiy son — noldan kichik son. Sonlar o'qida u noldan chapda turadi: −3 soni 0 dan 3 qadam chapda.`,`Modul — sonning noldan qancha UZOQLIGI, ishorasiz. |−7| = 7, |7| = 7. JS'da Math.abs(x).`,`Ikki son orasidagi masofa — ayirmaning moduli: |a − b|. Qaysi biridan ayirsangiz ham javob bir xil bo'ladi, shuning uchun «farq» so'ralganda Math.abs ishlatiladi.`],rule:`Manfiyga manfiy ko'paytirilsa — musbat: (−2) · (−3) = 6. Manfiy sonni ayirish — qo'shish bilan barobar: 5 − (−3) = 8. Modul hech qachon manfiy bo'lmaydi.`,calcs:[`−3 + 5 = 2`,`4 − 9 = −5`,`(−2) · (−3) = 6`,`|−7| = 7, |0| = 0`,`|3 − 10| = |−7| = 7 — 3 va 10 orasidagi masofa`],examples:[{title:`Manfiy sonlar bilan amallar`,code:`console.log(-3 + 5);
console.log(4 - 9);
console.log(-2 * -3);`,out:`2
-5
6`},{title:`Modul — Math.abs`,code:`console.log(Math.abs(-7));
console.log(Math.abs(7));
console.log(Math.abs(0));`,out:`7
7
0`},{title:`Ikki son orasidagi masofa`,code:`const a = 3;
const b = 10;
console.log(a - b);
console.log(Math.abs(a - b));
console.log(Math.abs(b - a));`,out:`-7
7
7`}],life:{title:`Harorat farqi`,text:`Tunda −8°, kunduzi 5° edi. Harorat qanchaga o'zgardi? Manfiy sonni ayirish qo'shishga aylanadi, Math.abs esa tartibni o'ylamaslikka yordam beradi.`,code:`const tun = -8;
const kun = 5;
console.log(kun - tun);
console.log(Math.abs(tun - kun));`,out:`13
13`},ref:[[`-x`,`sonning ishorasini almashtiradi`],[`Math.abs(x)`,`modul — ishorasiz qiymat`],[`Math.abs(a - b)`,`a va b orasidagi masofa`],[`Math.sign(x)`,`-1 (manfiy), 0 yoki 1 (musbat)`],[`((n % m) + m) % m`,`doim musbat qoldiq`]],pitfalls:[{text:`Manfiy sonning qoldig'i ham manfiy chiqadi: -7 % 3 = -1, matematikadagi 2 emas. Musbat qoldiq kerak bo'lsa ((n % m) + m) % m yozing.`,code:`console.log(-7 % 3);
console.log(((-7 % 3) + 3) % 3);`,out:`-1
2`},{text:`Manfiy sonlarda «kattasi» — nolga yaqinrog'i: −2 soni −10 dan katta.`,code:`console.log(Math.max(-10, -2));`,out:`-2`},{text:`Ikki minusni yopishtirib yozmang: 5 - -3 = 8, lekin 5--3 da -- (kamaytirish) amali paydo bo'ladi va kod xato beradi. Bo'sh joy yoki qavs qo'ying: 5 - (-3).`}],quiz:[{q:`Natija nima?`,code:`console.log(Math.abs(-12));`,options:[`-12`,`12`,`0`,`1`],answer:1,why:`Modul ishorani olib tashlaydi: −12 noldan 12 qadam uzoqda.`},{q:`Natija nima?`,code:`console.log(-4 * -5);`,options:[`-20`,`20`,`-9`,`9`],answer:1,why:`Manfiyga manfiy ko'paytirilsa — musbat.`},{q:`Natija nima?`,code:`console.log(-7 % 3);`,options:[`2`,`-1`,`1`,`-2`],answer:1,why:`JS'da qoldiq bo'linuvchining ishorasini oladi: −7 = 3 · (−2) − 1.`},{q:`Natija nima?`,code:`console.log(Math.sign(-3));`,options:[`-3`,`3`,`-1`,`1`],answer:2,why:`Math.sign faqat ishorani aytadi: manfiy bo'lsa −1.`}],tasks:[{level:1,text:`Sonning modulini qaytaring.`,fn:`modul`,contract:`modul(x) — x son; ishorasiz qiymatni qaytaradi.`,cases:[S(-5,5),S(5,5),S(0,0),S(-2.5,2.5)],hint:`Math.abs(x)`,solution:`function modul(x) {
  return Math.abs(x);
}`},{level:1,text:`Ikki son orasidagi masofani toping (doim musbat yoki 0).`,fn:`masofa`,contract:`masofa(a, b) — ikki son; |a − b| ni qaytaradi.`,cases:[S(3,10,7),S(10,3,7),S(-4,4,8),S(5,5,0)],hint:`Ayiring va Math.abs bilan ishorani olib tashlang.`,solution:`function masofa(a, b) {
  return Math.abs(a - b);
}`},{level:2,text:`Son musbat bo'lsa "musbat", manfiy bo'lsa "manfiy", 0 bo'lsa "nol" qaytaring.`,fn:`ishora`,contract:`ishora(x) — x son; "musbat", "manfiy" yoki "nol" qaytaradi.`,cases:[S(5,`musbat`),S(-3,`manfiy`),S(0,`nol`),S(-.5,`manfiy`)],hint:`if (x > 0) … else if (x < 0) … else …`,solution:`function ishora(x) {
  if (x > 0) return "musbat";
  if (x < 0) return "manfiy";
  return "nol";
}`},{level:2,text:`n ni m ga bo'lgandagi qoldiqni toping — lekin n manfiy bo'lsa ham qoldiq 0 dan m − 1 gacha bo'lsin.`,fn:`musbatQoldiq`,contract:`musbatQoldiq(n, m) — n butun son, m musbat butun son; 0 … m − 1 oralig'idagi qoldiqni qaytaradi.`,cases:[S(7,3,1),S(-7,3,2),S(-1,5,4),S(6,3,0)],hint:`Oddiy % ga m qo'shing va yana % m qiling: ((n % m) + m) % m.`,solution:`function musbatQoldiq(n, m) {
  return ((n % m) + m) % m;
}`},{level:3,text:"Massivdan `t` soniga eng yaqin elementni toping. Ikkita bir xil yaqin bo'lsa — birinchisini.",fn:`engYaqin`,contract:`engYaqin(arr, t) — arr bo'sh bo'lmagan sonlar massivi, t son; eng yaqin elementni qaytaradi.`,cases:[S([1,5,9],6,5),S([-10,-3,4],-5,-3),S([2,8],5,2),S([7],100,7)],hint:`Har element uchun Math.abs(x - t) ni hisoblang va eng kichigini eslab qoling. Faqat QAT'IY kichik bo'lsa almashtiring.`,solution:`function engYaqin(arr, t) {
  let eng = arr[0];
  for (const x of arr) {
    if (Math.abs(x - t) < Math.abs(eng - t)) eng = x;
  }
  return eng;
}`}]},{id:`koordinata`,title:`Koordinatalar`,short:`(x, y) nuqta, choraklar, masofa (Math.hypot), o'rta nuqta, siljitish`,why:`O'yindagi qahramon, sichqoncha, canvas'dagi chizma, xaritadagi do'kon — hammasining joyi (x, y) bilan beriladi. Ikki narsa to'qnashdimi, dushman yaqinmi — bu koordinatalar orasidagi masofa.`,idea:[`Tekislikdagi nuqta ikki son bilan beriladi: x — gorizontal (o'ngga), y — vertikal. Kodda uni { x: 3, y: 4 } obyekti sifatida saqlash qulay.`,`Ikki nuqta orasidagi masofa — Pifagor teoremasi: farqlar dx va dy to'g'ri burchakli uchburchakning katetlari, masofa esa gipotenuza. JS'da Math.hypot(dx, dy).`,`Nuqtani siljitish — x va y ga qadam (tezlik) qo'shish. O'yinlarda har kadrda shunday qilinadi. Diqqat: ekranda (canvas, sahifa) y PASTGA qarab o'sadi.`],rule:`A(x₁, y₁) va B(x₂, y₂) orasidagi masofa: √((x₂ − x₁)² + (y₂ − y₁)²). O'rta nuqta: ((x₁ + x₂) / 2, (y₁ + y₂) / 2). Choraklar: I (+, +), II (−, +), III (−, −), IV (+, −).`,calcs:[`O(0, 0) dan A(3, 4) gacha: √(9 + 16) = √25 = 5`,`A(1, 2), B(4, 6): dx = 3, dy = 4 → masofa 5`,`(1, 2) va (5, 8) ning o'rtasi: (3, 5)`,`(−2, 3) — II chorak: x manfiy, y musbat`,`(2, 3) nuqtaga (+1, −2) qadam → (3, 1)`],examples:[{title:`Masofa — Pifagor`,code:`const dx = 4 - 1;
const dy = 6 - 2;
console.log(Math.sqrt(dx ** 2 + dy ** 2));
console.log(Math.hypot(dx, dy));`,out:`5
5`},{title:`O'rta nuqta`,code:`const A = { x: 1, y: 2 };
const B = { x: 5, y: 8 };
console.log((A.x + B.x) / 2, (A.y + B.y) / 2);`,out:`3 5`},{title:`Nuqtani siljitish`,code:`const p = { x: 2, y: 3 };
const qadam = { x: 1, y: -2 };
p.x += qadam.x;
p.y += qadam.y;
console.log(p);`,out:`{ x: 3, y: 1 }`}],life:{title:`Dushman yaqinlashdimi?`,text:`O'yinda qahramon (100, 100) da, dushman (130, 140) da. Dushman 60 piksel ichiga kirsa, signal chalinadi. Masofani hisoblab, radius bilan solishtiramiz.`,code:`const men = { x: 100, y: 100 };
const dushman = { x: 130, y: 140 };
const masofa = Math.hypot(dushman.x - men.x, dushman.y - men.y);
console.log(masofa);
console.log(masofa < 60);`,out:`50
true`},ref:[[`{ x: 3, y: 4 }`,`nuqtani obyekt sifatida saqlash`],[`Math.hypot(dx, dy)`,`ikki nuqta orasidagi masofa`],[`Math.sqrt(dx ** 2 + dy ** 2)`,`xuddi shu — Pifagor formulasi`],[`(x1 + x2) / 2`,`o'rta nuqtaning x i`],[`p.x += vx`,`nuqtani siljitish`],[`y -= 10`,`ekranda YUQORIGA siljish`]],pitfalls:[{text:`Ekranda y pastga qarab o'sadi: qahramonni yuqoriga sakratish uchun y ni KAMAYTIRISH kerak.`,code:`let y = 100;
y -= 10;
console.log(y);`,out:`90`},{text:`Masofa dx + dy emas — to'g'ri chiziq (diagonal) qisqaroq. Pifagor yoki Math.hypot ishlating.`,code:`console.log(3 + 4);
console.log(Math.hypot(3, 4));`,out:`7
5`},{text:`O'qda yotgan nuqta — masalan (0, 5) yoki (5, 0) — hech qaysi chorakka kirmaydi. Chorakni aniqlashda nolni alohida tekshiring.`}],quiz:[{q:`Natija nima?`,code:`console.log(Math.hypot(6, 8));`,options:[`14`,`10`,`48`,`100`],answer:1,why:`√(36 + 64) = √100 = 10.`},{q:`Natija nima?`,code:`console.log((2 + 8) / 2);`,options:[`5`,`10`,`6`,`4`],answer:0,why:`2 va 8 ning o'rtasi — yig'indining yarmi, 5.`},{q:`(−3, −5) nuqta qaysi chorakda?`,options:[`I`,`II`,`III`,`IV`],answer:2,why:`Ikkala koordinata ham manfiy — III chorak (pastki chap).`},{q:`Canvas'da qahramon yuqoriga sakrasa, uning y qiymati…`,options:[`kattalashadi`,`kichiklashadi`,`o'zgarmaydi`,`nolga teng bo'ladi`],answer:1,why:`Ekranda y pastga o'sadi, demak yuqoriga chiqish — y ning kamayishi.`}],tasks:[{level:1,text:`Ikki nuqta orasidagi masofani toping.`,fn:`masofa2`,contract:`masofa2(x1, y1, x2, y2) — ikki nuqta koordinatalari; masofani qaytaradi.`,cases:[S(0,0,3,4,5),S(1,2,4,6,5),S(2,2,2,2,0),S(-1,-1,5,7,10)],hint:`Math.hypot(x2 - x1, y2 - y1)`,solution:`function masofa2(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}`},{level:1,text:`Ikki nuqtaning o'rta nuqtasini [x, y] massiv ko'rinishida qaytaring.`,fn:`ortaNuqta`,contract:`ortaNuqta(x1, y1, x2, y2) — ikki nuqta; [x, y] massivini qaytaradi.`,cases:[S(1,2,5,8,[3,5]),S(0,0,0,0,[0,0]),S(-4,2,4,6,[0,4]),S(1,1,2,2,[1.5,1.5])],hint:`x lar yig'indisining yarmi va y lar yig'indisining yarmi.`,solution:`function ortaNuqta(x1, y1, x2, y2) {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}`},{level:2,text:`Nuqta qaysi chorakda? 1, 2, 3 yoki 4 qaytaring; o'qda yotsa — 0.`,fn:`chorak`,contract:`chorak(x, y) — nuqta koordinatalari; 0 … 4 sonini qaytaradi.`,cases:[S(3,4,1),S(-3,4,2),S(-3,-4,3),S(3,-4,4),S(0,5,0),S(5,0,0)],hint:`Avval x === 0 || y === 0 ni tekshiring, keyin x va y ishoralariga qarab.`,solution:`function chorak(x, y) {
  if (x === 0 || y === 0) return 0;
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0) return 3;
  return 4;
}`},{level:2,text:`Ekranda to'rtburchak (0, 0) burchakdan boshlanadi, eni w, bo'yi h. Sichqoncha (x, y) uning ichidami (chetida ham — ichida)?`,fn:`ichidami`,contract:`ichidami(x, y, w, h) — nuqta va to'rtburchak o'lchami; true yoki false qaytaradi.`,cases:[S(5,5,10,10,!0),S(10,0,10,10,!0),S(11,5,10,10,!1),S(-1,5,10,10,!1),S(5,12,10,10,!1)],hint:`x 0 dan w gacha VA y 0 dan h gacha bo'lishi kerak: to'rtta shart && bilan.`,solution:`function ichidami(x, y, w, h) {
  return x >= 0 && x <= w && y >= 0 && y <= h;
}`},{level:3,text:`Ikki doira (o'yindagi ikki to'p) bir-biriga tegdimi? Markazlar orasidagi masofa radiuslar yig'indisidan oshmasa — tegdi.`,fn:`tegdimi`,contract:`tegdimi(x1, y1, r1, x2, y2, r2) — ikki doira markazi va radiusi; true yoki false qaytaradi.`,cases:[S(0,0,5,8,0,3,!0),S(0,0,2,10,0,3,!1),S(0,0,1,3,4,4,!0),S(0,0,1,3,4,3,!1)],hint:`Math.hypot(x2 - x1, y2 - y1) <= r1 + r2`,solution:`function tegdimi(x1, y1, r1, x2, y2, r2) {
  return Math.hypot(x2 - x1, y2 - y1) <= r1 + r2;
}`}]},{id:`tubsonlar`,title:`Bo'luvchilar, tub sonlar, EKUB va EKUK`,short:`Bo'luvchilar sikli, tub son tekshiruvi, Evklid usuli, EKUK`,why:`Tub sonlar — internetdagi shifrlashning asosi. EKUB kasrni qisqartiradi va narsalarni teng guruhlarga bo'ladi, EKUK esa ikki takrorlanuvchi hodisa qachon ustma-ust tushishini aytadi.`,idea:[`Bo'luvchi — sonni qoldiqsiz bo'ladigan son. 12 ning bo'luvchilari: 1, 2, 3, 4, 6, 12. Kodda: n % i === 0 bo'lsa, i — bo'luvchi.`,`Tub son — faqat 1 ga va o'ziga bo'linadigan, 1 dan katta son: 2, 3, 5, 7, 11, 13… Tekshirish uchun 2 dan √n gacha bo'luvchi qidirish yetarli.`,`EKUB — eng katta umumiy bo'luvchi, EKUK — eng kichik umumiy karrali. EKUB ni Evklid usuli tez topadi: (a, b) → (b, a % b), b nolga yetguncha. EKUK = a · b / EKUB.`],rule:`Evklid: EKUB(a, b) = EKUB(b, a mod b), EKUB(a, 0) = a. EKUK(a, b) = a · b / EKUB(a, b). 1 tub son emas; 2 — yagona juft tub son.`,calcs:[`12 ning bo'luvchilari: 1, 2, 3, 4, 6, 12`,`13 faqat 1 va 13 ga bo'linadi → tub`,`EKUB(48, 18): (48, 18) → (18, 12) → (12, 6) → (6, 0) → 6`,`EKUB(12, 18) = 6`,`EKUK(4, 6) = 4 · 6 / 2 = 12`],examples:[{title:`Bo'luvchilarni topish`,code:`const n = 12;
const b = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) b.push(i);
}
console.log(b);`,out:`[1, 2, 3, 4, 6, 12]`},{title:`Tub sonmi?`,code:`function tubmi(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(tubmi(13));
console.log(tubmi(15));
console.log(tubmi(1));`,out:`true
false
false`},{title:`EKUB va EKUK — Evklid usuli`,code:`function ekub(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(ekub(48, 18));
console.log(ekub(7, 5));
console.log(4 * 6 / ekub(4, 6));`,out:`6
1
12`}],life:{title:`Avtobuslar qachon birga keladi?`,text:`Bekatga 1-avtobus har 12 daqiqada, 2-avtobus har 18 daqiqada keladi. Hozir ikkalasi birga keldi. Yana qachon birga kelishadi? Bu — EKUK.`,code:`function ekub(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(12 * 18 / ekub(12, 18));`,out:`36`},ref:[[`n % i === 0`,`i — n ning bo'luvchisi`],[`i * i <= n`,`tub son tekshiruvida √n gacha yurish`],[`[a, b] = [b, a % b]`,`Evklid usulining bitta qadami`],[`a * b / ekub(a, b)`,`EKUK`],[`2, 3, 5, 7, 11, 13`,`birinchi tub sonlar (1 — tub emas)`]],pitfalls:[{text:`Hamma sonni n gacha tekshirish shart emas: bo'luvchilar juft bo'lib keladi (2 · 6 = 12), √n gacha yetarli. 97 uchun 95 qadam o'rniga 8 qadam.`,code:`let qadam = 0;
for (let i = 2; i * i <= 97; i++) qadam++;
console.log(qadam);`,out:`8`},{text:`0 ga qoldiq — NaN. Bo'luvchilarni qidirishda siklni 1 dan boshlang, 0 dan emas.`,code:`console.log(10 % 0);`,out:`NaN`},{text:`1 tub son emas (uning bo'luvchisi bitta), 2 esa tub. tubmi funksiyasida n < 2 ni alohida tekshirishni unutmang.`}],quiz:[{q:`Natija nima?`,code:`console.log(21 % 7 === 0);`,options:[`true`,`false`,`3`,`0`],answer:0,why:`21 = 7 · 3, qoldiq 0 — demak 7 bo'luvchi.`},{q:`Qaysi biri tub son?`,options:[`21`,`27`,`29`,`33`],answer:2,why:`21 = 3 · 7, 27 = 3 · 9, 33 = 3 · 11. 29 esa faqat 1 va o'ziga bo'linadi.`},{q:`EKUB(8, 12) nechaga teng?`,options:[`2`,`4`,`24`,`96`],answer:1,why:`8 ham, 12 ham 4 ga bo'linadi, undan kattasiga — yo'q.`},{q:`EKUK(3, 5) nechaga teng?`,options:[`8`,`1`,`15`,`30`],answer:2,why:`EKUB(3, 5) = 1, demak EKUK = 3 · 5 / 1 = 15.`}],tasks:[{level:1,text:`a soni b ga qoldiqsiz bo'linadimi?`,fn:`bolinadimi`,contract:`bolinadimi(a, b) — butun sonlar, b ≠ 0; true yoki false qaytaradi.`,cases:[S(12,3,!0),S(12,5,!1),S(0,7,!0),S(7,7,!0)],hint:`a % b === 0`,solution:`function bolinadimi(a, b) {
  return a % b === 0;
}`},{level:1,text:`Sonning nechta bo'luvchisi bor?`,fn:`boluvchilarSoni`,contract:`boluvchilarSoni(n) — musbat butun son; bo'luvchilar sonini qaytaradi.`,cases:[S(12,6),S(1,1),S(13,2),S(36,9)],hint:`1 dan n gacha yuring va n % i === 0 bo'lganlarni sanang.`,solution:`function boluvchilarSoni(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) s++;
  }
  return s;
}`},{level:2,text:`Son tubmi?`,fn:`tubmi`,contract:`tubmi(n) — butun son (≥ 0); true yoki false qaytaradi.`,cases:[S(2,!0),S(1,!1),S(0,!1),S(17,!0),S(21,!1),S(97,!0),S(100,!1)],hint:`n < 2 bo'lsa false. Keyin i = 2 dan i * i <= n gacha bo'luvchi qidiring.`,solution:`function tubmi(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}`},{level:2,text:`Ikki sonning EKUB ini Evklid usuli bilan toping.`,fn:`ekub`,contract:`ekub(a, b) — butun sonlar (≥ 0, ikkalasi birdan 0 emas); EKUB ni qaytaradi.`,cases:[S(48,18,6),S(7,5,1),S(12,12,12),S(0,9,9)],hint:`while (b !== 0) { [a, b] = [b, a % b]; } — oxirida a qaytaring.`,solution:`function ekub(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`},{level:3,text:`Ikki sonning EKUK ini toping. Ichida EKUB ni ham o'zingiz hisoblang.`,fn:`ekuk`,contract:`ekuk(a, b) — musbat butun sonlar; EKUK ni qaytaradi.`,cases:[S(4,6,12),S(3,5,15),S(12,18,36),S(7,7,7)],hint:`Avval Evklid bilan EKUB ni toping, keyin a * b / ekub.`,solution:`function ekuk(a, b) {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return a * b / x;
}`}]},{id:`ketma`,title:`Ketma-ketliklar`,short:`Arifmetik va geometrik progressiya, Fibonachchi, faktorial`,why:`Daraja ochish uchun kerakli XP, har kuni ko'payadigan obunachilar, o'yindagi to'lqin raqami — bular ketma-ketlik. Sikl va rekursiya ham aynan shunday «keyingi hadni oldingisidan topish» g'oyasiga qurilgan.`,idea:[`Arifmetik progressiyada har had oldingisidan bir xil songa (d) farq qiladi: 2, 5, 8, 11… (d = 3). n-hadi: a₁ + (n − 1) · d.`,`Geometrik progressiyada har had oldingisidan bir xil marta (q) katta: 3, 6, 12, 24… (q = 2). n-hadi: a₁ · qⁿ⁻¹. U juda tez o'sadi.`,`Fibonachchida har had oldingi ikkitasining yig'indisi: 1, 1, 2, 3, 5, 8, 13… Faktorial — 1 dan n gacha sonlar ko'paytmasi: 5! = 120. Ikkalasini sikl bilan ham, rekursiya (funksiya o'zini chaqiradi) bilan ham yozsa bo'ladi.`],rule:`Arifmetik: aₙ = a₁ + (n − 1) · d. Geometrik: aₙ = a₁ · qⁿ⁻¹. Fibonachchi: Fₙ = Fₙ₋₁ + Fₙ₋₂. Faktorial: n! = n · (n − 1)!, 0! = 1. 1 + 2 + … + n = n · (n + 1) / 2.`,calcs:[`2, 5, 8, 11… → 10-hadi: 2 + 9 · 3 = 29`,`3, 6, 12, 24… → 6-hadi: 3 · 2⁵ = 96`,`Fibonachchi: 1, 1, 2, 3, 5, 8, 13, 21`,`5! = 1 · 2 · 3 · 4 · 5 = 120`,`1 + 2 + … + 100 = 100 · 101 / 2 = 5050`],examples:[{title:`Arifmetik progressiya`,code:`const a1 = 2;
const d = 3;
const s = [];
for (let i = 0; i < 5; i++) s.push(a1 + i * d);
console.log(s);
console.log(a1 + 9 * d);`,out:`[2, 5, 8, 11, 14]
29`},{title:`Geometrik progressiya`,code:`let x = 3;
const s = [];
for (let i = 0; i < 5; i++) {
  s.push(x);
  x *= 2;
}
console.log(s);`,out:`[3, 6, 12, 24, 48]`},{title:`Fibonachchi`,code:`const f = [1, 1];
while (f.length < 10) {
  f.push(f[f.length - 1] + f[f.length - 2]);
}
console.log(f);`,out:`[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`}],life:{title:`Navbatda necha xil turish mumkin?`,text:`5 o'quvchi bir qatorga necha xil tartibda tura oladi? Birinchi joyga 5 kishidan biri, ikkinchisiga qolgan 4 tadan biri… Javob — 5! = 120. Uni sikl bilan ham, rekursiya bilan ham hisoblaymiz.`,code:`function fakt(n) {
  return n <= 1 ? 1 : n * fakt(n - 1);
}
let p = 1;
for (let i = 1; i <= 5; i++) p *= i;
console.log(p);
console.log(fakt(5));`,out:`120
120`},ref:[[`a1 + (n - 1) * d`,`arifmetik progressiyaning n-hadi`],[`a1 * q ** (n - 1)`,`geometrik progressiyaning n-hadi`],[`f[i] = f[i - 1] + f[i - 2]`,`Fibonachchi`],[`n * fakt(n - 1)`,`faktorial — rekursiya`],[`n * (n + 1) / 2`,`1 dan n gacha yig'indi`]],pitfalls:[{text:`n-had a₁ + n · d emas, a₁ + (n − 1) · d: birinchi hadda hali bitta ham qadam qo'shilmagan.`,code:`const a1 = 2, d = 3, n = 10;
console.log(a1 + n * d);
console.log(a1 + (n - 1) * d);`,out:`32
29`},{text:`Rekursiyada to'xtash sharti (n <= 1) bo'lmasa, funksiya o'zini cheksiz chaqiradi va RangeError («Maximum call stack size exceeded») chiqadi.`,code:`function f(n) {
  return n * f(n - 1);
}
try {
  f(5);
} catch (e) {
  console.log(e.name);
}`,out:`RangeError`},{text:`Faktorial juda tez o'sadi: 171! JS uchun allaqachon Infinity.`,code:`let p = 1;
for (let i = 1; i <= 171; i++) p *= i;
console.log(p);`,out:`Infinity`}],quiz:[{q:`2, 7, 12, 17, … keyingi had qaysi?`,options:[`21`,`22`,`24`,`27`],answer:1,why:`Har safar 5 qo'shiladi: 17 + 5 = 22.`},{q:`Natija nima?`,code:`let p = 1;
for (let i = 1; i <= 4; i++) p *= i;
console.log(p);`,options:[`10`,`24`,`16`,`4`],answer:1,why:`1 · 2 · 3 · 4 = 24 — bu 4!.`},{q:`Fibonachchi: 1, 1, 2, 3, 5, 8, … keyingisi?`,options:[`11`,`12`,`13`,`16`],answer:2,why:`Oldingi ikkitasining yig'indisi: 5 + 8 = 13.`},{q:`0! nechaga teng?`,options:[`0`,`1`,`undefined`,`cheksiz`],answer:1,why:`Kelishuv bo'yicha 0! = 1 — rekursiya aynan shu yerda to'xtaydi.`}],tasks:[{level:1,text:`Arifmetik progressiyaning n-hadini toping.`,fn:`arifmetik`,contract:`arifmetik(a1, d, n) — birinchi had, farq va had raqami (n ≥ 1); n-hadni qaytaradi.`,cases:[S(2,3,1,2),S(2,3,10,29),S(10,-2,6,0),S(0,5,4,15)],hint:`a1 + (n - 1) * d`,solution:`function arifmetik(a1, d, n) {
  return a1 + (n - 1) * d;
}`},{level:1,text:`1 dan n gacha bo'lgan sonlar yig'indisini toping.`,fn:`yigindi`,contract:`yigindi(n) — butun son (≥ 0); 1 + 2 + … + n ni qaytaradi.`,cases:[S(100,5050),S(1,1),S(0,0),S(10,55)],hint:`Sikl bilan yoki formula bilan: n * (n + 1) / 2.`,solution:`function yigindi(n) {
  return n * (n + 1) / 2;
}`},{level:2,text:`n! (faktorial) ni hisoblang.`,fn:`faktorial`,contract:`faktorial(n) — butun son (≥ 0); n! ni qaytaradi.`,cases:[S(5,120),S(0,1),S(1,1),S(10,3628800)],hint:`p = 1 dan boshlang va 1 dan n gacha ko'paytiring. 0! = 1 o'zi chiqadi.`,solution:`function faktorial(n) {
  let p = 1;
  for (let i = 2; i <= n; i++) p *= i;
  return p;
}`},{level:2,text:`Geometrik progressiyaning birinchi n ta hadini massiv qilib qaytaring.`,fn:`geometrik`,contract:`geometrik(a1, q, n) — birinchi had, maxraj va hadlar soni; massiv qaytaradi.`,cases:[S(3,2,5,[3,6,12,24,48]),S(1,10,3,[1,10,100]),S(5,1,2,[5,5]),S(7,3,0,[])],hint:`x = a1; sikl ichida x ni massivga qo'shing va x *= q qiling.`,solution:`function geometrik(a1, q, n) {
  const s = [];
  let x = a1;
  for (let i = 0; i < n; i++) {
    s.push(x);
    x *= q;
  }
  return s;
}`},{level:3,text:`Fibonachchining n-hadini toping: fib(1) = 1, fib(2) = 1, fib(3) = 2… n = 30 da ham tez ishlasin.`,fn:`fib`,contract:`fib(n) — butun son (n ≥ 1); n-Fibonachchi sonini qaytaradi.`,cases:[S(1,1),S(2,1),S(7,13),S(10,55),S(30,832040)],hint:`Ikki o'zgaruvchi: a = 1, b = 1. Har qadamda [a, b] = [b, a + b]. Oddiy rekursiya n = 30 da sekin — sikl ishlating.`,solution:`function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`}]},{id:`sanoq`,title:`Sanoq sistemalari`,short:`Ikkilik va o'n oltilik sonlar, toString(2), parseInt, rang kodlari`,why:`Kompyuter ichida hamma narsa 0 va 1. CSS'dagi #ff8800 rangi, xotira manzillari, ruxsat bayroqlari — o'n oltilik va ikkilik sonlar. Ularni o'qiy olsangiz, rang kodini o'zingiz «yechasiz».`,idea:[`Biz o'nlik sistemada sanaymiz: 10 ta raqam (0–9), har xona 10 marta katta. Ikkilikda faqat 2 ta raqam (0 va 1), har xona 2 marta katta: 1, 2, 4, 8, 16…`,`O'n oltilikda 16 ta raqam: 0–9 va a–f (a = 10, … f = 15). Bitta o'n oltilik raqam aynan 4 ta ikkilik raqamga teng, shuning uchun u ikkilikning qisqa yozuvi.`,`JS'da sonni boshqa sistemaga n.toString(2) yoki n.toString(16) o'tkazadi (natija — MATN). Orqaga — parseInt(matn, 2) yoki parseInt(matn, 16). Kodda to'g'ridan-to'g'ri 0b1010 va 0xff deb ham yozsa bo'ladi.`],rule:`Ikkilikdan o'nlikka: har raqamni o'z xonasining qiymatiga (… 8, 4, 2, 1) ko'paytirib qo'shing. O'nlikdan ikkilikka: 2 ga bo'lib, qoldiqlarni pastdan yuqoriga yozing.`,calcs:[`1010₂ = 8 + 0 + 2 + 0 = 10`,`13 = 8 + 4 + 1 = 1101₂`,`FF₁₆ = 15 · 16 + 15 = 255`,`2A₁₆ = 2 · 16 + 10 = 42`,`#ff8800 → r = ff = 255, g = 88 = 136, b = 00 = 0`],examples:[{title:`Sonni ikkilikka`,code:`console.log((10).toString(2));
console.log((13).toString(2));
console.log((255).toString(2));`,out:`1010
1101
11111111`},{title:`O'n oltilik`,code:`console.log((255).toString(16));
console.log((42).toString(16));
console.log(parseInt("ff", 16));`,out:`ff
2a
255`},{title:`Orqaga — o'nlikka`,code:`console.log(parseInt("1010", 2));
console.log(parseInt("1101", 2));
console.log(0b1010);
console.log(0xff);`,out:`10
13
10
255`}],life:{title:`Rang kodini yechish`,text:`CSS'dagi #ff8800 — bu uchta o'n oltilik son ketma-ket: qizil (ff), yashil (88) va ko'k (00). Har birini parseInt bilan o'nlikka o'tkazsak, rgb() ko'rinishi chiqadi.`,code:`const rang = "#ff8800";
const r = parseInt(rang.slice(1, 3), 16);
const g = parseInt(rang.slice(3, 5), 16);
const b = parseInt(rang.slice(5, 7), 16);
console.log(r, g, b);
console.log("rgb(" + r + ", " + g + ", " + b + ")");`,out:`255 136 0
rgb(255, 136, 0)`},ref:[[`n.toString(2)`,`ikkilik ko'rinish — MATN`],[`n.toString(16)`,`o'n oltilik ko'rinish — MATN`],[`parseInt(s, 2)`,`ikkilik matndan songa`],[`parseInt(s, 16)`,`o'n oltilik matndan songa`],[`0b1010, 0xff`,`kodda ikkilik va o'n oltilik son`],[`s.padStart(2, "0")`,`oldiga nol qo'shib 2 xonali qilish`]],pitfalls:[{text:`toString MATN qaytaradi: unga son qo'shsangiz, yopishtiriladi.`,code:`const b = (5).toString(2);
console.log(b + 1);`,out:`1011`},{text:`parseInt da sistemani ko'rsatmasangiz, matn o'nlik deb o'qiladi.`,code:`console.log(parseInt("1010"));
console.log(parseInt("1010", 2));`,out:`1010
10`},{text:`Rangni hex ga qaytarishda bitta xonali son chiqadi va rang buziladi: 8 → "8", kerakli "08". padStart yordam beradi.`,code:`console.log((8).toString(16));
console.log((8).toString(16).padStart(2, "0"));`,out:`8
08`}],quiz:[{q:`Natija nima?`,code:`console.log((6).toString(2));`,options:[`110`,`011`,`6`,`1100`],answer:0,why:`6 = 4 + 2 = 110₂.`},{q:`Natija nima?`,code:`console.log(parseInt("11", 2));`,options:[`11`,`3`,`2`,`1011`],answer:1,why:`11₂ = 2 + 1 = 3.`},{q:`Natija nima?`,code:`console.log((16).toString(16));`,options:[`16`,`f`,`10`,`1f`],answer:2,why:`16 — o'n oltilikda bitta «o'nlik»: 1 · 16 + 0, ya'ni 10.`},{q:`Ikkilik sistemada nechta raqam ishlatiladi?`,options:[`2 ta: 0 va 1`,`10 ta`,`16 ta`,`8 ta`],answer:0,why:`Ikkilik — faqat 0 va 1. Kompyuterda bu «tok yo'q» va «tok bor».`}],tasks:[{level:1,text:`Sonni ikkilik ko'rinishdagi matnga o'tkazing.`,fn:`ikkilik`,contract:`ikkilik(n) — butun son (≥ 0); "1010" kabi matn qaytaradi.`,cases:[S(10,`1010`),S(0,`0`),S(1,`1`),S(255,`11111111`)],hint:`n.toString(2)`,solution:`function ikkilik(n) {
  return n.toString(2);
}`},{level:1,text:`Ikkilik matnni o'nlik songa o'tkazing.`,fn:`onlik`,contract:`onlik(s) — "1010" kabi matn; son qaytaradi.`,cases:[S(`1010`,10),S(`0`,0),S(`11111111`,255),S(`100`,4)],hint:`parseInt(s, 2)`,solution:`function onlik(s) {
  return parseInt(s, 2);
}`},{level:2,text:`0–255 oralig'idagi sonni aniq 2 xonali o'n oltilik matnga o'tkazing (rang kodi uchun).`,fn:`hex2`,contract:`hex2(n) — butun son 0 … 255; "ff", "08" kabi matn qaytaradi.`,cases:[S(255,`ff`),S(8,`08`),S(0,`00`),S(171,`ab`)],hint:`n.toString(16).padStart(2, "0")`,solution:`function hex2(n) {
  return n.toString(16).padStart(2, "0");
}`},{level:2,text:`"#rrggbb" rang kodini [r, g, b] sonlar massiviga aylantiring.`,fn:`rgb`,contract:`rgb(hex) — "#ff8800" kabi matn; [r, g, b] massivini qaytaradi.`,cases:[S(`#ff8800`,[255,136,0]),S(`#000000`,[0,0,0]),S(`#ffffff`,[255,255,255]),S(`#1e90ff`,[30,144,255])],hint:`hex.slice(1, 3), slice(3, 5), slice(5, 7) — har birini parseInt(…, 16).`,solution:`function rgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}`},{level:3,text:`Sonni ikkilikka toString ISHLATMASDAN o'tkazing: 2 ga bo'lib, qoldiqlarni yig'ing.`,fn:`ikkilikQolda`,contract:`ikkilikQolda(n) — butun son (≥ 0); "1101" kabi matn qaytaradi.`,cases:[S(10,`1010`),S(0,`0`),S(1,`1`),S(13,`1101`),S(64,`1000000`)],hint:`while (n > 0): qoldiq n % 2 ni matnning OLDIGA qo'shing, n = Math.floor(n / 2). n = 0 ni alohida qaytaring.`,solution:`function ikkilikQolda(n) {
  if (n === 0) return "0";
  let s = "";
  while (n > 0) {
    s = (n % 2) + s;
    n = Math.floor(n / 2);
  }
  return s;
}`}]},{id:`mantiq`,title:`Mantiq`,short:`&&, ||, !, haqiqat jadvali, De Morgan, truthy/falsy, qisqa tutashuv`,why:`Har bir if — mantiqiy savol. «Login to'g'ri VA parol to'g'ri», «shanba YOKI yakshanba», «ism kiritilmagan bo'lsa — Mehmon». Mantiqni bilmasangiz, shartlar siz kutgandek ishlamaydi.`,idea:[`Uchta asosiy amal: && (VA) — ikkalasi ham rost bo'lsa rost; || (YOKI) — kamida bittasi rost bo'lsa rost; ! (EMAS) — rostni yolg'onga, yolg'onni rostga aylantiradi.`,`Haqiqat jadvali — barcha holatlar ro'yxati. Ikki qiymat uchun 4 ta holat bor. De Morgan qoidasi: !(a && b) = !a || !b va !(a || b) = !a && !b — «EMAS» qavs ichiga kirganda VA bilan YOKI almashadi.`,`JS'da har qanday qiymat shartda rost yoki yolg'on hisoblanadi. Yolg'on (falsy) — faqat 6 ta: false, 0, "", null, undefined, NaN. Qolgan hammasi — rost (truthy), hatto "0" va [] ham.`],rule:`a && b: a yolg'on bo'lsa — a, aks holda b. a || b: a rost bo'lsa — a, aks holda b. Chap tomon javobni hal qilsa, o'ng tomon umuman bajarilmaydi (qisqa tutashuv).`,calcs:[`rost VA yolg'on = yolg'on`,`rost YOKI yolg'on = rost`,`EMAS rost = yolg'on`,`!(rost VA yolg'on) = !rost YOKI !yolg'on = yolg'on YOKI rost = rost`,`Yosh 13 ≥ 12 (rost) VA bo'y 135 ≥ 140 (yolg'on) → yolg'on`],examples:[{title:`VA, YOKI, EMAS`,code:`console.log(true && false);
console.log(true || false);
console.log(!true);`,out:`false
true
false`},{title:`Haqiqat jadvali`,code:`for (const a of [true, false]) {
  for (const b of [true, false]) {
    console.log(a, b, a && b, a || b);
  }
}`,out:`true true true true
true false false true
false true false true
false false false false`},{title:`Truthy va falsy`,code:`console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean([]));`,out:`false
false
true
true`}],life:{title:`Attraksionga ruxsat`,text:`Attraksionga 12 yoshdan katta VA bo'yi kamida 140 sm bo'lganlar kiradi. YOKI kattalar bilan birga bo'lsa — ruxsat. 13 yoshli, bo'yi 135 sm o'quvchi otasi bilan keldi.`,code:`const yosh = 13;
const boy = 135;
const kattaBilan = true;
console.log(yosh >= 12 && boy >= 140);
console.log((yosh >= 12 && boy >= 140) || kattaBilan);`,out:`false
true`},ref:[[`a && b`,`VA — ikkalasi ham rost bo'lsa`],[`a || b`,`YOKI — kamida bittasi rost bo'lsa`],[`!a`,`EMAS — teskarisi`],[`!(a && b) === (!a || !b)`,`De Morgan qoidasi`],[`ism || "Mehmon"`,`bo'sh bo'lsa standart qiymat`],[`ball ?? 10`,`faqat null / undefined bo'lsa standart`]],pitfalls:[{text:`0 ham falsy: || bilan standart qiymat qo'ysangiz, haqiqiy 0 ball yo'qolib ketadi. Bunday joyda ?? ishlating — u faqat null va undefined da ishlaydi.`,code:`const ball = 0;
console.log(ball || 10);
console.log(ball ?? 10);`,out:`10
0`},{text:`&& va || doim true/false qaytarmaydi — ular operandlardan birining O'ZINI qaytaradi.`,code:`console.log("olma" && "nok");
console.log(0 || null);`,out:`nok
null`},{text:`Qisqa tutashuv: chap tomon javobni hal qilsa, o'ng tomon bajarilmaydi — undagi n++ ham ishlamaydi.`,code:`let n = 0;
false && n++;
true || n++;
console.log(n);`,out:`0`}],quiz:[{q:`Natija nima?`,code:`console.log(true && !false);`,options:[`true`,`false`,`undefined`,`1`],answer:0,why:`!false = true, demak true && true = true.`},{q:`Natija nima?`,code:`console.log(0 || "bo'sh");`,options:[`0`,`bo'sh`,`true`,`false`],answer:1,why:`0 — falsy, shuning uchun || o'ng tomonni qaytaradi.`},{q:`Natija nima?`,code:`console.log(!!"");`,options:[`true`,`false`,`""`,`undefined`],answer:1,why:`Bo'sh matn falsy. Ikki marta EMAS uni toza false ga aylantiradi.`},{q:`!(a || b) nimaga teng (De Morgan)?`,options:[`!a || !b`,`!a && !b`,`a && b`,`!a || b`],answer:1,why:`EMAS qavs ichiga kirganda YOKI VA ga almashadi: ikkalasi ham yolg'on bo'lishi kerak.`}],tasks:[{level:1,text:`Attraksionga ruxsat: yosh kamida 12 VA bo'y kamida 140 sm.`,fn:`ruxsat`,contract:`ruxsat(yosh, boy) — ikki son; true yoki false qaytaradi.`,cases:[S(13,150,!0),S(13,135,!1),S(10,150,!1),S(12,140,!0)],hint:`yosh >= 12 && boy >= 140`,solution:`function ruxsat(yosh, boy) {
  return yosh >= 12 && boy >= 140;
}`},{level:1,text:`Kun dam olish kunimi? "shanba" yoki "yakshanba" bo'lsa — true.`,fn:`damOlish`,contract:`damOlish(kun) — "dushanba" kabi matn; true yoki false qaytaradi.`,cases:[S(`shanba`,!0),S(`yakshanba`,!0),S(`dushanba`,!1),S(`juma`,!1)],hint:`kun === "shanba" || kun === "yakshanba"`,solution:`function damOlish(kun) {
  return kun === "shanba" || kun === "yakshanba";
}`},{level:2,text:`Yil kabisami? 4 ga bo'linsa VA 100 ga bo'linmasa — kabisa; YOKI 400 ga bo'linsa — ham kabisa.`,fn:`kabisa`,contract:`kabisa(yil) — butun son; true yoki false qaytaradi.`,cases:[S(2024,!0),S(2023,!1),S(1900,!1),S(2e3,!0)],hint:`(yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0`,solution:`function kabisa(yil) {
  return (yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0;
}`},{level:2,text:`«Faqat bittasi» (XOR): a va b dan aynan bittasi rost bo'lsa true, ikkalasi ham bir xil bo'lsa false.`,fn:`faqatBittasi`,contract:`faqatBittasi(a, b) — ikki true/false; true yoki false qaytaradi.`,cases:[S(!0,!1,!0),S(!1,!0,!0),S(!0,!0,!1),S(!1,!1,!1)],hint:`(a || b) && !(a && b) — yoki oddiyroq: a !== b.`,solution:`function faqatBittasi(a, b) {
  return (a || b) && !(a && b);
}`},{level:3,text:`Qiymat shartda rost hisoblanadimi? "truthy" yoki "falsy" qaytaring.`,fn:`toifa`,contract:`toifa(x) — istalgan qiymat; "truthy" yoki "falsy" qaytaradi.`,cases:[S(0,`falsy`),S(`0`,`truthy`),S(``,`falsy`),S([],`truthy`),S(null,`falsy`),S(-1,`truthy`)],hint:`x ? "truthy" : "falsy" — shart o'zi qiymatni rost/yolg'onga aylantiradi.`,solution:`function toifa(x) {
  return x ? "truthy" : "falsy";
}`}]}],w=[{id:`sonlar`,title:`Sonlar va yaxlitlash`,short:`Butun va o'nli sonlar, Math.round, floor, ceil, toFixed`,why:`Narx, ball, foiz, o'lcham — dasturdagi deyarli har bir son yaxlitlanadi. Qaysi usul qachon kerakligini bilmasangiz, savatda «3.3333 ta quti» chiqib qoladi.`,idea:[`JavaScript'da butun son (5) ham, o'nli son (5.75) ham bitta turda — number. Ular bilan bir xil amallar qilinadi.`,`Yaxlitlashning to'rt usuli bor va ularning har biri boshqa natija beradi. Eng yaqin butun songa — round, pastga — floor, yuqoriga — ceil, kasr qismini shunchaki kesish — trunc.`,`Pul yoki o'lchovni chiroyli ko'rsatish uchun toFixed(2) ishlatiladi — u verguldan keyin aniq 2 ta raqam qoldiradi, lekin natijasi SON emas, MATN bo'ladi.`],rule:`Yaxlitlashda kasr qismiga qaraladi: 0.5 va undan katta bo'lsa — yuqoriga, kichik bo'lsa — pastga. Pastga yaxlitlash (floor) doim kichik tomonga, yuqoriga (ceil) doim katta tomonga ketadi.`,calcs:[`4.6 → eng yaqini 5 (kasr 0.6 ≥ 0.5)`,`4.4 → eng yaqini 4 (kasr 0.4 < 0.5)`,`4.9 → pastga 4, yuqoriga 5`,`4.1 → pastga 4, yuqoriga 5`,`−4.5 → pastga −5 (sonlar o'qida chaproqqa), kesilsa −4`],examples:[{title:`To'rt xil yaxlitlash`,code:`const x = 4.6;
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.trunc(x));`,out:`5
4
5
4`},{title:`Manfiy sonda farq ko'rinadi`,code:`const y = -4.6;
console.log(Math.floor(y));
console.log(Math.trunc(y));`,out:`-5
-4`},{title:`Verguldan keyin 2 ta raqam`,code:`const narx = 12.5;
console.log(narx.toFixed(2));
console.log((7).toFixed(2));`,out:`12.50
7.00`}],life:{title:`Nechta avtobus kerak?`,text:`53 o'quvchi ekskursiyaga boradi, bitta avtobusga 20 kishi sig'adi. 53 / 20 = 2.65 — lekin 2.65 ta avtobus bo'lmaydi. Hammasi sig'ishi uchun YUQORIGA yaxlitlaymiz.`,code:`const oquvchi = 53;
const joy = 20;
console.log(oquvchi / joy);
console.log(Math.ceil(oquvchi / joy));`,out:`2.65
3`},ref:[[`Math.round(x)`,`eng yaqin butun songa`],[`Math.floor(x)`,`pastga (kichik tomonga)`],[`Math.ceil(x)`,`yuqoriga (katta tomonga)`],[`Math.trunc(x)`,`kasr qismini kesib tashlaydi`],[`x.toFixed(n)`,`verguldan keyin n ta raqam — MATN qaytaradi`],[`Number.isInteger(x)`,`butun sonmi — true / false`]],pitfalls:[{text:`O'nli sonlar kompyuterda aniq saqlanmaydi: 0.1 + 0.2 aynan 0.3 emas. Ko'rsatishda toFixed yoki Math.round bilan yaxlitlang.`,code:`console.log(0.1 + 0.2);`,out:`0.30000000000000004`},{text:`toFixed MATN qaytaradi. Unga son qo'shsangiz, qo'shish emas, yopishtirish bo'ladi.`,code:`const a = (2.5).toFixed(1);
console.log(a + 1);`,out:`2.51`},{text:`Manfiy sonda floor va trunc har xil: Math.floor(-2.5) = -3, Math.trunc(-2.5) = -2.`}],quiz:[{q:`Natija nima?`,code:`console.log(Math.floor(7.9));`,options:[`8`,`7`,`7.9`,`0.9`],answer:1,why:`floor doim pastga yaxlitlaydi — kasr qismi qanchalik katta bo'lmasin.`},{q:`Natija nima?`,code:`console.log(Math.ceil(2.01));`,options:[`2`,`2.01`,`3`,`2.1`],answer:2,why:`ceil doim yuqoriga: 2 dan sal katta bo'lsa ham 3 bo'ladi.`},{q:`Natija nima?`,code:`console.log(Math.round(3.5));`,options:[`3`,`4`,`3.5`,`35`],answer:1,why:`Kasr qismi 0.5 — bu holda round yuqoriga yaxlitlaydi.`},{q:`(9.456).toFixed(1) qanday turdagi qiymat qaytaradi?`,options:[`son (number)`,`matn (string)`,`true / false`,`massiv`],answer:1,why:`toFixed doim matn qaytaradi — "9.5". Hisoblashni davom ettirish uchun Number() bilan songa aylantiriladi.`}],tasks:[{level:1,text:`Do'konda narxlar so'mda butun bo'lishi kerak. Narxni eng yaqin butun songa yaxlitlang.`,fn:`yaxlitla`,contract:`yaxlitla(x) — x son; eng yaqin butun sonni qaytaradi.`,cases:[S(4.6,5),S(4.4,4),S(10,10),S(.5,1)],hint:`Math.round(x) ni qaytaring.`,solution:`function yaxlitla(x) {
  return Math.round(x);
}`},{level:1,text:`Narxni verguldan keyin aniq 2 ta raqam bilan matn ko'rinishida qaytaring.`,fn:`narxMatn`,contract:`narxMatn(x) — x son; "5.00" kabi matn qaytaradi.`,cases:[S(5,`5.00`),S(3.456,`3.46`),S(.30000000000000004,`0.30`)],hint:`x.toFixed(2)`,solution:`function narxMatn(x) {
  return x.toFixed(2);
}`},{level:2,text:"Bir qutiga `sigim` ta narsa sig'adi. `soni` ta narsa uchun nechta quti kerak?",fn:`qutilar`,contract:`qutilar(soni, sigim) — ikkalasi butun son; kerakli qutilar sonini qaytaradi.`,cases:[S(12,5,3),S(10,5,2),S(0,5,0),S(1,10,1)],hint:`Bo'ling va YUQORIGA yaxlitlang — oxirgi quti chala bo'lsa ham kerak.`,solution:`function qutilar(soni, sigim) {
  return Math.ceil(soni / sigim);
}`},{level:2,text:`Sonni verguldan keyin 1 ta raqamgacha yaxlitlang, lekin natija SON bo'lsin (matn emas).`,fn:`birXona`,contract:`birXona(x) — x son; masalan 3.14159 → 3.1 (son) qaytaradi.`,cases:[S(3.14159,3.1),S(2.25,2.3),S(7,7),S(-1.26,-1.3)],hint:`10 ga ko'paytiring, Math.round qiling, yana 10 ga bo'ling.`,solution:`function birXona(x) {
  return Math.round(x * 10) / 10;
}`},{level:3,text:`Son butunmi? Butun bo'lsa true, kasr qismi bo'lsa false qaytaring.`,fn:`butunmi`,contract:`butunmi(x) — x son; true yoki false qaytaradi.`,cases:[S(5,!0),S(5.5,!1),S(-3,!0),S(.30000000000000004,!1)],hint:`Number.isInteger(x) — yoki x % 1 === 0.`,solution:`function butunmi(x) {
  return Number.isInteger(x);
}`}]},{id:`tartib`,title:`Amallar tartibi va qavslar`,short:`Avval ** , keyin * / % , oxirida + − ; qavs hammasidan kuchli`,why:`O'rtacha ball, narx hisobi, formula — bitta qavs unutilsa, kod xato bermaydi, lekin noto'g'ri javob chiqaradi. Bunday xatoni topish eng qiyin.`,idea:[`Kompyuter ham matematika darsidagi qoida bilan hisoblaydi: ko'paytirish va bo'lish qo'shish va ayirishdan OLDIN bajariladi.`,`Bir xil darajadagi amallar chapdan o'ngga ketadi: 10 − 4 − 3 = (10 − 4) − 3 = 3.`,`Daraja (**) eng kuchli va o'ngdan chapga ketadi. Qavs esa har qanday tartibni o'zgartiradi — shubha bo'lsa, qavs qo'ying.`],rule:`Tartib: 1) qavs ichi, 2) daraja **, 3) ko'paytirish *, bo'lish /, qoldiq %, 4) qo'shish +, ayirish −. Bir darajadagilar chapdan o'ngga.`,calcs:[`2 + 3 · 4 = 2 + 12 = 14`,`(2 + 3) · 4 = 5 · 4 = 20`,`10 − 4 − 3 = 6 − 3 = 3`,`20 / 2 · 5 = 10 · 5 = 50 (chapdan o'ngga)`,`(8 + 6) / 2 = 7, lekin 8 + 6 / 2 = 11`],examples:[{title:`Qavs natijani o'zgartiradi`,code:`console.log(2 + 3 * 4);
console.log((2 + 3) * 4);`,out:`14
20`},{title:`Chapdan o'ngga`,code:`console.log(10 - 4 - 3);
console.log(20 / 2 * 5);`,out:`3
50`},{title:`Daraja — o'ngdan chapga`,code:`console.log(2 ** 3);
console.log(2 ** 3 ** 2);`,out:`8
512`}],life:{title:`O'rtacha baho`,text:`Uchta baho: 5, 4 va 3. O'rtachasi — yig'indini 3 ga bo'lish. Qavssiz yozilsa, faqat oxirgi baho bo'linib ketadi.`,code:`const a = 5, b = 4, c = 3;
console.log(a + b + c / 3);
console.log((a + b + c) / 3);`,out:`10
4`},ref:[[`( )`,`qavs — eng birinchi bajariladi`],[`a ** b`,`daraja: a ning b-darajasi`],[`* / %`,`ko'paytirish, bo'lish, qoldiq — bir darajada`],[`+ -`,`qo'shish va ayirish — eng oxirida`]],pitfalls:[{text:`O'rtacha hisoblashda qavsni unutish — eng ko'p uchraydigan xato.`,code:`console.log(8 + 6 / 2);`,out:`11`},{text:`Matn bilan + birinchi uchragan joydan boshlab yopishtiradi: chapdan o'ngga hisoblanadi.`,code:`console.log(1 + 2 + "3");
console.log("1" + 2 + 3);`,out:`33
123`},{text:`Manfiy sonni darajaga ko'tarishda qavs majburiy: -2 ** 2 xato beradi, (-2) ** 2 = 4.`}],quiz:[{q:`Natija nima?`,code:`console.log(6 + 4 / 2);`,options:[`5`,`8`,`10`,`3`],answer:1,why:`Avval bo'lish: 4 / 2 = 2, keyin 6 + 2 = 8.`},{q:`Natija nima?`,code:`console.log((6 + 4) / 2);`,options:[`5`,`8`,`10`,`7`],answer:0,why:`Qavs birinchi: 10 / 2 = 5.`},{q:`Natija nima?`,code:`console.log(3 * 2 ** 2);`,options:[`36`,`12`,`10`,`18`],answer:1,why:`Daraja ko'paytirishdan kuchli: 2 ** 2 = 4, keyin 3 * 4 = 12.`},{q:`Natija nima?`,code:`console.log(2 + 2 + "2");`,options:[`6`,`222`,`42`,`24`],answer:2,why:`Chapdan o'ngga: 2 + 2 = 4 (son), keyin 4 + "2" = "42" (matn).`}],tasks:[{level:1,text:`Ikki sonning o'rtachasini qaytaring.`,fn:`ortacha2`,contract:`ortacha2(a, b) — ikki son; ularning o'rtachasini qaytaradi.`,cases:[S(2,4,3),S(5,6,5.5),S(-2,2,0),S(10,10,10)],hint:`Avval qo'shing, keyin 2 ga bo'ling — qavs bilan.`,solution:`function ortacha2(a, b) {
  return (a + b) / 2;
}`},{level:1,text:`To'rtburchak perimetri: ikki tomoni yig'indisining 2 baravari.`,fn:`perimetr`,contract:`perimetr(a, b) — tomonlar; perimetrni qaytaradi.`,cases:[S(3,4,14),S(5,5,20),S(1,10,22)],hint:`2 * (a + b)`,solution:`function perimetr(a, b) {
  return 2 * (a + b);
}`},{level:2,text:`Selsiyni Farengeytga o'tkazing: F = C · 9 / 5 + 32.`,fn:`farengeyt`,contract:`farengeyt(c) — Selsiy darajasi; Farengeytni qaytaradi.`,cases:[S(0,32),S(100,212),S(-40,-40),S(20,68)],hint:`Formulani o'zidek yozing — tartib to'g'ri chiqadi: c * 9 / 5 + 32.`,solution:`function farengeyt(c) {
  return c * 9 / 5 + 32;
}`},{level:2,text:`Uchta bahoning o'rtachasini qaytaring.`,fn:`ortacha3`,contract:`ortacha3(a, b, c) — uchta son; o'rtachasini qaytaradi.`,cases:[S(1,2,3,2),S(10,20,30,20),S(2,4,9,5),S(5,5,5,5)],hint:`(a + b + c) / 3 — qavssiz faqat c bo'linadi.`,solution:`function ortacha3(a, b, c) {
  return (a + b + c) / 3;
}`},{level:3,text:`Xarid narxi: mahsulot narxi × soni, ustiga yetkazib berish narxi qo'shiladi.`,fn:`xarid`,contract:`xarid(narx, soni, yetkazish) — uchta son; umumiy summani qaytaradi.`,cases:[S(1e3,3,500,3500),S(25e3,2,0,5e4),S(0,5,2e3,2e3)],hint:`narx * soni + yetkazish — ko'paytirish birinchi bajariladi.`,solution:`function xarid(narx, soni, yetkazish) {
  return narx * soni + yetkazish;
}`}]},{id:`qoldiq`,title:`Qoldiq: % amali`,short:`Juft/toq, karralilik, oxirgi raqam, aylanib qaytish`,why:`% — dasturchining eng sevimli amali: juft qatorlarni bo'yash, har 3-elementni tanlash, hafta kunlarini aylantirish, FizzBuzz — hammasi qoldiq bilan.`,idea:[`a % b — a ni b ga bo'lgandagi QOLDIQ. Bo'linmaning o'zi emas, ortib qolgan qismi.`,`Qoldiq 0 bo'lsa — a soni b ga qoldiqsiz bo'linadi (karrali). Juftlik tekshiruvi shundan: n % 2 === 0.`,`Qoldiq doim 0 dan b − 1 gacha bo'ladi (musbat sonlarda). Shuning uchun % «aylanib qaytish» uchun qulay: soat 23 dan keyin 0, yakshanbadan keyin dushanba.`],rule:`a = b · q + r, bunda r — qoldiq va 0 ≤ r < b. Masalan 17 = 5 · 3 + 2, demak 17 ni 5 ga bo'lganda qoldiq 2.`,calcs:[`17 ÷ 5 = 3, qoldiq 2 → 17 % 5 = 2`,`20 ÷ 4 = 5, qoldiq 0 → 20 % 4 = 0 (karrali)`,`7 ÷ 2 = 3, qoldiq 1 → 7 toq`,`3 ÷ 10 = 0, qoldiq 3 → kichik son o'zi qoladi`,`1234 ÷ 10 = 123, qoldiq 4 → oxirgi raqam`],examples:[{title:`Qoldiq`,code:`console.log(17 % 5);
console.log(20 % 4);
console.log(3 % 10);`,out:`2
0
3`},{title:`Juft yoki toq`,code:`for (let n = 1; n <= 4; n++) {
  console.log(n, n % 2 === 0 ? "juft" : "toq");
}`,out:`1 toq
2 juft
3 toq
4 juft`},{title:`Oxirgi raqam`,code:`console.log(1234 % 10);
console.log(1234 % 100);`,out:`4
34`}],life:{title:`Hafta kuni aylanib qaytadi`,text:`Bugun juma (kunlarni 0 dan sanaymiz: 0 — dushanba, 4 — juma). 10 kundan keyin qaysi kun? Kunlar 7 tadan keyin qaytadi — shuning uchun % 7.`,code:`const kunlar = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
const bugun = 4;
console.log(kunlar[(bugun + 10) % 7]);`,out:`Du`},ref:[[`a % b`,`a ni b ga bo'lgandagi qoldiq`],[`n % 2 === 0`,`n juftmi`],[`n % 2 !== 0`,`n toqmi (manfiyda ham ishlaydi)`],[`a % b === 0`,`a soni b ga karralimi`],[`n % 10`,`oxirgi raqam`],[`(i + k) % n`,`n ta joy bo'ylab aylanib qaytish`]],pitfalls:[{text:`Manfiy sonning qoldig'i ham manfiy chiqadi. Shuning uchun toqlikni n % 2 === 1 bilan emas, n % 2 !== 0 bilan tekshiring.`,code:`console.log(-7 % 2);
console.log(-7 % 2 === 1);`,out:`-1
false`},{text:`0 ga bo'lishdagi qoldiq — NaN (son emas). Bo'luvchi 0 bo'lishi mumkin bo'lsa, avval tekshiring.`,code:`console.log(5 % 0);`,out:`NaN`},{text:`% — foiz EMAS. 50 % 3 «50 foiz» degani emas, 50 ni 3 ga bo'lgandagi qoldiq (2).`}],quiz:[{q:`Natija nima?`,code:`console.log(23 % 4);`,options:[`5`,`3`,`5.75`,`0`],answer:1,why:`23 = 4 · 5 + 3 — qoldiq 3.`},{q:`Natija nima?`,code:`console.log(30 % 6);`,options:[`5`,`6`,`0`,`1`],answer:2,why:`30 soni 6 ga qoldiqsiz bo'linadi.`},{q:`Natija nima?`,code:`console.log(4 % 9);`,options:[`0`,`4`,`9`,`5`],answer:1,why:`4 soni 9 dan kichik — 9 ga bir marta ham sig'maydi, hammasi qoldiq.`},{q:`Qaysi shart n soni 3 ga karrali ekanini tekshiradi?`,options:[`n / 3 === 0`,`n % 3 === 0`,`n % 3 === 3`,`n * 3 === 0`],answer:1,why:`Karrali — qoldiq 0.`}],tasks:[{level:1,text:`Son juft bo'lsa true, toq bo'lsa false qaytaring.`,fn:`juftmi`,contract:`juftmi(n) — butun son; true yoki false qaytaradi.`,cases:[S(4,!0),S(7,!1),S(0,!0),S(-4,!0),S(-3,!1)],hint:`n % 2 === 0`,solution:`function juftmi(n) {
  return n % 2 === 0;
}`},{level:1,text:`a soni b ga qoldiqsiz bo'linadimi?`,fn:`karralimi`,contract:`karralimi(a, b) — butun sonlar, b ≠ 0; true yoki false qaytaradi.`,cases:[S(12,3,!0),S(10,4,!1),S(0,5,!0),S(7,7,!0)],hint:`a % b === 0`,solution:`function karralimi(a, b) {
  return a % b === 0;
}`},{level:2,text:`Sonning oxirgi raqamini qaytaring. Manfiy sonda ham raqam musbat bo'lsin.`,fn:`oxirgiRaqam`,contract:`oxirgiRaqam(n) — butun son; 0–9 orasidagi raqamni qaytaradi.`,cases:[S(1234,4),S(7,7),S(90,0),S(-15,5)],hint:`Math.abs(n) % 10 — avval minusni olib tashlang.`,solution:`function oxirgiRaqam(n) {
  return Math.abs(n) % 10;
}`},{level:2,text:"Hafta kuni (0 — dushanba … 6 — yakshanba) berilgan. `qoshish` kundan keyin qaysi kun bo'ladi?",fn:`keyingiKun`,contract:`keyingiKun(kun, qoshish) — 0–6 va manfiy bo'lmagan son; 0–6 qaytaradi.`,cases:[S(5,3,1),S(0,7,0),S(6,15,0),S(2,0,2)],hint:`(kun + qoshish) % 7`,solution:`function keyingiKun(kun, qoshish) {
  return (kun + qoshish) % 7;
}`},{level:3,text:`FizzBuzz: son 3 ga ham, 5 ga ham bo'linsa "FizzBuzz", faqat 3 ga — "Fizz", faqat 5 ga — "Buzz", aks holda sonning o'zini qaytaring.`,fn:`fizzBuzz`,contract:`fizzBuzz(n) — musbat butun son; "Fizz", "Buzz", "FizzBuzz" yoki n ni qaytaradi.`,cases:[S(3,`Fizz`),S(5,`Buzz`),S(15,`FizzBuzz`),S(7,7),S(30,`FizzBuzz`)],hint:`Avval ikkalasini (n % 15 === 0) tekshiring — aks holda 15 «Fizz» bo'lib qoladi.`,solution:`function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}`}]},{id:`bolish`,title:`Butun bo'linish`,short:`Math.floor(a / b): soat va daqiqa, raqamlarni ajratish`,why:`Daqiqani soat:daqiqaga, sekundni taymerga, sonni raqamlarga ajratish — hammasida «necha marta to'liq sig'adi» savoli bor. Bu — butun bo'linish.`,idea:[`JavaScript'da / doim aniq javob beradi: 7 / 2 = 3.5. Butun qismi kerak bo'lsa, natijani pastga yaxlitlaymiz: Math.floor(7 / 2) = 3.`,`Butun bo'linma va qoldiq doim juft ishlaydi: 125 daqiqa = Math.floor(125 / 60) soat va 125 % 60 daqiqa.`,`Sonni raqamlarga ajratish: n % 10 — oxirgi raqam, Math.floor(n / 10) — oxirgi raqamsiz qolgan son. Shuni takrorlab barcha raqamlar olinadi.`],rule:`a = b · q + r: q — butun bo'linma (necha marta to'liq sig'adi), r — qoldiq. 125 = 60 · 2 + 5.`,calcs:[`125 daqiqa = 60 · 2 + 5 → 2 soat 5 daqiqa`,`3700 sekund = 3600 · 1 + 100 → 1 soat, qolgan 100 s = 1 daqiqa 40 s`,`345 → 345 % 10 = 5, Math.floor(345 / 10) = 34`,`34 → 34 % 10 = 4, Math.floor(34 / 10) = 3`,`100 so'mni 3 kishiga: har biriga 33, ortib qoladi 1`],examples:[{title:`Bo'lish va butun bo'linish`,code:`console.log(7 / 2);
console.log(Math.floor(7 / 2));`,out:`3.5
3`},{title:`Daqiqadan soat:daqiqa`,code:`const jami = 125;
const soat = Math.floor(jami / 60);
const daqiqa = jami % 60;
console.log(soat, daqiqa);`,out:`2 5`},{title:`Sonni raqamlarga ajratish`,code:`let n = 345;
while (n > 0) {
  console.log(n % 10);
  n = Math.floor(n / 10);
}`,out:`5
4
3`}],life:{title:`Taymer: 01:05`,text:`O'yin taymeri sekundlarda sanaydi, ekranga esa «daqiqa:sekund» chiqishi kerak. Bir xonali sonning oldiga 0 qo'shish uchun padStart.`,code:`const s = 65;
const m = Math.floor(s / 60);
const ss = String(s % 60).padStart(2, "0");
console.log(m + ":" + ss);`,out:`1:05`},ref:[[`Math.floor(a / b)`,`butun bo'linma (musbat sonlar uchun)`],[`a % b`,`qoldiq`],[`Math.trunc(a / b)`,`kasrni kesish — manfiyda floor'dan farq qiladi`],[`String(n).padStart(2, "0")`,`5 → "05"`]],pitfalls:[{text:`Manfiy sonda floor «pastga» — ya'ni noldan uzoqlashadi. Kasrni shunchaki kesish uchun trunc.`,code:`console.log(Math.floor(-7 / 2));
console.log(Math.trunc(-7 / 2));`,out:`-4
-3`},{text:`parseInt ham butun qismini oladi, lekin u MATN uchun. Son bilan Math.floor yoki Math.trunc ishlating.`},{text:`Raqamlarni ajratish sikli 0 sonida birorta ham marta ishlamaydi — 0 ni alohida tekshiring.`}],quiz:[{q:`Natija nima?`,code:`console.log(Math.floor(17 / 5));`,options:[`3.4`,`3`,`2`,`4`],answer:1,why:`17 / 5 = 3.4, pastga yaxlitlansa 3.`},{q:`200 daqiqa necha soat va necha daqiqa?`,code:`console.log(Math.floor(200 / 60), 200 % 60);`,options:[`3 20`,`3 33`,`2 80`,`3.33 0`],answer:0,why:`60 · 3 = 180, qoldiq 20.`},{q:`Natija nima?`,code:`console.log(Math.floor(4567 / 10) % 10);`,options:[`7`,`6`,`456`,`45`],answer:1,why:`4567 / 10 → 456, uning oxirgi raqami 6 — ya'ni o'nliklar xonasi.`}],tasks:[{level:1,text:`Daqiqalarni to'liq soatga aylantiring (ortgan daqiqalar hisobga olinmaydi).`,fn:`soatlar`,contract:`soatlar(daqiqa) — butun son; to'liq soatlar sonini qaytaradi.`,cases:[S(125,2),S(59,0),S(60,1),S(600,10)],hint:`Math.floor(daqiqa / 60)`,solution:`function soatlar(daqiqa) {
  return Math.floor(daqiqa / 60);
}`},{level:2,text:`Daqiqalarni "s:dd" ko'rinishidagi matnga aylantiring — daqiqa doim 2 xonali.`,fn:`soatMatn`,contract:`soatMatn(daqiqa) — butun son; masalan 125 → "2:05".`,cases:[S(125,`2:05`),S(60,`1:00`),S(59,`0:59`),S(600,`10:00`)],hint:`Soat — Math.floor(d / 60), daqiqa — d % 60; String(...).padStart(2, "0").`,solution:`function soatMatn(daqiqa) {
  const s = Math.floor(daqiqa / 60);
  const d = String(daqiqa % 60).padStart(2, "0");
  return s + ":" + d;
}`},{level:2,text:`Sonning o'nliklar xonasidagi raqamni qaytaring (345 → 4).`,fn:`onlik`,contract:`onlik(n) — manfiy bo'lmagan butun son; 0–9 qaytaradi.`,cases:[S(345,4),S(7,0),S(90,9),S(1e3,0)],hint:`Math.floor(n / 10) % 10`,solution:`function onlik(n) {
  return Math.floor(n / 10) % 10;
}`},{level:3,text:`Sonning raqamlari yig'indisini qaytaring (123 → 1 + 2 + 3 = 6).`,fn:`raqamlarYigindisi`,contract:`raqamlarYigindisi(n) — manfiy bo'lmagan butun son; raqamlar yig'indisini qaytaradi.`,cases:[S(123,6),S(9,9),S(1e3,1),S(0,0),S(9999,36)],hint:`while (n > 0): yig'indiga n % 10 qo'shing, n = Math.floor(n / 10).`,solution:`function raqamlarYigindisi(n) {
  let s = 0;
  while (n > 0) {
    s += n % 10;
    n = Math.floor(n / 10);
  }
  return s;
}`},{level:3,text:`Pulni odamlarga teng bo'ling: har biriga qancha tegadi va qancha ortib qoladi — [har biri, ortgan] massiv qaytaring.`,fn:`bolishPul`,contract:`bolishPul(summa, odam) — butun sonlar, odam > 0; [har biri, ortgan] qaytaradi.`,cases:[S(100,3,[33,1]),S(10,5,[2,0]),S(7,10,[0,7])],hint:`[Math.floor(summa / odam), summa % odam]`,solution:`function bolishPul(summa, odam) {
  return [Math.floor(summa / odam), summa % odam];
}`}]},{id:`taqqoslash`,title:`Taqqoslash va oraliqlar`,short:`< > <= >= === , «x a va b orasidami», baho shkalasi`,why:`Har bir if ichida taqqoslash bor: yosh yetarlimi, ball qaysi bahoga to'g'ri keladi, o'yinchi maydondan chiqdimi. Oraliqni noto'g'ri yozish — eng sezilmas xatolardan.`,idea:[`Taqqoslash natijasi doim true yoki false. Uni o'zgaruvchiga saqlash ham, if ichida ishlatish ham mumkin.`,`Chegara muhim: < chegarani o'z ichiga olmaydi, <= oladi. «18 yoshdan katta» va «18 va undan katta» — har xil shart.`,`Matematikada 1 < x < 5 deb yoziladi, kodda esa IKKI shart kerak: 1 < x && x < 5.`],rule:`x soni [a; b] oraliqda — a ≤ x ≤ b. Chegaralar kirsa ≤, kirmasa <. Ikki tomonli shart — ikkita alohida taqqoslash va ular orasida «va».`,calcs:[`7 ∈ [1; 10]? 1 ≤ 7 ✓ va 7 ≤ 10 ✓ → ha`,`10 ∈ [1; 10]? 10 ≤ 10 ✓ → ha (chegara kiradi)`,`10 ∈ [1; 10)? 10 < 10 ✗ → yo'q`,`86 ball: 86 ≥ 86 → «5»`,`85 ball: 85 ≥ 86 ✗, 85 ≥ 71 ✓ → «4»`],examples:[{title:`Taqqoslash natijasi — true / false`,code:`console.log(7 > 3);
console.log(5 <= 5);
console.log(5 < 5);`,out:`true
true
false`},{title:`Oraliq: ikkita shart`,code:`const x = 7;
console.log(x >= 1 && x <= 10);
console.log(x >= 8 && x <= 10);`,out:`true
false`},{title:`=== qiymat bilan birga turini ham tekshiradi`,code:`console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== 6);`,out:`true
false
true`}],life:{title:`Ballni bahoga aylantirish`,text:`Test ballidan baho: 86 va undan yuqori — 5, 71–85 — 4, 56–70 — 3, qolgani — 2. Shartlarni yuqoridan pastga tekshirsak, har birida bitta chegara yetadi.`,code:`function baho(ball) {
  if (ball >= 86) return 5;
  if (ball >= 71) return 4;
  if (ball >= 56) return 3;
  return 2;
}
console.log(baho(90), baho(71), baho(40));`,out:`5 4 2`},ref:[[`a < b , a > b`,`qat'iy kichik / katta`],[`a <= b , a >= b`,`kichik yoki teng / katta yoki teng`],[`a === b`,`teng (turi ham bir xil)`],[`a !== b`,`teng emas`],[`a <= x && x <= b`,`x [a; b] oraliqda`],[`x < a || x > b`,`x oraliqdan tashqarida`]],pitfalls:[{text:`1 < x < 5 kodda ishlamaydi: avval 1 < 10 → true, keyin true < 5 → 1 < 5 → true. Natija x = 10 da ham true!`,code:`const x = 10;
console.log(1 < x < 5);
console.log(1 < x && x < 5);`,out:`true
false`},{text:`Matnlar harfma-harf solishtiriladi: "10" < "9", chunki "1" belgisi "9" dan oldin keladi. Kiritilgan qiymatni avval Number() bilan songa aylantiring.`,code:`console.log("10" < "9");`,out:`true`},{text:`== turini o'zgartirib solishtiradi va kutilmagan natija beradi (0 == "" → true). Doim === ishlating.`}],quiz:[{q:`Natija nima?`,code:`console.log(10 >= 10);`,options:[`true`,`false`,`10`,`xato`],answer:0,why:`>= — katta YOKI teng. 10 ga 10 teng.`},{q:`x = 0 bo'lsa, natija nima?`,code:`const x = 0;
console.log(x > 0 && x < 10);`,options:[`true`,`false`,`0`,`10`],answer:1,why:`0 > 0 — false, chunki > chegarani o'z ichiga olmaydi.`},{q:`«yosh 13 dan 19 gacha (ikkalasi ham kiradi)» qanday yoziladi?`,options:[`13 <= yosh <= 19`,`yosh >= 13 && yosh <= 19`,`yosh > 13 && yosh < 19`,`yosh >= 13 || yosh <= 19`],answer:1,why:`Ikkita alohida shart va «va» (&&). || bo'lsa har qanday son o'tib ketadi.`},{q:`Natija nima?`,code:`console.log(7 === "7");`,options:[`true`,`false`,`7`,`undefined`],answer:1,why:`=== turini ham tekshiradi: son va matn — har xil tur.`}],tasks:[{level:1,text:`x soni a dan b gacha oraliqdami (chegaralar ham kiradi)?`,fn:`oraliqda`,contract:`oraliqda(x, a, b) — sonlar, a ≤ b; true yoki false qaytaradi.`,cases:[S(5,1,10,!0),S(1,1,10,!0),S(10,1,10,!0),S(11,1,10,!1),S(0,1,10,!1)],hint:`x >= a && x <= b`,solution:`function oraliqda(x, a, b) {
  return x >= a && x <= b;
}`},{level:1,text:`Math.max ishlatmasdan ikki sonning kattasini qaytaring.`,fn:`kattasi`,contract:`kattasi(a, b) — ikki son; kattasini qaytaradi.`,cases:[S(3,7,7),S(7,3,7),S(-1,-5,-1),S(4,4,4)],hint:`a > b bo'lsa a, aks holda b — ternar: a > b ? a : b.`,solution:`function kattasi(a, b) {
  return a > b ? a : b;
}`},{level:2,text:`Yosh o'smirlik davridami (13 dan 19 gacha, ikkalasi ham kiradi)?`,fn:`osmirmi`,contract:`osmirmi(yosh) — butun son; true yoki false qaytaradi.`,cases:[S(12,!1),S(13,!0),S(19,!0),S(20,!1),S(16,!0)],hint:`yosh >= 13 && yosh <= 19`,solution:`function osmirmi(yosh) {
  return yosh >= 13 && yosh <= 19;
}`},{level:2,text:`Ballni bahoga aylantiring: 86+ → 5, 71–85 → 4, 56–70 → 3, qolgani → 2.`,fn:`baho`,contract:`baho(ball) — 0–100 butun son; 2, 3, 4 yoki 5 qaytaradi.`,cases:[S(100,5),S(86,5),S(85,4),S(71,4),S(70,3),S(56,3),S(55,2),S(0,2)],hint:`Yuqoridan pastga: if (ball >= 86) return 5; keyin >= 71, keyin >= 56.`,solution:`function baho(ball) {
  if (ball >= 86) return 5;
  if (ball >= 71) return 4;
  if (ball >= 56) return 3;
  return 2;
}`},{level:3,text:`Sonni oraliqqa «qisib» qo'ying: min dan kichik bo'lsa min, max dan katta bo'lsa max, aks holda o'zi. (O'yinda o'yinchi maydondan chiqib ketmasligi uchun.)`,fn:`qis`,contract:`qis(x, min, max) — sonlar, min ≤ max; oraliqdagi sonni qaytaradi.`,cases:[S(15,0,10,10),S(-3,0,10,0),S(5,0,10,5),S(0,0,10,0)],hint:`Ikki if: x < min bo'lsa min, x > max bo'lsa max. Yoki Math.min(Math.max(x, min), max).`,solution:`function qis(x, min, max) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}`}]},{id:`foiz`,title:`Foiz`,short:`Sonning foizi, chegirma, ulush, progress chizig'i`,why:`Chegirma, soliq, test natijasi, yuklanish chizig'i — foiz kundalik dasturlarda hamma joyda. Formulani bilsangiz, uchtasi ham bitta qatorda yoziladi.`,idea:[`Foiz — yuzdan bir ulush: 1% = 1/100. Sonning p foizi — x · p / 100.`,`Chegirmadan keyingi narx: narxdan chegirma foizini ayiramiz. Ustama (soliq) bo'lsa — qo'shamiz.`,`«a soni b ning necha foizi?» — a / b · 100. Odatda natija yaxlitlanadi: 2 dan 3 ta — 66.666…% → 67%.`],rule:`x ning p% i = x · p / 100. Chegirmali narx = x − x · p / 100. a soni b ning (a / b) · 100 foizini tashkil qiladi.`,calcs:[`200 ning 15% i = 200 · 15 / 100 = 30`,`80 000 so'm, 25% chegirma: 80 000 − 20 000 = 60 000`,`30 savoldan 24 tasi to'g'ri: 24 / 30 · 100 = 80%`,`5 000 so'm + 12% QQS: 5 000 + 600 = 5 600`,`1 dan 3 ta: 33.33…% → yaxlitlansa 33%`],examples:[{title:`Sonning foizi`,code:`const narx = 200;
console.log(narx * 15 / 100);`,out:`30`},{title:`Chegirma`,code:`const narx = 80000;
const chegirma = 25;
console.log(narx - narx * chegirma / 100);`,out:`60000`},{title:`Natija foizda`,code:`const togri = 24;
const jami = 30;
console.log(togri / jami * 100);
console.log(Math.round(2 / 3 * 100));`,out:`80
67`}],life:{title:`Yuklanish chizig'i`,text:`Fayl 10 bo'lakdan iborat, 4 tasi yuklandi. Chizig'ning necha foizi to'lishi kerak va uni matn bilan qanday chizamiz?`,code:`const tayyor = 4, jami = 10;
const foiz = Math.round(tayyor / jami * 100);
console.log(foiz + "%");
console.log("#".repeat(tayyor) + "-".repeat(jami - tayyor));`,out:`40%
####------`},ref:[[`x * p / 100`,`x ning p foizi`],[`x - x * p / 100`,`p% chegirmadan keyin`],[`x + x * p / 100`,`p% ustama (soliq) bilan`],[`a / b * 100`,`a soni b ning necha foizi`],[`Math.round(...)`,`foizni butun songa yaxlitlash`]],pitfalls:[{text:`% belgisi kodda foiz EMAS, qoldiq: 200 % 15 = 5. Foiz uchun / 100 yozing.`,code:`console.log(200 % 15);`,out:`5`},{text:`Foizni hisoblashda 0 ga bo'lish: jami 0 bo'lsa natija NaN. Avval jami > 0 ekanini tekshiring.`,code:`console.log(0 / 0 * 100);`,out:`NaN`},{text:`20% chegirmadan keyin 20% ustama qo'shilsa, eski narx QAYTMAYDI: 100 → 80 → 96. Foiz har safar yangi sondan olinadi.`}],quiz:[{q:`500 ning 10% i qancha?`,code:`console.log(500 * 10 / 100);`,options:[`5`,`50`,`10`,`490`],answer:1,why:`500 · 10 / 100 = 50.`},{q:`40 000 so'mlik kitobga 50% chegirma. Yangi narx?`,code:`console.log(40000 - 40000 * 50 / 100);`,options:[`20000`,`39950`,`35000`,`2000`],answer:0,why:`Yarmi chegirma — 20 000 qoladi.`},{q:`20 savoldan 15 tasi to'g'ri. Necha foiz?`,code:`console.log(15 / 20 * 100);`,options:[`15`,`75`,`20`,`0.75`],answer:1,why:`15 / 20 = 0.75, 100 ga ko'paytirsak 75%.`}],tasks:[{level:1,text:`x sonining p foizini qaytaring.`,fn:`foizi`,contract:`foizi(x, p) — sonlar; x ning p% ini qaytaradi.`,cases:[S(200,15,30),S(80,50,40),S(1e3,1,10),S(50,0,0)],hint:`x * p / 100`,solution:`function foizi(x, p) {
  return x * p / 100;
}`},{level:1,text:`Narxga p% chegirma qiling — yangi narxni qaytaring.`,fn:`chegirma`,contract:`chegirma(narx, p) — sonlar; chegirmadan keyingi narxni qaytaradi.`,cases:[S(1e5,20,8e4),S(5e4,10,45e3),S(1e3,0,1e3),S(300,100,0)],hint:`narx - narx * p / 100`,solution:`function chegirma(narx, p) {
  return narx - narx * p / 100;
}`},{level:2,text:`Narxga 12% QQS qo'shing.`,fn:`qqsBilan`,contract:`qqsBilan(narx) — son; 12% qo'shilgan narxni qaytaradi.`,cases:[S(1e3,1120),S(5e3,5600),S(250,280),S(0,0)],hint:`narx + narx * 12 / 100`,solution:`function qqsBilan(narx) {
  return narx + narx * 12 / 100;
}`},{level:2,text:"`qism` soni `jami` ning necha foizi? Butun songa yaxlitlab qaytaring.",fn:`necheFoiz`,contract:`necheFoiz(qism, jami) — sonlar, jami > 0; yaxlitlangan foizni qaytaradi.`,cases:[S(1,4,25),S(2,3,67),S(5,5,100),S(0,10,0)],hint:`Math.round(qism / jami * 100)`,solution:`function necheFoiz(qism, jami) {
  return Math.round(qism / jami * 100);
}`},{level:3,text:`Progress chizig'ini 10 ta belgi bilan chizing: to'lgan qism "#", qolgani "-". To'lgan qism soni — foizga qarab yaxlitlanadi.`,fn:`chiziq`,contract:`chiziq(tayyor, jami) — butun sonlar, jami > 0; 10 belgili matn qaytaradi, masalan "#####-----".`,cases:[S(5,10,`#####-----`),S(1,3,`###-------`),S(0,4,`----------`),S(4,4,`##########`)],hint:`n = Math.round(tayyor / jami * 10); "#".repeat(n) + "-".repeat(10 - n).`,solution:`function chiziq(tayyor, jami) {
  const n = Math.round(tayyor / jami * 10);
  return "#".repeat(n) + "-".repeat(10 - n);
}`}]},{id:`ortacha`,title:`O'rtacha, eng katta, eng kichik`,short:`Massiv yig'indisi, o'rtacha, Math.max / Math.min, farq`,why:`Sinf o'rtacha bahosi, kunning eng issiq harorati, o'yindagi rekord — ma'lumotlar ro'yxatidan bitta xulosa son chiqarish dasturlashda har kuni kerak.`,idea:[`Yig'indi — hamma sonlarni ketma-ket qo'shish: 0 dan boshlab, sikl bilan.`,`O'rtacha — yig'indini sonlar soniga bo'lish. Bo'sh ro'yxatda o'rtacha yo'q — buni alohida hal qilish kerak.`,`Eng katta va eng kichik: Math.max va Math.min. Massivni ularga «yoyib» berish uchun ... (spread) yoziladi.`],rule:`Yig'indi S = a₁ + a₂ + … + aₙ. O'rtacha = S / n. Farq (oraliq kengligi) = eng katta − eng kichik.`,calcs:[`5, 4, 5, 3 → yig'indi 17, o'rtacha 17 / 4 = 4.25`,`18°, 24°, 21° → eng issiq 24°, eng sovuq 18°`,`farq: 24 − 18 = 6°`,`2, 4, 6 → o'rtacha 4; 4 dan kattalar: faqat 6`],examples:[{title:`Yig'indi va o'rtacha`,code:`const baholar = [5, 4, 5, 3];
let s = 0;
for (const b of baholar) s += b;
console.log(s);
console.log(s / baholar.length);`,out:`17
4.25`},{title:`Eng katta va eng kichik`,code:`const harorat = [18, 24, 21];
console.log(Math.max(...harorat));
console.log(Math.min(...harorat));`,out:`24
18`},{title:`reduce bilan yig'indi`,code:`const sonlar = [3, 7, 10];
console.log(sonlar.reduce((a, b) => a + b, 0));`,out:`20`}],life:{title:`Sinf natijasi`,text:`Test ballari: o'rtacha qancha, eng yaxshi va eng past natija, ular orasidagi farq — ustoz jurnalidagi bitta qator.`,code:`const ball = [72, 95, 64, 88];
const s = ball.reduce((a, b) => a + b, 0);
console.log("O'rtacha:", s / ball.length);
console.log("Eng yaxshi:", Math.max(...ball));
console.log("Farq:", Math.max(...ball) - Math.min(...ball));`,out:`O'rtacha: 79.75
Eng yaxshi: 95
Farq: 31`},ref:[[`for (const x of arr)`,`massivni aylanib chiqish`],[`arr.reduce((a, b) => a + b, 0)`,`yig'indi`],[`s / arr.length`,`o'rtacha`],[`Math.max(...arr)`,`eng katta`],[`Math.min(...arr)`,`eng kichik`],[`arr.filter(x => x > k).length`,`k dan kattalar soni`]],pitfalls:[{text:`Bo'sh massivda Math.max -Infinity, o'rtacha esa NaN (0 / 0) beradi. Ro'yxat bo'sh bo'lishi mumkin bo'lsa, avval arr.length ni tekshiring.`,code:`console.log(Math.max(...[]));
console.log(0 / [].length);`,out:`-Infinity
NaN`},{text:`Math.max ga massivni nuqtalarsiz bersangiz, natija NaN: Math.max([1, 2]) — bu bitta «massiv» argument.`,code:`console.log(Math.max([1, 2]));`,out:`NaN`},{text:`Yig'indini 0 dan boshlang. let s; deb qoldirilsa, undefined + 5 = NaN bo'ladi.`}],quiz:[{q:`Natija nima?`,code:`console.log((2 + 4 + 9) / 3);`,options:[`5`,`15`,`3`,`6`],answer:0,why:`Yig'indi 15, uchga bo'lsak 5.`},{q:`Natija nima?`,code:`console.log(Math.min(...[7, -2, 4]));`,options:[`7`,`4`,`-2`,`2`],answer:2,why:`Eng kichigi — manfiy son −2.`},{q:`Massiv o'rtachasini qaysi biri to'g'ri hisoblaydi?`,options:[`Math.max(...arr) / 2`,`arr.reduce((a, b) => a + b, 0) / arr.length`,`arr.length / arr.reduce((a, b) => a + b, 0)`,`arr[0] + arr[arr.length - 1] / 2`],answer:1,why:`O'rtacha — yig'indi bo'lingan soniga.`}],tasks:[{level:1,text:`Massivdagi sonlar yig'indisini qaytaring. Bo'sh massivda 0.`,fn:`yigindi`,contract:`yigindi(arr) — sonlar massivi; yig'indini qaytaradi.`,cases:[S([1,2,3],6),S([],0),S([-5,5],0),S([10],10)],hint:`let s = 0; for (const x of arr) s += x;`,solution:`function yigindi(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}`},{level:1,text:`Massivdagi eng katta sonni qaytaring (massiv bo'sh emas).`,fn:`engKatta`,contract:`engKatta(arr) — kamida bitta sonli massiv; eng kattasini qaytaradi.`,cases:[S([3,9,2],9),S([-4,-2,-9],-2),S([7],7)],hint:`Math.max(...arr)`,solution:`function engKatta(arr) {
  return Math.max(...arr);
}`},{level:2,text:`Massiv o'rtachasini qaytaring. Bo'sh massivda 0 qaytarilsin.`,fn:`ortacha`,contract:`ortacha(arr) — sonlar massivi; o'rtacha qiymatni qaytaradi (bo'shda 0).`,cases:[S([2,4,6],4),S([5],5),S([],0),S([1,2],1.5)],hint:`Avval if (arr.length === 0) return 0; keyin yig'indi / arr.length.`,solution:`function ortacha(arr) {
  if (arr.length === 0) return 0;
  let s = 0;
  for (const x of arr) s += x;
  return s / arr.length;
}`},{level:2,text:`Eng katta va eng kichik son orasidagi farqni qaytaring.`,fn:`farq`,contract:`farq(arr) — kamida bitta sonli massiv; max − min ni qaytaradi.`,cases:[S([3,9,2],7),S([5,5],0),S([-2,8],10),S([4],0)],hint:`Math.max(...arr) - Math.min(...arr)`,solution:`function farq(arr) {
  return Math.max(...arr) - Math.min(...arr);
}`},{level:3,text:`Nechta son o'rtachadan KATTA? (Masalan, sinfda nechta o'quvchi o'rtachadan yuqori yozgan.)`,fn:`ortachadanYuqori`,contract:`ortachadanYuqori(arr) — kamida bitta sonli massiv; sonlar sonini qaytaradi.`,cases:[S([1,2,3,4,5],2),S([10,10,10],0),S([1,100],1),S([2,4,6],1)],hint:`Avval o'rtachani hisoblang, keyin arr.filter(x => x > o).length.`,solution:`function ortachadanYuqori(arr) {
  const o = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.filter((x) => x > o).length;
}`}]},{id:`tasodifiy`,title:`Tasodifiy son`,short:`Math.random(), oraliqdagi butun son, zar, tasodifiy tanlov`,why:`O'yindagi zar, tasodifiy savol, aralashtirilgan kartalar, «kim javob beradi» charxi — hammasi bitta formula ustiga qurilgan.`,idea:[`Math.random() 0 dan 1 gacha tasodifiy o'nli son beradi: 0 chiqishi mumkin, 1 esa HECH QACHON chiqmaydi (0 ≤ r < 1).`,`Uni kerakli oraliqqa «cho'zamiz»: r · 6 — 0 dan 6 gacha (6 siz). Math.floor bilan 0, 1, 2, 3, 4, 5 dan biri. +1 qo'shsak — zar: 1 dan 6 gacha.`,`Umumiy formula: min dan max gacha (ikkalasi ham kiradi) butun son — Math.floor(r · (max − min + 1)) + min.`],rule:`0 ≤ r < 1 bo'lsa, 0 ≤ r · n < n, demak Math.floor(r · n) — 0 dan n − 1 gacha butun son. Har biri bir xil ehtimol bilan chiqadi.`,calcs:[`r = 0.00 → floor(0 · 6) + 1 = 1`,`r = 0.50 → floor(3.0) + 1 = 4`,`r = 0.99 → floor(5.94) + 1 = 6`,`[10; 20]: n = 20 − 10 + 1 = 11 ta son, r = 0.1 → floor(1.1) + 10 = 11`],examples:[{title:`Formulani aniq son bilan tekshiramiz`,code:`const r = 0.73;
console.log(r * 6);
console.log(Math.floor(r * 6) + 1);`,out:`4.38
5`},{title:`Haqiqiy zar (har safar boshqacha)`,code:`const zar = Math.floor(Math.random() * 6) + 1;
console.log(zar);`,out:null},{title:`Ro'yxatdan tasodifiy tanlov`,code:`const ismlar = ["Ali", "Vali", "Gulnoza"];
const i = Math.floor(Math.random() * ismlar.length);
console.log(ismlar[i]);`,out:null}],life:{title:`Oraliqdagi tasodifiy son`,text:`Tasodifiy misol yasash uchun 10 dan 20 gacha son kerak. Formulani funksiyaga o'raymiz — keyin istalgan oraliqda ishlatamiz.`,code:`function tasodifiy(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const a = tasodifiy(10, 20);
console.log(a >= 10 && a <= 20);`,out:`true`},ref:[[`Math.random()`,`0 ≤ r < 1 tasodifiy o'nli son`],[`Math.floor(r * n)`,`0 dan n − 1 gacha butun son`],[`Math.floor(r * 6) + 1`,`zar: 1–6`],[`Math.floor(r * (max - min + 1)) + min`,`[min; max] butun son`],[`arr[Math.floor(r * arr.length)]`,`massivdan tasodifiy element`],[`r < p / 100`,`p% ehtimol bilan true`]],pitfalls:[{text:`+1 ni unutish: Math.floor(Math.random() * 6) zarda 0 chiqaradi, 6 esa hech qachon chiqmaydi.`},{text:`Math.round bilan yaxlitlash ehtimolni buzadi: chetdagi sonlar ikki baravar kam chiqadi. Doim Math.floor.`},{text:`Math.random() bashorat qilinadigan generator — o'yin uchun yetarli, lekin parol yoki maxfiy kod uchun ishlatilmaydi.`}],quiz:[{q:`Math.random() qaysi qiymatni HECH QACHON qaytarmaydi?`,options:[`0`,`0.5`,`0.999`,`1`],answer:3,why:`Oraliq 0 ≤ r < 1 — 1 kirmaydi.`},{q:`r = 0.5 bo'lsa, natija nima?`,code:`const r = 0.5;
console.log(Math.floor(r * 10) + 1);`,options:[`5`,`6`,`5.5`,`10`],answer:1,why:`0.5 · 10 = 5, floor → 5, +1 → 6.`},{q:`1 dan 100 gacha (ikkalasi ham kiradi) butun son qaysi formula bilan olinadi?`,options:[`Math.floor(Math.random() * 100)`,`Math.floor(Math.random() * 100) + 1`,`Math.round(Math.random() * 100)`,`Math.random() * 100 + 1`],answer:1,why:`floor(r · 100) — 0…99, +1 bilan 1…100.`}],tasks:[{level:1,text:`Tasodifiy son r (0 ≤ r < 1) berilgan. Undan zar qiymatini (1–6) yasang.`,fn:`zar`,contract:`zar(r) — 0 ≤ r < 1; 1 dan 6 gacha butun son qaytaradi.`,cases:[S(0,1),S(.5,4),S(.999,6),S(.2,2)],hint:`Math.floor(r * 6) + 1`,solution:`function zar(r) {
  return Math.floor(r * 6) + 1;
}`},{level:1,text:`Tanga: r 0.5 dan kichik bo'lsa "gerb", aks holda "raqam" qaytaring.`,fn:`tanga`,contract:`tanga(r) — 0 ≤ r < 1; "gerb" yoki "raqam" qaytaradi.`,cases:[S(0,`gerb`),S(.49,`gerb`),S(.5,`raqam`),S(.9,`raqam`)],hint:`r < 0.5 ? "gerb" : "raqam"`,solution:`function tanga(r) {
  return r < 0.5 ? "gerb" : "raqam";
}`},{level:2,text:`r dan foydalanib min dan max gacha (ikkalasi ham kiradi) butun son yasang.`,fn:`oraliqdan`,contract:`oraliqdan(r, min, max) — 0 ≤ r < 1, butun min ≤ max; butun son qaytaradi.`,cases:[S(0,1,6,1),S(.999,1,6,6),S(.5,1,6,4),S(.1,10,20,11),S(.7,5,5,5)],hint:`Math.floor(r * (max - min + 1)) + min`,solution:`function oraliqdan(r, min, max) {
  return Math.floor(r * (max - min + 1)) + min;
}`},{level:2,text:`Massivdan r ga mos elementni tanlang.`,fn:`tanla`,contract:`tanla(r, arr) — 0 ≤ r < 1, bo'sh bo'lmagan massiv; bitta elementni qaytaradi.`,cases:[S(0,[`a`,`b`,`c`],`a`),S(.5,[`a`,`b`,`c`],`b`),S(.99,[`a`,`b`,`c`],`c`),S(.3,[7],7)],hint:`arr[Math.floor(r * arr.length)]`,solution:`function tanla(r, arr) {
  return arr[Math.floor(r * arr.length)];
}`},{level:3,text:`Imkoniyat: o'yinda sandiq p% ehtimol bilan xazina beradi. r berilgan — xazina chiqdimi?`,fn:`omad`,contract:`omad(r, p) — 0 ≤ r < 1, 0 ≤ p ≤ 100; true yoki false qaytaradi.`,cases:[S(.1,20,!0),S(.3,20,!1),S(0,0,!1),S(.99,100,!0),S(.2,20,!1)],hint:`r < p / 100 — p = 20 bo'lsa, r ning 0–0.2 oralig'i (20%) omad.`,solution:`function omad(r, p) {
  return r < p / 100;
}`}]}],T=[{id:1,title:`Asoslar`,topics:w},{id:2,title:`Chuqurroq`,topics:C}],E=[...w,...C],D=e=>E.find(t=>t.id===e),O=(e,t)=>`math:${e}:${t}`,k=`atomjs.math`,A={read:new Set,solved:new Set,quiz:new Set};function j(e){return Array.isArray(e)?e.filter(e=>typeof e==`string`):[]}function M(){try{let e=localStorage.getItem(k);if(!e)return A;let t=JSON.parse(e);return{read:new Set(j(t.read)),solved:new Set(j(t.solved)),quiz:new Set(j(t.quiz))}}catch{return A}}var N=M(),P=new Set;function F(e){N=e;try{localStorage.setItem(k,JSON.stringify({read:[...N.read],solved:[...N.solved],quiz:[...N.quiz]}))}catch{}for(let e of P)e()}var I=(e,t)=>new Set(e).add(t);function L(e){let t=new Set(N.read);t.has(e)?t.delete(e):t.add(e),F({...N,read:t})}function R(e){N.solved.has(e)||F({...N,solved:I(N.solved,e)})}function ee(e){N.quiz.has(e)||F({...N,quiz:I(N.quiz,e)})}function te(e){return P.add(e),()=>{P.delete(e)}}var z=()=>N;function B(){return(0,x.useSyncExternalStore)(te,z,z)}var V=a(),H=`var(--warn)`,U={1:{key:`mathL1`,tint:`var(--ok)`},2:{key:`mathL2`,tint:`var(--info)`},3:{key:`mathL3`,tint:`var(--err)`}};function W(e){let t=B(),n=e.tasks.filter((n,r)=>t.solved.has(O(e.id,r))),r=e.quiz.filter((n,r)=>t.quiz.has(`${e.id}:${r}`));return{read:t.read.has(e.id),solved:n.length,quiz:r.length}}function G(){let{topicId:e}=i(),t=D(e),n=(0,x.useRef)(null);return(0,x.useEffect)(()=>{n.current?.scrollTo({top:0})},[e]),(0,V.jsx)(`div`,{ref:n,className:`flex min-h-0 flex-1 flex-col overflow-y-auto`,children:(0,V.jsx)(p,{children:t?(0,V.jsx)(Z,{tp:t}):(0,V.jsx)(K,{})})})}function K(){let{t:e}=h(),{isStaff:t}=o(),n=B(),r=E.reduce((e,t)=>e+t.tasks.length,0),i=E.reduce((e,t)=>e+t.tasks.filter((e,r)=>n.solved.has(O(t.id,r))).length,0),a=E.filter(e=>n.read.has(e.id)).length;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m,{kind:`atommath`,title:(0,V.jsx)(`span`,{className:`max-sm:text-h3`,children:`atommath`}),sub:e(`mathSub`,{n:E.length}),backTo:t?`/host`:`/`}),(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 sm:max-w-md`,children:[(0,V.jsx)(q,{label:e(`mathTopicsDone`),value:`${a}/${E.length}`}),(0,V.jsx)(q,{label:e(`mathTasksDone`),value:`${i}/${r}`})]}),T.map(t=>(0,V.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,V.jsxs)(`h2`,{className:`font-display text-h3 font-bold`,children:[e(`mathStage`,{n:t.id}),` · `,t.title]}),(0,V.jsx)(`ol`,{className:`grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:t.topics.map(e=>(0,V.jsx)(J,{tp:e,n:E.indexOf(e)+1},e.id))})]},t.id))]})}function q({label:e,value:t}){return(0,V.jsxs)(`div`,{className:`rounded-md border-2 px-4 py-3`,style:{borderColor:`var(--line-strong)`,background:`var(--bg-2)`,boxShadow:`var(--elev-1)`},children:[(0,V.jsx)(`p`,{className:`text-micro font-bold uppercase`,style:{color:`var(--muted)`},children:e}),(0,V.jsx)(`p`,{className:`font-mono text-h2 leading-tight font-bold tabular-nums`,children:t})]})}function J({tp:e,n:t}){let{t:n}=h(),i=W(e);return(0,V.jsx)(`li`,{children:(0,V.jsxs)(r,{to:`/atommath/${e.id}`,className:`lab-lift flex h-full flex-col gap-2 rounded-md border-2 p-4`,style:{borderColor:`var(--line-strong)`,background:i.read?`color-mix(in srgb, var(--ok) 10%, var(--bg-2))`:`color-mix(in srgb, ${H} 8%, var(--bg-2))`,boxShadow:`var(--elev-1)`},children:[(0,V.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`grid size-8 shrink-0 place-items-center rounded-sm border-2 font-mono text-body font-bold`,style:{borderColor:`var(--line-strong)`,background:i.read?`var(--ok)`:`var(--bg)`,color:i.read?`var(--bg)`:`var(--fg)`},children:i.read?(0,V.jsx)(d,{size:16}):t}),(0,V.jsx)(`span`,{className:`font-display text-lead leading-tight font-bold`,children:e.title})]}),(0,V.jsx)(`span`,{className:`text-caption`,style:{color:`var(--muted)`},children:e.short}),(0,V.jsxs)(`span`,{className:`mt-auto flex gap-3 pt-1 font-mono text-micro font-bold uppercase tabular-nums`,style:{color:`var(--muted)`},children:[(0,V.jsx)(`span`,{children:n(`mathTasksN`,{n:i.solved,m:e.tasks.length})}),(0,V.jsx)(`span`,{children:n(`mathQuizN`,{n:i.quiz,m:e.quiz.length})})]})]})})}function Y({title:e,children:t}){return(0,V.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,V.jsx)(`h2`,{className:`font-display text-h3 font-bold`,children:e}),t]})}var X={borderColor:`var(--line-strong)`,background:`var(--bg-2)`,boxShadow:`var(--elev-1)`};function Z({tp:e}){let{t}=h(),n=W(e),i=E.indexOf(e),a=E[i-1],o=E[i+1];return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m,{kind:`atommath`,title:e.title,sub:`${t(`mathTopicN`,{n:i+1})} · ${e.short}`,backTo:`/atommath`}),(0,V.jsxs)(`div`,{className:`mx-auto flex w-full max-w-3xl flex-col gap-8`,children:[(0,V.jsxs)(`p`,{className:`rounded-md border-2 px-4 py-3 text-body`,style:{borderColor:`var(--line-strong)`,background:`color-mix(in srgb, ${H} 12%, var(--bg-2))`},children:[(0,V.jsxs)(`b`,{children:[t(`mathWhy`),`: `]}),e.why]}),(0,V.jsx)(Y,{title:t(`mathIdea`),children:e.idea.map((e,t)=>(0,V.jsx)(`p`,{className:`text-body leading-relaxed`,children:e},t))}),(0,V.jsx)(Y,{title:t(`mathInMath`),children:(0,V.jsxs)(`div`,{className:`rounded-md border-2 p-4`,style:X,children:[(0,V.jsx)(`p`,{className:`text-body leading-relaxed`,children:e.rule}),(0,V.jsx)(`ul`,{className:`mt-3 flex flex-col gap-1.5`,children:e.calcs.map((e,t)=>(0,V.jsx)(`li`,{className:`rounded-sm px-3 py-1.5 font-mono text-caption`,style:{background:`var(--bg-3)`},children:e},t))})]})}),(0,V.jsx)(Y,{title:t(`mathInJs`),children:e.examples.map((e,t)=>(0,V.jsx)($,{ex:e},t))}),(0,V.jsx)(Y,{title:t(`mathLife`),children:(0,V.jsx)($,{ex:e.life,text:e.life.text})}),(0,V.jsx)(Y,{title:t(`mathRef`),children:(0,V.jsx)(`div`,{className:`overflow-hidden rounded-md border-2`,style:X,children:(0,V.jsx)(`table`,{className:`w-full text-left text-caption`,children:(0,V.jsx)(`tbody`,{children:e.ref.map(([e,t],n)=>(0,V.jsxs)(`tr`,{style:{borderTop:n?`1px solid var(--line)`:void 0},children:[(0,V.jsx)(`td`,{className:`px-3 py-2 align-top font-mono font-bold break-all`,children:e}),(0,V.jsx)(`td`,{className:`px-3 py-2`,style:{color:`var(--muted)`},children:t})]},n))})})})}),(0,V.jsx)(Y,{title:t(`mathPitfalls`),children:(0,V.jsx)(`ul`,{className:`flex flex-col gap-2`,children:e.pitfalls.map((e,t)=>(0,V.jsxs)(`li`,{className:`rounded-md border-2 p-3`,style:{borderColor:`var(--line-strong)`,background:`color-mix(in srgb, var(--err) 8%, var(--bg-2))`},children:[(0,V.jsx)(`p`,{className:`text-body`,children:e.text}),e.code&&(0,V.jsx)(Q,{code:e.code,out:e.out??null,className:`mt-2`})]},t))})}),(0,V.jsx)(Y,{title:`${t(`mathQuiz`)} · ${n.quiz}/${e.quiz.length}`,children:e.quiz.map((t,n)=>(0,V.jsx)(ne,{q:t,qKey:`${e.id}:${n}`},`${e.id}:${n}`))}),(0,V.jsx)(Y,{title:`${t(`mathTasks`)} · ${n.solved}/${e.tasks.length}`,children:e.tasks.map((t,n)=>(0,V.jsx)(re,{task:t,n:n+1,itemKey:O(e.id,n)},O(e.id,n)))}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-4 border-t-2 pt-6`,style:{borderColor:`var(--line)`},children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>L(e.id),"aria-pressed":n.read,className:`ui-btn ui-hero h-12 px-6 text-body`,style:n.read?{background:`var(--ok)`,color:`var(--bg)`,boxShadow:`var(--elev-1)`}:{background:`var(--accent)`,color:`var(--bg)`,boxShadow:`var(--elev-1)`},children:[(0,V.jsx)(d,{size:16}),n.read?t(`mathDoneOn`):t(`mathDone`)]}),(0,V.jsxs)(`nav`,{className:`grid w-full grid-cols-2 gap-3`,children:[a?(0,V.jsxs)(r,{to:`/atommath/${a.id}`,className:`ui-btn ui-ghost h-auto min-h-11 justify-start px-3 py-2 text-left`,children:[(0,V.jsx)(_,{size:15,className:`shrink-0`}),(0,V.jsxs)(`span`,{className:`min-w-0`,children:[(0,V.jsx)(`span`,{className:`block text-micro font-bold uppercase`,style:{color:`var(--muted)`},children:t(`mathPrev`)}),(0,V.jsx)(`span`,{className:`block truncate`,children:a.title})]})]}):(0,V.jsx)(`span`,{}),o&&(0,V.jsxs)(r,{to:`/atommath/${o.id}`,className:`ui-btn ui-ghost h-auto min-h-11 justify-end px-3 py-2 text-right`,children:[(0,V.jsxs)(`span`,{className:`min-w-0`,children:[(0,V.jsx)(`span`,{className:`block text-micro font-bold uppercase`,style:{color:`var(--muted)`},children:t(`mathNext`)}),(0,V.jsx)(`span`,{className:`block truncate`,children:o.title})]}),(0,V.jsx)(f,{size:15,className:`shrink-0`})]})]})]})]})]})}function Q({code:e,out:t,className:n=``}){let{t:r}=h();return(0,V.jsxs)(`div`,{className:`overflow-hidden rounded-sm border ${n}`,style:{borderColor:`var(--line)`},children:[(0,V.jsx)(`pre`,{className:`overflow-x-auto px-3 py-2.5 font-mono text-caption leading-relaxed`,style:{background:`var(--bg)`},children:(0,V.jsx)(`code`,{children:v(e)})}),(0,V.jsxs)(`div`,{className:`flex gap-2 border-t px-3 py-2 font-mono text-caption`,style:{borderColor:`var(--line)`,background:`var(--bg-3)`},children:[(0,V.jsx)(`span`,{"aria-hidden":!0,style:{color:`var(--muted)`},children:`›`}),t===null?(0,V.jsx)(`span`,{style:{color:`var(--muted)`},children:r(`mathRandomOut`)}):(0,V.jsx)(`span`,{className:`whitespace-pre-wrap`,children:t})]})]})}function $({ex:e,text:n}){let{t:r}=h(),i=t();return(0,V.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-md border-2 p-4`,style:X,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,V.jsx)(`h3`,{className:`text-body font-bold`,children:e.title}),(0,V.jsxs)(`button`,{type:`button`,onClick:()=>{g(e.code),i(`/code`)},className:`ui-btn ui-ghost`,children:[(0,V.jsx)(b,{size:14}),r(`openInEditor`)]})]}),n&&(0,V.jsx)(`p`,{className:`text-body leading-relaxed`,children:n}),(0,V.jsx)(Q,{code:e.code,out:e.out})]})}function ne({q:e,qKey:t}){let{t:n}=h(),[r,i]=(0,x.useState)(null),a=r===e.answer;return(0,V.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-md border-2 p-4`,style:X,children:[(0,V.jsx)(`p`,{className:`text-body font-bold`,children:e.q}),e.code&&(0,V.jsx)(`pre`,{className:`overflow-x-auto rounded-sm border px-3 py-2.5 font-mono text-caption`,style:{borderColor:`var(--line)`,background:`var(--bg)`},children:(0,V.jsx)(`code`,{children:v(e.code)})}),(0,V.jsx)(`div`,{className:`grid grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-2`,children:e.options.map((n,o)=>{let s=r!==null&&(o===e.answer||o===r),u=o===e.answer;return(0,V.jsxs)(`button`,{type:`button`,disabled:a,onClick:()=>{i(o),o===e.answer&&ee(t)},className:`ui-btn h-auto min-h-10 justify-start rounded-sm border-2 px-3 py-2 text-left font-mono text-caption break-all`,style:{borderColor:s?u?`var(--ok)`:`var(--err)`:`var(--line)`,background:s?`color-mix(in srgb, ${u?`var(--ok)`:`var(--err)`} 14%, var(--bg-2))`:`var(--bg)`},children:[s&&(u?(0,V.jsx)(c,{size:14,style:{color:`var(--ok)`}}):(0,V.jsx)(l,{size:14,style:{color:`var(--err)`}})),n]},o)})}),r!==null&&(0,V.jsxs)(`p`,{className:`anim-fade text-caption`,style:{color:a?`var(--ok)`:`var(--err)`},children:[(0,V.jsx)(`b`,{children:n(a?`mathRight`:`mathWrong`)}),a&&(0,V.jsxs)(`span`,{style:{color:`var(--fg)`},children:[` `,e.why]})]})]})}function re({task:e,n:t,itemKey:n}){let{t:r}=h(),i=B().solved.has(n),[a,o]=(0,x.useState)(!1),[s,l]=(0,x.useState)(!1),d=U[e.level];return(0,V.jsxs)(`div`,{className:`overflow-hidden rounded-md border-2`,style:{...X,borderColor:i?`var(--ok)`:`var(--line-strong)`},children:[(0,V.jsxs)(`div`,{className:`flex flex-col gap-2 p-4`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,V.jsxs)(`span`,{className:`font-mono text-body font-bold`,children:[t,`.`]}),(0,V.jsx)(`span`,{className:`rounded-pill border px-2 py-0.5 text-micro font-bold uppercase`,style:{borderColor:d.tint,color:d.tint},children:r(d.key)}),i&&(0,V.jsxs)(`span`,{className:`flex items-center gap-1 text-caption font-bold`,style:{color:`var(--ok)`},children:[(0,V.jsx)(c,{size:14}),r(`mathSolved`)]})]}),(0,V.jsx)(`p`,{className:`text-body leading-relaxed`,children:e.text}),(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>o(e=>!e),"aria-expanded":a,className:`ui-btn ui-ghost`,children:[(0,V.jsx)(u,{size:14}),r(`mathHint`)]}),i&&(0,V.jsxs)(`button`,{type:`button`,onClick:()=>l(e=>!e),"aria-expanded":s,className:`ui-btn ui-ghost`,children:[(0,V.jsx)(b,{size:14}),r(`mathSolution`)]})]}),a&&(0,V.jsx)(`p`,{className:`anim-fade rounded-sm px-3 py-2 text-caption`,style:{background:`var(--bg-3)`},children:e.hint}),s&&(0,V.jsx)(`pre`,{className:`anim-fade overflow-x-auto rounded-sm border px-3 py-2.5 font-mono text-caption`,style:{borderColor:`var(--line)`,background:`var(--bg)`},children:(0,V.jsx)(`code`,{children:v(e.solution)})})]}),(0,V.jsx)(y,{check:{fn:e.fn,contract:{uz:e.contract,en:e.contract,ru:e.contract},cases:e.cases},itemKey:n,onPass:()=>R(n)})]})}export{G as MathPage};