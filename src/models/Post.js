import { Account } from "./Account.js"

export class Post {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator =new Account(data.creator)
    this.likes = data.likes
    this.id = data.id
    this.timestamps = data.timestamps

  }
}