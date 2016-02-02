'use strict';

const DI = require('@scola/di');
const Queue = require('@scola/queue');

const LoadBalancer = require('./lib/load-balancer');
const Message = require('./lib/message');
const Pool = require('./lib/pool');

class Module extends DI.Module {
  configure() {
    this.inject(LoadBalancer).with(
      this.singleton(Pool),
      this.instance(Queue)
    );
  }
}

module.exports = {
  LoadBalancer,
  Message,
  Module,
  Pool
};
