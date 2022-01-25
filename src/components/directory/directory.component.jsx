import React from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss'
import { selectDirectorySection } from '../../redux/directory/directory.selector'
import MenuItem  from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map( ({ id,  ...itemProps}) => (
            <MenuItem 
                key={id} 
                {...itemProps}
            />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    sections: selectDirectorySection(state)
})

export default connect(mapStateToProps)(Directory);