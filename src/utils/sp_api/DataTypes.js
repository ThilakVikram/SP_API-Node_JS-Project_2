export const DataTypes = Object.freeze({
    region: Object.freeze({
        NA: "NA",
        EU: "EU",
        FE: "FE",
        None: undefined
    }),
    marketplace: Object.freeze({
        None: undefined,
        NA: Object.freeze({
            US: "US",
            CA: "CA",
            MX: "MX",
            BR: "BR"
        }),
        EU: Object.freeze({
            UK: "UK",
            DE: "DE",
            FR: "FR",
            IT: "IT",
            ES: "ES",
            NL: "NL",
            SE: "SE",
            PL: "PL",
            BE: "BE",
            TR: "TR",
            AE: "AE",
            SA: "SA",
        }),
        FE: Object.freeze({
            JP: "JP",
            AU: "AU"
        })
    }),
    baseUrl:{
        NA: "https://sellingpartnerapi-na.amazon.com",
        EU: "https://sellingpartnerapi-eu.amazon.com",
        FE: "https://sellingpartnerapi-fe.amazon.com"
    },
    marketplaceId: Object.freeze({
        NA: Object.freeze({
            US: "ATVPDKIKX0DER",
            CA: "A2EUQ1WTGCTBG2",
            MX: "A1AM78C64UM0Y8",
            BR: "A2Q3Y263D00KWC"
        }),
        EU: Object.freeze({
            UK: "A1F83G8C2ARO7P",
            DE: "A1PA6795UKMFR9",
            FR: "A13V1IB3VIYZZH",
            IT: "APJ6JRA9NG5V4",
            ES: "A1RKKUPIHCS9HS",
            NL: "A1805IZSGTT6HS",
            SE: "A2NODRKZP88ZB9",
            PL: "A1C3SOZRARQ6R3",
            BE: "AMEN7PMS3EDWL",
            TR: "A33AVAJ2PDY3EV",
            AE: "A2VIGQ35RCS4UG",
            SA: "A17E79C6D8DWNP"
        }),
        FE: Object.freeze({
            JP: "A1VC38T7YXB528",
            AU: "A39IBJ37TRP1C6",
            SG: "A19VAU5U5O7RUS",
            IN: "A21TJRUUN4KGV"
        })
    })
})