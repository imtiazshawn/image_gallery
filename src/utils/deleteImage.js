const deleteImage = (
  imageIndex,
  currentChecked,
  setImageIndex,
  setCurrentChecked
) => {
  let copyOfImageIndex = [...imageIndex]
  copyOfImageIndex = copyOfImageIndex.filter((value) => {
    return !currentChecked.includes(Number(value))
  })
  setImageIndex(copyOfImageIndex)
  setCurrentChecked([])
}

export default deleteImage;
