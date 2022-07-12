import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('Demo_Response_time');

/*export const options={
  thresholds: {
    http_req_failed: ['rate<0.01'], 
    http_req_duration: ['p(95)<500'], 
  },
  stages: [
    { duration: '10s', target: 5 },
    { duration: '30s', target: 5 },
    { duration: '20s', target: 0 }
  ]

};*/

export default function () {
  const apiEndpoint=`https://${__ENV.API_HOST}`;
  const res = http.get(`${apiEndpoint}`)
  myTrend.add(res.timings.duration);
  sleep(1);
}