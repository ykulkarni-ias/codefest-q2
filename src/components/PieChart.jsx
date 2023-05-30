import React from 'react';
import { IASCirclePieChart } from 'react-core';

export default function PieChart({ teamId, startDate, endDate, dateFlag }) {

    const [response, setResponse] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:8080/reportsRunWithReportType/PUB/${teamId}?startDate=${startDate}&endDate=${endDate}`)
            .then((res) => res.json())
            .then((data) => {
                if (Object.keys(data).length > 0) setResponse(Object.entries(data).map(([name, y]) => ({ name, y })));
                else setResponse([{ name: 'No Reports', y: 0 }])
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, dateFlag]);
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
                        data: response
                    }
                ]}
                labelFormat="<b>{point.name}</b><br><span>{point.y} </span>"
                subtitleTitle="Report Types"
                subtitleTooltipText="This is a tooltip that explains the total you see in the chart."
                subtitleTotal=""
                title="Number of Report calls"
            />
        </div>
    )
}
