import React from "react";
import "../App.css";
import { FiSettings } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";
import { RiPieChartLine } from "react-icons/ri";
import { AiOutlineTags } from "react-icons/ai";
import {BsBell} from 'react-icons/bs'
// import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiCalendarEventFill} from 'react-icons/ri'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip,PieChart,Pie} from 'recharts';


const pdata =[
  {
    name:'Python',
    student:13,
    teacher:15,
    fees:10
  },
  {
    name:'Javascript',
    student:15,
    teacher:12,
    fees:12
  },
  {
    name:'Java',
    student:10,
    teacher:6,
    fees:5
  },
  {
    name:'C++',
    student:14,
    teacher:16,
    fees:8
  },
  {
    name:'C#',
    student:11,
    teacher:4,
    fees:4
  },
  {
    name:'PHP',
    student:9,
    teacher:10,
    fees:11
  },
  {
    name:'CSS',
    student:12,
    teacher:5,
    fees:15
  },
]

const data01 = [
  {
    "names": "Basic Tees",
    "value": 400,
    "fill": 'red'
  },
  {
    "names": "Custom Short Pants",
    "value": 200
  },
  {
    "names": "Super Hoodies",
    "value": 300,
    "fill":'yellow'
  },
]

function MainPage(props) {
  return (
    <div>
      <div className="main">
        <div className="sidebar">
          <h1>Board.</h1>
          <h3>
            <RiPieChartLine />
            &nbsp;&nbsp;&nbsp;Dashboard
          </h3>
          <h3>
            <AiOutlineTags />
            &nbsp;&nbsp;&nbsp;Transaction
          </h3>
          <h3>
            <TbCalendarStats />
            &nbsp;&nbsp;&nbsp;Schedules
          </h3>
          <h3>
            <BiUserCircle />
            &nbsp;&nbsp;&nbsp;Users
          </h3>
          <h3>
            <FiSettings />
            &nbsp;&nbsp;&nbsp;Settings
          </h3>
          <div className="footer">
            <p>Help</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className="RightMain">
        <div className="graph">
          <h2>Dashboard</h2>
          <nav className="search">
            <input type="search" placeholder="Search..." />
            <p><BsBell/></p>
            <p><BiUserCircle size="20px"/></p>
          </nav>
        </div>
        
        <div className="cards">
          <div className="card1">
          <p>Total Revenues&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RiCalendarEventFill size="30px"/></p>
          <h3>$2,129,430</h3>
          </div>
         
         <div className="card2">
         <p>Total Transaction &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AiOutlineTags size="30px"/></p>
          <h3>1520</h3>
         </div>
         <div className="card3">
         <p>Total Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineLike size="30px"/></p>
          <h3>9721</h3>
         </div>
         <div className="card4">
         <p>Total Users &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <HiOutlineUsers size="30px"/></p>
          <h3>892</h3>
         </div>
        </div>

        <div className="linechart">
        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{top:100,right:90,left:40,bottom:5}}>
        <XAxis dataKey="name"/>
        <YAxis dataKey="fees"/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
        <Line type="monotone" dataKey="teacher" stroke='green' activeDot={{r:8}}/>
        </LineChart>
        </ResponsiveContainer>
        </div>

        <div className="bigCards">
          <div className="piecard">
          
           <div className="top">
           <h3>Top Products<span>May-June 2022</span></h3>
           </div>
          
           <ResponsiveContainer>
           <PieChart width={730} height={250} >
           <Pie data={data01} dataKey="value" nameKey="name" cx="20%" cy="30%" outerRadius={65} fill="#6ed484"/>
           </PieChart>
           </ResponsiveContainer>

           <div className="ctop">
           <h4>Basic Tees</h4>
           <p>40%</p>
            <h4>Custom Short Pants</h4>
            <p>20%</p>
            <h4>Super Hoodies</h4>
            <p>30%</p>
           </div>
           
          </div>
          <div className="Ccards">
          <h3>Today's Schedules<span>See All </span></h3>
           <h4>Meeting with suppliers from kuta bali</h4>
           <p>14.00-15.00</p>
           <p>at Sunset Road, Kuta, Bali </p>
           
           <h4>Check operation at Giga Factory 1</h4>
           <p>18.00-20.00</p>
           <p>at Central,Jakarta </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default MainPage;
