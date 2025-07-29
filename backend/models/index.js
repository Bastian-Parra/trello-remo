import DBConnection from "../database/sequelize.config.js";
import { Card } from "./cards.model.js";
import { CardAssignee } from "./card_assignees.model.js";
import { Attachment } from "./attachments.model.js";
import { BoardMembers } from "./board_members.model.js";
import { Board } from "./boards.model.js";
import { Comment } from "./comments.model.js";
import { Label } from "./labels.model.js";
import { List } from "./lists.model.js";
import { User } from "./users.model.js";
import { setupAssociations } from "./associations.js";

// models init:

const models = {
  User,
  Card,
  CardAssignee,
  Attachment,
  BoardMembers,
  Board,
  Comment,
  Label,
  List,
};

setupAssociations(models);

export {
  DBConnection,
  User,
  Board,
  BoardMembers,
  Card,
  CardAssignee,
  models as default,
};
