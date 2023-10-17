import {useState} from 'react';
import './App.css';
import SumarInput from './componenteAc1/suma';
import RestaInput from './componenteAc1/resta';
import MultInput from './componenteAc1/multi';
import DivisInput from './componenteAc1/divi';
import Calculadora from './componenteAc2/calculadora';
import Resultado from './componenteAc2/resultado';

function App() {
    const [operador,setoperador] = useState('');
    const [valor1,setvalor1] = useState('');
    const [valor2,setvalor2] = useState('');
    let resultado;

    function valor1Changed(event){
        setvalor1(+event.target.value)
    };
    function valor2Changed(event){
        setvalor2(+event.target.value)
    };
    function operadorChanged(event){
        setoperador(event.target.value)
    };

     if(operador=="+"){
        resultado=parseInt(valor1)+parseInt(valor2);
    }else if(operador=="-"){
        resultado=parseInt(valor1)-parseInt(valor2);
    }else if(operador=="*"){
        resultado=parseInt(valor1)*parseInt(valor2);
    }else if(operador=="/"){
        resultado=parseInt(valor1)/parseInt(valor2);
    }

  return (
    <div >
      <h1>Actividad 1</h1>
      <SumarInput/>
      <br/>
      <RestaInput/>
      <br/>
      <MultInput/>
      <br/>
      <DivisInput/>
      <br/>
      <h1>Actividad 2</h1>
      <Calculadora valor1Changed={valor1Changed}
                  valor2Changed={valor2Changed} 
                  operadorChanged={operadorChanged}/>
      <br/>
      <Resultado resul={resultado}/>
    </div>
  );
}

export default App;
