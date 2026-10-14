var e=(e,t,n)=>({uz:e,en:t,ru:n}),t=[{id:`keywords`,name:e(`JS kalit so'zlari`,`JS keywords`,`Ключевые слова JS`),tint:`var(--accent)`},{id:`data`,name:e(`Ma'lumot va turlar`,`Data and types`,`Данные и типы`),tint:`var(--info)`},{id:`actions`,name:e(`Amallar (fe'llar)`,`Actions (verbs)`,`Действия (глаголы)`),tint:`var(--ok)`},{id:`methods`,name:e(`JS metodlari`,`JS methods`,`Методы JS`),tint:`var(--warn)`},{id:`logic`,name:e(`Mantiq va solishtirish`,`Logic and comparison`,`Логика и сравнение`),tint:`var(--err)`},{id:`errors`,name:e(`Xatolar va konsol`,`Errors and console`,`Ошибки и консоль`),tint:`var(--err)`},{id:`html`,name:e(`HTML`,`HTML`,`HTML`),tint:`var(--warn)`},{id:`css`,name:e(`CSS`,`CSS`,`CSS`),tint:`var(--info)`},{id:`web`,name:e(`Web va internet`,`Web and internet`,`Веб и интернет`),tint:`var(--ok)`},{id:`tools`,name:e(`Asboblar va Git`,`Tools and Git`,`Инструменты и Git`),tint:`var(--muted)`},{id:`computer`,name:e(`Kompyuter`,`Computer`,`Компьютер`),tint:`var(--muted)`},{id:`math`,name:e(`Matematika`,`Math`,`Математика`),tint:`var(--accent)`},{id:`time`,name:e(`Vaqt va sana`,`Time and date`,`Время и дата`),tint:`var(--info)`},{id:`ui`,name:e(`Ilova va o'yin`,`Apps and games`,`Приложения и игры`),tint:`var(--warn)`},{id:`describe`,name:e(`Sifatlar va holatlar`,`Describing words`,`Признаки и состояния`),tint:`var(--ok)`},{id:`general`,name:e(`Dars va topshiriq so'zlari`,`Lesson and task words`,`Слова уроков и заданий`),tint:`var(--muted)`}],n=[];function r(e,t,r){for(let i of r.split(`
`)){let r=i.trim();if(!r)continue;let[a,o,s]=r.split(` | `).map(e=>e.trim());n.push({en:a,uz:o,ru:s,topic:e,level:t})}}r(`keywords`,1,`
let | o'zgaruvchi e'lon qiladi (qiymati o'zgarishi mumkin) | объявляет переменную (значение можно менять)
const | o'zgarmas e'lon qiladi (qayta berib bo'lmaydi) | объявляет константу
function | funksiya — qayta ishlatiladigan kod bo'lagi | функция — повторно используемый блок кода
return | qaytarish — funksiya natijasini beradi | вернуть — отдаёт результат функции
if | agar | если
else | aks holda | иначе
for | uchun — sanab takrorlovchi sikl | для — цикл со счётчиком
while | …ekan — shart rost ekan takrorlaydi | пока — повторяет, пока условие истинно
break | uzish — sikldan chiqish | прервать — выйти из цикла
continue | davom etish — keyingi aylanishga o'tish | продолжить — перейти к следующему шагу
true | rost | истина
false | yolg'on | ложь
null | bo'sh — ataylab «hech narsa» | пусто — намеренно «ничего»
undefined | aniqlanmagan — qiymat berilmagan | не определено — значение не задано
new | yangi — yangi obyekt yaratadi | новый — создаёт новый объект
class | sinf — obyektlar qolipi; HTML'da uslub nomi | класс — шаблон объектов; в HTML имя стиля
typeof | qiymatning turi qanday | тип значения
`),r(`keywords`,2,`
var | eski usulda o'zgaruvchi e'lon qilish | старый способ объявить переменную
do | bajar (do…while — avval bajar, keyin tekshir) | делай (do…while — сначала выполнить, потом проверить)
switch | almashtirgich — bir nechta holatdan birini tanlash | переключатель — выбор одного из вариантов
case | holat (switch ichidagi variant) | случай (вариант внутри switch)
default | standart — boshqa hech biri mos kelmasa | по умолчанию — если ничего не подошло
try | urinib ko'r (xato bo'lishi mumkin bo'lgan kod) | попробуй (код, где может быть ошибка)
catch | ushla (xatoni) | поймай (ошибку)
finally | oxirida baribir bajariladi | в конце выполняется всегда
throw | (xatoni) otmoq | выбросить (ошибку)
this | bu — joriy obyekt | этот — текущий объект
import | olib kirish (boshqa fayldan) | импорт (из другого файла)
export | tashqariga berish (boshqa faylga) | экспорт (в другой файл)
from | …dan (qaysi fayldan) | из (какого файла)
async | asinxron — ichida kutish bor funksiya | асинхронный — функция с ожиданием внутри
await | kut — natija kelguncha | жди — пока не придёт результат
in | ichida (kalit bormi) | в (есть ли ключ)
of | …ning (for…of — har bir elementi) | из (for…of — каждый элемент)
extends | kengaytiradi — boshqa sinfdan meros oladi | расширяет — наследует от другого класса
constructor | konstruktor — obyekt yaratilganda ishlaydigan funksiya | конструктор — функция при создании объекта
`),r(`keywords`,3,`
instanceof | …sinfining nusxasimi | является ли экземпляром класса
static | statik — sinfning o'ziga tegishli | статический — принадлежит самому классу
super | ota sinf (meros berganga murojaat) | родительский класс
yield | berib turish (generator funksiyada) | выдать (в функции-генераторе)
void | hech narsa (qiymatsiz) | ничего (без значения)
debugger | kodni shu yerda to'xtatish (xato qidirish uchun) | остановить код здесь (для отладки)
get | olish — xossani o'qiganda ishlaydigan funksiya | геттер — функция при чтении свойства
set | o'rnatish — xossaga yozganda ishlaydigan funksiya | сеттер — функция при записи свойства
`),r(`data`,1,`
value | qiymat | значение
variable | o'zgaruvchi | переменная
constant | o'zgarmas | константа
type | tur | тип
string | satr — matn qiymati | строка — текстовое значение
number | son | число
boolean | mantiqiy qiymat (true yoki false) | логическое значение (true или false)
array | massiv — tartiblangan ro'yxat | массив — упорядоченный список
object | obyekt — kalit va qiymatlar to'plami | объект — набор ключей и значений
key | kalit (obyektda); klaviatura tugmasi | ключ (в объекте); клавиша
property | xossa (obyektning qismi) | свойство (часть объекта)
method | metod — obyektga tegishli funksiya | метод — функция объекта
argument | argument — funksiyaga berilgan qiymat | аргумент — значение, переданное в функцию
parameter | parametr — funksiya kutadigan nom | параметр — имя, которое ждёт функция
index | indeks — tartib raqami (0 dan boshlanadi) | индекс — порядковый номер (с 0)
length | uzunlik — elementlar yoki harflar soni | длина — количество элементов или символов
element | element — massiv yoki sahifa bo'lagi | элемент — часть массива или страницы
item | narsa, ro'yxat bandi | пункт, элемент списка
list | ro'yxat | список
result | natija | результат
data | ma'lumot | данные
input | kirish — kiritilgan ma'lumot | ввод — введённые данные
output | chiqish — natija | вывод — результат
name | nom, ism | имя, название
text | matn | текст
character | belgi, harf | символ, буква
word | so'z | слово
line | qator | строка (линия)
code | kod | код
program | dastur | программа
comment | izoh (kod ichidagi, bajarilmaydi) | комментарий (не выполняется)
loop | sikl — takrorlanish | цикл — повторение
condition | shart | условие
`),r(`data`,2,`
integer | butun son | целое число
float | kasr son | дробное число
decimal | o'nli kasr | десятичная дробь
digit | raqam (0–9) | цифра (0–9)
symbol | belgi | символ
collection | to'plam | коллекция
structure | tuzilma | структура
field | maydon | поле
pair | juftlik | пара
entry | yozuv (kalit va qiymat juftligi) | запись (пара ключ–значение)
instance | nusxa (sinfdan yaratilgan obyekt) | экземпляр (объект класса)
reference | havola (qiymatning o'zi emas, unga yo'l) | ссылка (не само значение, а путь к нему)
scope | ko'rinish doirasi (o'zgaruvchi qayerda ko'rinadi) | область видимости
block | blok — {} ichidagi kod | блок — код внутри {}
statement | ko'rsatma — bitta buyruq | инструкция — одна команда
expression | ifoda — qiymat beradigan kod | выражение — код, дающий значение
operator | operator (+, -, ===, && kabi) | оператор (+, -, ===, && и т. д.)
callback | qayta chaqiriladigan funksiya (boshqa funksiyaga beriladi) | колбэк — функция, переданная в другую
module | modul — alohida kod fayli | модуль — отдельный файл кода
library | kutubxona — tayyor kodlar to'plami | библиотека — набор готового кода
package | paket — o'rnatiladigan kutubxona | пакет — устанавливаемая библиотека
version | versiya | версия
syntax | sintaksis — kod yozilish qoidasi | синтаксис — правила записи кода
state | holat | состояние
counter | hisoblagich | счётчик
template | shablon, qolip | шаблон
global | global — hamma joyda ko'rinadi | глобальный — виден везде
local | mahalliy — faqat bir joyda ko'rinadi | локальный — виден только в одном месте
algorithm | algoritm — masalani yechish qadamlari | алгоритм — шаги решения задачи
feature | imkoniyat, xususiyat | возможность, функция
`),r(`data`,3,`
operand | operand — amal bajariladigan qiymat | операнд — значение, над которым действие
prototype | prototip — obyekt meros oladigan namuna | прототип — образец для наследования
record | yozuv | запись
flag | bayroq — holatni bildiruvchi true/false | флаг — true/false для состояния
recursion | rekursiya — funksiya o'zini chaqiradi | рекурсия — функция вызывает саму себя
iteration | iteratsiya — siklning bir aylanishi | итерация — один проход цикла
framework | freymvork — ilova yozish uchun tayyor asos | фреймворк — готовая основа для приложения
closure | yopilish — funksiya tashqi o'zgaruvchini eslab qoladi | замыкание — функция помнит внешние переменные
promise | va'da — keyinroq keladigan natija | промис — результат, который придёт позже
generator | generator — qiymatlarni birma-bir beruvchi funksiya | генератор — функция, выдающая значения по одному
immutable | o'zgarmas (o'zgartirib bo'lmaydi) | неизменяемый
`),r(`actions`,1,`
add | qo'shmoq | добавить
remove | olib tashlamoq | удалить, убрать
create | yaratmoq | создать
delete | o'chirmoq | удалить
update | yangilamoq | обновить
change | o'zgartirmoq | изменить
find | topmoq | найти
search | qidirmoq | искать
filter | saralab ajratmoq (shartga moslarini qoldirmoq) | фильтровать (оставить подходящие)
sort | tartiblamoq | сортировать
call | chaqirmoq (funksiyani) | вызвать (функцию)
run | ishga tushirmoq | запустить
stop | to'xtatmoq | остановить
start | boshlamoq | начать
end | tugatmoq; oxiri | закончить; конец
check | tekshirmoq | проверить
test | sinamoq | тестировать
show | ko'rsatmoq | показать
hide | yashirmoq | скрыть
open | ochmoq | открыть
close | yopmoq | закрыть
load | yuklamoq | загрузить
save | saqlamoq | сохранить
send | yubormoq | отправить
read | o'qimoq | читать
write | yozmoq | писать
print | chiqarmoq (ekranga yoki qog'ozga) | печатать, выводить
log | yozib qo'ymoq (konsolga) | записать (в консоль)
count | sanamoq | считать (количество)
copy | nusxalamoq | копировать
paste | qo'ymoq (nusxani) | вставить
click | bosmoq (sichqoncha bilan) | кликнуть
press | bosmoq (tugmani) | нажать
select | tanlamoq; belgilamoq | выбрать; выделить
choose | tanlamoq | выбирать
fill | to'ldirmoq | заполнить
clear | tozalamoq | очистить
reset | asliga qaytarmoq | сбросить
repeat | takrorlamoq | повторить
split | bo'lmoq (qismlarga) | разделить
join | birlashtirmoq; qo'shilmoq | объединить; присоединиться
replace | almashtirmoq | заменить
reverse | teskari qilmoq | перевернуть
move | siljitmoq, ko'chirmoq | переместить
go | bormoq, o'tmoq | идти, перейти
use | ishlatmoq | использовать
make | yasamoq | сделать
give | bermoq | дать
take | olmoq | взять
need | kerak bo'lmoq | нуждаться
fix | tuzatmoq | исправить
edit | tahrirlamoq | редактировать
download | yuklab olmoq | скачать
play | o'ynamoq; ijro etmoq | играть; воспроизвести
`),r(`actions`,2,`
receive | qabul qilmoq | получить
calculate | hisoblamoq | вычислить
convert | aylantirmoq (bir turdan boshqasiga) | преобразовать
parse | tahlil qilib o'qimoq (matndan qiymat olish) | разобрать (получить значение из текста)
cut | qirqib olmoq | вырезать
insert | qo'yib qo'ymoq (orasiga) | вставить (между)
increase | oshirmoq | увеличить
decrease | kamaytirmoq | уменьшить
compare | solishtirmoq | сравнить
declare | e'lon qilmoq | объявить
assign | qiymat bermoq (o'zlashtirmoq) | присвоить
define | aniqlamoq, belgilamoq | определить
pass | uzatmoq (argument sifatida); o'tmoq | передать (как аргумент); пройти
handle | ishlov bermoq, boshqarmoq | обработать
listen | tinglamoq (hodisani kutmoq) | слушать (ждать событие)
wait | kutmoq | ждать
fetch | olib kelmoq (serverdan) | получить (с сервера)
install | o'rnatmoq | установить
build | yig'moq (loyihani) | собрать (проект)
debug | xatoni qidirib tuzatmoq | отлаживать
keep | saqlab turmoq | сохранять, держать
skip | o'tkazib yubormoq | пропустить
exit | chiqmoq | выйти
refresh | yangilamoq (sahifani) | обновить (страницу)
reload | qayta yuklamoq | перезагрузить
generate | hosil qilmoq | сгенерировать
store | saqlamoq (xotirada) | хранить
connect | ulamoq | подключить
share | ulashmoq | поделиться
upload | yuklamoq (serverga) | загрузить (на сервер)
drag | sudramoq | перетащить
drop | tashlamoq (sudrab kelib) | бросить (перетащив)
scroll | aylantirmoq (sahifani pastga-tepaga) | прокрутить
pause | to'xtatib turmoq | приостановить
win | yutmoq | выиграть
lose | yutqazmoq | проиграть
guess | taxmin qilmoq | угадать
contain | o'z ichiga olmoq | содержать
exist | mavjud bo'lmoq | существовать
match | mos kelmoq | совпадать
format | formatlamoq (chiroyli tartibga keltirmoq) | форматировать
toggle | almashtirmoq (yoqish/o'chirish) | переключить (вкл/выкл)
execute | bajarmoq | выполнить
compile | kompilyatsiya qilmoq | компилировать
confirm | tasdiqlamoq | подтвердить
submit | jo'natmoq (formani) | отправить (форму)
apply | qo'llamoq | применить
`),r(`actions`,3,`
append | oxiriga qo'shmoq | добавить в конец
initialize | boshlang'ich qiymat bermoq | инициализировать
invoke | chaqirmoq (funksiyani) | вызвать (функцию)
deploy | serverga chiqarmoq (saytni) | развернуть (на сервере)
render | chizmoq (ekranga chiqarmoq) | отрисовать
trigger | ishga tushirib yubormoq (hodisani) | вызвать (событие)
emit | chiqarmoq, yubormoq (hodisani) | испустить (событие)
resolve | hal qilmoq; va'dani bajarmoq | разрешить; выполнить промис
reject | rad etmoq | отклонить
validate | to'g'riligini tekshirmoq | проверить корректность
iterate | birma-bir aylanib chiqmoq | перебирать
extract | ajratib olmoq | извлечь
measure | o'lchamoq | измерить
override | ustidan yozmoq (qayta belgilamoq) | переопределить
`),r(`methods`,1,`
console.log() | konsolga chiqarish | вывести в консоль
.push() | massiv oxiriga qo'shish | добавить в конец массива
.pop() | massiv oxiridan olib tashlash | удалить из конца массива
.length | uzunlik — elementlar yoki harflar soni | длина — количество элементов или символов
.includes() | o'z ichiga oladimi (true/false) | содержит ли (true/false)
.indexOf() | qaysi o'rinda turibdi (yo'q bo'lsa -1) | на какой позиции (нет — -1)
.toUpperCase() | katta harfga o'tkazish | перевести в верхний регистр
.toLowerCase() | kichik harfga o'tkazish | перевести в нижний регистр
.trim() | boshi va oxiridagi bo'shliqni olib tashlash | убрать пробелы по краям
.split() | satrni bo'lib massiv qilish | разделить строку в массив
.join() | massivni satrga birlashtirish | объединить массив в строку
.slice() | bo'lak kesib olish (aslini o'zgartirmaydi) | вырезать часть (не меняя оригинал)
.forEach() | har bir element uchun bajarish | выполнить для каждого элемента
.map() | har birini o'zgartirib yangi massiv yasash | создать новый массив из изменённых элементов
.filter() | shartga moslarini yangi massivga olish | отобрать подходящие в новый массив
.find() | shartga mos birinchi elementni topish | найти первый подходящий элемент
Math.random() | 0 va 1 orasida tasodifiy son | случайное число от 0 до 1
Math.round() | eng yaqin butun songa yaxlitlash | округлить до ближайшего целого
Math.floor() | pastga yaxlitlash | округлить вниз
Math.max() | eng kattasi | наибольшее
Math.min() | eng kichigi | наименьшее
parseInt() | satrdan butun son olish | получить целое число из строки
Number() | songa aylantirish | преобразовать в число
String() | satrga aylantirish | преобразовать в строку
alert() | ogohlantirish oynasini chiqarish | показать окно-предупреждение
prompt() | foydalanuvchidan matn so'rash | запросить текст у пользователя
`),r(`methods`,2,`
.shift() | massiv boshidan olib tashlash | удалить из начала массива
.unshift() | massiv boshiga qo'shish | добавить в начало массива
.splice() | o'rtadan o'chirish yoki qo'shish (aslini o'zgartiradi) | удалить или вставить в середине (меняет оригинал)
.concat() | ulash (massiv yoki satrlarni) | соединить (массивы или строки)
.reverse() | tartibini teskari qilish | развернуть порядок
.sort() | tartiblash | отсортировать
.reduce() | hammasini bitta qiymatga yig'ish | свести всё к одному значению
.some() | hech bo'lmasa bittasi mosmi | подходит ли хотя бы один
.every() | hammasi mosmi | подходят ли все
.findIndex() | mos elementning o'rnini topish | найти индекс подходящего элемента
.startsWith() | …bilan boshlanadimi | начинается ли с…
.endsWith() | …bilan tugaydimi | заканчивается ли на…
.replace() | birinchi moslikni almashtirish | заменить первое совпадение
.replaceAll() | hamma moslikni almashtirish | заменить все совпадения
.repeat() | satrni n marta takrorlash | повторить строку n раз
.toString() | satrga aylantirish | преобразовать в строку
.toFixed() | verguldan keyin n xonagacha yaxlitlash | округлить до n знаков после запятой
.charAt() | n-o'rindagi harf | символ на позиции n
Math.ceil() | yuqoriga yaxlitlash | округлить вверх
Math.abs() | modul (manfiysiz son) | модуль числа
Math.sqrt() | kvadrat ildiz | квадратный корень
Math.pow() | darajaga ko'tarish | возвести в степень
Math.PI | π soni (3.14…) | число π (3,14…)
parseFloat() | satrdan kasr son olish | получить дробное число из строки
isNaN() | son emasmi | не число ли
Array.isArray() | massivmi | массив ли
Array.from() | boshqa narsadan massiv yasash | создать массив из другого
Object.keys() | obyekt kalitlari ro'yxati | список ключей объекта
Object.values() | obyekt qiymatlari ro'yxati | список значений объекта
Object.entries() | [kalit, qiymat] juftliklari ro'yxati | список пар [ключ, значение]
JSON.stringify() | obyektni JSON matnga aylantirish | превратить объект в JSON-строку
JSON.parse() | JSON matndan obyekt olish | получить объект из JSON-строки
setTimeout() | biroz kutib bir marta bajarish | выполнить один раз через время
setInterval() | har n millisekundda takrorlash | повторять каждые n миллисекунд
clearInterval() | takrorlashni to'xtatish | остановить повторение
Date.now() | hozirgi vaqt (millisekundlarda) | текущее время (в миллисекундах)
document.querySelector() | sahifadan birinchi mos elementni topish | найти первый подходящий элемент страницы
document.getElementById() | id bo'yicha elementni topish | найти элемент по id
.addEventListener() | hodisani tinglashni ulash | подписаться на событие
.textContent | elementning matni | текст элемента
.innerHTML | element ichidagi HTML | HTML внутри элемента
.classList | element klasslari ro'yxati | список классов элемента
.value | maydondagi qiymat (input) | значение поля (input)
confirm() | «Ha/Yo'q» so'rash oynasi | окно «Да/Нет»
`),r(`methods`,3,`
.flat() | ichma-ich massivni tekislash | сделать вложенный массив плоским
.padStart() | boshini to'ldirib uzaytirish | дополнить строку в начале
.lastIndexOf() | oxirgi uchragan o'rni | позиция последнего вхождения
.at() | n-element (manfiy — oxiridan) | n-й элемент (отрицательный — с конца)
Math.trunc() | kasr qismini tashlab yuborish | отбросить дробную часть
document.createElement() | yangi HTML element yaratish | создать новый HTML-элемент
.appendChild() | element ichiga bola qo'shish | добавить дочерний элемент
.remove() | elementni sahifadan o'chirish | удалить элемент со страницы
.setAttribute() | atribut berish | задать атрибут
localStorage.setItem() | brauzerda saqlash | сохранить в браузере
localStorage.getItem() | brauzerdan o'qish | прочитать из браузера
fetch() | serverdan ma'lumot so'rash | запросить данные с сервера
.then() | keyin — va'da bajarilgach | затем — после выполнения промиса
structuredClone() | obyektning to'liq nusxasini olish | глубокая копия объекта
`),r(`logic`,1,`
and | va (&&) | и (&&)
or | yoki (||) | или (||)
not | emas (!) | не (!)
equal | teng | равный
greater than | …dan katta (>) | больше чем (>)
less than | …dan kichik (<) | меньше чем (<)
all | hammasi | все
any | istalgan, birorta | любой
each | har bir | каждый
when | qachon; …ganda | когда
before | oldin | до, перед
after | keyin | после
inside | ichida | внутри
outside | tashqarida | снаружи
same | bir xil | одинаковый
different | boshqacha, farqli | разный
more | ko'proq | больше
less | kamroq | меньше
always | doim | всегда
never | hech qachon | никогда
yes | ha | да
no | yo'q | нет
`),r(`logic`,2,`
than | …dan (solishtirishda) | чем (при сравнении)
not equal | teng emas (!==) | не равно (!==)
greater than or equal | katta yoki teng (>=) | больше или равно (>=)
less than or equal | kichik yoki teng (<=) | меньше или равно (<=)
both | ikkalasi ham | оба
none | hech biri | ни один
only | faqat | только
also | ham, shuningdek | также
then | keyin, u holda | тогда, затем
otherwise | aks holda | иначе
until | …guncha | пока не, до
between | orasida | между
at least | kamida | как минимум
at most | ko'pi bilan | не больше
most | eng ko'p | больше всего
maybe | balki | может быть
sometimes | ba'zan | иногда
true or false | rost yoki yolg'on | истина или ложь
`),r(`logic`,3,`
either | ikkalasidan biri | один из двух
neither | ikkalasi ham emas | ни один из двух
unless | …masa (agar …bo'lmasa) | если не
opposite | teskari, qarama-qarshi | противоположный
exactly | aynan | ровно, точно
least | eng kam | меньше всего
strict | qat'iy (=== turini ham tekshiradi) | строгий (=== проверяет и тип)
loose | yumshoq (== turini aylantirib solishtiradi) | нестрогий (== приводит типы)
truthy | rostga teng ko'riladigan qiymat | значение, считающееся истинным
falsy | yolg'onga teng ko'riladigan qiymat (0, "", null…) | значение, считающееся ложным (0, "", null…)
`),r(`errors`,1,`
error | xato | ошибка
warning | ogohlantirish | предупреждение
bug | xato (dasturdagi) | баг (ошибка в программе)
console | konsol — natija va xatolar chiqadigan oyna | консоль — окно вывода и ошибок
message | xabar | сообщение
is not defined | e'lon qilinmagan (bunday nom yo'q) | не определено (нет такого имени)
is not a function | funksiya emas (chaqirib bo'lmaydi) | не является функцией
unexpected token | kutilmagan belgi (sintaksis xatosi) | неожиданный символ (ошибка синтаксиса)
missing | yetishmayapti | отсутствует
invalid | noto'g'ri, yaroqsiz | недопустимый
not found | topilmadi | не найдено
failed | muvaffaqiyatsiz bo'ldi | не удалось
NaN | son emas (Not a Number) | не число (Not a Number)
`),r(`errors`,2,`
SyntaxError | sintaksis xatosi — kod noto'g'ri yozilgan | синтаксическая ошибка — код написан неверно
ReferenceError | havola xatosi — bunday nom yo'q | ошибка ссылки — нет такого имени
TypeError | tur xatosi — qiymat bilan bu amalni qilib bo'lmaydi | ошибка типа — с этим значением так нельзя
cannot read properties of | …ning xossasini o'qib bo'lmaydi (u undefined/null) | нельзя прочитать свойства (он undefined/null)
has already been declared | allaqachon e'lon qilingan | уже объявлено
unexpected end of input | kod kutilmaganda tugadi (qavs yopilmagan) | неожиданный конец (не закрыта скобка)
expected | kutilgan edi | ожидалось
uncaught | ushlanmagan (xato try/catch'siz) | неперехваченный
infinite loop | cheksiz sikl | бесконечный цикл
crash | qulash (dastur to'xtab qolishi) | сбой, падение программы
timeout | vaqt tugadi | время истекло
unknown | noma'lum | неизвестный
Infinity | cheksizlik | бесконечность
`),r(`errors`,3,`
RangeError | oraliq xatosi — qiymat ruxsat etilgan chegaradan tashqarida | ошибка диапазона — значение вне допустимого
assignment to constant variable | o'zgarmasga qiymat berib bo'lmaydi | нельзя присвоить значение константе
maximum call stack size exceeded | chaqiruvlar juda chuqur (cheksiz rekursiya) | превышен размер стека (бесконечная рекурсия)
exception | istisno (dastur ichidagi xato holati) | исключение
stack trace | xato yo'li — qaysi funksiyalar orqali kelgani | трассировка стека
breakpoint | to'xtash nuqtasi (debugger'da) | точка остановки (в отладчике)
permission denied | ruxsat yo'q | доступ запрещён
out of range | chegaradan tashqarida | вне диапазона
deprecated | eskirgan (ishlatmaslik tavsiya etiladi) | устаревший (не рекомендуется)
unreachable | yetib bo'lmaydigan (hech qachon bajarilmaydi) | недостижимый (никогда не выполнится)
`),r(`html`,1,`
tag | teg — <p> kabi belgi | тег — метка вроде <p>
head | bosh qism (sahifa sozlamalari) | голова (настройки страницы)
body | tana — sahifada ko'rinadigan qism | тело — видимая часть страницы
title | sarlavha (tab nomi) | заголовок (название вкладки)
heading | sarlavha (h1–h6) | заголовок (h1–h6)
paragraph | xatboshi (p) | абзац (p)
link | havola (a) | ссылка (a)
image | rasm (img) | изображение (img)
button | tugma | кнопка
form | forma (to'ldiriladigan) | форма
input field | kiritish maydoni (input) | поле ввода (input)
label | yorliq (maydon nomi) | подпись (метка поля)
table | jadval | таблица
id | identifikator — elementning yagona nomi | идентификатор — уникальное имя элемента
video | video | видео
`),r(`html`,2,`
attribute | atribut — tegga qo'shimcha ma'lumot | атрибут — доп. информация тега
ordered list | raqamli ro'yxat (ol) | нумерованный список (ol)
unordered list | belgili ro'yxat (ul) | маркированный список (ul)
list item | ro'yxat bandi (li) | пункт списка (li)
header | sahifa tepasi (header) | шапка страницы (header)
footer | sahifa pasti (footer) | подвал страницы (footer)
navigation | navigatsiya — menyu havolalari (nav) | навигация — ссылки меню (nav)
section | bo'lim | раздел
main | asosiy | основной
division | bo'linma (div — oddiy quti) | блок (div — обычный контейнер)
source | manba | источник
alt text | rasm o'rnidagi matn (alt) | альтернативный текст (alt)
placeholder | maydondagi xira maslahat matni | подсказка в пустом поле
checkbox | belgilash katagi | флажок
option | variant (select ichida) | вариант (внутри select)
audio | ovoz | аудио
nested | ichma-ich joylashgan | вложенный
opening tag | ochuvchi teg | открывающий тег
closing tag | yopuvchi teg | закрывающий тег
document | hujjat (sahifa) | документ (страница)
script | skript — sahifadagi JS kod | скрипт — JS-код на странице
href | havola manzili (a tegida) | адрес ссылки (в теге a)
src | fayl manzili (img, script) | адрес файла (img, script)
line break | yangi qatorga o'tish (br) | перенос строки (br)
cell | katak (jadvalda) | ячейка (таблицы)
`),r(`html`,3,`
article | maqola (mustaqil blok) | статья (самостоятельный блок)
span | qator ichidagi kichik o'rama | строчный контейнер
anchor | langar — a tegining to'liq nomi | якорь — полное имя тега a
radio button | bitta tanlov tugmasi | переключатель (radio)
textarea | ko'p qatorli matn maydoni | многострочное поле
iframe | sahifa ichidagi boshqa sahifa | страница внутри страницы
semantic | ma'noli (teg nimaligini bildiradi) | семантический (тег говорит, что это)
self-closing | o'zi yopiladigan (img, br) | самозакрывающийся (img, br)
meta | sahifa haqidagi ma'lumot tegi | тег сведений о странице
charset | belgilar kodlash turi (UTF-8) | кодировка символов (UTF-8)
accessibility | qulaylik — hamma foydalana olishi | доступность для всех
`),r(`css`,1,`
style | uslub, ko'rinish | стиль
color | rang | цвет
background | fon | фон
border | chegara, ramka | граница, рамка
width | eni | ширина
height | bo'yi | высота
size | o'lcham | размер
font | shrift | шрифт
center | markaz | центр
left | chap | левый
right | o'ng; to'g'ri | правый; правильный
top | tepa | верх
bottom | past | низ
red | qizil | красный
green | yashil | зелёный
blue | ko'k | синий
yellow | sariq | жёлтый
black | qora | чёрный
white | oq | белый
gray | kulrang | серый
orange | to'q sariq | оранжевый
purple | binafsha | фиолетовый
pink | pushti | розовый
brown | jigarrang | коричневый
`),r(`css`,2,`
selector | selektor — qaysi elementga uslub berilishi | селектор — к какому элементу стиль
margin | tashqi bo'shliq | внешний отступ
padding | ichki bo'shliq | внутренний отступ
font size | shrift o'lchami | размер шрифта
weight | qalinlik (font-weight) | толщина (font-weight)
bold | qalin | жирный
align | tekislamoq | выравнивать
display | ko'rinish turi (block, flex…) | тип отображения (block, flex…)
position | joylashuv | позиция
flex | moslashuvchan qator/ustun joylashuvi | гибкая раскладка в строку/столбец
grid | to'r (katakli joylashuv) | сетка
gap | oraliq (elementlar orasida) | промежуток (между элементами)
shadow | soya | тень
border radius | burchak yumaloqligi | скругление углов
animation | animatsiya, harakat | анимация
rotate | aylantirmoq, burmoq | повернуть
hover | ustiga kelish (sichqoncha) | наведение (мыши)
layout | joylashuv (sahifa tuzilishi) | раскладка (структура страницы)
container | konteyner, idish | контейнер
box | quti | коробка, блок
cursor | kursor (sichqoncha ko'rsatkichi) | курсор
auto | avtomatik | автоматически
pixel | piksel (px) — ekran nuqtasi | пиксель (px) — точка экрана
unit | o'lchov birligi | единица измерения
transparent | shaffof | прозрачный
`),r(`css`,3,`
justify | (qator bo'ylab) tekislamoq | выравнивать (вдоль строки)
wrap | o'ramoq; keyingi qatorga o'tkazish | обернуть; переносить на следующую строку
relative | nisbiy | относительный
absolute | mutlaq | абсолютный
fixed | qotirilgan (joyidan siljimaydi) | фиксированный
sticky | yopishqoq (scrollda yopishib turadi) | липкий (прилипает при прокрутке)
overflow | toshib chiqish | переполнение
opacity | xiralik (shaffoflik darajasi) | непрозрачность
transition | o'tish — silliq o'zgarish | переход — плавное изменение
transform | shaklini o'zgartirish (siljitish, burish) | трансформация
scale | kattalashtirish/kichraytirish | масштабировать
focus | fokus — tanlangan, yozishga tayyor | фокус — выбран, готов к вводу
responsive | moslashuvchan (har ekranga moslashadi) | адаптивный
media query | ekran o'lchamiga qarab uslub | медиазапрос
outline | tashqi kontur | контур (outline)
pointer | ko'rsatkich (qo'l shaklidagi kursor) | указатель (курсор-рука)
inherit | meros olmoq (ota elementdan) | наследовать
viewport | ko'rinadigan ekran maydoni | видимая область экрана
z-index | qatlam tartibi (qaysi ustida) | порядок слоёв
gradient | gradient — rangdan rangga o'tish | градиент
`),r(`web`,1,`
internet | internet | интернет
website | veb-sayt | веб-сайт
page | sahifa | страница
browser | brauzer | браузер
online | onlayn (internetda) | онлайн
offline | oflayn (internetsiz) | офлайн
user | foydalanuvchi | пользователь
account | akkaunt, hisob | аккаунт, учётная запись
password | parol | пароль
login | kirish (akkauntga) | вход (в аккаунт)
logout | chiqish (akkauntdan) | выход (из аккаунта)
sign in | tizimga kirmoq | войти
email | elektron pochta | электронная почта
username | foydalanuvchi nomi | имя пользователя
profile | profil | профиль
address | manzil | адрес
loading | yuklanmoqda | загрузка
`),r(`web`,2,`
server | server — ma'lumot beradigan kompyuter | сервер — компьютер, отдающий данные
client | mijoz (brauzer tomoni) | клиент (сторона браузера)
request | so'rov | запрос
response | javob | ответ
URL | sayt manzili | адрес сайта
domain | domen (atomjs.uz kabi nom) | домен (имя вроде atomjs.uz)
network | tarmoq | сеть
connection | ulanish | соединение
API | API — dasturlar bir-biri bilan gaplashish usuli | API — способ общения программ
JSON | JSON — ma'lumot yozish formati | JSON — формат записи данных
database | ma'lumotlar bazasi | база данных
cloud | bulut (internetdagi saqlash) | облако (хранение в интернете)
sign up | ro'yxatdan o'tmoq | зарегистрироваться
secure | xavfsiz | безопасный
HTTP | HTTP — sahifa almashish qoidasi | HTTP — протокол обмена страницами
status | holat | статус
frontend | frontend — foydalanuvchi ko'radigan qism | фронтенд — видимая часть
backend | backend — server tomoni | бэкенд — серверная часть
host | xost — saytni joylashtiruvchi | хост — где размещён сайт
event | hodisa (bosish, yozish…) | событие (клик, ввод…)
`),r(`web`,3,`
cookie | kuki — brauzerda saqlanadigan kichik ma'lumot | куки — маленькие данные в браузере
cache | kesh — tez ochilishi uchun saqlangan nusxa | кэш — сохранённая копия для скорости
session | sessiya — kirib turgan vaqt | сессия — время работы после входа
token | token — kirish kaliti | токен — ключ доступа
hosting | xosting — saytni internetda joylashtirish | хостинг — размещение сайта
search engine | qidiruv tizimi | поисковая система
protocol | protokol — aloqa qoidasi | протокол — правила связи
port | port — server eshigi raqami | порт — номер «двери» сервера
endpoint | so'rov yuboriladigan manzil | адрес для запроса
query | so'rov (manzildagi ?… qismi) | запрос (часть ?… в адресе)
encryption | shifrlash | шифрование
`),r(`tools`,1,`
editor | muharrir (kod yoziladigan joy) | редактор (где пишут код)
tab | tab (brauzer oynasi); Tab tugmasi | вкладка; клавиша Tab
`),r(`tools`,2,`
git | Git — kod o'zgarishlari tarixi | Git — история изменений кода
repository | ombor — loyiha va uning tarixi | репозиторий — проект и его история
commit | o'zgarishni saqlash (Git'da) | коммит — сохранить изменение (в Git)
branch | shox (Git'dagi parallel yo'l) | ветка (в Git)
merge | birlashtirmoq (shoxlarni) | слить (ветки)
pull | tortib olmoq (serverdan yangisini) | стянуть (новое с сервера)
push | yubormoq (o'zgarishlarni serverga) | отправить (изменения на сервер)
terminal | terminal — buyruq yoziladigan oyna | терминал — окно для команд
command | buyruq | команда
shortcut | tezkor tugma (Ctrl+C kabi) | горячая клавиша (как Ctrl+C)
preview | oldindan ko'rish | предпросмотр
developer tools | dasturchi asboblari (F12) | инструменты разработчика (F12)
playground | sinov maydoni | песочница
compiler | kompilyator — kodni bajarishga tayyorlovchi | компилятор
`),r(`tools`,3,`
clone | nusxa olmoq (repozitoriydan) | клонировать (репозиторий)
extension | kengaytma (qo'shimcha imkoniyat) | расширение
plugin | plagin — qo'shimcha modul | плагин
dependency | bog'liqlik (loyihaga kerak paket) | зависимость
snippet | kod parchasi | фрагмент кода
environment | muhit (kod ishlaydigan joy) | среда (где работает код)
interpreter | interpretator — kodni qatorma-qator bajaruvchi | интерпретатор
inspect | ko'zdan kechirmoq (elementni) | исследовать (элемент)
pull request | o'zgarishni qo'shish so'rovi | запрос на слияние
conflict | to'qnashuv (ikki o'zgarish bir joyda) | конфликт (два изменения в одном месте)
`),r(`computer`,1,`
computer | kompyuter | компьютер
screen | ekran | экран
keyboard | klaviatura | клавиатура
mouse | sichqoncha | мышь
file | fayl | файл
folder | papka | папка
laptop | noutbuk | ноутбук
phone | telefon | телефон
application | ilova, dastur | приложение
icon | ikonka, belgi | иконка
window | oyna | окно
Enter | kiritmoq, kirmoq; Enter — tasdiqlash / yangi qator tugmasi | ввести, войти; Enter — подтвердить / новая строка
space | bo'shliq; probel tugmasi | пробел
`),r(`computer`,2,`
desktop | ish stoli | рабочий стол
tablet | planshet | планшет
device | qurilma | устройство
memory | xotira | память
speed | tezlik | скорость
battery | batareya | батарея
software | dasturiy ta'minot | программное обеспечение
system | tizim | система
camera | kamera | камера
microphone | mikrofon | микрофон
speaker | karnay | динамик
headphones | quloqchin | наушники
Wi-Fi | simsiz internet | беспроводной интернет
path | yo'l (fayl manzili) | путь (адрес файла)
Escape | Esc — bekor qilish tugmasi | Esc — клавиша отмены
Backspace | orqaga o'chirish tugmasi | клавиша удаления назад
Shift | Shift — katta harf tugmasi | Shift — клавиша заглавных
Ctrl | Ctrl — boshqaruv tugmasi | Ctrl — клавиша управления
arrow keys | strelka tugmalari | клавиши-стрелки
`),r(`computer`,3,`
storage | saqlash joyi | хранилище
disk | disk | диск
processor | protsessor | процессор
hardware | apparat qismi (qurilmaning o'zi) | аппаратное обеспечение
operating system | operatsion tizim | операционная система
printer | printer | принтер
charger | quvvatlagich | зарядное устройство
cable | kabel, sim | кабель
bit | bit — eng kichik ma'lumot (0 yoki 1) | бит — наименьшая единица (0 или 1)
byte | bayt — 8 bit | байт — 8 бит
megabyte | megabayt (MB) | мегабайт (МБ)
gigabyte | gigabayt (GB) | гигабайт (ГБ)
Caps Lock | katta harflarni qotirish tugmasi | клавиша фиксации заглавных
`),r(`math`,1,`
plus | qo'shuv (+) | плюс (+)
minus | ayiruv (-) | минус (-)
multiply | ko'paytirmoq (*) | умножить (*)
divide | bo'lmoq (/) | разделить (/)
equals | teng bo'ladi (=) | равно (=)
sum | yig'indi | сумма
average | o'rtacha | среднее
half | yarim | половина
total | jami | итого
zero | nol | ноль
one | bir | один
two | ikki | два
three | uch | три
ten | o'n | десять
hundred | yuz | сто
thousand | ming | тысяча
minimum | eng kichik | минимум
maximum | eng katta | максимум
`),r(`math`,2,`
difference | ayirma | разность
remainder | qoldiq (%) | остаток (%)
percent | foiz | процент
double | ikki barobar | двойной
square | kvadrat | квадрат
power | daraja (2³); quvvat | степень (2³); мощность
even | juft | чётный
odd | toq | нечётный
positive | musbat | положительный
negative | manfiy | отрицательный
million | million | миллион
round | yaxlitlamoq; raund (o'yinda) | округлить; раунд (в игре)
range | oraliq | диапазон
amount | miqdor | количество, сумма
formula | formula | формула
circle | aylana, doira | круг
triangle | uchburchak | треугольник
rectangle | to'rtburchak | прямоугольник
point | nuqta; ball | точка; очко
`),r(`math`,3,`
product | ko'paytma | произведение
quotient | bo'linma | частное
modulo | qoldiqli bo'lish (%) | деление по модулю (%)
triple | uch barobar | тройной
square root | kvadrat ildiz | квадратный корень
fraction | kasr | дробь
equation | tenglama | уравнение
angle | burchak | угол
degree | gradus; daraja | градус; степень
coordinate | koordinata | координата
axis | o'q (x yoki y) | ось (x или y)
ceiling | yuqoriga yaxlitlash; shift | округление вверх; потолок
`),r(`time`,1,`
time | vaqt | время
date | sana | дата
day | kun | день
week | hafta | неделя
month | oy | месяц
year | yil | год
hour | soat | час
minute | daqiqa | минута
second | soniya; ikkinchi | секунда; второй
today | bugun | сегодня
tomorrow | ertaga | завтра
yesterday | kecha | вчера
now | hozir | сейчас
timer | taymer | таймер
clock | soat (asbob) | часы
morning | ertalab | утро
evening | kechqurun | вечер
`),r(`time`,2,`
millisecond | millisekund (1000 tasi = 1 soniya) | миллисекунда (1000 = 1 секунда)
later | keyinroq | позже
soon | tez orada | скоро
delay | kechikish | задержка
interval | oraliq (vaqt) | интервал
deadline | oxirgi muddat | крайний срок
duration | davomiylik | длительность
calendar | taqvim | календарь
late | kech | поздно
early | erta | рано
`),r(`time`,3,`
schedule | jadval (vaqt bo'yicha) | расписание
timestamp | vaqt belgisi (aniq vaqt soni) | метка времени
timezone | vaqt mintaqasi | часовой пояс
`),r(`ui`,1,`
menu | menyu | меню
settings | sozlamalar | настройки
home | bosh sahifa; uy | главная; дом
back | orqaga | назад
next | keyingi | следующий
previous | oldingi | предыдущий
language | til | язык
level | daraja | уровень
score | ball, hisob | счёт, очки
player | o'yinchi | игрок
game | o'yin | игра
winner | g'olib | победитель
team | jamoa | команда
coin | tanga | монета
help | yordam | помощь
OK | mayli, tasdiqlash | ОК
cancel | bekor qilish | отмена
done | tayyor, bajarildi | готово
finish | tugatmoq; marra | закончить; финиш
ready | tayyor | готов
welcome | xush kelibsiz | добро пожаловать
`),r(`ui`,2,`
popup | qalqib chiquvchi oyna | всплывающее окно
notification | bildirishnoma | уведомление
avatar | avatar — profil rasmi | аватар — картинка профиля
theme | mavzu, tema (ko'rinish) | тема (оформление)
mode | rejim | режим
loser | yutqazgan | проигравший
rank | o'rin, daraja | место, ранг
leaderboard | reyting jadvali | таблица лидеров
reward | mukofot | награда
prize | sovrin | приз
life | hayot, jon (o'yinda) | жизнь (в игре)
bonus | bonus, qo'shimcha | бонус
info | ma'lumot | информация
about | haqida | о (чём-то)
card | karta | карточка
progress | rivojlanish, progress | прогресс
dropdown | ochiladigan ro'yxat | выпадающий список
step | qadam | шаг
`),r(`ui`,3,`
modal | modal oyna (ustidan ochiladigan) | модальное окно
dashboard | boshqaruv paneli | панель управления
toolbar | asboblar paneli | панель инструментов
sidebar | yon panel | боковая панель
scrollbar | aylantirish chizig'i | полоса прокрутки
slider | surilgich | ползунок
badge | nishon, belgi | значок
tooltip | ustiga kelganda chiqadigan izoh | всплывающая подсказка
feedback | fikr-mulohaza | обратная связь
contact | aloqa | контакт
health | sog'liq (o'yinda) | здоровье (в игре)
`),r(`describe`,1,`
empty | bo'sh | пустой
full | to'la | полный
old | eski | старый
big | katta | большой
small | kichik | маленький
long | uzun | длинный
short | qisqa | короткий
fast | tez | быстрый
slow | sekin | медленный
easy | oson | лёгкий
hard | qiyin; qattiq | трудный; твёрдый
simple | oddiy | простой
correct | to'g'ri | правильный
wrong | noto'g'ri | неправильный
first | birinchi | первый
last | oxirgi | последний
random | tasodifiy | случайный
dark | to'q, qorong'i | тёмный
light | och, yorug'; yengil | светлый; лёгкий
good | yaxshi | хороший
bad | yomon | плохой
many | ko'p | много
`),r(`describe`,2,`
large | katta | крупный
high | baland, yuqori | высокий
low | past | низкий
difficult | qiyin | сложный
complex | murakkab | сложный, комплексный
valid | to'g'ri, yaroqli | корректный, допустимый
visible | ko'rinadigan | видимый
hidden | yashirin | скрытый
active | faol | активный
disabled | o'chirilgan (bosib bo'lmaydi) | отключённый
available | mavjud, foydalanish mumkin | доступный
required | majburiy | обязательный
optional | ixtiyoriy | необязательный
unique | yagona, takrorlanmas | уникальный
current | joriy, hozirgi | текущий
real | haqiqiy | настоящий
possible | mumkin | возможный
important | muhim | важный
useful | foydali | полезный
free | bepul; bo'sh | бесплатный; свободный
safe | xavfsiz | безопасный
broken | buzilgan | сломанный
clean | toza | чистый
similar | o'xshash | похожий
whole | butun | целый
single | yakka, bitta | одиночный
multiple | bir nechta | несколько, множественный
several | bir qancha | несколько
few | oz | мало
extra | qo'shimcha | дополнительный
special | maxsus | особый
basic | asosiy, boshlang'ich | базовый
final | yakuniy | финальный
automatic | avtomatik | автоматический
successful | muvaffaqiyatli | успешный
`),r(`describe`,3,`
enabled | yoqilgan | включённый
public | ochiq (hammaga) | публичный
private | shaxsiy, yopiq | приватный
bright | yorqin | яркий
dynamic | dinamik (o'zgaruvchan) | динамический
partial | qisman | частичный
custom | o'zingiz sozlagan | пользовательский
advanced | ilg'or, murakkab | продвинутый
temporary | vaqtinchalik | временный
permanent | doimiy | постоянный
manual | qo'lda | ручной
readable | o'qilishi oson | читаемый
dangerous | xavfli | опасный
paid | pullik | платный
`),r(`general`,1,`
example | misol | пример
exercise | mashq | упражнение
task | topshiriq, vazifa | задание
problem | masala; muammo | задача; проблема
solution | yechim | решение
answer | javob | ответ
question | savol | вопрос
hint | maslahat, ishora | подсказка
rule | qoida | правило
lesson | dars | урок
topic | mavzu | тема
because | chunki | потому что
but | lekin | но
again | yana, qaytadan | снова
with | bilan | с
mistake | xato (odam qilgan) | ошибка (сделанная человеком)
part | qism | часть
learn | o'rganmoq | учить, изучать
understand | tushunmoq | понимать
remember | eslab qolmoq | запомнить
know | bilmoq | знать
think | o'ylamoq | думать
can | qila olmoq | мочь
`),r(`general`,2,`
note | eslatma | примечание
practice | amaliyot, mashq qilmoq | практика
explanation | tushuntirish | объяснение
description | tavsif | описание
instruction | ko'rsatma | инструкция
goal | maqsad | цель
idea | g'oya | идея
reason | sabab | причина
so | shuning uchun | поэтому
usually | odatda | обычно
often | tez-tez | часто
already | allaqachon | уже
still | hali ham | всё ещё
instead | o'rniga | вместо
without | …siz | без
for example | masalan | например
row | qator (jadvalda) | строка (таблицы)
column | ustun | столбец
beginner | boshlovchi | начинающий
skill | ko'nikma | навык
teach | o'rgatmoq | учить (кого-то)
forget | unutmoq | забыть
explain | tushuntirmoq | объяснить
describe | tasvirlamoq | описать
improve | yaxshilamoq | улучшить
complete | tugallamoq; to'liq | завершить; полный
correctly | to'g'ri (ravish) | правильно
quickly | tez (ravish) | быстро
step by step | qadam-baqadam | шаг за шагом
at the end | oxirida | в конце
at the beginning | boshida | в начале
below | pastda | ниже
above | yuqorida | выше
given | berilgan | данный
means | …degani, anglatadi | означает
called | …deb ataladi | называется
takes | qabul qiladi (argument) | принимает (аргумент)
should | kerak (tavsiya) | следует
must | shart, kerak | должен
`),r(`general`,3,`
however | biroq | однако
therefore | shuning uchun | следовательно
e.g. | masalan (qisqartma) | например (сокращение)
i.e. | ya'ni (qisqartma) | то есть (сокращение)
etc. | va hokazo | и так далее
such as | …kabi | такие как
in order to | …uchun (maqsadida) | для того чтобы
note that | e'tibor bering | обратите внимание
chapter | bob | глава
expert | mutaxassis | эксперт
carefully | diqqat bilan | внимательно
following | quyidagi | следующий (ниже)
`);var i=n;function a(e){return e.toLowerCase().replace(/[‘’ʼʻ`]/g,`'`).replace(/ё/g,`е`).trim()}export{i as n,a as r,t};