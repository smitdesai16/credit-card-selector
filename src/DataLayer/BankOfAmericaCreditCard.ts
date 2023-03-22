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

export class BankOfAmericaCreditCard extends CreditCardBase {
	
	private readonly _preferredRewards: BankOfAmericaPreferredRewards;

	constructor(preferredRewards: BankOfAmericaPreferredRewards) {
		super();
		this._preferredRewards = preferredRewards;
	}

	getCreditCard(): ICreditCard {
		return {
			name: "Bank Of America",
			image: ""
		}
	}

	getCreditCardBenefits(): ICreditCardBenefit[] {
		const creditCard = this.getCreditCard();
		return [
			{
				creditCard: creditCard,
				percentage: this.getPreferredRewardsBenefitPercentage(3),
				benefit: Benefit.Online
			},
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
	}

	getPreferredRewardsBenefitPercentage(value: number): number {
		return value + (this._preferredRewards * value)
	}
}