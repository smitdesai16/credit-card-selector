import { useState } from "react"
import { ResultTable } from "./ResultTable"
import { SearchBox } from "./SearchBox"

export const MainWrapper = () => {
	const [search, setSearch] = useState("");

	return (
		<main>
			<SearchBox search={search} setSearch={setSearch} />
			<ResultTable />
		</main>
	)
}