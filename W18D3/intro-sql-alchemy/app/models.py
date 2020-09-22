from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

pet_owners = db.Table(
  "pet_owners",
  db.Model.metadata,
  db.Column("pet_id", db.Integer, db.ForeignKey("pets.id"), primary_key=True),
  db.Column("owner_id", db.Integer, db.ForeignKey("owners.id"), primary_key=True)
)


class PetType(db.Model):
    __tablename__ = "pet_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False, unique=True)


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    pet_type_id = db.Column(db.Integer, db.ForeignKey("pet_types.id"), nullable=True)
    age = db.Column(db.SmallInteger)

    type = db.relationship("PetType")
    owners = db.relationship("Owner", secondary="pet_owners", back_populates="pets")

class Owner(db.Model):
    __tablename__ = 'owners'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)

    pets = db.relationship("Owner", secondary="pet_owners", back_populates="owners")