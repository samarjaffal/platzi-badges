import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import FormErrors from "../components/FormErrors";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import api from "../api";
import md5 from "md5";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    formErrors: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: ""
    },
    emailValid: false,
    formValid: false,
    showErrorPanel: false,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
      avatarUrl: ""
    }
  };

  handleChange = e => {
    //1ra solucion para hacer una copia del form
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      //1ra solucion
      //form: nextForm

      //2da solucion
      {
        form: {
          ...this.state.form,
          [name]: value
        }
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "email":
        emailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          value.length > 0
            ? true
            : false;
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "firstName":
      case "lastName":
      case "jobTitle":
      case "twitter":
        const isEmpty = value.length === 0;
        fieldValidationErrors[fieldName] = isEmpty ? " is empty." : "";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid
      },
      this.validateForm()
    );
  }

  checkInputs() {
    const form = this.state.form;
    return form.firstName.length > 0 &&
      form.lastName.length > 0 &&
      form.email.length > 0 &&
      form.jobTitle.length > 0 &&
      form.twitter.length > 0
      ? true
      : false;
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.checkInputs()
    });
  }

  //post method
  handleSubmit = async e => {
    e.preventDefault();
    const hash = md5(this.state.form.email);
    this.state.form = {
      ...this.state.form,
      avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
    };
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      //for redirect the user if the request returns success
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-img img-fluid"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://es.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              {/* {!this.state.formValid && this.state.showErrorPanel && (
                <FormErrors formErrors={this.state.formErrors} />
              )} */}
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
                disabledButton={!this.state.formValid}
                formErrors={this.state.formErrors}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
