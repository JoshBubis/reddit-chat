function createMessage(event) {
  Messages.insert({
    message:event.target.message.value,
    time: new Date()
  });
  event.target.message.value = '';
  return false;
}
