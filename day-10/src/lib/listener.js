import { crossTabChannel } from './broadcast';
import { eventBus } from './eventBus';

// this callback function gets the data that you send
// we want to send the event name and the payload
// so all other tabs will get this data and update accordingly
crossTabChannel.onmessage = ({ data }) => {
  const { eventName, payload } = data;

  // Re-publish locally WITHOUT rebroadcasting
  eventBus.publish(eventName, payload, { broadcast: false });
};
