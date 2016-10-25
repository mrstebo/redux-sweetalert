import EventEmitter from 'eventemitter3';

const emitter = new EventEmitter();

export const EE = emitter;

export default {
  showModal: (options) => emitter.emit('show/modal', options),
  hideModal: () => emitter.emit('hide/modal')
};
