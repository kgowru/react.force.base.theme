var React = require('react-native');
var StyleSheet = React.StyleSheet;
var PixelRatio = React.PixelRatio;

const styles = { 'View slds-badge':
   { backgroundColor: '#e0e5ee',
     borderRadius: 240,
     paddingBottom: 4,
     paddingLeft: 8,
     paddingRight: 8,
     paddingTop: 4 },
  'Text slds-badge': { fontSize: 10, color: '#16325c' },
  'View slds-badge slds-theme--default':
   { backgroundColor: '#fff',
     borderRadius: 240,
     marginLeft: 8,
     paddingBottom: 4,
     paddingLeft: 8,
     paddingRight: 8,
     paddingTop: 4 },
  'Text slds-badge slds-theme--default': { fontSize: 10, color: '#16325c' },
  'View slds-badge slds-theme--shade':
   { backgroundColor: '#f4f6f9',
     borderRadius: 240,
     marginLeft: 8,
     paddingBottom: 4,
     paddingLeft: 8,
     paddingRight: 8,
     paddingTop: 4 },
  'Text slds-badge slds-theme--shade': { fontSize: 10, color: '#16325c' },
  'View slds-badge slds-theme--inverse':
   { backgroundColor: '#061c3f',
     borderBottomColor: '#061c3f',
     borderLeftColor: '#061c3f',
     borderRadius: 240,
     borderRightColor: '#061c3f',
     borderTopColor: '#061c3f',
     marginLeft: 8,
     paddingBottom: 4,
     paddingLeft: 8,
     paddingRight: 8,
     paddingTop: 4 },
  'Text slds-badge slds-theme--inverse': { fontSize: 10, color: '#fff' } };
module.exports = StyleSheet.create(styles);