const imageSource = (num) =>
  `/images/image-${num}.${num === 9 || num === 10 ? 'jpeg' : 'webp'}`

export default imageSource;