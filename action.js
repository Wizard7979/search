function sfocus(){
    document.getElementById("wsearch").focus()
}
var hir = document.getElementById("wsearch").value;
function validURL1(str) {
    var pattern = new RegExp("http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?"); // fragment locator
    return !!pattern.test(str);
    // console.log(pattern.test(str))
}
function validURL2(str) {
  var pattern = new RegExp("((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?"); // fragment locator
  return !!pattern.test(str);
  // console.log(pattern.test(str))
}
function validURL3(str) {
  var pattern = new RegExp("([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?"); // fragment locator
  return !!pattern.test(str);
  // console.log(pattern.test(str))
}
function validUL() {
  console.log(validURL3(document.getElementById("wsearch").value));
  if(validURL3(document.getElementById("wsearch").value) == true){
    window.location.replace = document.getElementById("wsearch").value;
  };

}
const node = document.getElementById("wsearch")
node.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    let g = document.getElementById("wsearch").value;
    let l = g.length
    console.log(l)
    
    if (l >= 0){
      window.open('https://www.google.com/search?q=' + document.getElementById("wsearch").value)
  }}
})