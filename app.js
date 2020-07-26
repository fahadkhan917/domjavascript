//Dom target method
//there are 3 type of dom target Method
//1.id
//2.class
//3.tagname

//All page target
// 1.document
// 2.document.all
// 3.document.documentElement
// 4.document.head
// 5.document.title
// 6.document.body
// 7.document.image
// 8.document.links
// 9.document.forms
// 10.document.doctype
// 11.document.url
// 12.document.baseurl
// 13.document.domain


//..1
// var ele;
// ele=document;
// console.log(ele);

//.2
// var ele;
// ele=document.all;
// console.log(ele);

//.3
// var ele;
// ele=document.documentElement;
// console.log(ele);

//.4
// var ele;
// ele=document.head;
// console.log(ele);

//.5
// var ele;
// ele=document.body;
// console.log(ele);

//.6
// var ele;
// ele=document.images;
// console.log(ele);

//.7
// var ele;
// ele=document.links;
// console.log(ele);

//.8
// var ele;
// ele=document.forms;
// console.log(ele);

//.9
// var ele;
// ele=document.doctype;
// console.log(ele);

//.10
// var ele;
// ele=document.URL;
// console.log(ele);

//.11
// var ele;
// ele=document.baseURI;
// console.log(ele);

//.12
// var ele;
// ele=document.domain;
// console.log(ele);



// Dom target method
//1 by id
// var ele;
// ele=document.getElementById("header");
// console.log(ele);


//2 by class
// var ele;
// ele=document.getElementsByClassName("header");
// console.log(ele);

// 3 by tagname 
// var ele;
// ele=document.getElementsByTagName("h1");
// console.log(ele);

//new topic

//Dom get & set method
//what we can get in dom 
//1.Html
//2.Text
// 3.attribute


//Method of get
//1.innerText
//2.innerHtml
//3.getAttribute 
//4.getAttributeNode
//5.Attribute

//Innertext
//inner text mae only sirf text lakr ayaga
// var ele;
// ele=document.getElementById("para").innerText;
// console.log(ele);

//Innerhtml 
//innerhtml mae html bhi lakr ayaga mean tag or text both
// var ele;
// ele=document.getElementById("header").innerHTML;
// console.log(ele);

//getattribute
//attriubte return karaga only aus ki value bus  
// var ele;
// ele=document.getElementById("header").getAttribute("class");
// console.log(ele);

//getattriubtenode
//yeh value or name dono lakr aya ga
// var ele;
// ele=document.getElementById("header").getAttributeNode("class").name /yeh phr/ value;
// console.log(ele);


//attritude
//yeh array ki tarah return kara ga phr hm is ko index number sy use kara ga
// var ele;
// ele=document.getElementById("header").attributes[1];
// console.log(ele);


//Set Dom method
//1.innertext
//2.innerhtml
//3.setattribute
//4.attribute
//5.remove attribute


//1.innerhtml/innertext
// var ele;
// document.getElementById("header").innerHTML="<h1>fahad</h1>";
// ele=document.getElementById("header").innerText;
// console.log(ele);

//.3 setAttiubte
// var ele;
// ele=document.getElementById("header").setAttribute("class","xyz");
// console.log(ele);

// //4.attribute
// var ele;
// ele=document.getElementById("header").attributes[1].value="xyz";
// console.log(ele);

//5.remove attribute
// var ele;
// ele=document.getElementById("header").removeAttribute("class");
// console.log(ele);

function xyz(){

var cl=document.getElementById('u');
cl.classList.add("xyz");

}