import React from "react";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import {
  firestore,
  conveftCollectionsSnapshotToMap
} from "../../firebase/firebase.utlis";

import { updatesCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true
  };

  componentDidMount() {
    const { updatesCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = conveftCollectionsSnapshotToMap(snapshot);
      updatesCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatesCollections: collectionMap =>
    dispatch(updatesCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
