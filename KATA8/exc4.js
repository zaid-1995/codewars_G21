function welcomeMessage(name, city, state) {
    const fullName = name.join(' ');
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  }
  
  const name = ['John', 'Smith'];
  const city = 'Phoenix';
  const state = 'Arizona';
  
  console.log(welcomeMessage(name, city, state));
  