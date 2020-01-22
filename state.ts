import { types } from 'mobx-state-tree';

export const state = types
  .model({
    counter: types.number
  })
  .actions(self => ({
    inc() {
      self.counter += 1;
    },

    dec() {
      self.counter -= 1;
    }
  }))
  .create({
    counter: 10
  })
