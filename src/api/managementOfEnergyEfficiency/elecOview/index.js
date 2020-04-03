import request from '@/utils/request'

export function getInformation(params) {
    return request({
        url: '/EnergySummary/energyconsume',
        method: 'GET',
        params
    })
}
export function getRealtimeQctiveElec(params) {
    return request({
        url: '/EnergySummary/consumptionlist',
        method: 'GET',
        params
    })
}