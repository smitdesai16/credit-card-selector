import { ICreditCard } from "../Model/ICreditCard";
import { ICreditCardBenefit } from "../Model/ICreditCardBenefit";

export abstract class CreditCardBase {
	abstract getCreditCardBenefits(): ICreditCardBenefit[];
	abstract getCreditCard(): ICreditCard;
}