const drawDesktopValues = (products, valuesContainer) => {
   valuesContainer.textContent = ''

   const table = document.createElement('table')

   const thead = document.createElement('thead')
   thead.innerHTML = `
     <tr>
       <th>Product</th>
       <th>Calories</th>
       <th>Fat</th>
       <th>Carbohydrates</th>
     </tr>`
   table.appendChild(thead)

   const tbody = document.createElement('tbody')
   products.forEach(product => {
      const row = document.createElement('tr')
      row.innerHTML = `
       <td>${product.name}</td>
       <td>${product.calories}</td>
       <td>${product.fat}</td>
       <td>${product.carbs}</td>`
      tbody.appendChild(row)
   })
   table.appendChild(tbody)

   valuesContainer.appendChild(table)
}

export default drawDesktopValues