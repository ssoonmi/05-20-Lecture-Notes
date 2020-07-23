# Sequelize Associations

## Docs
* https://sequelize.org/master/manual/assocs.html

## Types of Associations

Sequelize provides four types of associations that should be combined to create them:

* The HasOne association
* The BelongsTo association
* The HasMany association
* The BelongsToMany association

## Defining the Sequelize Associations

Given two models, `A` and `B`, we can create the following relations.
The first three calls (hasOne, belongsTo, and hasMany) will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).

1. hasOne: 
  The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

```javascript
A.hasOne(B, { /* options */ }); // A HasOne B
```

1. belongsTo:
The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

```javascript 
A.belongsTo(B, { /* options */ }); // A BelongsTo B
```

1. hasMany
The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

```javascript
A.hasMany(B, { /* options */ }); // A HasMany B
```


1. belongsToMany: 
  This signifies a many-to-many relationship between models `A` and `B`.
  Note: This association MUST have a `through: ` property to signify a joins (junction) table.
  Sequelize will automatically create this model `C` (unless it already exists) and define the appropriate foreign keys on it.

```javascript
A.belongsToMany(B, { through: 'C' /*, options */ }); // A BelongsToMany B through the junction table C
```


# How to Create Standard Relationships

Sequelize associations are defined in pairs

* To create a One-To-One relationship, the hasOne and belongsTo associations are used together.

```javascript
A.hasOne(B, { /* options */ });
B.belongsTo(A, { /* options */ });
```


* To create a One-To-Many relationship, the hasMany and belongsTo associations are used together.

```javascript
A.hasMany(B, { /* options */ });
B.belongsTo(A, { /* options */ });
```


* To create a Many-To-Many relationship, two belongsToMany calls are used together.

```javascript
A.belongsToMany(B, { through: 'C' /*, options */ });
B.belongsToMany(A, { through: 'C' /*, options */ });
```

