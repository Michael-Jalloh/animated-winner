from flask import  Flask

application = Flask(__name__)

@application.route("/")
def index():
    return """<h2>Hello</h2>
              \n<h3>Welcome Docker</h3> 
              \n<h4>By Bolt</h4>"""

if __name__ == "__main__":
    application.run(host="0.0.0.0")
