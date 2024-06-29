import AccountsData from './accout';
import Data from './data';

class AccountManager {
	constructor() {
		this.accounts = AccountsData;
	}

	getAccountByEmail(email) {
		for (let account of this.accounts) {
			if (account.email === email) {
				return {
					id: account.id,
					email: account.email,
					firstName: account.firstName,
					lastName: account.lastName,
					avatarUrl: account.avatarUrl,
				};
			}
		}
		return null;
	}

	checkPassword(email, password) {
		for (let account of this.accounts) {
			if (account.email === email && account.password === password) {
				return true;
			}
		}
		return false;
	}

	checkEmailExist(email) {
		for (let account of this.accounts) {
			if (account.email === email) {
				return true;
			}
		}
		return false;
	}

	changeInformation(email, firstName, lastName, avatarUrl) {
		for (let account of this.accounts) {
			if (account.email === email) {
				account.firstName = firstName;
				account.lastName = lastName;
				account.avatarUrl = avatarUrl;
				return true;
			}
		}
		return false;
	}

	changePassword(email, password) {
		for (let account of this.accounts) {
			if (account.email === email) {
				account.password = password;
				return true;
			}
		}
		return false;
	}

	createNewUser(email, password, firstName, lastName, avatarUrl) {
		const userId = this.accounts.length + 1;
		this.accounts.push({
			id: userId,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			avatarUrl: avatarUrl,
		});

		Data.push({
            userId: userId,
            data: {
                'my-day': [],
                'custom': [],
            }
        });

	}
}

export default AccountManager;