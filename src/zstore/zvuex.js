let Vue;
class Store {
  constructor(options) {
    this.options = options;
    this._actions = options.actions;
    this._mutations = options.mutations;
    this._getters = options.getters;

    const computed = {};
    this.getters = {};

    Object.keys(this._getters).forEach(getter => {
      const fn = this._getters[getter];
      computed[getter] = () => {
        return fn(this.state);
      };
      // 保证getters只能读取
      Object.defineProperty(this.getters, getter, {
        get: () => this.state[getter]
      });
    });

    this.state = new Vue({
      data: options.state,
      computed
    });
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  commit(type, payload) {
    const fn = this._mutations[type];
    if (fn) {
      fn(this.state, payload);
    }
  }
  dispatch(type, payload) {
    const fn = this._actions[type];
    if (fn) {
      fn(this, payload);
    }
  }
}

function install(_vue) {
  Vue = _vue;
  Vue.mixin({
    beforeCreate() {
      console.log(this);
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}
export default {
  install,
  Store
};
