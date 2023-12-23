import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' className={barChart ? 'active' : ''} onClick={() => setBarChart(true)}>
        Barchart
      </button>
      <button type='button' className={barChart ? '' : 'active'} onClick={() => setBarChart(false)}>
        Areachart
      </button>
      
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;