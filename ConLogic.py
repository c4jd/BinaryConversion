from matplotlib import text

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_binary():
    data = request.get_json()
    binary = data.get('binary')
    # Process the binary string and convert it to text
    # ... (conversion logic here)
    return jsonify({'text': text})
    Blist.append(b)
    deci = int(b, 2)
    Dlist.append(deci)
    return jsonify({'binary': Blist, 'decimal': Dlist})
app.run(debug=True)



