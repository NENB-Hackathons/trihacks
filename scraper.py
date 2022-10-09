# Take `destination`, `origin` and `parcel size` as an argument and scrape websites for shipping times and prices

import requests
import shippo

## Fedex API - refer to https://developer.fedex.com/api/en-us/catalog/rate/v1/docs.html
#fexEx_url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes"
#
#fedEx_payload = input # 'input' refers to JSON Payload
#headers = {
#    'Content-Type': "application/json",
#    'X-locale': "en_US",
#    'Authorization': "Bearer "
#    }
#
#response = requests.post(fexEx_url, data=fedEx_payload, headers=headers)
#
#print(response.text)

# Shippo package shit
shippo.config.api_key = "shippo_live_26fc778339e6558af32efa7efc3eb36ac2d6615e"

# Example address_from object dict
# The complete refence for the address object is available here: https://goshippo.com/docs/reference#addresses
address_from = {
    "street1": "115 Palis Way",
    "city": "Calgary",
    "state": "AB",
    "zip": "T2V 3V5",
    "country": "CA",
}

# Example address_to object dict
# The complete refence for the address object is available here: https://goshippo.com/docs/reference#addresses

address_to = {
    "street1": "9632 Oakfield Dr SW",
    "city": "Calgary",
    "state": "AB",
    "zip": "T2V 0L1",
    "country": "CA",
}

# parcel object dict
# The complete reference for parcel object is here: https://goshippo.com/docs/reference#parcels
parcel = {
    "length": "5",
    "width": "5",
    "height": "5",
    "distance_unit": "in",
    "weight": "2",
    "mass_unit": "lb",
}

# Setup shioment var
shipment = shippo.Shipment.create(
    address_from=address_from,
    address_to=address_to,
    parcels=[parcel],
    asynchronous=False
)

# Rates are stored in the `rates` array
# The details on the returned object are here: https://goshippo.com/docs/reference#rates
rates = shipment.rates

print(rates)
