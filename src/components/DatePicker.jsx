import React from 'react';


export default function DatePicker({ setStartDate, setEndDate, setDateFlag, dateFlag, setFreq }) {
    const [currentStartDate, setCurrentStartDate] = React.useState();
    const [currentEndDate, setCurrentEndDate] = React.useState();

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                minWidth: '400px'
            }}
        >

            <input type="date" id="start" name="start-date"
                value={currentStartDate}
                onChange={(e) => {
                    setCurrentStartDate(e.target.value);
                    setStartDate(e.target.value.replace(/-/g, ""));
                }}
                // min="2018-01-01" max="2018-12-31"
                style={{
                    padding: '5px',
                    margin: '10px'
                }}
            ></input>
            {'-'}
            <input type="date" id="start" name="end-date"
                value={currentEndDate}
                onChange={(e) => {
                    setCurrentEndDate(e.target.value);
                    setEndDate(e.target.value.replace(/-/g, ""));
                }}
                style={{
                    padding: '5px',
                    margin: '10px'
                }}
            ></input>

            <select style={{
                padding: '5px'
            }}
                onChange={(e) => {
                    setFreq(e.target.value);
                }}>
                <option value='daily'>daily</option>
                <option value='weekly'>weekly</option>
            </select>

            <button onClick={() => {
                setDateFlag(!dateFlag);
            }}
                style={{
                    padding: '6px',
                    margin: '10px',
                    width: '100px',
                    backgroundColor: '#36e0d2',
                    borderColor: '#36e0d2',
                    color: 'white',
                    fontFamily: 'Open sans bold 12px'
                }}> <b>Set Date</b> </button>
        </div>
    )
}
