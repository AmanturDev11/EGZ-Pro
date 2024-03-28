import React, { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

export const Modal: FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<div className={scss.Modal}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.cardRes}>
					{children}
						</div>
					</div>
					</div>
			</div>
		</div>
	);
};
