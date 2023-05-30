import React from 'react';
import { useEffect } from 'react';
import { IASHighChart } from 'react-core';

export default function LineChart({ teamId, startDate, endDate, dateFlag }) {

    // api call
    const [totalReports, setTotalReports] = React.useState([]);
    const [count, setCount] = React.useState([]);
    const [dates, setDates] = React.useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/totalReportsRun/PUB/${teamId}/daily?startDate=${startDate}&endDate=${endDate}`)
            .then((res) => res.json())
            .then((data) => {
                setTotalReports(data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, dateFlag]);

    useEffect(() => {
        setDates(totalReports.map((e) => {
            return e.day;
        }));
        setCount(totalReports.map((e) => {
            return e.count;
        }));
    }, [totalReports])

    // const totalReports = [
    //     {
    //         "day": "2022-12-01",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-02",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-03",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-04",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-05",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-06",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-07",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-08",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-09",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-10",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-11",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-12",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-13",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-14",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-15",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-16",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-17",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-18",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-19",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-20",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-21",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-22",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-23",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-24",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-25",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-26",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-27",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-28",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-29",
    //         "count": 4
    //     },
    //     {
    //         "day": "2022-12-30",
    //         "count": 4
    //     }
    // ];

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
