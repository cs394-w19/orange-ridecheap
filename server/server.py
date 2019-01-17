from flask import Flask, jsonify;
from flask_cors import CORS
from lyft import lyft;
from uber import uber;

app = Flask(__name__)
CORS(app)

@app.route("/api/v1/lyft", methods=['GET'])
def lyftestimate():
	lyftresponse = lyft.getLyftEstimate()
	return jsonify(lyftresponse)

@app.route("/api/v1/uber", methods=['GET'])
def uberestimate():
	uberresponse = uber.getUberEstimate()
	return jsonify(uberresponse)

if __name__ == '__main__':
    app.run(debug=True)