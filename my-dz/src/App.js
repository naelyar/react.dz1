function Title (props) {
  return (
     <h1>
       {props.fruit}

     </h1>
  )

}



function Footer (){
  return (
    <ul>
      <li>ФРАНЧАЙЗИНГ</li>
      <li>ИНФОРМАЦИЯ</li> 
      <li>КОНТАКТЫ</li>
      
      
    </ul>
  )
}
function App() {
  return (
    <>
    <Title fruit="apple"/>
    <Title fruit="orange"/>

    
    <Footer/>
    </>
   
  );
}

export default App;
