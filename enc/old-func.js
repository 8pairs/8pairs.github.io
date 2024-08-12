function getSum(total,num) {
    return total + num;
  }
  function val(text, htext, dtext) {
      rgxp = new RegExp(dtext, "gim");
    text = text.toLowerCase();
    if (text.indexOf(htext) > -1) {
      sonuc = text.split(htext).join(dtext).match(rgxp).map(Number).reduce(getSum);
    } else {
      sonuc = 0;
    }
    return sonuc;
  }
  
  String.prototype.abjad = function () {
   let a = val(this, "a", "1");
   let b = val(this, "b", "2");
   let c = val(this, "c", "3");
   let d = val(this, "d", "4");
   let e = val(this, "e", "5");
   let f = val(this, "f", "6");
   let g = val(this, "g", "7");
   let h = val(this, "h", "8");
   let i = val(this, "i", "9");
   let j = val(this, "j", "10");
   let k = val(this, "k", "11");
   let l = val(this, "l", "12");
   let m = val(this, "m", "13");
   let n = val(this, "n", "14");
   let o = val(this, "o", "15");
   let p = val(this, "p", "16");
   let q = val(this, "q", "17");
   let r = val(this, "r", "18");
   let s = val(this, "s", "19");
   let t = val(this, "t", "20");
   let u = val(this, "u", "21");
   let v = val(this, "v", "22");
   let w = val(this, "w", "23");
   let x = val(this, "x", "24");
   let y = val(this, "y", "25");
   let z = val(this, "z", "26");
    return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
  };
  
  function Ask() {
    text = prompt("Please enter your text");
    if (text != null) {
      alert("Numerical value is: " + text.abjad());
      document.getElementById("output").value = text.abjad();
    }
  }


  function ask() {
    let inputField = document.getElementById("input");
    const paragraph = inputField.value;
    const y = /y/gi;
    const x = /x/gi;
    document.getElementById("output").value = paragraph.replace(y, "ex");
  }
  
  let str = "cat dog goat goatgoat";
  const mapObj = {
    cat: "dog",
    dog: "goat",
    goat: "cat",
  };
  str = str.replace(/\b(?:cat|dog|goat)\b/gi, (matched) => mapObj[matched]);
  alert(str);
  