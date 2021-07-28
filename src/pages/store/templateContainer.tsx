import React from "react";
import TemplateItem from "./components/template-item";
import { templateAction } from "../../actions/template-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state: State) => ({
  templateArr: state.template.templateArr,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      templateAction,
    },
    dispatch
  );

const TemplateItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateItem);

const TemplateContainer = () => {
  return (
    <>
      <TemplateItemContainer />
    </>
  );
};

export default TemplateContainer;
