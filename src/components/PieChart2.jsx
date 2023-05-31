import React from 'react';
import { useEffect } from 'react';
import { IASCirclePieChart } from 'react-core';

export default function PieChart2({ teamId, startDate, endDate, dateFlag }) {

    const [response, setResponse] = React.useState([]);
    const [errorResponse, setErrorResponse] = React.useState();

    React.useEffect(() => {
        if (teamId != -1) {
            fetch(`http://localhost:8080/reportsRunWithErrorDetails/FW/${teamId}?startDate=${startDate}&endDate=${endDate}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) setResponse(data);
                    else setResponse([{ errorType: 'No Error Types', count: 0 }]);
                });
        }
        else {
            fetch(`http://localhost:8080/reportsRunWithErrorDetails/FW?startDate=${startDate}&endDate=${endDate}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) setResponse(data);
                    else setResponse([{ errorType: 'No Error Types', count: 0 }]);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, dateFlag]);

    useEffect(() => {
        setErrorResponse(response.map((e) => {
            return { name: e.errorType, y: e.count };
        }))
    }, [response]);


    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <IASCirclePieChart
                items={[
                    {
                        colorByPoint: true,
                        data: errorResponse

                    }
                ]}
                labelFormat="<b>{point.name}</b><br><span>{point.y} </span>"
                subtitleTitle="Report Types"
                subtitleTooltipText="This is a tooltip that explains the total you see in the chart."
                subtitleTotal=""
                title="Report Failure Reasons"
            />
        </div>
    )
}
