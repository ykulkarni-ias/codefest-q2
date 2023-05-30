import React from 'react'
import './App.css';
import BarChart from './components/BarChart';
import DatePicker from './components/DatePicker';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import PieChart2 from './components/PieChart2';
import TeamsDropdown from './components/TeamsDropdown';

function App() {

  const [teamId, setTeamId] = React.useState(11831);
  const [startDate, setStartDate] = React.useState(20220901);
  const [endDate, setEndDate] = React.useState(20220930);
  const [dateFlag, setDateFlag] = React.useState(true);
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10px'
      }}>
        <h1>CRB Report Anomaly Detection System</h1>


      </div>
      <div style={{
        width: '100%',
        overflow: 'hidden'
      }}>

        <div style={{
          width: '50%',
          padding: '10px',
          float: 'left',
          boxSizing: 'border-box',
          paddingLeft: '10%',
          paddingTop: '15px'
        }}>
          <TeamsDropdown teamId={teamId} setTeamId={setTeamId} /></div>
        <div style={{
          width: '50%',
          padding: '10px',
          float: 'right',
          boxSizing: 'border-box'

        }}>
          <DatePicker setStartDate={setStartDate} setEndDate={setEndDate} setDateFlag={setDateFlag} dateFlag={dateFlag} /></div>

      </div>

      <div style={{
        display: 'flex',
        width: '100%',
        paddingTop: '5%'
      }}>

        <div
          style={{
            alignItems: 'left',
            justifyContent: 'left',
            paddingLeft: '8%',
          }}
        >
          <LineChart teamId={teamId} startDate={startDate} endDate={endDate} dateFlag={dateFlag} /></div>
        <div
          style={{
            alignItems: 'right',
            justifyContent: 'right',
            paddingLeft: '15%'
          }}
        >
          <BarChart teamId={teamId} startDate={startDate} endDate={endDate} dateFlag={dateFlag} /></div>
      </div>
      <div style={{
        display: 'flex',
        width: '100%',
        paddingTop: '8%',
        paddingBottom: '5%'
      }}>
        <div style={{
          alignItems: 'left',
          justifyContent: 'left',
          paddingLeft: '8%',
        }}>
          <PieChart teamId={teamId} startDate={startDate} endDate={endDate} dateFlag={dateFlag} />
        </div>
        <div
          style={{
            alignItems: 'right',
            justifyContent: 'right',
            paddingLeft: '15%'
          }}
        >
          <PieChart2 teamId={teamId} startDate={startDate} endDate={endDate} dateFlag={dateFlag} />
        </div>
      </div>
    </>
  );
}

export default App;
