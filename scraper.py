# Take `destination`, `origin` and `parcel size` as an argument and scrape websites for shipping times and prices

import requests

# Fedex API - refer to https://developer.fedex.com/api/en-us/catalog/rate/v1/docs.html
fexEx_url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes"

fedEx_payload = input # 'input' refers to JSON Payload
headers = {
    'Content-Type': "application/json",
    'X-locale': "en_US",
    'Authorization': "Bearer "
    }

response = requests.post(fexEx_url, data=fedEx_payload, headers=headers)

print(response.text)


