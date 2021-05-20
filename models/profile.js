module.exports = (Sequelize, DataTypes) => {
    const Profile = Sequelize.define("Profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Profile.associate = models => {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Profile;
}