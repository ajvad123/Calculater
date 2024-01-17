

writeExp=(e) => (

    display.value += e.target.id
)


getResult=()=>{
    if (display.value=="") {
        alert("Enter A Expression!!")
    }
    else{

        try{      
              display.value=eval(display.value)
        }
        catch{
            alert("Enter A Valid Expression!!")
            display.value=""
        }
    }
}

allClear=()=>{
    display.value=""
}


backSpace=()=>{
    display.value=display.value.slice(0,-1)
}
