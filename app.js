const prompt = require("prompt-sync")();

var a = [
  "",
  "One ",
  "Two ",
  "Three ",
  "Four ",
  "Five ",
  "Six ",
  "Seven ",
  "Eight ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Fourteen ",
  "Fifteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
];
var b = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

var inWords = function (n) {
  var number = parseFloat(n).toFixed(2).split(".");

  var num = parseInt(number[0]);

  var digit = parseInt(number[1]);

  if (num.toString().length > 6) return "overflow";
  var n = ("0000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

  var d = ("00" + digit).substr(-2).match(/^(\d{2})$/);

  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "Crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "Lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "Thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "Hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "And " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        ""
      : "";

  if (d[1] != 0) {
    str += d[1] + "/100 ";
  }
  return "Rs." + str + "ONLY";
};

const currency = prompt("Enter the value: ");

console.log(inWords(currency));
