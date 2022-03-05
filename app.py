from flask import Flask, render_template, request, jsonify
from preprocessData import Preprocess_Data
from predictAndSaveResult import Predict_Output

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/predict_sales", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        data_dic = request.json
        preprocess = Preprocess_Data(data_dic)
        from_date, to_date = preprocess.preprocess()
        predict = Predict_Output(from_date, to_date)
        output = predict.predictSave()
        print(output)
        return jsonify(output)
    else:
        return jsonify("no post request arrived")


if __name__ == "__main__":
    app.run(debug=True)
