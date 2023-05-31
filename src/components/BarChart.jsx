import React from 'react';
import { useEffect } from 'react';
import { IASHighChart } from 'react-core';

export default function BarChart({ teamId, startDate, endDate, dateFlag }) {

    // api call
    const [response, setResponse] = React.useState([]);
    const [countScheduledReports, setCountScheduledReports] = React.useState([]);
    const [dates, setDates] = React.useState([]);
    const [countErrorReports, setCountErrorReports] = React.useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/totalReportsRunByTypeAndStatus/PUB/${teamId}/daily?startDate=${startDate}&endDate=${endDate}`)
            .then((res) => res.json())
            .then((data) => {
                setResponse(data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, dateFlag]);

    useEffect(() => {
        setDates(response.map((e) => {
            return e.day;
        }));
        setCountScheduledReports(response.map((e) => {
            return e.scheduledReports;
        }));
        setCountErrorReports(response.map((e) => {
            return e.errorReports;
        }));
    }, [response])

    return (
        <>
            <IASHighChart
                series={[
                    {
                        color: '#3D47D8',
                        data: countScheduledReports,
                        name: 'Scheduled Reports',
                        tooltip: {
                            valueSuffix: ' '
                        },
                        type: 'column'
                    },
                    {
                        color: '#f03827',
                        data: countErrorReports,
                        name: 'Error Reports',
                        tooltip: {
                            valueSuffix: ' '
                        },
                        type: 'column'
                    }
                ]}
                title="Scheduled & Failed Reports"
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
