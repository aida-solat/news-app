import { connect, Provider } from "react-redux";
import React, { Dispatch } from "react";
import { AppState } from "./reducers/rootReducer";
import { loadArticles, setLoading } from "./actions/appActions";

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.app.isLoading,
    articles: state.app.articles,
  };
};

interface appProps {
  isLoading: boolean;
}

function Main(props: any) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch(setLoading(!props.isLoading));
        }}
      >
        test
      </button>

      <div>loading {JSON.stringify(props.isLoading)}</div>

      {props.articles.map((x: any) => {
        return (
          <div>
            {x.id} + {x.name}
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, null)(Main);
