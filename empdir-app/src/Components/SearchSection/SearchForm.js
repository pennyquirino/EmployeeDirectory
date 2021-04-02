import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-grp" style={{ display: 'flex' }}>
                <label htmlFor="search"></label>

                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search By Name"
                id="Search" />

                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;