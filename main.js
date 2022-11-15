console.log("Hello, World!");

// changing h1 element
let h1_arr = document.getElementsByTagName("h1")
console.log(h1_arr[0])
let h1 = h1_arr[0]
h1.innerHTML = "Lab12 Assignment"
h1.style.color = "blue"

// adding hr1 element
let hr1 = document.createElement("hr")
console.log(hr1)
document.body.appendChild(hr1)

// adding h2 element
let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

// adding p1 element
let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)

// adding an unordered list
let ul1 = document.createElement("ul")

let first_list = [
  "find elements in the DOM (<b>5 points</b>);",
  "create/add/remove elements (<b>5 points</b>);",
  "change content of the elements (<b>5 points</b>);",
  "change styles of the elements (<b>5 points</b>);",
  "change attributes of the elements (<b>5 points</b>);",
  "change classes of the elements (<b>5 points</b>)."
]

for (let i = 0; i < first_list.length; i++) {
  var li = document.createElement("li")
  li.innerHTML = first_list[i]
  if ((i + 1) % 2 != 0) {
    li.style.color = "green"
  } else {
    li.style.color = "purple"
  }
  ul1.appendChild(li)
}

document.body.appendChild(ul1)

// adding a text with a link
let a = document.createElement("a")

a.innerText = "link."
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")

let p2 = document.createElement("p")
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.appendChild(a)

document.body.appendChild(p2)

// adding hr2 element
let hr2 = document.createElement("hr")
console.log(hr2)
document.body.appendChild(hr2)

// adding h3 element
let h3 = document.createElement("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)

// adding a text
let p3 = document.createElement("p")
p3.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(p3)

// adding an unordered list
let ul2 = document.createElement("ul")

let second_list = [
  "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
  "Clone this repository to your local machine and work inside it.",
  "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with &quot;Hello, World!&quot; message (<b>1 point</b>).",
  "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
  "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
  "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
  "After you finish your work, submit it to the Github (<b>2 points</b>)."
]

for (let i = 0; i < second_list.length; i++) {
  var li = document.createElement("li")
  li.innerHTML = second_list[i]
  if ((i + 1) % 2 != 0) {
    li.style.color = "green"
  } else {
    li.style.color = "purple"
  }
  ul2.appendChild(li)
}

document.body.appendChild(ul2)

// adding hr3 element
let hr3 = document.createElement("hr")
console.log(hr3)
document.body.appendChild(hr3)
