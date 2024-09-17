import React from 'react';
import InteractiveChart from '../src/components/interactiveChar/interactiveChart';
import {getCookie} from 'cookies-next';
import { verifica } from '../services/user';

//Por enquanto estou utilizando essa página para testes, mas será a "HOME" do projeto!


export default function Home() {
  return (
    <div>
      <h1>Gráfico Interativo</h1>
      <InteractiveChart />
    </div>
  );
}

export const getServerSideProps = async (req, res) => {
  try{
    const token = getCookie('authorization', {req, res})
    console.log(token)
    return{
      props: {}
    }
  }catch (err){
    return{
      props: {}
    }
  }
}