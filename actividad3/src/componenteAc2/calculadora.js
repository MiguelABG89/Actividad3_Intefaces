
function Calculadora({valor1Changed,valor2Changed,operadorChanged}){

    return(
        <div>
            <input onChange={valor1Changed} />
            <select onChange={operadorChanged}>
                <option value={""} ></option>
                <option value={"+"} >+</option>
                <option value={"-"} >-</option>
                <option value={"*"} >*</option>
                <option value={"/"} >/</option>
            </select>
            <input onChange={valor2Changed} />

        </div>
    );
};

export default Calculadora;