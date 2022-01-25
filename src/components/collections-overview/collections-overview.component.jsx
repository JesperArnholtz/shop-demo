import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { sellecColectionForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (

    <div className="collections-overview">
        {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    collections: sellecColectionForPreview(state)
})
export default connect(mapStateToProps)(CollectionsOverview);