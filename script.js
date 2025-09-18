// =====================
// Country List
// =====================
const countryList = {
  AED: "AE", AFN: "AF", ALL: "AL", AMD: "AM", ANG: "NL", AOA: "AO", ARS: "AR", AUD: "AU", AWG: "AW",
  AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN",
  BOB: "BO", BRL: "BR", BSD: "BS", BTN: "BT", BWP: "BW", BYN: "BY", BZD: "BZ", CAD: "CA", CDF: "CD",
  CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CZK: "CZ", DJF: "DJ",
  DKK: "DK", DOP: "DO", DZD: "DZ", EGP: "EG", ERN: "ER", ETB: "ET", EUR: "FR", FJD: "FJ", FKP: "FK",
  FOK: "FO", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT",
  GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", ILS: "IL", IMP: "IM",
  INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JEP: "JE", JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE",
  KGS: "KG", KHR: "KH", KID: "KI", KMF: "KM", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA",
  LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK",
  MMK: "MM", MNT: "MN", MOP: "MO", MRU: "MR", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY",
  MZN: "MZ", NAD: "NA", NGN: "NG", NIO: "NI", NOK: "NO", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA",
  PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", RSD: "RS",
  RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", SHP: "SH",
  SLE: "SL", SLL: "SL", SOS: "SO", SRD: "SR", SSP: "SS", STN: "ST", SYP: "SY", SZL: "SZ", THB: "TH",
  TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TVD: "TV", TWD: "TW", TZS: "TZ",
  UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", VES: "VE", VND: "VN", VUV: "VU", WST: "WS",
  XAF: "CM", XCD: "AG", XOF: "SN", XPF: "PF", YER: "YE", ZAR: "ZA", ZMW: "ZM", ZWL: "ZW"
};

