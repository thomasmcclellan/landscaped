// module.exports = (sequelize, DataTypes) => {
//   const Plant = sequelize.define('plant', {
//     plantName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     sowDateStart: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     sowDateEnd: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     bloomDateStart: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     bloomDateEnd: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     havestDateStart: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     havestDateEnd: {
//       type: DataTypes.ENUM,
//       values: [
//         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//       ],
//       allowNull: true
//     },
//     sowDepth: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     plantDistance: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     rowDistance: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     sunRequirements: {
//       type: DataTypes.ENUM,
//       values: ['Full Sun'],
//       allowNull: true
//     },
//     waterRequirements: {
//       type: DataTypes.ENUM,
//       values: ['Generous'],
//       allowNull: true
//     },
//     soilType: {
//       type: DataTypes.ENUM,
//       values: ['Loam'],
//       allowNull: true
//     },
//     fertilizer: {
//       type: DataTypes.ENUM,
//       values: ['5-10-10'],
//       allowNull: true
//     },
//     soilPH: {
//       type: DataTypes.ENUM,
//       types: [7.0],
//       allowNull: true
//     },
//     hardinessZone: {
//       type: DataTypes.ENUM,
//       values: [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
//       ],
//       allowNull: true
//     },
//     germinationDays: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     daysTilHarvest: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     containerDepth: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     plantHeight: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     indoorAllowed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true
//     },
//     outdoorAllowed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true
//     },
//     containerAllowed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true
//     },
//     plantHardiness: {
//       type: DataTypes.ENUM,
//       values: ['Tender'],
//       allowNull: true
//     },
//     plantsPerSquareFoot: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     lowestTemp: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     heighestTemp: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     transplantingWindow: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//   })
//   return Plant
// }