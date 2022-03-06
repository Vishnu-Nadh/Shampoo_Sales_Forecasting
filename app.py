from flask import Flask, render_template, request, jsonify, send_file
from preprocessData import Preprocess_Data
from predictAndSaveResult import Predict_Output
import os

app = Flask(__name__)

root = os.getcwd()
app.config["SENT_FILE_DIR"] = os.path.join(root, "Result")


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


@app.route("/downlod_result", methods=["GET", "POST"])
def downlod_result():
    file_path = os.path.join(app.config["SENT_FILE_DIR"], "predictions.csv")
    return send_file(file_path, "predictions.csv", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
