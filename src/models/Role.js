import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';
import User from './User';


class Role extends Model {}

Role.init({
    id: {
        type:Sequelize.INTEGER,
        primaryKey:true
    },

    name:Sequelize.STRING,
    description: Sequelize.TEXT,

}, {
    sequelize,
    modelName: 'role',
    timestamps:false
});

Role.hasMany(User);
User.belongsTo(Role);

export default Role;