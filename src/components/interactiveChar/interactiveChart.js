'use client';

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const InteractiveChart = () => {
  const [dataPoints, setDataPoints] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');

  const data = {
    labels: dataPoints.map((_, index) => `Ponto ${index + 1}`),
    datasets: [
      {
        label: 'Meu Gráfico',
        data: dataPoints,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const addDataPoint = () => {
    if (inputValue) {
      setDataPoints([...dataPoints, Number(inputValue)]);
      setInputValue(''); // Limpa o campo de input
    }
  };

  const clearData = () => {
    setDataPoints([]);
  };

  return (
    <div>
      <Line data={data} />
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar valor"
      />
      <button onClick={addDataPoint}>Adicionar</button>
      <button onClick={clearData}>Limpar</button>
    </div>
  );
};

export default InteractiveChart;