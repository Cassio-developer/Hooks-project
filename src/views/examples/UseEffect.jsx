import React, { useEffect, useState, useSyncExternalStore } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle  from '../../components/layout/SectionTitle'




function calcFatorial(number){
    const n =parseInt(number)
    if(n <0) return -1
    if(n === 0) return 1
    return calcFatorial( n-1) * n
}


const UseEffect = (props) => {
    const [number, setNumber] = useState (1)
    const [fatorial,setFatorial] = useState (1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    } , [number])
    
    
    /*
    
    useEffect(function(){             função
     if (fatorial > 100000){          se fatorial for maior que 100000 milhao
       document.title = "Eita!!"      altere o estado do titulo para  "	EITA"
     } 
    },[fatorial])
     */
    // ex #02

    const [status, setStatus] = useState ("Impar")

    useEffect(function(){
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className='center'>
              <div>
              <span className="text">Fatorial: </span>
              <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>

              </div>
              <input type="number" className="input"
              value={number}onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #01"/>
              <div className="center">
                  <div>
                  <span className="text">Status : </span>
                  <span className="text red">{status}</span>

                  </div>

              </div>
        </div>
    )
}

export default UseEffect
