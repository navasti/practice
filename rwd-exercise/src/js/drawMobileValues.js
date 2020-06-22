const drawMobileValues = (products, valuesContainer) => {
   valuesContainer.textContent = ''
   const list = document.createElement('ul')

   products.forEach(product => {
      const element = document.createElement('li')
      const name = document.createElement('div')
      name.innerHTML = `<strong>Product: </strong>${product.name}`
      const calories = document.createElement('div')
      calories.innerHTML = `<strong>Calories: </strong>${product.calories}`
      const fat = document.createElement('div')
      fat.innerHTML = `<strong>Fat: </strong>${product.fat}`
      const carbs = document.createElement('div')
      carbs.innerHTML = `<strong>Carbohydrates: </strong>${product.carbs}`

      element.appendChild(name)
      element.appendChild(calories)
      element.appendChild(fat)
      element.appendChild(carbs)

      list.appendChild(element)
   })

   valuesContainer.appendChild(list)
}

export default drawMobileValues