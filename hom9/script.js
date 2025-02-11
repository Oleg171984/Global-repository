//------------------------------1------------------------------------------------

// let company = {
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//       web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//       internals: [{ name: 'Jack', salary: 1300 }]
//     }
//   };
  
//   function calculateSalaries(department) {
    
//     if (Array.isArray(department)) {
//       let total = 0;
//       for (let employee of department) {
//         total += employee.salary;
//       }
//       return total;
//     }
  
   
//     let total = 0;
//     for (let subDepartment of Object.values(department)) {
//       total += calculateSalaries(subDepartment);
//     }
//     return total;
//   }
  
//   let totalSalary = calculateSalaries(company);
//   console.log(totalSalary); 


//------------------------------2------------------------------------------------


let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
      web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
      internals: [{ name: 'Jack', salary: 1300 }]
    }
  };
  
  function getTotalSalary(department) {
    if (Array.isArray(department)) {
      
      return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
      
      return Object.values(department).reduce((sum, subDep) => sum + getTotalSalary(subDep), 0);
    }
  }
  
  let totalSalary = getTotalSalary(company);
  console.log(totalSalary);
  