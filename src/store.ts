import { atom } from 'nanostores'

const generateGifURL: () => string = () =>
  `/images/television_channels/${Math.floor(Math.random() * 103)}.gif`

const $gifURL = atom<string>('/images/television_channels/78.gif')
const setNewGif: () => void = () => {
  let newGifURL = generateGifURL();
  if (newGifURL === $gifURL.value) {
    // reroll if same value is rolled, just once tho
    newGifURL = generateGifURL()
  }


  $gifURL.set(newGifURL)
}

export {
  $gifURL,
  setNewGif
}