import "./question.js"
async function getData(){
    let ele = document.createElement('test-question')
    
    let myRes = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    myRes = await myRes.text()
    myRes = JSON.parse(myRes)
    
    ele.source = myRes.results
    console.log(ele.item)
    document.body.appendChild(ele)
}
getData()