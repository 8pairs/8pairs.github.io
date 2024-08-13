function advE() {
    let inputField = document.getElementById("input-adve");
    let str = inputField.value;

    let mv = document.getElementById("input-mtp");
    let mult = mv.value;

    const mapObj = {
      a: "1 " * mult,
      b: "2 " * mult,
      c: "3 " * mult,
      d: "4 " * mult,
      e: "5 " * mult,
      f: "6 " * mult,
      g: "7 " * mult,
      h: "8 " * mult,
      i: "9 " * mult,
      j: "10 " * mult,
      k: "11 " * mult,
      l: "12 " * mult,
      m: "13 " * mult,
      n: "14 " * mult,
      o: "15 " * mult,
      p: "16 " * mult,
      q: "17 " * mult,
      r: "18 " * mult,
      s: "19 " * mult,
      t: "20 " * mult,
      u: "21 " * mult,
      v: "22 " * mult,
      w: "23 " * mult,
      x: "24 " * mult,
      y: "25 " * mult,
      z: "26 " * mult,
    };
  
    str = str.replace(
      /(?:a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\s|\.|\,|\:|\;|\/|\(|\)|\-|\+|\_|\=|\'|\!|\@|\#|\$|\%|\^|\&|\*|\[|\]|\{|\}|\<|\>|\?|1|2|3|4|5|6|7|8|9|0)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("output-adve").value = str;
  }
  
  function advEt() {
    let inputFieldAgain = document.getElementById("inputAgain-adve");
    let strAgain = inputFieldAgain.value;

    let mv = document.getElementById("input-mtp");
    let mult = mv.value;
    const mapObj = {
      "1": "a",
      "2": "b",
      "3": "c",
      "4": "d",
      "5": "e",
      "6": "f",
      "7": "g",
      "8": "h",
      "9": "i",
      "10": "j",
      "11": "k",
      "12": "l",
      "13": "m",
      "14": "n",
      "15": "o",
      "16": "p",
      "17": "q",
      "18": "r",
      "19": "s",
      "20": "t",
      "21": "u",
      "22": "v",
      "23": "w",
      "24": "x",
      "25": "y",
      "26": "z",
      " ": "",
    };
  
    strAgain = strAgain.replace(
      /\b(?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|001|002|003|004|005|006|007|008|009|010|011|012|013|014|015|016|017|018|019|020|021|022|023|024|025|026|027|028|111|222|333|444|555|666|777|888|999|000)\b/gi,
      (matched) => mapObj[matched]
    );
    strAgain = strAgain.replace(
      /(?:\ )/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("outputAgain-adve").value = strAgain;
  }