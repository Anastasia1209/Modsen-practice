class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getAnnualSalary() {
    let annualSalary = this.salary * 12;
    return `Зарплата за год у ${this.name} составляет ${annualSalary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getAnnualSalary() {
    let annualSalary = this.salary * 12 + 1000;
    return `Зарплата за год у ${this.name} составляет ${annualSalary}`;
  }
}

const manager1 = new Manager("Artsiom", 1500, "Development");
const manager2 = new Manager("Anna", 1000, "Marketing");
console.log(manager1.getAnnualSalary());
console.log(manager2.getAnnualSalary());
