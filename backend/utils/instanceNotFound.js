import { User } from '../models/users.model.js';
import { List } from '../models/lists.model.js';
import { Board } from '../models/boards.model.js';
import { Attachment } from '../models/attachments.model.js';
import { Card } from '../models/cards.model.js';
import { Comment } from '../models/comments.model.js';
import { Label } from '../models/labels.model.js';

export function instanceNotFound(instance) {
  switch(true) {
    case instance instanceof List:
      throw new Error("List not found");
    case instance instanceof User:
      throw new Error("User not found");
    case instance instanceof Board:
      throw new Error("Board not found");
    case instance instanceof Attachment:
      throw new Error("Attachment not found");
    case instance instanceof Card:
      throw new Error("Card not found");
    case instance instanceof Comment:
      throw new Error("Comment not found");
    case instance instanceof Label:
      throw new Error("Label not found");
    default:
      throw new Error("Instance not found");
  }
}