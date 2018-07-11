var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
console.log(month + "/" + date + "/" + year + " time is: " + hour + ":" + min + ":" + sec);
//=====================================================1========================================================//
//===============================2============================================================================//
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = array[0];

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log("Largest of the numbers is: " + largest);

//=====================================================3======================================================//

var num = window.prompt("Enter a number:");
var str = num.toString();
var result = [str[0]];

for (var i = 1; i < str.length; i++) {
    if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
        result.push('-', str[i]);// puts - in between//
    }
    else {
        result.push(str[i]);
    }
}
console.log(result.join(''));//joins array of strings//

//==================================================================4=============================================//
var arr = ["ajay", "ashish", "vijay", "kartikey", "manik"];
for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }
arr.sort();
console.log("sorted array asc: " + arr);
arr.reverse();
console.log("sorted array dsc: " + arr);
//=============================================================5=================================================//

var a = [2, 3, 2, 4, 5, 8, 7, 3, 1, 1, 6, 7];
var ua = [];
for (let i = 0; i < a.length; i++) {
    if (ua.indexOf(a[i]) == -1) {
        ua.push(a[i]);
    }
}
console.log("Unique element array is: ");
for (let i = 0; i < a.length; i++) {
    console.log(ua[i]);
}

//=============================================================7==================================================//

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
function compare(a, b) {
    var titleA = a.title.toLowerCase();
    var titleB = b.title.toLowerCase();

    if (titleA > titleB) {
        return 1;
    } else if (titleB > titleA) {
        return -1;
    }
    return 0;
}
console.log(library.sort(compare));


//===================================================================9=============================================//

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student.name + ", " + student.sclass + ", " + student.rollno);

//==================================================================10==============================================//

var stu = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "David", marks: 68 }
]

var sum = 0;
var avg = 0;
function calc() {
    for (let i = 0; i < stu.length; i++) {
        sum += stu[i].marks;
    }
    avg = sum / (stu.length);
    if(avg>=90){console.log("Grade is A");}
    else if(avg>=80){console.log("Grade is B");}
    else if(avg>=70){console.log("Grade is C");}
    else if(avg>=60){console.log("Grade is D");}
    else{console.log("Grade is F");}
}

//=================================================================11===============================================//
var str=prompt("Enter a word");
var arr=str.split('');
arr.sort();
var text ="";
for (var i in arr) {
        text += arr[i];
}
console.log(text);
//============================================================12==================================================//

function occur(str,key){
    var count=0;
    var temp=str.split('');
    for(let i=0;i<temp.length;i++){
        if(temp[i]===key){count++;}
    }
    console.log(count);
}
//==========================================================13==================================================//

var myObj = [5, [22], [[14]], [[4]],[5,6]];
var arr1 = myObj.join(',');
console.log(arr1);

//======================================================15=====================================================//

var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var obj= JSON.parse(jsonStr);
console.log(obj.mike);
console.log(obj.jason);
console.log(obj.chels);

//===================================================14========================================================//


var myObj = [
         { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
         { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
         { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
         { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
         { 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
         { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }
     ];
//=====================================================14.1======================================================    
     console.log("Question 14");
     console.log("Exercise 1");
     console.log("Showing all objects with occupation as Programmer");
    
     for (var i = 0; i < myObj.length; i++) {
         if (myObj[i].occupation === "Programmer") {
             console.log(myObj[i]);
         }
     }
//=====================================14.2=========================================================    
     console.log("Exercise 2");
     console.log("Sorting all objects w.r.t. age");
    
    function compare(a, b) {
         if (a.age > b.age) {
             return 1;
         } else if (b.age > a.age) {
             return -1;
         }
         return 0;
     }
//==========================================14.4======================================================
     console.log("Exercise 4")
     var foo=function getName(item) {
        var nameArr = item.name;
        return nameArr;
    }
    
    function myFunction() {
        console.log(myObj.map(foo));
    }
//==============================================14.3=====================================================
    var newObj = {}

// Creating object with 'occupation' father node
for (var z of myObj) {
   newObj[z['occupation']] = [];
}

// Pushing each child to it's corresponding father node
for (var z of myObj) {
   newObj[z['occupation']].push(z);
}

// Deleting the redundant 'occupation' child-node from the new object
for (var k in newObj) {
   for (var l of newObj[k]) {
       delete l['occupation']
   }
}
console.log(newObj)


//====================================================6=========================================================//
     var array1 = [45, 6, 7, 34, 7, 4, 66, 8, 89, 69];
     var array2 = [34, 7, 763, 4, 78, 9, 83, 2, 45, 100];
    
     var array3 = array1.concat(array2);
     var newArray = array3.filter((elem, i, arr) => {
         if (arr.indexOf(elem) === i) {
             return elem
         }
    
     })
    
     console.log(newArray);
    

//=======================================================16=====================================================//

var obj = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    }
var arr = Object.keys(obj).map(function(key) {
  return obj[key];
});

console.log(arr);