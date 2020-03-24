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
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updatesCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = conveftCollectionsSnapshotToMap(snapshot);
      updatesCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
