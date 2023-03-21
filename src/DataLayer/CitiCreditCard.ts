import { Benefit } from "../Model/Benefit";
import { ICreditCard } from "../Model/ICreditCard";
import { ICreditCardBenefit } from "../Model/ICreditCardBenefit";
import { CreditCardBase } from "./CreditCardBase";

export class CitiCreditCard extends CreditCardBase {
	
	getCreditCardBenefits(): ICreditCardBenefit[] {
		const creditCard = this.getCreditCard();
		return [
			{
				creditCard: creditCard,
				percentage: 4,
				benefit: Benefit.Gas
			},
			{
				creditCard: creditCard,
				percentage: 3,
				benefit: Benefit.Restaurants
			},
			{
				creditCard: creditCard,
				percentage: 3,
				benefit: Benefit.Travel
			},
			{
				creditCard: creditCard,
				percentage: 2,
				benefit: Benefit.Costco
			},
			{
				creditCard: creditCard,
				percentage: 1,
				benefit: Benefit.Other
			}
		]
	}

	getCreditCard(): ICreditCard {
		return {
			name: "Citi",
			image: ""
		}
	}

}