import { DioAccount } from './DioAccount';

export class StudentAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (balance: number): any => {
		if (this.getStatus()) {
			this.balance += balance + 10;
			console.log(
				'O estudante depositou',
				balance,
				' agora seu saldo é ',
				this.getBalance()
			);
		}
	};
}
