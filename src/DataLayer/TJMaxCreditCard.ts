import { Benefit } from "../Model/Benefit";
import { ICreditCard } from "../Model/ICreditCard";
import { ICreditCardBenefit } from "../Model/ICreditCardBenefit";
import { CreditCardBase } from "./CreditCardBase";

export class TJMaxCreditCard extends CreditCardBase {
	
	getCreditCardBenefits(): ICreditCardBenefit[] {
		const creditCard = this.getCreditCard();
		return [
			{
				creditCard: creditCard,
				percentage: 5,
				benefit: Benefit.TJMax
			},
			{
				creditCard: creditCard,
				percentage: 5,
				benefit: Benefit.Marshalls
			},
			{
				creditCard: creditCard,
				percentage: 5,
				benefit: Benefit.HomeGoods
			},
			{
				creditCard: creditCard,
				percentage: 5,
				benefit: Benefit.Sierra
			},
			{
				creditCard: creditCard,
				percentage: 5,
				benefit: Benefit.HomeSense
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
			name: "TJMax",
			image: ""
		}
	}

}