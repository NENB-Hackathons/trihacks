# Take `destination`, `origin` and `parcel size` as an argument and use shippo API to get rates
# Expose this via flask to the frontend

import requests
import shippo
from flask import Flask, jsonify, request

def get_rates(
    api_key: str, address_from: dict, address_to: dict, parcel: dict
) -> list[shippo.resource.ShippoObject]:
    """
    api_key should be a shippo API key.
    address_from and address_to should be as documented here: https://goshippo.com/docs/reference#addresses
    parcel should be as documented here: https://goshippo.com/docs/reference#parcels
    """

    # Shippo package key
    shippo.config.api_key = api_key

    # Setup shipment var
    shipment = shippo.Shipment.create(
        address_from=address_from,
        address_to=address_to,
        parcels=[parcel],
        asynchronous=False,
    )

    # Rates are stored in the `rates` array
    # The details on the returned object are here: https://goshippo.com/docs/reference#rates
    rates = shipment.rates

    return rates


app = Flask(__name__)


@app.route("/rates", methods=["POST", "GET"])
def rates():
    # Get data from request
    data = request.get_json()
    if data == None:
        return "{}"

    for arg in [
        data["api_key"],
        data["address_from"],
        data["address_to"],
        data["parcel"],
    ]:
        if arg == None:
            return "{}"
        print(arg)

    # Get rates
    rates = get_rates(
        data["api_key"], data["address_from"], data["address_to"], data["parcel"]
    )

    # Return rates
    return jsonify(rates)


# 404 handling
@app.errorhandler(404)
def not_found(e=None):
    # Redirect the github repo
    return '<meta http-equiv="Refresh" content="0; url=\'https://github.com/NENB-Hackathons/trihacks\'" />'


if __name__ == "__main__":
    app.run("0.0.0.0", 5000)
