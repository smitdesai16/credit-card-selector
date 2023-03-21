import { Benefit } from "./Benefit";
import { ICreditCard } from "./ICreditCard";

export interface ICreditCardBenefit {
	creditCard: ICreditCard;
	benefit: Benefit;
	percentage: number;
}