import { useDispatch, useSelector } from "react-redux";
import search from "./assets/search.png";
import s from "./Search.module.css";
import { fetch_searched_products } from "../../requests/requests";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem/SearchItem";
import { clean_searched_products } from "../../store/reducers/searchSlice";
import debounce from "lodash.debounce";

export function Search({ isBlocked }) {
	console.log("🚀 ~ file: Search.jsx:11 ~ Search ~ isBlocked:", isBlocked);

	const dispatch = useDispatch();
	const [keyword, setKeyword] = useState("");
	let [currentPage, setCurrentPage] = useState(1);

	let searched_products = useSelector((store) =>
		Object.keys(store.searched_products).length !== 0
			? store.searched_products.content
			: []
	);
	const pages = useSelector((store) => store.searched_products?.totalPages);

	const handleChange = debounce((e) => {
		setCurrentPage(1);
		setKeyword(e.target.value);
	}, 500);

	useEffect(() => {
		if (keyword?.length >= 3) {
			dispatch(fetch_searched_products(keyword, currentPage));
		} else {
			dispatch(clean_searched_products());
		}
	}, [keyword]);

	const showMoreHandler = () => {
		if (currentPage < pages) {
			setCurrentPage(++currentPage);
			dispatch(fetch_searched_products(keyword, currentPage));
		}
	};

	return (
		<form className={`${s.input_wrapper} ${s[isBlocked]}`}>
			<input
				className={s.search}
				type="search"
				name="search"
				placeholder="Search in catalog"
				onChange={handleChange}
				minLength={3}
			/>
			<div className={s.search_icon}>
				<img src={search} alt="search_icon" />
			</div>
			{searched_products?.length && (
				<div className={s.search_wrapper}>
					<div className={s.search_container}>
						{searched_products.map((el, index) => (
							<SearchItem {...el} key={index} />
						))}
					</div>
					<div className={s.search_showmore}>
						<p
							className={
								pages === currentPage ? s.search_para_disabled : s.search_para
							}
							onClick={showMoreHandler}
						>
							Show more
						</p>
					</div>
				</div>
			)}
		</form>
	);
}
