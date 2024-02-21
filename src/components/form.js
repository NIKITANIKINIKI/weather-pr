import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod} className="form-content">
        <input type="text" name="city" placeholder="Город" />
        <button>
          <span>Получить погоду</span>
        </button>
      </form>
    );
  }
}

export default Form;
