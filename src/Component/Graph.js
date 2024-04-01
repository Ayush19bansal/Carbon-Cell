import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";

function Graph() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        // Sort data by "Year" in ascending order
        const sortedData = response.data.data.sort((a, b) => a.Year - b.Year);
        setData(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <h1 className="graphh1">United States</h1> */}
      <ResponsiveContainer width="98%" height="93%">
        <LineChart
          data={datas}
          margin={{
            top: 15,
            right: 10,
            left: 70,
            bottom: 30,
          }}
        >

          <CartesianGrid strokeDasharray="4 4"  vertical=""/>
          <XAxis dataKey="Year" interval={'preserveStartEnd'} >
            <Label value="Year" position="bottom"  />
          </XAxis>
          <YAxis domain={[308000004, 331928781]} >
            <Label value="Population" angle={-90} position="insideLeft" offset={-60}/>
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line
            type="monotone"
            dataKey="Population"
            stroke="#29AA29"
            activeDot={{ r: 9 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Graph;
