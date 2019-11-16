import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { CitySelectWrapper } from "./CitySelect.styled";

const Select = props => (
  <CitySelectWrapper>
    <ReactSelect
      value={props.value && props.value}
      defaultValue={props.defaultValue}
      options={props.options}
      onChange={props.onChange}
      placeholder={props.placeholder}
      closeMenuOnSelect
      hideSelectedOptions={props.hideSelectedOptions}
    />
  </CitySelectWrapper>
);

Select.defaultProps = {
  label: "Select",
  value: undefined,
  defaultValue: [],
  options: [
    { value: 1, label: "defaultOption" },
    { value: 2, label: "defaultOption" }
  ],
  placeholder: "Select...",
  isSmall: false,
  isReversed: false,
  isMulti: false,
  isCreateable: false,
  isClearable: false,
  isDisabled: false,
  isSearchable: false,
  hideSelectedOptions: false,
  allowSelectAll: false,
  components: {},
  onChange: () => {
    console.warn("Select: onChange");
  },
  validation: ""
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  isSmall: PropTypes.bool,
  isReversed: PropTypes.bool,
  isMulti: PropTypes.bool,
  isCreateable: PropTypes.bool,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  hideSelectedOptions: PropTypes.bool,
  allowSelectAll: PropTypes.bool,
  components: PropTypes.object,
  onChange: PropTypes.func,
  validation: PropTypes.string
};

export default Select;
