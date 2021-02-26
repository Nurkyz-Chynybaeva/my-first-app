function BiggerNumber(props){
  let a = props.a
  let b = props.b
      if (a < b){
          return <h1>Bigger numer is <mark>{props.b }</mark> </h1>
      }
      else {
          return <h1>Bigger number is <mark>{props.a}</mark> </h1>
      }
  }
  

export default BiggerNumber;
