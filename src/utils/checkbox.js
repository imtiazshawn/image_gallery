const checkbox = (e, currentChecked, setCurrentChecked) => {
  const value = Number(e.target.value)
  const copyOfChecked = [...currentChecked]
  const toRemoveIndex = copyOfChecked.indexOf(value)

  if (!copyOfChecked.includes(value)) {
    copyOfChecked.push(value)
  } else {
    copyOfChecked.splice(toRemoveIndex, 1)
  }
  setCurrentChecked(copyOfChecked)
}

export default checkbox;