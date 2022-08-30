function cal(){
    let cal_type = document.getElementById("cal_type").value
    let stack_type = document.getElementById("stack_type").value
    let item = document.getElementById("item").value
    let stack = document.getElementById("stack").value
    let result = document.getElementById("result")
    let temp = ""
    let temp2 = ""

    if(stack_type == "st16"){
        if(cal_type == "sti"){
            Number(stack)
            stack = stack*16
            result.innerHTML=stack+" item"
            document.getElementById("item").value=""
        }
        else if(cal_type == "its"){
            Number(item)
            if(item < 16){
                result.innerHTML=item+" item"
            }
            else{
                temp = Math.floor(item/16)
                temp2 = item%16
                result.innerHTML=temp+" stack "+temp2+" item"
            }
            document.getElementById("stack").value=""
        }
    }
    else if(stack_type == "st64"){
        if(cal_type == "sti"){
            Number(stack)
            stack = stack*64
            result.innerHTML=stack+" item"
            document.getElementById("item").value=""
        }
        else if(cal_type == "its"){
            if(item < 64){
                result.innerHTML=item+" item"
            }
            else{
                temp = Math.floor(item/64)
                temp2 = item%64
                result.innerHTML=temp+" stack "+temp2+" item"
            }
            document.getElementById("stack").value=""
        }
    }
}