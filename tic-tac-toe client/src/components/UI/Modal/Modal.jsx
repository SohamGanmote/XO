import React, { useState } from "react";
import { XCircle } from "lucide-react";
import styles from "./Modal.module.css";

const Modal = ({
	isVisible,
	onClose,
	children,
	backDropClassName,
	modalClassName,
	childrenClassName,
}) => {
	const [modalAnimation, setModalAnimation] = useState(styles.popup);
	const [backDropAnimation, setBackDropAnimation] = useState(
		styles.backdroppopup
	);

	const closeModal = () => {
		if (isVisible) {
			setModalAnimation(styles.popout);
			setBackDropAnimation(styles.backdroppopout);
			setTimeout(() => {
				setModalAnimation(styles.popup);
				setBackDropAnimation(styles.backdroppopup);
				onClose();
			}, 280);
		}
	};

	return (
		isVisible && (
			<div
				className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-700 bg-opacity-50 ${backDropAnimation} ${backDropClassName}`}
			>
				<div
					className={`rounded-lg p-4 bg-black max-h-[90vh] w-[20rem] overflow-auto  ${modalAnimation} ${modalClassName}`}
				>
					<div className="flex justify-end">
						<XCircle onClick={closeModal} className="cursor-pointer" />
					</div>
					<div className={childrenClassName}>{children}</div>
				</div>
			</div>
		)
	);
};

export default Modal;
