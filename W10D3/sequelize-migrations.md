# Sequelize Migrations

## Obtaining the query interface

First, we must obtain the query interface to communiate with the database.

```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(/* ... */);
const queryInterface = sequelize.getQueryInterface();
```

## Creating a Table with Sequelize

```javascript
queryInterface.createTable('TableName', {
  columnName1: DataTypes.STRING, // We must include the DataType that we expect for this column
  columnName2: {  // The following is an object containing optional agruments for sequelize.
  // These are called query options
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});
```

## Adding a column to a table

```javascript
queryInterface.addColumn('TableName', 'columnName', { type: DataTypes.STRING });
```

## Updating a column

```javascript
queryInterface.changeColumn('TableName', 'columnName', {  // The following values are what will be used in the new column
  type: DataTypes.FLOAT,
  defaultValue: 3.14,
  allowNull: false
});
```

## Removing a column

```javascript
queryInterface.removeColumn('TableName', 'columnName', { /* query options */ });
```