export function Heading({children}) {

  let color = "black";

  if(typeof children === "string"){
    if (children.includes("Lucro")){
      color = "blue";
    }
    if (children.includes("Prejuízo")){
      color = "red";
    }
    
  }
  return (
    <h1 style={{color}}>
      {children}
    </h1>
  )
  
}