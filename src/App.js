import './App.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function App() {
  const data = [
    { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 300, pv: 2400, amt: 2500 },
    { name: 'Page A', uv: 400, pv: 2400, amt: 2600 },
    { name: 'Page A', uv: 500, pv: 2400, amt: 2700 },
    { name: 'Page A', uv: 600, pv: 2400, amt: 2800 },
    { name: 'Page A', uv: 700, pv: 2400, amt: 2900 },

  ];
  return (

      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>

  );
}

export default App;
