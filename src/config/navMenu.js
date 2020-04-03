const navMenuConfig = [{
        name: '能效管理',
        routerName: 'managementOfEnergyEfficiency',
        subMenu: [{
                name: '能源总览',
                routerName: 'energyOverview'
            },
            {
                name: '电能概况',
                routerName: 'elecOverview'
            },
            {
                name: '实时历史曲线',
                routerName: 'realtimeHistoryCurve'
            },
            {
                name: '能效分析',
                routerName: 'analysisOfEnergyEfficiency'
            },
            {
                name: '数据报表',
                routerName: 'dataReport'
            }
        ]
    },
    {
        name: 'text',
        routerName: 'text',
        subMenu: [{
            name: 'a',
            routerName: 'a'
        }]
    }
]
export default navMenuConfig