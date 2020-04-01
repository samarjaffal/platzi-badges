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
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              type="text"
              name="twitter"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
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
