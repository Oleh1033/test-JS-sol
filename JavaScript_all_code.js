// find the same symbol in the string variable
function isIsogram(str){
  str = str.toUpperCase();
  if( new Set(str).size == str.length){ // compare how many element in Set and length string
    return true;  
  } else {
    return false;
  }  
}
console.log(isIsogram('moOse'));

//--------------------------------------------------------------

// sort number and make descending order

function descendingOrder(n){
  n = String(n).split(''); // make from number aaray 
  
  function compare(a, b) {
    if (a>b) return 1;
    if (a<b) return -1;
  }
  n = n.sort(compare); // sort the  array
  n = n.reverse(); // 
  n = n.join(''); // make string from array
  n = parseInt(n, 10); // 
  return n;
}

descendingOrder(7453734);

//----------------------------------------------------------------

var sum = 0;
function countBits(n) {
    var num2 = n.toString(2); //переводимо в двійкове
    var arNum2 = num2.split(''); //претворюємо в масив строк
    for (i=0; i<arNum2.length; i++){
        sum += parseInt(arNum2[i], 10); // знаходимо суму елекметів претвориви їх в числа
    };
    console.log(sum);
}

countBits(45453463733);

//----------------------------------------------------------------
	// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
	// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
	//-- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
	//You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function 
	//that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of 
	//course, return you to your starting point. Return false otherwise.
	//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
	 //It will never give you an empty array (that's not a walk, that's standing still!).


	function isValidWalk(walk) {
  	// масив з напрямками. треба перевірити щоб кількість n == s ||&& w == e і їхня сума була рівною 10.
  var length = walk.length;
  
    function isBigEnoughN(value) {
      return value == 'n' ;
  }
  var n =  walk.filter(isBigEnoughN);
  var lN = n.length;
  
  function isBigEnoughW(value) {
      return value == 'w' ;
  }
  var w =  walk.filter(isBigEnoughW);
  var lW = w.length;
  
  function isBigEnoughS(value) {
      return value == 's' ;
  }
  var s =  walk.filter(isBigEnoughS);
  var lS = s.length;
  
  function isBigEnoughE(value) {
      return value == 'e' ;
  }
  var e =  walk.filter(isBigEnoughE);
  var lE = e.length;
  
  if (length == 10 && lN == lS && lW == lE) {
    return true;
  } else {
    return false;
  }

//----------------------------------------------------------------

// знайти суму всіх цілих між числами А і В
function(a, b){
	var a;
	var b;
	var sum = 0;
	for (var j = beg; j <= fin; j++) sum += j;
	console.log (sum);
}

//----------------------------------------------------------------


//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
function addBinary(a,b) {
  var sum = 0;
  sum = a + b;
  var sum2;
  sum2 = sum.toString(2);
  return sum2;
}

//----------------------------------------------------------------

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

  function friend(friends){
    var index = [];
    for(var i=0; i<friends.length; i++){
        if (friends[i].length == 4){
            index.push(friends[i]);
        }
    }
    return index;
}
friend(['cvf', 'ksi', 'olds', 'asdfg']);

//----------------------------------------------------------------

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
    var arr2 = [];//
    var arr = song.split('WUB');


//   for(var i=0; i<arr.lenth; i++){
//      if (arr[i] === ''){
//          arr2.push(arr[i]);
//      }
//   }
//

    var str = arr.join(' ');
   
    str = str.replace(/\s+/g, ' ');
    str = str.trim();
    console.log(str);

    return str;
}
songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');


//----------------------------------------------------------------

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
//  likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"

function likes(names) {
    switch(names.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return names[0] +' likes this';
            break;
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            return names[0] + ', ' + names[1]  + ' and ' + names[2] + ' like this';
            break;
        default:
            var num = names.length - 2;
            return names[0] + ', ' + names[1] + ' and ' + num + ' others like this' ;
    }
}

//----------------------------------------------------------------

// Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
function accum(s) { // була строка
    var a = s.split('');  // став масив
    var b = ''; // строка
    var c = s; // масив
    for ( var i=0; i<a.length; i++){
        for ( var j=0; j<=i; j++){
            if (0 == j) {
                var big = a[i];
                big = big.toUpperCase();
                b += big;
            } else {
                var smal = a[i];
                smal = smal.toLowerCase();
                b += smal;

            }
        }
        b += '-';
    }
    b = b.slice(0, -1);

    console.log(b);
    return b;
}


//----------------------------------------------------------------

//Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
//Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
function tribonacci(signature,n){
    var sum = 0;
    var newElement = 0;
    var m =  n;
    var m =  m - signature.length;
    switch(n){
        case 0:
            signature.splice(0,signature.length);
            break;
        case 1:
            signature.splice(1,signature.length);
            break;
        case 2:
            signature.splice(2,signature.length);
            break;
        case 3:
            break;
        default:
            for(var i= 0; i<m; i++){
                sum = signature[i] + signature[i+1] + signature[i+2];
                signature[signature.length] = sum;
            }
    }
    console.log(signature);
    return signature;
}

//----------------------------------------------------------------

//write to variable password and change visual for user 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="main.css">
    <script src="js.js" defer></script>
    <style>

    </style>
</head>
<body>
    <input type="text" id="test">
    <script>
        var inn = '';
        document.getElementById("test").onkeypress = function (event) {
        // console.log(event);
        this.value += String.fromCharCode(getRandomArbitrary(65, 122));
        inn = inn + event.key;
        console.log(inn);
        //console.log(String.fromCharCode(122));
        return false;
        // 97 - 122 small letters
        // 65 - 90 big letters

        }
        function getRandomArbitrary(min, max) {
        return Math.floor(Math.random()*(max-min)+min);
        }
    </script>
</body>
</html>

// ==============================================================

// завдання зробити плавний скрол до початку сторінки 
window.onload = function () {
    var scrol;
    var time;

    document.getElementById('top').onclick = function () {
        scrol = window.pageYOffset;
        scrollToTop();
    };

    function scrollToTop() {
        if(scrol>0){
            window.scrollTo(0, scrol);
            scrol = scrol -  25;
            time = setTimeout(scrollToTop, 5);

        }
        else {
            clearTimeout(time);
            window.scrollTo(0, 0);
        }
    }
};

// ==============================================================

