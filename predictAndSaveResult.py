from operator import index
import pandas as pd
import pickle
import os


class Predict_Output:
    """this class predict the output of sales forcasting and save to as csv file"""

    def __init__(self, from_date, to_date):
        self.from_date = from_date
        self.to_date = to_date
        self.output_dir = "Result"
        self.model_dir = "Model/"

    def predictSave(self):
        model = self.loadModel()
        prediction = model.predict(self.from_date, self.to_date, dynamic=True)
        predicted_data = pd.DataFrame(
            {"Date": prediction.index, "Sales Prediction": prediction.values}
        )
        predicted_data.to_csv(
            os.path.join(self.output_dir, "predictions.csv"), index=False
        )
        return "Predicted output saved to Results directory"

    def loadModel(self):
        model_file = open(self.model_dir + "arima.pickle", "rb")
        model = pickle.load(model_file)
        return model
