import { BankOfAmericaCreditCard, BankOfAmericaPreferredRewards } from "./DataLayer/BankOfAmericaCreditCard";
import { CitiCreditCard } from "./DataLayer/CitiCreditCard";
import { DiscoverCreditCard } from "./DataLayer/Discover";
import { ICreditCardBenefit } from "./Model/ICreditCardBenefit";

export const getCreditCardBenefits = (): ICreditCardBenefit[] => {
	let result: ICreditCardBenefit[] = [];
	const boa = new BankOfAmericaCreditCard(BankOfAmericaPreferredRewards.Platinum);
	const citi = new CitiCreditCard();
	const discover = new DiscoverCreditCard();
	
	result = result.concat(boa.getCreditCardBenefits());
	result = result.concat(citi.getCreditCardBenefits());
	result = result.concat(discover.getCreditCardBenefits());
	
	return result;
}