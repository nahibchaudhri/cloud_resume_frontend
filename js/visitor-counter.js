function visitorCounter(){
fetch("https://iyp32pml3i.execute-api.us-east-1.amazonaws.com/visitorCounter")
.then(response => response.text())
.then((body) => {
    document.getElementById("visitor-counter").innerHTML=body
    })
}
