import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { StudentAccount } from './class/StudentAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Heloisa', 10);
peopleAccount.deposit(400);
console.log(peopleAccount);
peopleAccount.withdraw(300);
console.log(peopleAccount);
peopleAccount.withdraw(150);
console.log(peopleAccount);
console.log(peopleAccount.getName());
console.log(peopleAccount.getStatus());
console.log(peopleAccount.getDocId());
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(500);
console.log(companyAccount);
companyAccount.withdraw(650);
console.log(companyAccount);
companyAccount.getLoan(1000);
console.log(companyAccount);
companyAccount.withdraw(1500);
console.log(companyAccount);
console.log(companyAccount.getName());
console.log(companyAccount.getStatus());
console.log(companyAccount.getBalance());

const studentAccount: StudentAccount = new StudentAccount('Aroldo', 30);
studentAccount.deposit(700);
console.log(studentAccount);
studentAccount.withdraw(420);
console.log(studentAccount);
studentAccount.withdraw(900);
console.log(studentAccount);
console.log(studentAccount.getName());
console.log(studentAccount.getStatus());
console.log(studentAccount.getBalance());
