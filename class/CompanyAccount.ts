import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (balance: number): any => {
		if (this.getStatus()) {
			this.balance += balance;
			console.log(
				'Voce pegou um empréstimo de ',
				balance,
				' agora seu saldo é ',
				this.getBalance()
			);
		}
	};
}
