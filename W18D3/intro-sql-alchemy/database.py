from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import Owner, Pet, PetType

with app.app_context():
    db.drop_all()
    db.create_all()

    dog = PetType(type="Dog")
    cat = PetType(type="Cat")
    jackalope = PetType(type="Jackalope")

    carlo = Owner(
      first_name="Carlo",
      last_name="Missoni",
      email="carlo@yahoo.com"
    )
    fido = Pet(
      name="Fido",
      type=dog,
      age=6,
      owners=[carlo]
    )
    sparky = Pet(
      name="Sparky",
      type=dog,
      age=1
    )
    
    fido.owners.append(sparky)

    db.session.add(dog)
    db.session.add(cat)
    db.session.add(jackalope)
    db.session.add(carlo)
    db.session.commit()

