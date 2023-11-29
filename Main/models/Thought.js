const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
  thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default:Date.now,
      //format date with a get function
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
