import { Benefit } from "../../Model/Benefit";
import { ICreditCardBenefit } from "../../Model/ICreditCardBenefit";
import { getCreditCardBenefits } from "../../Utilities"

interface IProp {
	search: string;
}

export const ResultTable = ({search}: IProp) => {
	let result: ICreditCardBenefit[] = getCreditCardBenefits();

	if(search) {
		result = result.filter((value) => {
			return Benefit[value.benefit].toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
		} )
	}

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