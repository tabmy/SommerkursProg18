from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello world'


@app.route('/calculate', methods=['GET'])
def calculate():
    price = request.args['price']
    items = request.args['items']

    totalPrice = int(price) * int(items)

    return str(totalPrice)


@app.route('/double', methods=['POST'])
def double():
    tall = request.json['tall']
    return 'Resultatet er: ' + str(tall * 2)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


app.run()
