function getANumber(){
    let number=prompt   ("Enter a number")
    let result;
    for (let i =1; i <=20; i++) {
        result = number * i ;
        console.log(
            number + "x" + i + "=" + result
        )
    }
}