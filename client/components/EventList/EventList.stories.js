import { EventList } from './index'

export default {
  component: EventList,
  title: 'Event List'
}

const list = [
  {
    "operator": "subtract",
    "amount": 12,
    "note": 'Lorem ipsum dolor sit amet, consectetur.',
    "timestamp": "2019-11-16T17:25:56.638Z"
  },
  {
    "operator": "subtract",
    "amount": 20,
    "note": null,
    "timestamp": "2019-11-16T20:31:12.055Z"
  },
  {
    "operator": "subtract",
    "amount": 12,
    "note": null,
    "timestamp": "2019-11-19T20:57:49.867Z"
  },
  {
    "operator": "add",
    "amount": 2,
    "note": null,
    "timestamp": "2019-11-19T20:58:14.603Z"
  },
  {
    "operator": "add",
    "amount": 8.70,
    "note": 'Lorem ipsum dolor sit amet, consectetur.',
    "timestamp": "2019-11-19T21:05:14.130Z"
  },
  {
    "operator": "subtract",
    "amount": 10.11,
    "note": 'Lorem ipsum dolor sit amet, consectetur.',
    "timestamp": "2019-11-19T21:16:47.619Z"
  },
  {
    "operator": "subtract",
    "amount": 0.08,
    "note": null,
    "timestamp": "2019-11-19T21:17:18.250Z"
  }
]

export const main = () => <EventList eventList={list} />
