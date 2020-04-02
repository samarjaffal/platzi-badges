import React from "react";

class BadgeForm extends React.Component {
  //state = {}; //initialize the state

  //   handleChange = e => {
  //     // console.log({
  //     //   name: e.target.name,
  //     //   value: e.target.value
  //     // });
  //     this.setState({
  //       [e.target.name]: e.target.value
  //       //guarda y enlaza los valores correspondientes a cada input en el estado
  //     });
  //   };

  handleClick = e => {
    console.log("Button was clicked");
  };

  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  hasError(field, error) {
    if (error.length > 0) {
      return (
        <span className="text-danger">
          {field}, {error}
        </span>
      );
    } else {
      return "";
    }
  }
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("Form was submited");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className={`form-control ${this.errorClass(
                this.props.formErrors.firstName
              )}`}
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
            {this.hasError("First Name", this.props.formErrors.firstName)}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className={`form-control ${this.errorClass(
                this.props.formErrors.lastName
              )}`}
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
            {this.hasError("Last Name", this.props.formErrors.lastName)}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${this.errorClass(
                this.props.formErrors.email
              )}`}
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
            {this.hasError("Email", this.props.formErrors.email)}
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className={`form-control ${this.errorClass(
                this.props.formErrors.jobTitle
              )}`}
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
            {this.hasError("Job", this.props.formErrors.jobTitle)}
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              type="text"
              name="twitter"
              className={`form-control ${this.errorClass(
                this.props.formErrors.twitter
              )}`}
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
            {this.hasError("Twitter", this.props.formErrors.twitter)}
          </div>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            disabled={this.props.disabledButton}
          >
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
