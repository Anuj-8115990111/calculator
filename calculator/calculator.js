function myFunction(value){

    let input = document.querySelector("input");

    let arr = ['%','/','*','-','+','7','8','9','4','5','6','1','2','3','00','0','.'];

   
    for(let i=0;i<arr.length;i++){

        if(value === arr[i]){
            input.value += arr[i];
            break;
        }

    }


    if(value === 'DE'){
         input.value = input.value.slice(0,-1)
    }


    if(value === 'AC'){
        input.value = "";
    }


    if(value === '='){
        input.value = eval(input.value);
    }

}