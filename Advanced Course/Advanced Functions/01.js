function sortArray(array, command){
    if (command === 'asc') {
        array.sort((a,b) => a - b);
        return array;
    }else if(command === 'desc'){
        array.sort((a,b) => b - a);
        return array;
    }
}
sortArray([3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6], 'desc')