import { BankOfAmericaCreditCard, BankOfAmericaPreferredRewards, BankOfAmerica3PercentBenefit } from "./DataLayer/BankOfAmericaCreditCard";
import { DiscoverCreditCard } from "./DataLayer/Discover";
import { TJMaxCreditCard } from "./DataLayer/TJMaxCreditCard";
import { Benefit } from "./Model/Benefit";
import { ICreditCardBenefit } from "./Model/ICreditCardBenefit";

export const getCreditCardBenefits = (): ICreditCardBenefit[] => {
	let creditCards: ICreditCardBenefit[] = [];
	const boa1 = new BankOfAmericaCreditCard("BOA Smit Online", BankOfAmericaPreferredRewards.Platinum, BankOfAmerica3PercentBenefit.Online);
	const boa2 = new BankOfAmericaCreditCard("BOA Smit Travel", BankOfAmericaPreferredRewards.Platinum, BankOfAmerica3PercentBenefit.Travel);
	const boa3 = new BankOfAmericaCreditCard("BOA Madhura Dining", BankOfAmericaPreferredRewards.Platinum, BankOfAmerica3PercentBenefit.Dining);
	const boa4 = new BankOfAmericaCreditCard("BOA Smit Gas", BankOfAmericaPreferredRewards.Platinum, BankOfAmerica3PercentBenefit.Gas);
	const discover = new DiscoverCreditCard();
	const tjMax = new TJMaxCreditCard();
	
	creditCards = creditCards.concat(boa1.getCreditCardBenefits());
	creditCards = creditCards.concat(boa2.getCreditCardBenefits());
	creditCards = creditCards.concat(boa3.getCreditCardBenefits());
	creditCards = creditCards.concat(boa4.getCreditCardBenefits());
	creditCards = creditCards.concat(discover.getCreditCardBenefits());
	creditCards = creditCards.concat(tjMax.getCreditCardBenefits());
	
	let dictionaryStorage = new Map();

	creditCards.forEach(element => {
		if(dictionaryStorage.has(element.benefit))
		{
			if((dictionaryStorage.get(element.benefit) as ICreditCardBenefit).percentage < element.percentage)
			{
				dictionaryStorage.set(element.benefit, element);
			}
		}
		else
		{
			dictionaryStorage.set(element.benefit, element);
		}
	});
	
	const otherBenefit: ICreditCardBenefit = dictionaryStorage.get(Benefit.Other);

	for (const value in Object.keys(Benefit)) {
		const key = Number(value);
		if (typeof Benefit[key] !== "string") {
			continue;
		}
	
		if(!dictionaryStorage.has(key))
		{
			dictionaryStorage.set(key, { benefit: key, creditCard: otherBenefit.creditCard, percentage: otherBenefit.percentage });
		}
	}

	let result: ICreditCardBenefit[] = [];

	dictionaryStorage.forEach(element => {
		result.push(element);
	});

	result.sort((a, b) => b.percentage - a.percentage);

	return result;
}