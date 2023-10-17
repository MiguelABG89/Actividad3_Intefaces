import {useState} from 'react';
function DivisInput(){

    let resultado;

    const [valor1,setvalor1] = useState('');
    const [valor2,setvalor2] = useState('');

    function valor1Handler(event){
        setvalor1(+event.target.value)
    };
    function valor2Handler(event){
        setvalor2(+event.target.value)
    };

    resultado=parseFloat(valor1)/parseFloat(valor2);

    return(
        <div>
            <input onChange={valor1Handler} />
            <span> / </span>
            <input onChange={valor2Handler} />
            <span> = </span>
            {resultado}
        </div>
    );
};

export default DivisInput;