arr1 = [{name:'a',points:1,GD:2},
{name:'b',points:2,GD:5},
{name:'c',points:4,GD:24},
{name:'d',points:1,GD:24},
{name:'e',points:5,GD:22},
{name:'f',points:9,GD:27},
{name:'g',points:6,GD:29},]


function sort(arr1, arr2, i = 0, j = 0){
    let  result = []
    while(i < arr1.length && j < arr2.length){
        if (arr1[i].points < arr2[j].points){
            result.push(arr2[j])
            j++
        } else if (arr1[i].points > arr2[j].points){
            result.push(arr1[i])
            i++
        } else {
            if (arr1[i].GD < arr2[j].points){
                result.push(arr2[j])
                j++
            } else if (arr1[i].points > arr2[j].points){
                result.push(arr1[i])
                i++
            } else {

                if(arr1[i].name <arr2[j].name ){
                    result.push(arr1[i])
                    i++
                } else {
                    result.push(arr2[j])
                    j++
                }
                
            }
        }
    }

    if (i < arr1.length){
        result = result.concat(arr1.slice(i))
    } else if (j<arr2.length){
        result = result.concat(arr2.slice(j))
    }
    return result
}

function mergeSort(myArray){
    
    if (myArray.length == 1 ){
        return myArray
    } else{
        mid = Math.floor(myArray.length/2)
        let leftArray = myArray.slice(0,mid)
        let rightArray = myArray.slice(mid,myArray.length)  
        let leftResult = mergeSort(myArray = leftArray)
        let rightResult = mergeSort(myArray = rightArray)
        let result = sort(leftResult, rightResult)
        return result
    }
    
}

let result = []

result = mergeSort(arr1)
console.log(result)