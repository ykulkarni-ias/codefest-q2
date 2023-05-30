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

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10px'
      }}>
        <h1 style={{
          width: 'fit-content'
        }}>CRB Report Anomaly Detection System</h1>

        <div style={{
          // textAlign: 'right',
          paddingTop: '10px',
          paddingLeft: '24%'
        }}>
          <TeamsDropdown teamId={teamId} setTeamId={setTeamId} />
          {/* <DatePicker /> */}
        </div>
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
          <LineChart teamId={teamId} /></div>
        <div
          style={{
            alignItems: 'right',
            justifyContent: 'right',
            paddingLeft: '15%'
          }}
        >
          <BarChart teamId={teamId} /></div>
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
          <PieChart teamId={teamId} />
        </div>
        <div
          style={{
            alignItems: 'right',
            justifyContent: 'right',
            paddingLeft: '15%'
          }}
        >
          <PieChart2 teamId={teamId} />
        </div>
      </div>
    </>
  );
}

export default App;
