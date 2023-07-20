// export function sortByNew(list) {
// 	const sorted_list = [...list].sort((a, b) => a.added_time - b.added_time);
// 	list = sorted_list.filter(elem => elem.isNew && !elem.discountPrice).concat(sorted_list.filter(elem => !elem.isNew))
// 	return list
// }
// export function sortByHits(list) {
// 	const sorted_list = [...list].sort((a, b) => a.added_time - b.added_time);
// 	list = sorted_list.filter(elem => elem.isHit && !elem.discountPrice).concat(sorted_list.filter(elem => !elem.isHit))
// 	return list
// }
// export function sortByPromo(list) {
// 	const sorted_list = [...list].sort((a, b) => a.added_time - b.added_time);
// 	list = sorted_list.filter(elem => elem.discountPrice).concat(sorted_list.filter(elem => !elem.discountPrice))
// 	return list
// }