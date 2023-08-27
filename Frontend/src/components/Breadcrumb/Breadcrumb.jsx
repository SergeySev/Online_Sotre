import React from "react";
import s from "./Breadcumb.module.css";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({ text, link }) {
	//console.log(link);
	return (
		<li className={s.breadcrumb_item}>
			<NavLink to={link}>{text}</NavLink>
		</li>
	);
}
