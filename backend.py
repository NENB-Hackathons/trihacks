# Take `destination`, `origin` and `parcel size` as an argument and scrape websites for shipping times and prices

import requests
import shippo

def get_rates(api_key: str, address_from: dict, address_to: dict, parcel: dict) -> list[shippo.resource.ShippoObject]:
    """
    api_key should be a shippo API key.
    address_from and address_to should be as documented here: https://goshippo.com/docs/reference#addresses
    parcel should be as documented here: https://goshippo.com/docs/reference#parcels
    """

    # Shippo package key
    shippo.config.api_key = api_key

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

    return rates
