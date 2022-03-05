class Preprocess_Data:
    """this class converts the integer date time values to the python datetime string format"""

    def __init__(self, data_dict):
        self.data_dict = data_dict

    def preprocess(self):
        from_year = self.data_dict["fromYr"]
        from_month = self.data_dict["fromMth"]
        to_year = self.data_dict["toYr"]
        to_month = self.data_dict["toMth"]

        from_date = str(from_year) + "-" + str(from_month)
        to_date = str(to_year) + "-" + str(to_month)

        return from_date, to_date
