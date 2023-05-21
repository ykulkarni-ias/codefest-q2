import React from 'react';
// import HighCharts, { ExportingOptions, LegendOptions, TooltipOptions } from 'highcharts';
import { IASBarChart, IASHighChart } from 'react-core';

export default function BarChart() {
    return (
        <>
            <div><h1>CRB Report Anomaly Detection System</h1></div>
            <div style={{
                display: 'flex',
                width: '100%',
                paddingTop: '10%'
            }
            }>

                <div
                    style={{
                        alignItems: 'left',
                        justifyContent: 'left',
                        paddingLeft: '8%',
                    }}
                >
                    <IASHighChart
                        series={[
                            {
                                color: '#16AA99',
                                cursor: 'pointer',
                                data: [
                                    81.74,
                                    87.38,
                                    78.11,
                                    85.02,
                                    80
                                ],
                                marker: {
                                    fillColor: '#FFFFFF',
                                    lineColor: null,
                                    lineWidth: 2,
                                    symbol: 'circle'
                                },
                                name: 'Total Number of Reports',
                                tooltip: {
                                    valueSuffix: ' %'
                                },
                                type: 'spline'
                            }
                        ]}
                        title="IAS High Chart"
                        xAxis={[
                            {
                                categories: [
                                    '2022-07',
                                    '2022-08',
                                    '2022-09',
                                    '2022-10',
                                    '2022-11'
                                ],
                                crosshair: true,
                                index: 0,
                                isX: true
                            }
                        ]}
                        yAxis={[
                            {
                                index: 0,
                                labels: {
                                    format: '{value}%',
                                    gridLineDashStyle: 'longdash'
                                },
                                opposite: false,
                                title: {
                                    text: 'Number of Reports'
                                }
                            }
                        ]}
                    />
                </div>

                <div
                    style={{
                        alignItems: 'right',
                        justifyContent: 'right',
                        paddingLeft: '15%'
                    }}
                >
                    <IASBarChart
                        borderColor="#4e62e0"
                        borderWidth="1"
                        legendObject={{
                            align: 'right',
                            enabled: true,
                            layout: 'vertical',
                            verticalAlign: 'bottom'
                        }}
                        series={[
                            {
                                data: [
                                    4,
                                    4,
                                    null,
                                    15,
                                    12
                                ],
                                name: 'Scheduled Reports'
                            },
                            {
                                data: [
                                    5,
                                    3,
                                    12,
                                    6,
                                    11
                                ],
                                name: 'Failed Reports'
                            }
                        ]}
                        seriesColors={[
                            // '#4e62e0',
                            '#f03827',
                            // '#00d1c0',
                            '#99adb7'
                        ]}
                        showExport
                        showToolTip
                        stackLabelsObject={{
                            align: 'right',
                            enabled: true,
                            format: '{total}%'
                        }}
                        stackingType="normal"
                        title="IAS Stacking Bar Chart"
                        toolTipSuffix="%"
                        xAxisCat={[
                            '2020/21',
                            '2019/20',
                            '2018/19',
                            '2017/18',
                            '2016/17'
                        ]}
                    />
                </div>

                {/* <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <IASHighChart
                    exporting={{
                        buttons: {
                            contextButton: {
                                menuItems: [
                                    'downloadPNG',
                                    'downloadJPEG',
                                    'downloadPDF',
                                    'downloadCSV'
                                ]
                            }
                        }
                    }}
                    series={[
                        {
                            color: '#C1CDD2',
                            data: [
                                100170683,
                                369534737,
                                215156581,
                                304808000
                            ],
                            name: 'Number of Reports Run',
                            pointWidth: 35,
                            tooltip: {
                                valueSuffix: ' '
                            },
                            type: 'column',
                            yAxis: 1
                        },
                        {
                            color: '#16AA99',
                            cursor: 'pointer',
                            data: [
                                81.74,
                                87.38,
                                78.11,
                                85.02
                            ],
                            marker: {
                                fillColor: '#FFFFFF',
                                lineColor: null,
                                lineWidth: 2,
                                symbol: 'circle'
                            },
                            name: 'Scheduled Reports',
                            tooltip: {
                                valueSuffix: ' %'
                            },
                            type: 'spline'
                        },
                        {
                            color: '#DFAA11',
                            cursor: 'pointer',
                            data: [
                                67.99,
                                56.99,
                                50.99,
                                70.99
                            ],
                            marker: {
                                fillColor: '#FFFFFF',
                                lineColor: null,
                                lineWidth: 2,
                                symbol: 'circle'
                            },
                            name: 'Failed Reports',
                            tooltip: {
                                valueSuffix: ' %'
                            },
                            type: 'spline'
                        }
                    ]}
                    title="IAS High Chart"
                    xAxis={[
                        {
                            categories: [
                                '2022-07',
                                '2022-08',
                                '2022-09',
                                '2022-10'
                            ],
                            crosshair: true,
                            index: 0,
                            isX: true
                        }
                    ]}
                    yAxis={[
                        {
                            index: 0,
                            labels: {
                                format: '',
                                gridLineDashStyle: 'longdash'
                            },
                            opposite: true,
                            title: {
                                text: ''
                            }
                        },
                        {
                            gridLineWidth: 0,
                            index: 1,
                            labels: {
                                gridLineDashStyle: 'longdash',

                            },
                            title: {
                                text: 'Number of Reports'
                            }
                        }
                    ]}
                />
            </div> */}
            </div>
        </>
    )
}
