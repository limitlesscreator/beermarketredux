//Action Creator

export const loadBeers =  async(dispatch) => {
    const allBeers = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=12')
    const res = await allBeers.json()
    dispatch({
        type: 'FETCH_BEERS',
        payload: {
            beers: res
        }
    })
}