export const authenticateAdmin = (username: string, password: string): boolean => {
    // Логика для проверки администратора
    return username === 'admin' && password === 'admin123';
  };
  
  export const authenticateDoctor = (password: string): boolean => {
    // Логика для проверки доктора
    return password === 'doctor123';
  };
  