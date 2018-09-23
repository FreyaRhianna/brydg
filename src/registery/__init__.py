from flask import Flask
app = Flask(__name__, static_folder="static/dist", template_folder="static")

if app:
    import registery.controllers.index
