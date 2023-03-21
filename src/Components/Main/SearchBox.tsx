interface IProp {
	search: string;
	setSearch: (value: string) => void;
}

export const SearchBox = ({search, setSearch}: IProp) => {
	return (
		<div className="container">
			<div className="row">
				<div className="input-group mb-3">
					<span className="input-group-text" id="search">search</span>
					<input type="text" className="form-control" aria-label="Search" aria-describedby="search" value={search} onChange={(event) => setSearch(event.target.value)} />
				</div>
			</div>
		</div>
	)
}