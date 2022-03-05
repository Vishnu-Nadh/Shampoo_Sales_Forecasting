from flask import Flask, render_template, request, jsonify


app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/predict_sales", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        data_dic = request.json
        print(data_dic)

        return jsonify("result found")
    else:
        return jsonify("no post request")


if __name__ == "__main__":
    app.run(debug=True)
