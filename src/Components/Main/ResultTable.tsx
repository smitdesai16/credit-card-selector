import { Benefit } from "../../Model/Benefit";
import { ICreditCardBenefit } from "../../Model/ICreditCardBenefit";
import { getCreditCardBenefits } from "../../Utilities"

export const ResultTable = () => {
	const result: ICreditCardBenefit[] = getCreditCardBenefits();
	//filter based on search
	return (
		<div className="container">
			<table className="table table-stripetable table-striped">
				<thead>
				<tr>
					<th>Benefit</th>
					<th>%</th>
					<th>Name</th>
				</tr>
				</thead>
				<tbody>
				{ result.map((value, index) => {
					return(<tr key={index}>
						<td>{ Benefit[value.benefit] }</td>
						<td>{ value.percentage }</td>
						<td>{ value.creditCard.name }</td>
					</tr>);
				}) }
				</tbody>
			</table>
		</div>
	)
}