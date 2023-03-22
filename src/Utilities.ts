import { BankOfAmericaCreditCard, BankOfAmericaPreferredRewards } from "./DataLayer/BankOfAmericaCreditCard";
import { CitiCreditCard } from "./DataLayer/CitiCreditCard";
import { DiscoverCreditCard } from "./DataLayer/Discover";
import { TJMaxCreditCard } from "./DataLayer/TJMaxCreditCard";
import { Benefit } from "./Model/Benefit";
import { ICreditCardBenefit } from "./Model/ICreditCardBenefit";

export const getCreditCardBenefits = (): ICreditCardBenefit[] => {
	let creditCards: ICreditCardBenefit[] = [];
	const boa = new BankOfAmericaCreditCard(BankOfAmericaPreferredRewards.Platinum);
	const citi = new CitiCreditCard();
	const discover = new DiscoverCreditCard();
	const tjMax = new TJMaxCreditCard();
	
	creditCards = creditCards.concat(boa.getCreditCardBenefits());
	creditCards = creditCards.concat(citi.getCreditCardBenefits());
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