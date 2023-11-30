from flask import Flask, jsonify, request
from flask_cors import CORS

import re
import json

import vertexai
from vertexai.language_models import TextGenerationModel

vertexai.init(project="black-stream-403606", location="us-central1")

app = Flask(__name__)
CORS(app)
@app.route('/api/data', methods=['GET', 'POST'])

def get_data():

    data = json.loads(request.data)

    city = data['city']
    startDate = data['startDate']
    returnDate = data['returnDate']
    passengers = data['passengers']
    budget = data['budget']
    travelPref = data['travelPref']

    print(city)

    parameters = {
        "candidate_count": 1,
        "max_output_tokens": 1024,
        "temperature": 0.2,
        "top_p": 0.8,
        "top_k": 40
    }
    
    model = TextGenerationModel.from_pretrained("text-bison@001")
    
    response = model.predict(
        
        "Create an itinerary for a one day trip to " + city + ". Give response in json format but don\'t write JSON on top.\n" +

        "{\'title\': \'title\', \'itinerary\': [{\'time\': \'time\', \'activity\': \'activity to perform\', \'description\': \'short description\'}, {\'time\': \'time\', \'activity\': \'activity to perform\', \'description\': \'short description\'},...]}",
        **parameters
    )

    print(type(response.text))
    print(response.text)

    json_object = json.loads(response.text)

    print(type(json_object))
    print(json_object)

    return (jsonify(json_object))

if __name__ == '__main__':
    app.run()