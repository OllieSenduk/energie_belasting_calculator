const energyTaxlist = [
    {
        year: '2015',
        kwh: {
            firstTier: {
                cost: 0.1196,
                boundry: 10000
            },
            secondTier: {
                cost: 0.0469,
                boundry: 50000
            },
            ThirdTier: {
                cost: 0.0125,
                boundry: 1000000
            },
            fourthTier: {
                cost: 0.0005,
            }
        }
    }
]

export default energyTaxlist