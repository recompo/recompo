import React, { FC, useState } from 'react';
import styles from './AvatarDropdown.module.css'

type DropdownItem = {
	image: string;
	text: string;
	href?: string;
}

export type AvatarDropdownProps = {
	image: string;
	dropdown_items: DropdownItem[];
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({ dropdown_items, image }) => {
	const [dropdown, setDropdown] = useState(false)
	const toggleDropdown = () => setDropdown(!dropdown);
	const closeDropdown = () => setDropdown(false);

	return (
		<div className="avatar-dropdown" onClick={toggleDropdown}>
			<div className="avatar">
				<img src={image} alt="Avatar Dropdown" />
			</div>
			<div className={dropdown ? "dropdown active" : "dropdown"}>
				<h1>Actions</h1>
				<ul>
					{dropdown_items.map((item: DropdownItem, index: number) => (
						<li key={index} onClick={closeDropdown}>{
							item.href
								?
								<a href={item.href}>
									<img src={item.image} alt={item.text} />
									<span>{item.text}</span>
								</a>
								:
								<>
									<img src={item.image} alt={item.text} />
									<span>{item.text}</span>
								</>
						}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AvatarDropdown
