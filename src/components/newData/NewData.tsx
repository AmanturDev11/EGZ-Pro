import { useState } from "react";
import { Button } from "../UL/BUTTON/Button";
import { createPortal } from "react-dom";
import { Modal } from "../UL/modal/Modal";
import { Input } from "../UL/input/Input";
import scss from "./NewData.module.scss";
import {
	useDeleteDataMutation,
	useGetDataQuery,
	usePostDataMutation,
} from "../../redux/api/data";

const NewData = () => {
	const { data } = useGetDataQuery();
	const [daleteData] = useDeleteDataMutation();
	const [modal, setModal] = useState<boolean>(false);
	const [modalDelete, setModalDelete] = useState<boolean>(false);
	const [itemId, setItemId] = useState<number>();
	const [name, setName] = useState<string>("");
	const [Surname, setSurname] = useState<string>("");
	const [admin, setAdmin] = useState<string>("");
	const [role, setRole] = useState<string>("");
	const [postData] = usePostDataMutation();
	const addData = async () => {
		await postData({ name, Surname, role, admin });
	};
	const deleteDataResult = async (id: number) => {
		await daleteData(id);
	};
	return (
		<>
			<div className={scss.NewData}>
				<div className="container">
					<div className={scss.content}>
						<Button onClick={() => setModal(true)}>add</Button>
						<div className={scss.cards}>
							<div className={scss.card}>
							{data?.map((item) => (
								<>
									<table className={scss.cardMap} key={item.id}>
										<td>{item.name}</td>
										<td>{item.Surname}</td>
										<td>{item.role}</td>
										<td>{item.admin}</td>
										<Button
											onClick={() => {
												setModalDelete(true);
												setItemId(item.id);
											}}>
											Delete
										</Button>
									</table>
								</>
							))}
							</div>
						</div>

						{modal &&
							createPortal(
								<Modal>
									<div>
										<Input value={name} setData={setName} type="text" />
										<Input value={Surname} setData={setSurname} type="text" />
										<select
											onChange={(e) => {
												setAdmin(e.target.value === "admin");
												setRole(e.target.value);
											}}>
											<option value="admin">Admin</option>
											<option value="user">User</option>
										</select>

										{role === "admin" && (
											<div>
												<p>You have selected Admin</p>
												<Button onClick={addData}>Add</Button>
											</div>
										)}

										{role === "user" && (
											<div>
												<p>You have selected User</p>
											</div>
										)}

										<Button onClick={addData}>add</Button>
									</div>
								</Modal>,
								document.getElementById("modal")
							)}
						<div className={scss.cardRes}>
							{modalDelete &&
								createPortal(
									<Modal>
										<div className={scss.pdiv}>
											<Button onClick={() => deleteDataResult(itemId)}>
												delete
											</Button>
											<p>Сиз чындап эле удалить кыласызбы</p>
										</div>
									</Modal>,
									document.getElementById("modal")
								)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewData;
