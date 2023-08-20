import { Benefit } from "../Model/Benefit";
import { ICreditCard } from "../Model/ICreditCard";
import { ICreditCardBenefit } from "../Model/ICreditCardBenefit";
import { CreditCardBase } from "./CreditCardBase";

export enum BankOfAmericaPreferredRewards {
	None = 0,
	Gold = 0.25,
	Platinum = 0.5,
	PlatinumPlus = 0.75
}

export enum BankOfAmerica3PercentBenefit {
	Online,
	Dining,
	DrugStore,
	Gas,
	HomeImprovementAndFurniture,
	Travel
}

export class BankOfAmericaCreditCard extends CreditCardBase {
	
	private readonly _preferredRewards: BankOfAmericaPreferredRewards;
	private readonly _threePercentBenefit: BankOfAmerica3PercentBenefit;
	private readonly _name: string;

	constructor(name: string, preferredRewards: BankOfAmericaPreferredRewards, threePercentBenefit: BankOfAmerica3PercentBenefit) {
		super();
		this._name = name;
		this._preferredRewards = preferredRewards;
		this._threePercentBenefit = threePercentBenefit;
	}

	getCreditCard(): ICreditCard {
		return {
			name: this._name,
			image: ""
		}
	}

	getCreditCardBenefits(): ICreditCardBenefit[] {
		const creditCard = this.getCreditCard();

		var threePercentBenefits = this.getBenefits(this._threePercentBenefit);

		var result = [
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(2),
				benefit: Benefit.GroceryStore
			},
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(2),
				benefit: Benefit.Krogger
			},
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(2),
				benefit: Benefit.Walmart
			},
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(2),
				benefit: Benefit.WholesaleClubs
			},
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(1),
				benefit: Benefit.Other
			}
		];
		
		threePercentBenefits.map((value) => {
			result.push({
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(3),
				benefit: value
			})
		})
		
		return result;
	}

	getPreferredRewardsBenefitPercentage(value: number): number {
		return value + (this._preferredRewards * value)
	}

	getBenefits(value: BankOfAmerica3PercentBenefit): Array<Benefit> {
		switch(value) {
			case BankOfAmerica3PercentBenefit.Dining:
				return [Benefit.Dining, Benefit.Restaurants];

			case BankOfAmerica3PercentBenefit.DrugStore:
				return [Benefit.DrugStore];

			case BankOfAmerica3PercentBenefit.Gas:
				return [Benefit.Gas];

			case BankOfAmerica3PercentBenefit.HomeImprovementAndFurniture:
				return [Benefit.HomeImprovementAndFurniture];

			case BankOfAmerica3PercentBenefit.Online:
				return [Benefit.Online];

			case BankOfAmerica3PercentBenefit.Travel:
				return [Benefit.Travel];
		}
	}
}