module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("User",
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    User.associate = models => {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return User;
};