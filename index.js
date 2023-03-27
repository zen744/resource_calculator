function cal(){
    let cal_type = document.getElementById("cal_type").value
    let stack_type = document.getElementById("stack_type").value
    let item = document.getElementById("item").value
    let stack = document.getElementById("stack").value
    let sb = document.getElementById("sb").value
    let result = document.getElementById("result")
    let item_op = ""
    let stack_op = ""
    let sb_op = ""

    // calculate item to stack and shulker box
    if (cal_type == "its"){
        // check how much itemn in 1 stack
        if (stack_type == "st64"){
            sb_op = parseInt(item/1728)
            item = item-(sb_op*1728)
            stack_op = parseInt(item/64)
            item = item-(stack_op*64)
            item_op = parseInt(item)
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
        else if (stack_type == "st16"){
            sb_op = parseInt(item/432)
            item = item-(sb_op*432)
            stack_op = parseInt(item/16)
            item = item-(stack_op*16)
            item_op = parseInt(item)
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
        else {
            // unstackable item don't need to calculate stack
            sb_op = parseInt(item/27)
            item = item-(sb_op*27)
            item_op = parseInt(item)
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
    }
    // calculat shulker box and stack to item
    else {
        if (stack_type == "st64"){
            item_op = (sb*1728)+(stack*64)
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
        else if (stack_type == "st16"){
            item_op = (sb*432)+(stack*16)
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
        else {
            // unstackable item don't need to calculate stack
            item_op = sb*27
            return(result.innerHTML = `${sb_op} shulker box |${stack_op} stack |${item_op} item`)
        }
    }
}
// clear value
function clear_all(){
    document.getElementById("item").value = ""
    document.getElementById("stack").value = ""
    document.getElementById("sb").value = ""
}
