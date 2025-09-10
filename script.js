 const allprices = document.querySelectorAll(".price")
        const table = document.getElementById("table")
        function getSumAndAppend(){
            let totalSum = 0
         for(let price of allprices){
            totalSum += parseInt(price.innerText)
         }
        newRow = document.createElement("tr")
        newData = document.createElement("td")
        newData.innerText = `total amount ${totalSum}`
        newRow.appendchild(newData)
        table.appendChild(newRow)
        }
         getSumAndAppend()