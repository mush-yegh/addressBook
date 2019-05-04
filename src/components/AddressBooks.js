import React from 'react';

const AddressBooks = ({ addressBooks, deleteItem, editItem }) => {
	const addrBookList = addressBooks.length ? (
		addressBooks.map(item => {
			return (
				<div key={item.id} className="clearfix">
					<div className="float-left itemFName">{item.fName} </div>

					<button
						className="btn btn-sm float-right m-2 btn-danger"
						onClick={() => {
							deleteItem(item.id);
						}}
					>
						Delete
					</button>
					<button
						className="btn btn-sm float-right m-2 btn-warning"
						onClick={() => {
							editItem(item.id);
						}}
					>
						Edit
					</button>
				</div>
			);
		})
	) : (
		<div className="clearfix">
			<p>Empty</p>
		</div>
	);

	return <div className="booksTemplate">{addrBookList}</div>;
};

export default AddressBooks;
