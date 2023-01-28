export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): string => {
		return this.name;
	};

	deposit = (balance: number): void => {
		if (this.validateStatus()) {
			this.balance += balance;
			console.log(
				'Voce depositou ',
				balance,
				' agora seu saldo é ',
				this.getBalance()
			);
		}
	};

	withdraw = (balance: number): void => {
		if (this.validateStatus() && this.balance >= balance) {
			this.balance -= balance;
			console.log(
				'Voce sacou',
				balance,
				' agora seu saldo é ',
				this.getBalance()
			);
		} else {
			console.log(
				'Não é possível sacar',
				balance,
				'Saldo insuficiente, seu saldo atual é ',
				this.getBalance()
			);
		}
	};

	setBalance = (balance: number): void => {
		this.balance = balance;
		console.log('Valor alterado com sucesso!');
	};

	getBalance = (): number => {
		return this.balance;
	};

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error('Conta inválida');
	};
	getStatus = (): boolean => {
		return this.validateStatus();
	};
}
