import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';
import STeamModel from './STeamModel';

class SMatchModel extends Model<
InferAttributes<SMatchModel>,
InferCreationAttributes<SMatchModel>
> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

SMatchModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

STeamModel.hasMany(SMatchModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
STeamModel.hasMany(SMatchModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });

SMatchModel.belongsTo(STeamModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
SMatchModel.belongsTo(STeamModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default SMatchModel;
