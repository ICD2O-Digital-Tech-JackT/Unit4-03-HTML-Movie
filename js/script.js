function Display(Result){
  document.getElementById("Result").innerHTML=Result +" thanks for verifying your age"
}
function Submit(){
  let Result = ""
  let Age = document.getElementById("num").value
  if (Age>=18){
    Result="You can watch R Rated Movies"
  } else if (Age>=13){
    Result="You can watch PG-13 movies"
  } else if (Age>=10){
    Result="You can watch PG movies alone"
  } else{
    Result="You can watch G movies"
  }
  if (Age<0||Math.round(Age)!=Age||Age==null||Age==""){
    Result="Please enter a valid age"
  }
  Display(Result)
}
