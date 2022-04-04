
import './Dashboard.css'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
        const data = [
                    {
                        "month": "Mar",
                        "investment": 100000,
                        "sell": 241,
                        "revenue": 10401
                    },
                    {
                        "month": "Apr",
                        "investment": 200000,
                        "sell": 423,
                        "revenue": 24500
                    },
                    {
                        "month": "May",
                        "investment": 500000,
                        "sell": 726,
                        "revenue": 67010
                    },
                    {
                        "month": "Jun",
                        "investment": 500000,
                        "sell": 529,
                        "revenue": 40405
                    },
                    {
                        "month": "Jul",
                        "investment": 600000,
                        "sell": 601,
                        "revenue": 50900
                    },
                    {
                        "month": "Aug",
                        "investment": 700000,
                        "sell": 670,
                        "revenue": 61000
                    }
                    ]
    
    return (
        <div className='dashboard'>
            <div>
                <LineChart width={700} height={500} data={data}>
                <Line dataKey='revenue' type="monotone" stroke="#ffaf03" activeDot={{ r: 8 }}></Line>
                <Line dataKey='investment' type="monotone" stroke="#8884d8" activeDot={{ r: 8 }}></Line>
                <XAxis dataKey='month' />
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                </LineChart>
            </div>
            <div>
                <AreaChart width={700} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#ffaf03" fill="#fcff4f" />
                </AreaChart>
            </div>
            
        </div>
    );
};

export default Dashboard;