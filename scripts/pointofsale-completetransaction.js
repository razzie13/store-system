function completeTransaction()  {
    console.log('function completeTransaction')
    document.getElementById("reciept-number").innerHTML = 'Your Reciept Number: ' + year + month + day + hour + minute + second;
    storeRecieptRecords.push({recieptNumber: year + month + day + hour + minute + second, itemsPurchased: itemReciept});
    window.print();
    //itemReciept = []; 
    document.getElementById("reciept-number").innerHTML = '';
    console.log(itemReciept);
    console.log(storeRecieptRecords);
    //localStorage.removeItem('reciepts')
    //localStorage.setItem('reciepts', storeRecieptRecords)
}