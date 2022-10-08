# Wrapper for the FEDEX API
# We use this to get the shipping rates for a given package
# Fedex API - refer to https://developer.fedex.com/api/en-us/catalog/rate/v1/docs.html

import requests
import json
import os

class FedexAPI:
    def __init__(self, FEDEX_API_KEY):
        self.url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes"
        self.headers = {
            'Content-Type': "application/json",
            'X-locale': "en_US",
            'Authorization': "Bearer " + FEDEX_API_KEY
        }

    def get_rates(self, payload):
        response = requests.post(self.url, data=payload, headers=self.headers)
        return response.text