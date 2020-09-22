from flask import Flask
import app.routes as routes
from .config import Configuration
from .models import db

app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(routes.bp)
db.init_app(app)

@app.route('/')
def hello():
    return '<h1>Hello, world!</h1>'