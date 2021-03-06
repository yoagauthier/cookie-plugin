import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import WebsiteAvatar from 'popup/components/dumb/Avatar/Website';

const useStyles = makeStyles(() => ({
  listItem: {
    height: '62px',
    overflow: 'hidden',
  },
  subheader: {
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    lineHeight: '2rem',
    paddingLeft: '1rem',
  },
}));

function RequestList({ entities, secondaryAction, title }) {
  const classes = useStyles();

  return (
    <List
      dense
      disablePadding
      subheader={(
        <ListSubheader disableSticky color="primary" className={classes.subheader} disableGutters>
          {title}
        </ListSubheader>
      )}
    >
      {entities.map((entity) => (
        <ListItem
          classes={{ root: classes.listItem }}
          key={entity.id}
        >
          <ListItemAvatar>
            <WebsiteAvatar name={entity.name} src={undefined} />
          </ListItemAvatar>
          <ListItemText
            primary={entity.name}
            secondary={entity.mainDomain}
          />
          {secondaryAction && (
            <ListItemSecondaryAction>
              {secondaryAction(entity)}
            </ListItemSecondaryAction>
          )}
        </ListItem>
      ))}
    </List>
  );
}

RequestList.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    logoUri: PropTypes.string,
    shortDesc: PropTypes.string,
  })),
  secondaryAction: PropTypes.func,
  title: PropTypes.string,
};

RequestList.defaultProps = {
  entities: [],
  secondaryAction: null,
  title: null,
};

export default RequestList;
