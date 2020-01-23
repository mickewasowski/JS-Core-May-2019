function magicMatrices(input){
    let matrix = input;
    
    let globalRowSum = 0;
    let boolRow = -1;
    let globalColSum = 0;
    let boolCol = -1;
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        let colSum = 0;
        
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];  
            colSum += matrix[j][i];         
        }
        if (globalRowSum === 0) {
            globalRowSum = rowSum;
            globalColSum = colSum;
        }else if(globalRowSum === rowSum && globalColSum === colSum){
            boolRow = 1;
            boolCol = 1;
        }else{
            boolRow = -1;
            boolCol = -1;
            break;
        }
    }

    if (boolRow === 1 && boolCol === 1) {
        console.log('true');
    }else{
        console.log('false');
    }
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   )