// broadcast the message to another one in the chatRoom
const Subscription = {
  clubMessage: {
    subscribe(parent, { clubName}, { db, pubsub }, info) {
        return pubsub.asyncIterator(`Message ${clubName}`);
    },
  },
  eventMessage: {
    subscribe(parent, { clubName, name}, { db, pubsub }, info) {
        const eventName = clubName + "_" + name
        return pubsub.asyncIterator(`Message ${eventName}`);
    },
  }
};
export { Subscription as default };

