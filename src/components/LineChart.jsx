import React from 'react';
import { useEffect } from 'react';
import { IASHighChart } from 'react-core';

export default function LineChart({ teamId, startDate, endDate, dateFlag, freq }) {

    // api call
    const [totalReports, setTotalReports] = React.useState([]);
    const [count, setCount] = React.useState([]);
    const [dates, setDates] = React.useState([]);

    useEffect(() => {
        if (teamId != -1) {
            fetch(`http://localhost:8080/totalReportsRun/FW/${teamId}/${freq}?startDate=${startDate}&endDate=${endDate}`)
                .then((res) => res.json())
                .then((data) => {
                    setTotalReports(data);
                });
        }
        else {
            fetch(`http://localhost:8080/totalReportsRun/FW/${freq}?startDate=${startDate}&endDate=${endDate}`)
                .then((res) => res.json())
                .then((data) => {
                    setTotalReports(data);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, dateFlag]);

    useEffect(() => {
        setDates(totalReports.map((e) => {
            if (e.hasOwnProperty('day')) {
                return e.day;
            }
            return e.weekRange;
        }));
        setCount(totalReports.map((e) => {
            return e.count;
        }));
    }, [totalReports]);

    return (
        <>
            <IASHighChart
                series={[
                    {
                        color: '#16AA99',
                        cursor: 'pointer',
                        data: count,
                        marker: {
                            fillColor: '#FFFFFF',
                            lineColor: null,
                            lineWidth: 2,
                            symbol: 'circle'
                        },
                        name: 'Total Number of Reports',
                        tooltip: {
                            valueSuffix: ''
                        },
                        type: 'spline'
                    }
                ]}
                title="Total Number of Reports"
                xAxis={[
                    {
                        categories: dates,
                        crosshair: true,
                        index: 0,
                        isX: true
                    }
                ]}
                yAxis={[
                    {
                        index: 0,
                        labels: {
                            format: '{value}',
                            gridLineDashStyle: 'longdash'
                        },
                        opposite: false,
                        title: {
                            text: 'Number of Reports'
                        }
                    }
                ]}
            />
        </>
    )
}
