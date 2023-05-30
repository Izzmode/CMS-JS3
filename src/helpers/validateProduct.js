export const validateProduct = ( formData, setErrors ) => {

    const err = {}

    //name
  if(formData.name.trim() === '') {
    err.name = 'You need to enter a name for the product'
  }

    //description
  if(formData.description.trim() === '') {
    err.description = 'You need to enter a description for the product'
  }

   // price
   if(formData.price.trim() === '') {
    err.price = 'You need to enter a price'
  }

  //img
  if(formData.imageURL.trim() === '') {
    err.imageURL = 'You need to enter a postal code'
  }

  //tags
  if(formData.tags.trim() === '') {
    err.tags = 'You need to enter a tag'
  }

    console.log(err)
    setErrors(err)

  return Object.keys(err).length <= 0

}


