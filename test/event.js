/**
 * Created by admin on 2018/2/3. 二月
 * yujie
 */

const { EventEmitter } = require('events');

const eventStore = {
  error: 'error',
  handle: 'rename_handle',
};

class MockEvent extends EventEmitter {}

const mockEvent = new MockEvent();

mockEvent.on(eventStore.error, console.log);
mockEvent.on(eventStore.handle, console.log);

mockEvent.emit(eventStore.error, 'error');
mockEvent.emit(eventStore.handle, 'handle');

module.exports = MockEvent;
