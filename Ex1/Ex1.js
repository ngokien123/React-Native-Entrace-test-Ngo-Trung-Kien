alert('Phần tử mỗi mảng cách nhau bằng dấu cách. Input a1 = [1,1,2], a2 = [2,3,4]. Output: [1,1,3,4]')
var a1 = prompt('Nhập các phần tử mảng thứ nhất: ').split(' ')
var a2 = prompt('Nhập các phần tử mảng thứ hai: ').split(' ')

var myCount = {}

function firstCount(item){
    if (myCount[item] == undefined){
        myCount[item] =1 
    } else{
        myCount[item] += 1
    }
}

function secondCount(item){
    if (myCount[item] == undefined){
        myCount[item] = 1 
    } else if (myCount[item] != 0){
        myCount[item] = 0
    } else{
        myCount[item] += 1
    }
}

a1.map(firstCount)
a2.map(secondCount)

var result = []
Object.keys(myCount).map((item) =>{
    
    if (myCount[item] != 0){
        
        for(i = 0; i < myCount[item]; i++){
            result.push(item)
            
        }
        
    }
})

alert(`Kết quả là [${result}]`)

