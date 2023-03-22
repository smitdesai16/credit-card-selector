import { Benefit } from "../Model/Benefit";
import { ICreditCard } from "../Model/ICreditCard";
import { ICreditCardBenefit } from "../Model/ICreditCardBenefit";
import { CreditCardBase } from "./CreditCardBase";

export class DiscoverCreditCard extends CreditCardBase {
	
	getCreditCardBenefits(): ICreditCardBenefit[] {
		const creditCard = this.getCreditCard();
		let result: ICreditCardBenefit[] = [{
			creditCard: creditCard,
			percentage: 1,
			benefit: Benefit.Other
		}];

		switch(new Date().getMonth()) {
			case 0:
			case 1:
			case 2:
				result = result.concat([
					{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.GroceryStore,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.Krogger,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.Walmart,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.DrugStore,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.StreamingServices,
					}
				])
				break;

			case 3:
			case 4:
			case 5:
				result = result.concat([
					{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.Restaurants,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.Dining,
					},{
						creditCard: creditCard,
						percentage: 5,
						benefit: Benefit.WholesaleClubs,
					}
				])
				break;

			case 6:
			case 7:
			case 8:
				break;

			case 9:
			case 10:
			case 11:
				break;
		}

		return result;
	}

	getCreditCard(): ICreditCard {
		return {
			name: "Discover",
			image: ""
		}
	}

}