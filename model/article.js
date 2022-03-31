//对接user数据
const mongoose = require("mongoose");
const baseModel = require("./base-model"); 

const articleSchema = new mongoose.Schema({
  ...baseModel,
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tagList: {
    type: Object,
    default: null,
  },

  favorited: {
    type: Boolean,
  },
  favoritesCount: {
    type: Number,
  },
  author: [
    {
      username: {
        type: String,
        required: true,
      },
      bio: {
        Type: String,
      },
      image: {
        type: String,
        required: false,
      },
      following: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

module.exports = articleSchema;
