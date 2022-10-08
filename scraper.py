# Take `destination`, `origin` and `parcel size` as an argument and scrape websites for shipping times and prices

import requests

# Fedex API - refer to https://developer.fedex.com/api/en-us/catalog/rate/v1/docs.html
fexEx_url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes"

payload = input # 'input' refers to JSON Payload
headers = {
    'Content-Type': "application/json",
    'X-locale': "en_US",
    'Authorization': "Bearer "
    }

response = requests.post(fexEx_url, data=payload, headers=headers)

print(response.text)

# UPS API - refer to https://www.ups.com/upsdeveloperkit?loc=en_US
ups_url = "blank for now"

payload = input # 'input' refers to JSON Payload
headers = {
    'Content-Type': "application/json",
    'X-locale': "en_US",
    'Authorization': "Bearer "
    }

response = requests.post(ups_url, data=payload, headers=headers)

print(response.text)