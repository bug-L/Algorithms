

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = array[i];
        for (let j = i+1; j < array.length; j ++) {
            if (array[j] < smallest) {
                let temp = smallest;
                smallest = array[j];
                array[j] = temp;
            }
        }
        array[i] = smallest;        
    }

    return array;
}


//udemy
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        //set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i+1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower than 
                //what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}