// =====================
// Currency Full Names
// =====================
const currencyFullNames = {
  "AFN": "Afghan Afghani", "ALL": "Albanian Lek", "DZD": "Algerian Dinar",
  "AOA": "Angolan Kwanza", "ARS": "Argentine Peso", "AMD": "Armenian Dram",
  "AWG": "Aruban Florin", "AUD": "Australian Dollar", "AZN": "Azerbaijani Manat",
  "BSD": "Bahamian Dollar", "BHD": "Bahraini Dinar", "BDT": "Bangladeshi Taka",
  "BBD": "Barbadian Dollar", "BYN": "Belarusian Ruble", "BZD": "Belize Dollar",
  "XOF": "West African CFA Franc", "BMD": "Bermudian Dollar", "BTN": "Bhutanese Ngultrum",
  "BOB": "Bolivian Boliviano", "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BWP": "Botswanan Pula", "BRL": "Brazilian Real", "BND": "Brunei Dollar",
  "BGN": "Bulgarian Lev", "BIF": "Burundian Franc", "KHR": "Cambodian Riel",
  "CAD": "Canadian Dollar", "CVE": "Cape Verdean Escudo", "KYD": "Cayman Islands Dollar",
  "XAF": "Central African CFA Franc", "CLP": "Chilean Peso", "CNY": "Chinese Yuan",
  "COP": "Colombian Peso", "KMF": "Comorian Franc", "CDF": "Congolese Franc",
  "CRC": "Costa Rican Colón", "HRK": "Croatian Kuna", "CUP": "Cuban Peso",
  "CZK": "Czech Koruna", "DKK": "Danish Krone", "DJF": "Djiboutian Franc",
  "DOP": "Dominican Peso", "EGP": "Egyptian Pound", "ERN": "Eritrean Nakfa",
  "SZL": "Swazi Lilangeni", "ETB": "Ethiopian Birr", "EUR": "Euro",
  "FKP": "Falkland Islands Pound", "FJD": "Fijian Dollar", "XPF": "CFP Franc",
  "GMD": "Gambian Dalasi", "GEL": "Georgian Lari", "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound", "GTQ": "Guatemalan Quetzal", "GNF": "Guinean Franc",
  "GYD": "Guyanaese Dollar", "HTG": "Haitian Gourde", "HNL": "Honduran Lempira",
  "HKD": "Hong Kong Dollar", "HUF": "Hungarian Forint", "ISK": "Icelandic Króna",
  "INR": "Indian Rupee", "IDR": "Indonesian Rupiah", "IRR": "Iranian Rial",
  "IQD": "Iraqi Dinar", "ILS": "Israeli New Shekel", "JMD": "Jamaican Dollar",
  "JPY": "Japanese Yen", "JOD": "Jordanian Dinar", "KZT": "Kazakhstani Tenge",
  "KES": "Kenyan Shilling", "KID": "Kiribati Dollar", "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar", "KGS": "Kyrgystani Som", "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound", "LSL": "Lesotho Loti", "LRD": "Liberian Dollar",
  "LYD": "Libyan Dinar", "MOP": "Macanese Pataca", "MKD": "Macedonian Denar",
  "MGA": "Malagasy Ariary", "MWK": "Malawian Kwacha", "MYR": "Malaysian Ringgit",
  "MVR": "Maldivian Rufiyaa", "MRU": "Mauritanian Ouguiya", "MUR": "Mauritian Rupee",
  "MXN": "Mexican Peso", "MDL": "Moldovan Leu", "MNT": "Mongolian Tugrik",
  "MAD": "Moroccan Dirham", "MZN": "Mozambican Metical", "MMK": "Myanma Kyat",
  "NAD": "Namibian Dollar", "NPR": "Nepalese Rupee", "ANG": "Netherlands Antillean Guilder",
  "NZD": "New Zealand Dollar", "NIO": "Nicaraguan Córdoba", "NGN": "Nigerian Naira",
  "NOK": "Norwegian Krone", "OMR": "Omani Rial", "PKR": "Pakistani Rupee",
  "PAB": "Panamanian Balboa", "PGK": "Papua New Guinean Kina", "PYG": "Paraguayan Guarani",
  "PEN": "Peruvian Nuevo Sol", "PHP": "Philippine Peso", "PLN": "Polish Zloty",
  "QAR": "Qatari Rial", "RON": "Romanian Leu", "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc", "SHP": "Saint Helena Pound", "WST": "Samoan Tala",
  "STN": "São Tomé and Príncipe Dobra", "SAR": "Saudi Riyal", "RSD": "Serbian Dinar",
  "SCR": "Seychellois Rupee", "SLL": "Sierra Leonean Leone", "SLE": "Sierra Leonean Leone",
  "SGD": "Singapore Dollar", "SBD": "Solomon Islands Dollar", "SOS": "Somali Shilling",
  "ZAR": "South African Rand", "SSP": "South Sudanese Pound", "LKR": "Sri Lankan Rupee",
  "SDG": "Sudanese Pound", "SRD": "Surinamese Dollar", "SEK": "Swedish Krona",
  "CHF": "Swiss Franc", "SYP": "Syrian Pound", "TWD": "New Taiwan Dollar",
  "TJS": "Tajikistani Somoni", "TZS": "Tanzanian Shilling", "THB": "Thai Baht",
  "TOP": "Tongan Paʻanga", "TTD": "Trinidad and Tobago Dollar", "TND": "Tunisian Dinar",
  "TRY": "Turkish Lira", "TMT": "Turkmenistani Manat", "TVD": "Tuvaluan Dollar",
  "UGX": "Ugandan Shilling", "UAH": "Ukrainian Hryvnia", "AED": "United Arab Emirates Dirham",
  "GBP": "British Pound Sterling", "USD": "United States Dollar", "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistani Som", "VUV": "Vanuatu Vatu", "VES": "Venezuelan Bolívar Soberano",
  "VND": "Vietnamese Dong", "YER": "Yemeni Rial", "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
};

// =====================
// Elements
// =====================
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".currency select");
const from = document.querySelector(".currency1 select");
const to = document.querySelector(".currency2 select");
const display = document.querySelector(".output");

// =====================
// Populate Dropdowns
// =====================
for (let select of dropdowns) {
  for (let code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyFullNames[code];
    newOption.value = code;

    if (select.name === "from" && code === "PKR") newOption.selected = true;
    if (select.name === "to" && code === "USD") newOption.selected = true;

    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
    convertCurrency();
  });
}

// =====================
// Update Flag
// =====================
function updateFlag(element) {
  let code = element.value;
  let countryCode = countryList[code];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

// =====================
// Convert Function
// =====================
async function convertCurrency() {
  let amount = document.querySelector("#amount");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  let fromCurrency = from.value.toLowerCase();
  let toCurrency = to.value.toLowerCase();
  const URL = `${BASE_URL}/${fromCurrency}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurrency][toCurrency];
  let final = rate * amtVal;

  display.innerText = final.toFixed(2);
}

// =====================
// Auto Convert on Input
// =====================
document.querySelector("#amount").addEventListener("input", convertCurrency);

// =====================
// Swap Function
// =====================
document.querySelector("#swap").addEventListener("click", () => {
  let temp = from.value;
  from.value = to.value;
  to.value = temp;

  updateFlag(from);
  updateFlag(to);
  convertCurrency();
});

// Initial conversion
convertCurrency();
