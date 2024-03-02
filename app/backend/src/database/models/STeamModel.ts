import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class STeamModel extends Model<
InferAttributes<STeamModel>,
InferCreationAttributes<STeamModel>
> {
  declare id: CreationOptional<number>;
  declare teamName: string;
  declare imageUrl: string;
}

STeamModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_url',
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default STeamModel;
