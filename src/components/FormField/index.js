import React from 'react';
import PropTypes from 'prop-types';

class FormField extends React.Component {
  render() {
    const {
      onChange, value, inputClass, idValue, divClass,
      spanClass, labelClass, inputType, inputError, onBlur, wrapperClass,
    } = this.props;
    return (
        <div className={wrapperClass}>
            <div className={divClass}>
                <label className={labelClass} ><span className={spanClass}>{value}</span></label>
                <input
                    id={idValue}
                    type={inputType}
                    className={inputClass}
                    placeholder={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    required
                    autoComplete=""
                  />
            </div>
            <div className='invalid-feedback'>{inputError}</div>
        </div>
    );
  }
}

FormField.propTypes = {
  displayElement: PropTypes.bool,
};

export default FormField;
