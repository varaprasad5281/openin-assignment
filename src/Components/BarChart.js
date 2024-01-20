import { useEffect, useState } from "react";
import axios from "axios";
import {
  CartesianGrid,
  Legend,
  Bar,
 BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const RechartsExample = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(
      "https://yelpcamp-o6sr.onrender.com/api/line-chart-data"
    );
    setData(res.data);
  };
  if (!data) return <><p>Loading...</p></>;
  return (
    <ResponsiveContainer height={300} width="95%">
      <BarChart barSize={45}  margin={{ top: 25, right: 20, left: 20 }} data={data}>
        <Bar
          dataKey="react"
          fill="#E9A0A0"
          radius={5}
        
          />
        <Bar
          dataKey="angular"
          fill="#9BDD7C"
          radius={5}
        
        />
        <XAxis dataKey="name"  />
        <YAxis  />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartsExample;
