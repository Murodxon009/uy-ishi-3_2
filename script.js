     // First alert message to show that the random number generation is starting
     alert("Sizda hozir random sonlar chiqishni boshladi 😊");

     // Generate a random number between 1 and 100
     let randomNum = Math.floor(Math.random() * 100) + 1;
 
     // Second alert message to show the generated random number
     alert(`Random orqali chiqqan son: ${randomNum}`);
  

  // Generate a random number between 1 and 100


  // Double the random number
  let doubledNum = randomNum * 2;

  // Divide the doubled number by 2
  let halvedNum = doubledNum / 2;

  // Calculate the remainder when halved number is divided by 3
  let remainder = halvedNum % 3;

  // Display the results in a formatted message using alert
  let message = `Random orqali chiqqan son: ${randomNum} edi\n` +
                `Biz uni 2 ga ko'paytirib ${doubledNum} sonini chiqardik,\n` +
                `Va shu sonni 2 ga bo'lib: ${halvedNum} sonini chiqardik,\n` +
                `Va shu sonni 3 ga bo'lgandagi qolidiq: ${remainder} sonini chiqardik`;

  alert(message);