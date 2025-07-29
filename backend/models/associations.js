export function setupAssociations(models) {
  const {
    User,
    Board,
    BoardMembers,
    Card,
    CardAssignee,
    Attachment,
    List,
    Label,
    Comment,
  } = models;

  User.belongsToMany(Board, { through: BoardMembers, foreignKey: "user_id" });
  Board.belongsToMany(User, { through: BoardMembers, foreignKey: "board_id" });
  Card.belongsToMany(User, { through: CardAssignee, foreignKey: "card_id" });
  User.belongsToMany(Card, { through: CardAssignee, foreignKey: "user_id" });
  List.belongsTo(Board, { foreignKey: "board_id"})
  Board.hasMany(List, { foreignKey: "board_id" , hooks: true, onDelete: "CASCADE"})
  Label.belongsTo(Board, { foreignKey: "board_id" });
  Comment.belongsTo(Card, { foreignKey: "card_id" });
  Comment.belongsTo(User, { foreignKey: "user_id" });
  BoardMembers.belongsTo(User, { foreignKey: "user_id" });
  BoardMembers.belongsTo(Board, { foreignKey: "board_id" });
  CardAssignee.belongsTo(User, { foreignKey: "user_id" });
  CardAssignee.belongsTo(Card, { foreignKey: "card_id" });
  Attachment.belongsTo(Card, { foreignKey: "card_id" });
  Attachment.belongsTo(User, { foreignKey: "user_id" });
  User.hasMany(Comment, { foreignKey: "user_id" });
  User.hasMany(Attachment, { foreignKey: "user_id" });
  List.hasMany(Card, { foreignKey: "list_id" , onDelete: "CASCADE"});
  Card.belongsTo(List, { foreignKey: "list_id" });
  Card.hasMany(Comment, { foreignKey: "card_id" });
  Card.hasMany(Attachment, { foreignKey: "card_id" });
  Board.hasMany(Label, { foreignKey: "board_id" });
}
