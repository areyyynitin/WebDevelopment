 const addValue = () => {
    counter = counter+1
    if(counter > 5){
    alert("You reached maximum limit")
    return
  }

    setCounter(counter)
  
  }

  in this code..if i write 
  counter = counter+1
  counter = counter+1
  counter = counter+1
  counter = counter+1
  that doesn't mean the value will be get 4 times more its wrong approach for that...
  This doesn't update the state correctly in React because you're treating counter like a regular variable.

  If i want to update value 4 times i should do this 
  counter = (prevCounter => prevCounter+1)
  counter = (prevCounter => prevCounter+1)
  counter = (prevCounter => prevCounter+1)
  counter = (prevCounter => prevCounter+1)

  this is the right approach